import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  ShareNetwork,
  WhatsappLogo,
  LinkedinLogo,
  InstagramLogo,
  Copy,
  Check,
  Envelope,
  Globe,
} from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

type Tab = 'pix' | 'intl' | 'share';

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

function CopyableField({
  label,
  value,
  fieldId,
  copiedField,
  onCopy,
}: {
  label: string;
  value: string;
  fieldId: string;
  copiedField: string | null;
  onCopy: (fieldId: string, value: string) => void;
}) {
  const isCopied = copiedField === fieldId;
  return (
    <FieldRow>
      <FieldLabel>{label}</FieldLabel>
      <FieldValueRow>
        <FieldValue>{value}</FieldValue>
        <SmallCopyBtn onClick={() => onCopy(fieldId, value)} $copied={isCopied}>
          {isCopied ? <Check size={13} weight="bold" /> : <Copy size={13} />}
        </SmallCopyBtn>
      </FieldValueRow>
    </FieldRow>
  );
}

export default function DonateSection() {
  const { lang } = useLanguage();
  const t = content[lang].donate;
  const [activeTab, setActiveTab] = useState<Tab>('pix');
  const [copied, setCopied] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleInstagramCopy = () => {
    navigator.clipboard.writeText(t.instagramMessage + ' ' + pageUrl).then(() => {
      setCopiedInstagram(true);
      setTimeout(() => setCopiedInstagram(false), 3000);
    });
  };

  const handleFieldCopy = (fieldId: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const contactNote =
    lang === 'pt'
      ? 'Com dúvidas ou precisando de ajuda para completar a transferência, fale comigo:'
      : 'If you have any questions or need help completing a transfer, feel free to contact me:';

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'pix', label: t.pixTitle, icon: <RealSign>R$</RealSign> },
    { key: 'intl', label: t.intlTitle, icon: <Globe size={18} /> },
    { key: 'share', label: t.shareTitle, icon: <ShareNetwork size={18} /> },
  ];

  return (
    <Section id="donate">
      <Overlay />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <Tag>{t.tag}</Tag>
          <Title>{t.title}</Title>
          <Subtitle>{t.subtitle}</Subtitle>
          <CTAHint>
            {lang === 'pt'
              ? 'PIX • Transferência Internacional • Compartilhamento'
              : 'PIX • International Transfer • Share'}
          </CTAHint>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <Card>
            <Tabs>
              {tabs.map(tab => (
                <TabBtn
                  key={tab.key}
                  $active={activeTab === tab.key}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.icon}
                  {tab.label}
                </TabBtn>
              ))}
            </Tabs>

            <TabContent>
              {/* ── PIX ── */}
              {activeTab === 'pix' && (
                <motion.div
                  key="pix"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabPanel>
                    <PanelTitle>
                      <RealSign $lg>R$</RealSign>
                      {t.pixSubtitle}
                    </PanelTitle>

                    <PixBlock>
                      <PixFieldLabel>
                        {lang === 'pt' ? 'Chave PIX — Chave aleatória' : 'PIX Key — Random key'}
                      </PixFieldLabel>
                      <PixKeyRow>
                        <PixKeyValue>{t.pixKey}</PixKeyValue>
                        <CopyPixBtn
                          onClick={() => handleFieldCopy('pix', t.pixKey)}
                          $copied={copiedField === 'pix'}
                        >
                          {copiedField === 'pix' ? (
                            <>
                              <Check size={15} weight="bold" />
                              {lang === 'pt' ? 'Copiado!' : 'Copied!'}
                            </>
                          ) : (
                            <>
                              <Copy size={15} />
                              {lang === 'pt' ? 'Copiar' : 'Copy'}
                            </>
                          )}
                        </CopyPixBtn>
                      </PixKeyRow>
                      <HolderNote>
                        {lang === 'pt' ? 'Titular' : 'Account holder'}:{' '}
                        <strong>{ACCOUNT_HOLDER}</strong>
                      </HolderNote>
                    </PixBlock>

                    <WiseQRBlock>
                      <WiseQRImage src="/qrcode-nacional.png" alt="QR Code PIX" />
                      <WiseQRCaption>
                        {lang === 'pt'
                          ? 'QRCODE PIX: Escaneie pelo app do seu banco'
                          : 'QRCODE PIX: Scan from your bank app to pay directly'}
                      </WiseQRCaption>
                    </WiseQRBlock>

                    <AmountsBlock>
                      <AmountsNote>{t.pixAmountsNote}</AmountsNote>
                      <AmountsList>
                        {t.pixAmounts.map(item => (
                          <AmountsItem key={item.amount}>
                            <AmountValue>{item.amount}</AmountValue>
                            <AmountLabel>— {item.label}</AmountLabel>
                          </AmountsItem>
                        ))}
                      </AmountsList>
                    </AmountsBlock>

                    <ContactNoteBox>
                      <Envelope size={15} />
                      <span>
                        {contactNote}{' '}
                        <ContactLink href="mailto:carolporto04@gmail.com">
                          carolporto04@gmail.com
                        </ContactLink>
                      </span>
                    </ContactNoteBox>
                  </TabPanel>
                </motion.div>
              )}

              {/* ── INTERNATIONAL ── */}
              {activeTab === 'intl' && (
                <motion.div
                  key="intl"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabPanel>
                    <PanelTitle>
                      <Globe size={22} />
                      {t.intlSubtitle}
                    </PanelTitle>

                    <WiseQRBlock>
                      <WiseQRImage src="/qrcode-internacional.png" alt="Wise QR Code" />
                      <WiseQRCaption>
                        {lang === 'pt'
                          ? 'QR Code exclusivo para o Wise. Escaneie com a câmera do celular e ele abre automaticamente. Para outros bancos, use os dados abaixo.'
                          : 'Wise QR Code only. Scan with your phone camera and it opens Wise automatically. For other banks, use the details below.'}
                      </WiseQRCaption>
                    </WiseQRBlock>

                    {/* US — prominent */}
                    <TransferCard $primary>
                      <TransferCardHeader>
                        <TransferFlag>🇺🇸</TransferFlag>
                        <div>
                          <TransferCardTitle $primary>
                            {lang === 'pt'
                              ? 'Enviando dos Estados Unidos'
                              : 'Sending from the United States'}
                          </TransferCardTitle>
                          <TransferCardDesc>
                            {lang === 'pt'
                              ? 'ACH ou wire doméstico'
                              : 'ACH or domestic wire transfer'}
                          </TransferCardDesc>
                        </div>
                      </TransferCardHeader>
                      <FieldsStack>
                        <CopyableField
                          label="Routing Number"
                          value={US_BANKING.routingNumber}
                          fieldId="routing"
                          copiedField={copiedField}
                          onCopy={handleFieldCopy}
                        />
                        <CopyableField
                          label="Account Number"
                          value={US_BANKING.accountNumber}
                          fieldId="account-us"
                          copiedField={copiedField}
                          onCopy={handleFieldCopy}
                        />
                        <FieldRow>
                          <FieldLabel>
                            {lang === 'pt' ? 'Tipo de conta' : 'Account type'}
                          </FieldLabel>
                          <FieldValueRow>
                            <FieldValue>{US_BANKING.accountType}</FieldValue>
                          </FieldValueRow>
                        </FieldRow>
                        <FieldRow>
                          <FieldLabel>
                            {lang === 'pt' ? 'Banco / Endereço' : 'Bank / Address'}
                          </FieldLabel>
                          <FieldValueRow>
                            <FieldValue>{US_BANKING.bank}</FieldValue>
                          </FieldValueRow>
                        </FieldRow>
                      </FieldsStack>
                    </TransferCard>

                    {/* SWIFT */}
                    <TransferCard>
                      <TransferCardHeader>
                        <TransferFlag>🌍</TransferFlag>
                        <div>
                          <TransferCardTitle>
                            {lang === 'pt'
                              ? 'Enviando de outro país'
                              : 'Sending from outside the United States'}
                          </TransferCardTitle>
                          <TransferCardDesc>
                            {lang === 'pt'
                              ? 'Transferência SWIFT internacional'
                              : 'International SWIFT transfer'}
                          </TransferCardDesc>
                        </div>
                      </TransferCardHeader>
                      <FieldsStack>
                        <CopyableField
                          label="SWIFT / BIC"
                          value={SWIFT_BANKING.swiftBic}
                          fieldId="swift"
                          copiedField={copiedField}
                          onCopy={handleFieldCopy}
                        />
                        <CopyableField
                          label="Account Number"
                          value={SWIFT_BANKING.accountNumber}
                          fieldId="account-intl"
                          copiedField={copiedField}
                          onCopy={handleFieldCopy}
                        />
                        <FieldRow>
                          <FieldLabel>
                            {lang === 'pt' ? 'Banco / Endereço' : 'Bank / Address'}
                          </FieldLabel>
                          <FieldValueRow>
                            <FieldValue>{SWIFT_BANKING.bank}</FieldValue>
                          </FieldValueRow>
                        </FieldRow>
                      </FieldsStack>
                    </TransferCard>

                    <HolderNote>
                      {lang === 'pt' ? 'Titular' : 'Account holder'}:{' '}
                      <strong>{ACCOUNT_HOLDER}</strong>
                    </HolderNote>

                    <ContactNoteBox>
                      <Envelope size={15} />
                      <span>
                        {contactNote}{' '}
                        <ContactLink href="mailto:carolporto04@gmail.com">
                          carolporto04@gmail.com
                        </ContactLink>
                      </span>
                    </ContactNoteBox>
                  </TabPanel>
                </motion.div>
              )}

              {/* ── SHARE ── */}
              {activeTab === 'share' && (
                <motion.div
                  key="share"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabPanel>
                    <PanelTitle>
                      <ShareNetwork size={22} />
                      {t.shareSubtitle}
                    </PanelTitle>
                    <PanelText>{t.shareText}</PanelText>
                    <ShareGrid>
                      <ShareBtn
                        href={`https://wa.me/?text=${encodeURIComponent(t.whatsappMessage + ' ' + pageUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        $color="#25D366"
                      >
                        <WhatsappLogo size={20} weight="fill" />
                        {t.shareWhatsApp}
                      </ShareBtn>
                      <ShareBtn
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        $color="#0A66C2"
                      >
                        <LinkedinLogo size={20} weight="fill" />
                        {t.shareLinkedIn}
                      </ShareBtn>
                      <InstagramCopyBtn onClick={handleInstagramCopy} $copied={copiedInstagram}>
                        {copiedInstagram ? <Check size={20} weight="bold" /> : <InstagramLogo size={20} weight="fill" />}
                        {copiedInstagram ? t.instagramCopied : t.shareInstagram}
                      </InstagramCopyBtn>
                      <CopyBtn onClick={handleCopy} $copied={copied}>
                        {copied ? <Check size={20} weight="bold" /> : <Copy size={20} />}
                        {copied ? t.shareCopied : t.shareCopy}
                      </CopyBtn>
                    </ShareGrid>

                    <ContactLine>
                      {lang === 'pt' ? 'Dúvidas ou quer se conectar? ' : 'Questions or want to connect? '}
                      <ContactLink href="mailto:carolporto04@gmail.com">
                        carolporto04@gmail.com
                      </ContactLink>
                    </ContactLine>
                  </TabPanel>
                </motion.div>
              )}
            </TabContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}

/* ─── Styled components ─────────────────────────────────────────────────── */

const Section = styled.section`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.harvardDarkCrimson} 0%,
    ${({ theme }) => theme.colors.harvardCrimson} 60%,
    ${({ theme }) => theme.colors.deepWine} 100%
  );
  padding: 80px 40px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 56px 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Tag = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.goldAccent};
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(28px, 4vw, 46px);
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: clamp(15px, 1.5vw, 18px);
  color: rgba(255, 255, 255, 0.72);
  max-width: 560px;
  line-height: 1.7;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const TabBtn = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 28px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ $active, theme }) => ($active ? theme.colors.harvardCrimson : theme.colors.mutedText)};
  border-bottom: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.harvardCrimson : 'transparent')};
  transition: all 0.25s ease;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.harvardCrimson};
    background: ${({ theme }) => theme.colors.warmOffWhite};
  }
