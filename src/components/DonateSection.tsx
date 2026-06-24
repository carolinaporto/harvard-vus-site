import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Heart,
  ShareNetwork,
  WhatsappLogo,
  LinkedinLogo,
  XLogo,
  Copy,
  Check,
  Envelope,
  CurrencyDollar,
  Globe,
} from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

type Tab = 'pix' | 'intl' | 'share';

export default function DonateSection() {
  const { lang } = useLanguage();
  const t = content[lang].donate;
  const [activeTab, setActiveTab] = useState<Tab>('pix');
  const [copied, setCopied] = useState(false);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'pix', label: t.pixTitle, icon: <CurrencyDollar size={18} /> },
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <Card>
            {/* Tabs */}
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

            {/* Tab content */}
            <TabContent>
              {activeTab === 'pix' && (
                <motion.div
                  key="pix"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabPanel>
                    <PanelTitle>
                      <CurrencyDollar size={22} />
                      {t.pixSubtitle}
                    </PanelTitle>
                    <InfoBox>
                      <InfoLabel>{lang === 'pt' ? 'Chave PIX:' : 'PIX Key:'}</InfoLabel>
                      <InfoValue>{t.pixKey}</InfoValue>
                    </InfoBox>
                    <InfoNote>{t.pixNote}</InfoNote>
                    <PrimaryAction href={`mailto:carolporto04@gmail.com?subject=${encodeURIComponent(lang === 'pt' ? 'Doação - Carol Porto Harvard' : 'Donation - Carol Porto Harvard')}`}>
                      <Heart size={18} weight="fill" />
                      {t.donateAnyBtn}
                    </PrimaryAction>
                  </TabPanel>
                </motion.div>
              )}

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
                    <InfoBox>
                      <InfoValue>{t.intlInfo}</InfoValue>
                    </InfoBox>
                    <PrimaryAction href={`mailto:carolporto04@gmail.com?subject=${encodeURIComponent(lang === 'pt' ? 'Doação Internacional' : 'International Donation')}`}>
                      <Envelope size={18} />
                      {lang === 'pt' ? 'Me escreva para receber instruções' : 'Email me for instructions'}
                    </PrimaryAction>
                  </TabPanel>
                </motion.div>
              )}

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
                      <ShareBtn
                        href={`https://x.com/intent/tweet?text=${encodeURIComponent(t.twitterMessage)}&url=${encodeURIComponent(pageUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        $color="#1DA1F2"
                      >
                        <XLogo size={20} weight="fill" />
                        {t.shareTwitter}
                      </ShareBtn>
                      <CopyBtn onClick={handleCopy} $copied={copied}>
                        {copied ? <Check size={20} weight="bold" /> : <Copy size={20} />}
                        {copied ? t.shareCopied : t.shareCopy}
                      </CopyBtn>
                    </ShareGrid>

                    <ConnectBox>
                      <ConnectTitle>
                        <Envelope size={18} />
                        {t.connectTitle}
                      </ConnectTitle>
                      <ConnectText>{t.connectText}</ConnectText>
                      <ConnectBtn href={`mailto:${t.emailBtn}`}>{t.emailBtn}</ConnectBtn>
                    </ConnectBox>
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

const Section = styled.section`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.harvardDarkCrimson} 0%,
    ${({ theme }) => theme.colors.harvardCrimson} 60%,
    ${({ theme }) => theme.colors.deepWine} 100%
  );
  padding: 96px 40px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 64px 20px;
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
  gap: 48px;
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

const InfoBox = styled.div`
  padding: 16px 20px;
  background: ${({ theme }) => theme.colors.softGray};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const InfoLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mutedText};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const InfoValue = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
  font-style: italic;
`;

const InfoNote = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-style: italic;
`;

const PrimaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  width: fit-content;

  &:hover {
    background: ${({ theme }) => theme.colors.harvardDarkCrimson};
    transform: translateY(-1px);
  }
`;

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

const CopyBtn = styled.button<{ $copied: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 1.5px solid
    ${({ $copied, theme }) => ($copied ? theme.colors.harvardCrimson + '44' : theme.colors.border)};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $copied, theme }) => ($copied ? theme.colors.harvardCrimson : theme.colors.mutedText)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.softGray};
  }
`;

const ConnectBox = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.warmOffWhite};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ConnectTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
`;

const ConnectText = styled.p`
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const ConnectBtn = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    color: ${({ theme }) => theme.colors.harvardDarkCrimson};
  }
`;
