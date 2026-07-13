import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Copy, Check, X } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { content } from '../data/content';
import { supabase } from '../lib/supabase';

type Method = 'pix' | 'intl' | 'card';
type IntlSub = 'wise' | 'ach' | 'swift';
type Status = 'idle' | 'loading' | 'success' | 'error';

const ACCOUNT_HOLDER = 'Maria Carolina Porto';
const US_BANKING = {
  routingNumber: '084009519',
  accountNumber: '162284390353114',
  accountType: 'Deposit',
  bank: 'Wise US Inc, 108 W 13th St, Wilmington, DE 19801, United States',
};
const SWIFT_BANKING = {
  swiftBic: 'TRWIUS35XXX',
  accountNumber: '162284390353114',
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

  const [method, setMethod] = useState<Method>('pix');
  const [intlSub, setIntlSub] = useState<IntlSub>('wise');
  const [name, setName] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState<'R$' | 'US$'>('R$');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [copiedPix, setCopiedPix] = useState(false);

  const anonLabel = lang === 'pt' ? 'Anônimo' : 'Anonymous';

  const handleAnonymous = (checked: boolean) => {
    setAnonymous(checked);
    if (checked) setName(anonLabel);
    else setName('');
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStatus('idle');
      setName('');
      setAnonymous(false);
      setAmount('');
      setMessage('');
      setMethod('pix');
      setCurrency('R$');
      setIntlSub('wise');
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

  const handleConfirm = async () => {
    if (!canSubmit || !supabase) return;
    setStatus('loading');
    const { error } = await supabase.from('donors').insert({
      name: name.trim(),
      amount: parsedAmount,
      currency: method === 'pix' ? 'R$' : currency,
      message: message.trim() || null,
    });
    if (error) { setStatus('error'); return; }
    setStatus('success');
  };

  const handleCard = async () => {
    if (!canSubmit) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          amount: parsedAmount,
          currency,
          message: message.trim() || undefined,
        }),
      });
      const data = await res.json() as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const methodLabels: Record<Method, string> = {
    pix: 'PIX',
    intl: lang === 'pt' ? 'Internacional' : 'International',
    card: lang === 'pt' ? 'Cartão' : 'Card',
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
              {/* Nome */}
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

              {/* Mensagem — antes de escolher o método */}
              <FieldGroup>
                <InputLabel>{lang === 'pt' ? 'Mensagem (opcional)' : 'Message (optional)'}</InputLabel>
                <ModalInput
                  type="text"
                  placeholder={lang === 'pt' ? 'Deixe uma mensagem para a Carol...' : 'Leave a message for Carol...'}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </FieldGroup>

              {/* Método de pagamento */}
              <FieldGroup>
                <InputLabel>
                  {lang === 'pt' ? 'Como você quer pagar?' : 'How do you want to pay?'}
                </InputLabel>
                <MethodToggle>
                  {(['pix', 'intl', 'card'] as Method[]).map(m => (
                    <MethodBtn key={m} $active={method === m} onClick={() => setMethod(m)}>
                      {methodLabels[m]}
                    </MethodBtn>
                  ))}
                </MethodToggle>
              </FieldGroup>

              {/* ── PIX ── */}
              {method === 'pix' && (
                <>
                  <FieldGroup>
                    <InputLabel>{lang === 'pt' ? 'Valor' : 'Amount'}</InputLabel>
                    <AmountRow>
                      <CurrencyTag>R$</CurrencyTag>
                      <AmountInput
                        type="text"
                        inputMode="decimal"
                        placeholder="0"
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
                      <CopyPixBtn onClick={copyPix} $copied={copiedPix}>
                        {copiedPix
                          ? <><Check size={14} weight="bold" /> {lang === 'pt' ? 'Copiado!' : 'Copied!'}</>
                          : <><Copy size={14} /> {lang === 'pt' ? 'Copiar' : 'Copy'}</>}
                      </CopyPixBtn>
                    </PixKeyRow>
                    <HolderNote>
                      {lang === 'pt' ? 'Titular' : 'Account holder'}: <strong>{ACCOUNT_HOLDER}</strong>
                    </HolderNote>
                  </PixBox>

                  <QRBox>
                    <QRImage src="/qrcode-nacional.png" alt="QR Code PIX" />
                    <QRCaption>
                      {lang === 'pt' ? 'Escaneie pelo app do seu banco' : 'Scan with your bank app'}
                    </QRCaption>
                  </QRBox>

                  {status === 'error' && <ErrorText>{lang === 'pt' ? 'Algo deu errado. Tente novamente.' : 'Something went wrong. Try again.'}</ErrorText>}

                  <ActionBtn onClick={handleConfirm} disabled={!canSubmit || status === 'loading'}>
                    {status === 'loading' ? '...' : lang === 'pt' ? 'Enviei o PIX ✓' : 'I sent the PIX ✓'}
                  </ActionBtn>
                </>
              )}

              {/* ── INTERNACIONAL ── */}
              {method === 'intl' && (
                <>
                  <FieldGroup>
                    <InputLabel>{lang === 'pt' ? 'Valor' : 'Amount'}</InputLabel>
                    <AmountRow>
                      <CurrencyToggle>
                        {(['R$', 'US$'] as const).map(c => (
                          <CurrencyBtn key={c} $active={currency === c} onClick={() => setCurrency(c)}>{c}</CurrencyBtn>
                        ))}
                      </CurrencyToggle>
                      <AmountInput
                        type="text"
                        inputMode="decimal"
                        placeholder="0"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                      />
                    </AmountRow>
                  </FieldGroup>

                  {/* Sub-método */}
                  <IntlSubToggle>
                    <IntlSubBtn $active={intlSub === 'wise'} onClick={() => setIntlSub('wise')}>
                      Wise
                    </IntlSubBtn>
                    <IntlSubBtn $active={intlSub === 'ach'} onClick={() => setIntlSub('ach')}>
                      ACH {lang === 'pt' ? '(EUA)' : '(US)'}
                    </IntlSubBtn>
                    <IntlSubBtn $active={intlSub === 'swift'} onClick={() => setIntlSub('swift')}>
                      SWIFT
                    </IntlSubBtn>
                  </IntlSubToggle>

                  {intlSub === 'wise' && (
                    <QRBox>
                      <QRImage src="/qrcode-internacional.png" alt="Wise QR Code" />
                      <QRCaption>
                        {lang === 'pt'
                          ? 'Escaneie com a câmera do celular — abre o Wise automaticamente'
                          : 'Scan with your phone camera — opens Wise automatically'}
                      </QRCaption>
                    </QRBox>
                  )}

                  {intlSub === 'ach' && (
                    <TransferCard>
                      <TransferCardTitle>🇺🇸 ACH / Wire {lang === 'pt' ? 'doméstico' : 'domestic'}</TransferCardTitle>
                      <CopyField label="Routing Number" value={US_BANKING.routingNumber} />
                      <CopyField label="Account Number" value={US_BANKING.accountNumber} />
                      <StaticField label={lang === 'pt' ? 'Tipo de conta' : 'Account type'} value={US_BANKING.accountType} />
                      <StaticField label={lang === 'pt' ? 'Banco' : 'Bank'} value={US_BANKING.bank} />
                    </TransferCard>
                  )}

                  {intlSub === 'swift' && (
                    <TransferCard>
                      <TransferCardTitle>🌍 SWIFT / Wire {lang === 'pt' ? 'internacional' : 'international'}</TransferCardTitle>
                      <CopyField label="SWIFT / BIC" value={SWIFT_BANKING.swiftBic} />
                      <CopyField label="Account Number" value={SWIFT_BANKING.accountNumber} />
                      <StaticField label={lang === 'pt' ? 'Banco' : 'Bank'} value={SWIFT_BANKING.bank} />
                    </TransferCard>
                  )}

                  <HolderNote>
                    {lang === 'pt' ? 'Titular' : 'Account holder'}: <strong>{ACCOUNT_HOLDER}</strong>
                  </HolderNote>

                  {status === 'error' && <ErrorText>{lang === 'pt' ? 'Algo deu errado. Tente novamente.' : 'Something went wrong. Try again.'}</ErrorText>}

                  <ActionBtn onClick={handleConfirm} disabled={!canSubmit || status === 'loading'}>
                    {status === 'loading' ? '...' : lang === 'pt' ? 'Já enviei a transferência ✓' : 'I already sent the transfer ✓'}
                  </ActionBtn>
                </>
              )}

              {/* ── CARTÃO ── */}
              {method === 'card' && (
                <>
                  <FieldGroup>
                    <InputLabel>{lang === 'pt' ? 'Valor' : 'Amount'}</InputLabel>
                    <AmountRow>
                      <CurrencyToggle>
                        {(['R$', 'US$'] as const).map(c => (
                          <CurrencyBtn key={c} $active={currency === c} onClick={() => setCurrency(c)}>{c}</CurrencyBtn>
                        ))}
                      </CurrencyToggle>
                      <AmountInput
                        type="text"
                        inputMode="decimal"
                        placeholder="0"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                      />
                    </AmountRow>
                  </FieldGroup>

                  <CardNote>
                    {lang === 'pt'
                      ? 'Você será redirecionado para a página segura da Stripe. Aceita cartão de crédito, débito e Apple Pay.'
                      : "You'll be redirected to Stripe's secure page. Accepts credit, debit, and Apple Pay."}
                  </CardNote>

                  {status === 'error' && <ErrorText>{lang === 'pt' ? 'Algo deu errado. Tente novamente.' : 'Something went wrong. Try again.'}</ErrorText>}

                  <ActionBtn onClick={handleCard} disabled={!canSubmit || status === 'loading'}>
                    {status === 'loading' ? '...' : lang === 'pt' ? 'Pagar com Cartão →' : 'Pay with Card →'}
                  </ActionBtn>
                </>
              )}
            </>
          )}
        </ModalBody>
      </ModalCard>
    </Backdrop>
  );
}