`;

const TabContent = styled.div`
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    padding: 24px 20px;
  }
`;

const TabPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PanelTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.darkText};
`;

const PanelText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.mutedText};
`;

/* PIX */

const PixBlock = styled.div`
  background: ${({ theme }) => theme.colors.softGray};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PixFieldLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const PixKeyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PixKeyValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
  color: ${({ theme }) => theme.colors.darkText};
  word-break: break-all;
  flex: 1;
`;

const CopyPixBtn = styled.button<{ $copied: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $copied, theme }) =>
    $copied ? theme.colors.harvardCrimson : theme.colors.white};
  color: ${({ $copied, theme }) =>
    $copied ? theme.colors.white : theme.colors.harvardCrimson};
  border: 2px solid ${({ theme }) => theme.colors.harvardCrimson};

  &:hover {
    background: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const HolderNote = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};

  strong {
    color: ${({ theme }) => theme.colors.darkText};
  }
`;

/* Wise QR */

const WiseQRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.softGray};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
`;

const WiseQRImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  display: block;
`;

const WiseQRCaption = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
`;

/* International transfer */

const TransferCard = styled.div<{ $primary?: boolean }>`
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ $primary, theme }) =>
    $primary ? theme.colors.warmOffWhite : theme.colors.white};
  border: ${({ $primary, theme }) =>
    $primary
      ? `2px solid ${theme.colors.harvardCrimson}33`
      : `1px solid ${theme.colors.border}`};
