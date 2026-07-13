import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Copy, Check, X, ArrowRight } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { content } from '../data/content';
import { supabase } from '../lib/supabase';

type CurrencyMode = 'brl' | 'intl';
type BrlMethod = 'pix' | 'card';
type IntlMethod = 'ach' | 'wise' | 'card';
type Status = 'idle' | 'loading' | 'success' | 'error';

const STRIPE_BRL_URL = 'https://donate.stripe.com/fZu9AN3jc6Iv7rSacJcs800';
const GOFUNDME_URL = 'https://www.gofundme.com/f/carol-porto-harvard/donate?source=btn_donate';

const ACCOUNT_HOLDER = 'Maria Carolina Porto';
const US_BANKING = {
  routingNumber: '084009519',
  accountNumber: '162284390353114',
  accountType: 'Deposit',
  bank: 'Wise US Inc, 108 W 13th St, Wilmington, DE 19801, United States',
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <FieldRow>
      <FieldLabel>{label}</FieldLabel>
      <FieldValueRow>
        <FieldValue>{value}</FieldValue>
        <SmallCopyBtn onClick={copy} $copied={copied}>
          {copied ? <Check size={13} weight="bold" /> : <Copy size={13} />}
        </SmallCopyBtn>
      </FieldValueRow>
    </FieldRow>
  );
}

function StaticField({ label, value }: { label: string; value: string }) {
  return (
    <FieldRow>
      <FieldLabel>{label}</FieldLabel>
      <FieldValueRow><FieldValue>{value}</FieldValue></FieldValueRow>
    </FieldRow>
  );
}