/* ─── Animations ──────────────────────────────────────────────────────────── */

const fadeIn = keyframes`from { opacity: 0 } to { opacity: 1 }`;
const slideUp = keyframes`from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) }`;

/* ─── Styled components ───────────────────────────────────────────────────── */

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

const IntlSubToggle = styled.div`
  display: flex;
  gap: 8px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: ${({ theme }) => theme.colors.white};
  padding-bottom: 2px;
`;

const IntlSubBtn = styled.button<{ $active: boolean }>`
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

  &:hover {
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.harvardCrimson};
  }
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

const CurrencyToggle = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

const CurrencyBtn = styled.button<{ $active: boolean }>`
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  background: ${({ $active, theme }) => $active ? theme.colors.harvardCrimson : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.mutedText};
  border: none;

  &:hover {
    background: ${({ $active, theme }) => $active ? theme.colors.harvardCrimson : theme.colors.softGray};
  }
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

const CopyPixBtn = styled.button<{ $copied: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $copied, theme }) => $copied ? theme.colors.harvardCrimson : theme.colors.white};
  color: ${({ $copied, theme }) => $copied ? theme.colors.white : theme.colors.harvardCrimson};
  border: 2px solid ${({ theme }) => theme.colors.harvardCrimson};

  &:hover {
    background: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.white};
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

const CardNote = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.6;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.softGray};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

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