`;

const TransferCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const TransferFlag = styled.span`
  font-size: 22px;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
`;

const TransferCardTitle = styled.h4<{ $primary?: boolean }>`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 3px;
`;

const TransferCardDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const FieldsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 4px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};
  flex: 1;
`;

const SmallCopyBtn = styled.button<{ $copied: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $copied, theme }) =>
    $copied ? theme.colors.harvardCrimson : theme.colors.white};
  color: ${({ $copied, theme }) =>
    $copied ? theme.colors.white : theme.colors.mutedText};
  border: 1px solid
    ${({ $copied, theme }) =>
      $copied ? theme.colors.harvardCrimson : theme.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.harvardCrimson};
  }
`;

/* Suggested amounts */

const AmountsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AmountsNote = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const AmountsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 4px;
`;

const AmountsItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

const AmountValue = styled.span`
  font-size: 13.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  white-space: nowrap;
`;

const AmountLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
`;

/* Contact note */

const ContactNoteBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.warmOffWhite};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 13.5px;
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.6;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.harvardCrimson};
  }
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
`;

/* Share tab */

const ShareGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ShareBtn = styled.a<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 1.5px solid ${({ $color }) => `${$color}44`};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $color }) => $color};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ $color }) => `${$color}0e`};
  }
`;

const InstagramCopyBtn = styled.button<{ $copied: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 1.5px solid ${({ $copied }) => ($copied ? '#C13584aa' : '#C1358444')};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $copied }) => ($copied ? '#C13584' : '#C13584')};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $copied }) => ($copied ? 'rgba(193,53,132,0.06)' : 'transparent')};
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: rgba(193, 53, 132, 0.07);
  }
`;

const CopyBtn = styled.button<{ $copied: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 1.5px solid
    ${({ $copied, theme }) =>
      $copied ? theme.colors.harvardCrimson + '44' : theme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $copied, theme }) =>
    $copied ? theme.colors.harvardCrimson : theme.colors.mutedText};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.softGray};
  }
`;

const ContactLine = styled.p`
  font-size: 13.5px;
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.6;
`;

const CTAHint = styled.p`
  font-size: 11.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.38);
  margin-top: 14px;
`;

const RealSign = styled.span<{ $lg?: boolean }>`
  font-size: ${({ $lg }) => ($lg ? '17px' : '13px')};
  font-weight: 800;
  line-height: 1;
  flex-shrink: 0;
  letter-spacing: -0.5px;
`;