export default function DonationModal() {
  const { isOpen, closeModal } = useModal();
  const { lang } = useLanguage();
  const t = content[lang].donate;

  const [currencyMode, setCurrencyMode] = useState<CurrencyMode>('brl');
  const [brlMethod, setBrlMethod] = useState<BrlMethod>('pix');
  const [intlMethod, setIntlMethod] = useState<IntlMethod>('card');
  const [name, setName] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [copiedPix, setCopiedPix] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const anonLabel = lang === 'pt' ? 'Anônimo' : 'Anonymous';

  const handleAnonymous = (checked: boolean) => {
    setAnonymous(checked);
    setName(checked ? anonLabel : '');
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrencyMode('brl');
      setBrlMethod('pix');
      setIntlMethod('card');
      setName('');
      setAnonymous(false);
      setAmount('');
      setMessage('');
      setStatus('idle');
      setCopiedPix(false);
      setShowQR(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const parsedAmount = parseFloat(amount.replace(',', '.'));
  const canSubmit = name.trim().length > 0 && parsedAmount > 0;

  const copyPix = () => {
    navigator.clipboard.writeText(t.pixKey).then(() => {
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 2000);
    });
  };

  const handleConfirm = async (donorCurrency: 'R$' | 'USD') => {
    if (!canSubmit || !supabase) return;
    setStatus('loading');
    const { error } = await supabase.from('donors').insert({
      name: name.trim(),
      amount: parsedAmount,
      currency: donorCurrency,
      message: message.trim() || null,
    });
    if (error) { setStatus('error'); return; }
    setStatus('success');
  };


  return (
    <Backdrop onClick={closeModal}>
      <ModalCard onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            {lang === 'pt' ? 'Como você quer apoiar?' : 'How do you want to support?'}
          </ModalTitle>
          <CloseBtn onClick={closeModal} aria-label="fechar">
            <X size={20} />
          </CloseBtn>
        </ModalHeader>

        <ModalBody>
          {status === 'success' ? (
            <SuccessBox>
              <SuccessIcon>🎉</SuccessIcon>
              <SuccessTitle>
                {anonymous
                  ? (lang === 'pt' ? 'Obrigada!' : 'Thank you!')
                  : (lang === 'pt' ? `Obrigada, ${name}!` : `Thank you, ${name}!`)}
              </SuccessTitle>
              <SuccessText>
                {lang === 'pt'
                  ? 'Seu nome vai aparecer no ranking de apoiadores em instantes.'
                  : 'Your name will appear on the supporters ranking shortly.'}
              </SuccessText>
              <SuccessClose onClick={closeModal}>
                {lang === 'pt' ? 'Fechar' : 'Close'}
              </SuccessClose>
            </SuccessBox>
          ) : (
            <>
              {/* ── Nome e mensagem ── */}
              <FieldGroup>
                <NameLabelRow>
                  <InputLabel>
                    {lang === 'pt' ? 'Como você quer se identificar?' : 'How do you want to be identified?'}
                  </InputLabel>
                  <AnonCheck>
                    <input
                      type="checkbox"
                      id="anon-check"
                      checked={anonymous}
                      onChange={e => handleAnonymous(e.target.checked)}
                    />
                    <label htmlFor="anon-check">
                      {lang === 'pt' ? 'Anônimo' : 'Anonymous'}
                    </label>
                  </AnonCheck>
                </NameLabelRow>
                <ModalInput
                  type="text"
                  placeholder={lang === 'pt' ? 'Seu nome ou apelido' : 'Your name or nickname'}
                  value={name}
                  disabled={anonymous}
                  onChange={e => setName(e.target.value)}
                  $dimmed={anonymous}
                />
              </FieldGroup>

              <FieldGroup>
                <InputLabel>{lang === 'pt' ? 'Mensagem (opcional)' : 'Message (optional)'}</InputLabel>
                <ModalInput
                  type="text"
                  placeholder={lang === 'pt' ? 'Deixe uma mensagem para a Carol...' : 'Leave a message for Carol...'}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </FieldGroup>

              {/* ── Seletor de moeda ── */}
              <FieldGroup>
                <InputLabel>
                  {lang === 'pt' ? 'Moeda' : 'Currency'}
                </InputLabel>
                <MethodToggle>
                  <MethodBtn $active={currencyMode === 'brl'} onClick={() => setCurrencyMode('brl')}>
                    🇧🇷 Reais (R$)
                  </MethodBtn>
                  <MethodBtn $active={currencyMode === 'intl'} onClick={() => setCurrencyMode('intl')}>
                    🇺🇸 Dólar (USD)
                  </MethodBtn>
                </MethodToggle>
              </FieldGroup>

              {/* ── BRL ── */}
              {currencyMode === 'brl' && (
                <>
                  <SubToggle>
                    <SubBtn $active={brlMethod === 'pix'} onClick={() => setBrlMethod('pix')}>PIX</SubBtn>
                    <SubBtn $active={brlMethod === 'card'} onClick={() => setBrlMethod('card')}>
                      {lang === 'pt' ? 'Cartão' : 'Card'}
                    </SubBtn>
                  </SubToggle>

                  {brlMethod === 'pix' && (
                    <>
                      <FieldGroup>
                        <InputLabel>{lang === 'pt' ? 'Valor' : 'Amount'}</InputLabel>
                        <AmountRow>
                          <CurrencyTag>R$</CurrencyTag>
                          <AmountInput
                            type="text"
                            inputMode="decimal"
                            placeholder="200"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                          />
                        </AmountRow>
                      </FieldGroup>

                      <PixBox>
                        <PixLabel>
                          {lang === 'pt' ? 'Chave PIX — Chave aleatória' : 'PIX Key — Random key'}
                        </PixLabel>
                        <PixKeyRow>
                          <PixKeyValue>{t.pixKey}</PixKeyValue>
                          <PixIconCopyBtn onClick={copyPix} $copied={copiedPix} title={lang === 'pt' ? 'Copiar chave' : 'Copy key'}>
                            {copiedPix ? <Check size={13} weight="bold" /> : <Copy size={13} />}
                          </PixIconCopyBtn>
                          <QRToggleBtn onClick={() => setShowQR(v => !v)}>
                            {showQR
                              ? (lang === 'pt' ? 'Esconder QR' : 'Hide QR')
                              : (lang === 'pt' ? 'Ver QR Code' : 'Show QR')}
                          </QRToggleBtn>
                        </PixKeyRow>
                        <HolderNote>
                          {lang === 'pt' ? 'Titular' : 'Account holder'}: <strong>{ACCOUNT_HOLDER}</strong>
                        </HolderNote>
                      </PixBox>

                      {showQR && (
                        <QRBox>
                          <QRImage src="/qrcode-nacional.png" alt="QR Code PIX" />
                          <QRCaption>
                            {lang === 'pt' ? 'Escaneie pelo app do seu banco' : 'Scan with your bank app'}
                          </QRCaption>
                        </QRBox>
                      )}

                      {status === 'error' && <ErrorText>{lang === 'pt' ? 'Algo deu errado. Tente novamente.' : 'Something went wrong. Try again.'}</ErrorText>}

                      <ActionBtn onClick={() => handleConfirm('R$')} disabled={!canSubmit || status === 'loading'}>
                        {status === 'loading' ? '...' : lang === 'pt' ? 'Enviei o PIX ✓' : 'I sent the PIX ✓'}
                      </ActionBtn>
                    </>
                  )}

                  {brlMethod === 'card' && (
                    <>
                      <CardNote>
                        {lang === 'pt'
                          ? 'Você será redirecionado para a página segura do Stripe. Aceita cartão de crédito e débito.'
                          : "You'll be redirected to Stripe's secure page. Accepts credit and debit cards."}
                      </CardNote>
                      <RedirectBtn href={STRIPE_BRL_URL} target="_blank" rel="noopener noreferrer">
                        {lang === 'pt' ? 'Pagar via Stripe' : 'Pay via Stripe'}
                        <ArrowRight size={16} weight="bold" />
                      </RedirectBtn>
                    </>
                  )}
                </>
              )}

              {/* ── INTERNACIONAL ── */}
              {currencyMode === 'intl' && (
                <>
                  <SubToggle>
                    <SubBtn $active={intlMethod === 'card'} onClick={() => setIntlMethod('card')}>Card</SubBtn>
                    <SubBtn $active={intlMethod === 'ach'} onClick={() => setIntlMethod('ach')}>
                      ACH <span>{lang === 'pt' ? '(EUA)' : '(US)'}</span>
                    </SubBtn>
                    <SubBtn $active={intlMethod === 'wise'} onClick={() => setIntlMethod('wise')}>Wise</SubBtn>
                  </SubToggle>

                  {intlMethod === 'ach' && (
                    <>
                      <FieldGroup>
                        <InputLabel>{lang === 'pt' ? 'Valor' : 'Amount'}</InputLabel>
                        <AmountRow>
                          <CurrencyTag>USD</CurrencyTag>
                          <AmountInput
                            type="text"
                            inputMode="decimal"
                            placeholder="200"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                          />
                        </AmountRow>
                      </FieldGroup>

                      <TransferCard>
                        <TransferCardTitle>🇺🇸 ACH / Wire {lang === 'pt' ? 'doméstico' : 'domestic'}</TransferCardTitle>
                        <CopyField label="Routing Number" value={US_BANKING.routingNumber} />
                        <CopyField label="Account Number" value={US_BANKING.accountNumber} />
                        <StaticField label={lang === 'pt' ? 'Tipo de conta' : 'Account type'} value={US_BANKING.accountType} />
                        <StaticField label={lang === 'pt' ? 'Banco' : 'Bank'} value={US_BANKING.bank} />
                      </TransferCard>

                      <HolderNote>
                        {lang === 'pt' ? 'Titular' : 'Account holder'}: <strong>{ACCOUNT_HOLDER}</strong>
                      </HolderNote>

                      {status === 'error' && <ErrorText>{lang === 'pt' ? 'Algo deu errado. Tente novamente.' : 'Something went wrong. Try again.'}</ErrorText>}

                      <ActionBtn onClick={() => handleConfirm('USD')} disabled={!canSubmit || status === 'loading'}>
                        {status === 'loading' ? '...' : lang === 'pt' ? 'Já enviei a transferência ✓' : 'I already sent the transfer ✓'}
                      </ActionBtn>
                    </>
                  )}

                  {intlMethod === 'wise' && (
                    <>
                      <QRBox>
                        <QRImage src="/qrcode-internacional.png" alt="Wise QR Code" />
                        <QRCaption>
                          {lang === 'pt'
                            ? 'Escaneie com a câmera do celular — abre o Wise automaticamente'
                            : 'Scan with your phone camera — opens Wise automatically'}
                        </QRCaption>
                      </QRBox>

                      <FieldGroup>
                        <InputLabel>{lang === 'pt' ? 'Valor enviado' : 'Amount sent'}</InputLabel>
                        <AmountRow>
                          <CurrencyTag>USD</CurrencyTag>
                          <AmountInput
                            type="text"
                            inputMode="decimal"
                            placeholder="200"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                          />
                        </AmountRow>
                      </FieldGroup>

                      <HolderNote>
                        {lang === 'pt' ? 'Titular' : 'Account holder'}: <strong>{ACCOUNT_HOLDER}</strong>
                      </HolderNote>

                      {status === 'error' && <ErrorText>{lang === 'pt' ? 'Algo deu errado. Tente novamente.' : 'Something went wrong. Try again.'}</ErrorText>}

                      <ActionBtn onClick={() => handleConfirm('USD')} disabled={!canSubmit || status === 'loading'}>
                        {status === 'loading' ? '...' : lang === 'pt' ? 'Já enviei ✓' : 'I already sent ✓'}
                      </ActionBtn>
                    </>
                  )}

                  {intlMethod === 'card' && (
                    <>
                      <CardNote>
                        {lang === 'pt'
                          ? 'Você será redirecionado para a campanha no GoFundMe. Aceita cartão de crédito e débito.'
                          : "You'll be redirected to the GoFundMe campaign. Accepts credit and debit cards."}
                      </CardNote>
                      <TipNote>
                        💡{' '}
                        {lang === 'pt'
                          ? 'A "gorjeta" que o GoFundMe sugere no checkout é opcional — você pode deixar em $0.'
                          : 'The "tip" GoFundMe suggests at checkout is optional — you can set it to $0.'}
                      </TipNote>
                      <RedirectBtn href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
                        Donate via GoFundMe
                        <ArrowRight size={16} weight="bold" />
                      </RedirectBtn>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </ModalBody>
      </ModalCard>
    </Backdrop>
  );
}

/* ─── Animations ─────────────────────────────────────────────────────────── */

const fadeIn = keyframes`from { opacity: 0 } to { opacity: 1 }`;
const slideUp = keyframes`from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) }`;

/* ─── Layout ─────────────────────────────────────────────────────────────── */

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.2s ease;
  overflow-y: auto;
`;

const ModalCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.28);
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.25s ease;
  overflow: hidden;
  margin: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
`;

const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkText};
`;

const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mutedText};
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.softGray};
    color: ${({ theme }) => theme.colors.darkText};
  }
`;

const ModalBody = styled.div`
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scrollbar-width: thin;
`;

/* ─── Form fields ────────────────────────────────────────────────────────── */

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
`;

const NameLabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const AnonCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;

  input[type='checkbox'] {
    width: 15px;
    height: 15px;
    accent-color: ${({ theme }) => theme.colors.harvardCrimson};
    cursor: pointer;
  }

  label {
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mutedText};
    cursor: pointer;
    white-space: nowrap;
  }
`;

const ModalInput = styled.input<{ $dimmed?: boolean }>`
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: 14px;
  color: ${({ $dimmed, theme }) => $dimmed ? theme.colors.mutedText : theme.colors.darkText};
  background: ${({ $dimmed, theme }) => $dimmed ? theme.colors.softGray : 'transparent'};
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  cursor: ${({ $dimmed }) => $dimmed ? 'not-allowed' : 'text'};

  &::placeholder { color: ${({ theme }) => theme.colors.mutedText}; }
  &:focus:not(:disabled) { border-color: ${({ theme }) => theme.colors.harvardCrimson}; }
`;

const AmountRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CurrencyTag = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mutedText};
  background: ${({ theme }) => theme.colors.softGray};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 10px 14px;
  flex-shrink: 0;
`;

const AmountInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder { color: ${({ theme }) => theme.colors.border}; font-weight: 400; font-size: 16px; }
  &:focus { border-color: ${({ theme }) => theme.colors.harvardCrimson}; }
`;

/* ─── Toggles ────────────────────────────────────────────────────────────── */

const MethodToggle = styled.div`
  display: flex;
  gap: 8px;
`;

const MethodBtn = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid ${({ $active, theme }) => $active ? theme.colors.harvardCrimson : theme.colors.border};
  background: ${({ $active, theme }) => $active ? theme.colors.harvardCrimson : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.mutedText};

  &:hover {
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.harvardCrimson};
  }
`;

const SubToggle = styled.div`
  display: flex;
  gap: 8px;
`;

const SubBtn = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 9px 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  border-radius: 10px;
  border: 2px solid ${({ $active, theme }) => $active ? theme.colors.harvardCrimson : theme.colors.border};
  background: ${({ $active, theme }) => $active ? theme.colors.harvardCrimson : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.mutedText};

  span { font-weight: 400; }

  &:hover {
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.harvardCrimson};
  }
`;

/* ─── PIX ────────────────────────────────────────────────────────────────── */

const PixBox = styled.div`
  background: ${({ theme }) => theme.colors.softGray};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PixLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const PixKeyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const PixKeyValue = styled.span`
  font-size: 13px;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  color: ${({ theme }) => theme.colors.darkText};
  word-break: break-all;
  flex: 1;
`;

const PixIconCopyBtn = styled.button<{ $copied: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $copied, theme }) => $copied ? theme.colors.harvardCrimson : theme.colors.white};
  color: ${({ $copied, theme }) => $copied ? theme.colors.white : theme.colors.harvardCrimson};
  border: 1.5px solid ${({ theme }) => theme.colors.harvardCrimson};

  &:hover {
    background: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const QRToggleBtn = styled.button`
  font-size: 11px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 6px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.mutedText};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  background: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.harvardCrimson};
  }
`;


const HolderNote = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
  strong { color: ${({ theme }) => theme.colors.darkText}; }
`;

const QRBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.softGray};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
`;

const QRImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 6px;
`;

const QRCaption = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
`;

/* ─── Transfer ───────────────────────────────────────────────────────────── */

const TransferCard = styled.div`
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({ theme }) => theme.colors.softGray};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const TransferCardTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const FieldLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const FieldValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FieldValue = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};
  flex: 1;
`;

const SmallCopyBtn = styled.button<{ $copied: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $copied, theme }) => $copied ? theme.colors.harvardCrimson : theme.colors.white};
  color: ${({ $copied, theme }) => $copied ? theme.colors.white : theme.colors.mutedText};
  border: 1px solid ${({ $copied, theme }) => $copied ? theme.colors.harvardCrimson : theme.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.harvardCrimson};
  }
`;

/* ─── Card / Redirect ────────────────────────────────────────────────────── */

const CardNote = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.6;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.softGray};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const TipNote = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.6;
  padding: 10px 14px;
  background: ${({ theme }) => theme.colors.softGray};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const RedirectBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin-top: 4px;
  box-sizing: border-box;

  &:hover { opacity: 0.88; }
`;

/* ─── Actions ────────────────────────────────────────────────────────────── */

const ActionBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin-top: 4px;

  &:hover:not(:disabled) { opacity: 0.88; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const ErrorText = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.harvardCrimson};
`;

/* ─── Success ────────────────────────────────────────────────────────────── */

const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px 0 8px;
  text-align: center;
`;

const SuccessIcon = styled.span`font-size: 48px;`;

const SuccessTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.darkText};
`;

const SuccessText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.6;
`;

const SuccessClose = styled.button`
  margin-top: 8px;
  padding: 12px 32px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.88; }
`;
