import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  ShareNetwork,
  WhatsappLogo,
  LinkedinLogo,
  InstagramLogo,
  Copy,
  Check,
  Heart,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { content } from '../data/content';
import SupportersCard from './SupportersCard';

export default function DonateSection() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const t = content[lang].donate;
  const [copied, setCopied] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);
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

  return (
    <Section id="donate">
      <Overlay />
      <Container>
        <TwoCol>

          {/* ── Left: donate content ── */}
          <LeftCol>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ImpactGrid>
                {t.impactEquivalences.map((eq, i) => (
                  <ImpactCard key={i}>
                    <ImpactAmount>{eq.amount}</ImpactAmount>
                    <ImpactLabel>{eq.label}</ImpactLabel>
                  </ImpactCard>
                ))}
              </ImpactGrid>
              <ImpactNote>{t.impactNote}</ImpactNote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <MainCta onClick={openModal}>
                <Heart size={20} weight="fill" />
                {lang === 'pt' ? 'Doe Agora' : 'Donate Now'}
              </MainCta>
              <CtaHint>
                {lang === 'pt'
                  ? 'PIX • Transferência Internacional • Cartão'
                  : 'PIX • International Transfer • Card'}
              </CtaHint>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ShareBlock>
                <ShareTitle>
                  <ShareNetwork size={16} />
                  {t.shareSubtitle}
                </ShareTitle>
                <ShareRow>
                  <ShareIconBtn
                    href={`https://wa.me/?text=${encodeURIComponent(t.whatsappMessage + ' ' + pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.shareWhatsApp}
                    title={t.shareWhatsApp}
                  >
                    <WhatsappLogo size={20} weight="fill" />
                  </ShareIconBtn>
                  <ShareIconBtn
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.shareLinkedIn}
                    title={t.shareLinkedIn}
                  >
                    <LinkedinLogo size={20} weight="fill" />
                  </ShareIconBtn>
                  <InstagramIconBtn
                    onClick={handleInstagramCopy}
                    $copied={copiedInstagram}
                    aria-label={t.shareInstagram}
                    title={t.shareInstagram}
                  >
                    {copiedInstagram ? <Check size={20} weight="bold" /> : <InstagramLogo size={20} weight="fill" />}
                  </InstagramIconBtn>
                  <CopyIconBtn
                    onClick={handleCopy}
                    $copied={copied}
                    aria-label={t.shareCopy}
                    title={t.shareCopy}
                  >
                    {copied ? <Check size={20} weight="bold" /> : <Copy size={20} />}
                  </CopyIconBtn>
                </ShareRow>
              </ShareBlock>
            </motion.div>

            <DirectPaymentNote>
              <strong>
                {lang === 'pt'
                  ? 'Quer pagar a tuition diretamente para Harvard?'
                  : 'Prefer to pay tuition directly to Harvard?'}
              </strong>{' '}
              {lang === 'pt'
                ? 'Essa opção é viável e pode ter vantagens dependendo da sua situação. Me escreva e explico.'
                : "That's possible and may have advantages depending on your situation. Reach out and I'll explain."}{' '}
              <DirectPaymentLink href="mailto:carolporto04@gmail.com">
                carolporto04@gmail.com
              </DirectPaymentLink>
            </DirectPaymentNote>
          </LeftCol>

          <RightCol
            as={motion.div}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            <SupportersCard />
          </RightCol>
        </TwoCol>
      </Container>
    </Section>
  );
}

/* ── Section shell ── */

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
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/G%3E%3C/svg%3E");
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

/* ── Layout ── */

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 52px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
`;

const LeftCol = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RightCol = styled.div`
  @media (min-width: ${({ theme }) => theme.bp.desktop}) {
    position: sticky;
    top: 88px;
  }
`;

/* ── Donate content ── */

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
  max-width: 520px;
  line-height: 1.7;
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 380px) { grid-template-columns: 1fr; }
`;

const ImpactCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ImpactAmount = styled.div`
  font-size: 17px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`;

const ImpactLabel = styled.div`
  font-size: 11.5px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.65);
`;

const ImpactNote = styled.p`
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 9px;
  letter-spacing: 0.2px;
`;

const MainCta = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 48px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.harvardCrimson};
  border-radius: 14px;
  font-size: 17px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
  }
`;

const CtaHint = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 12px;
`;

const ShareBlock = styled.div`
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 14px;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    padding: 16px;
  }
`;

const ShareTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const ShareRow = styled.div`
  display: flex;
  gap: 10px;
`;

const iconBtnBase = `
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.18s ease;
  flex-shrink: 0;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ShareIconBtn = styled.a`${iconBtnBase}`;

const InstagramIconBtn = styled.button<{ $copied: boolean }>`
  ${iconBtnBase}
  background: ${({ $copied }) => ($copied ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.08)')};
`;

const CopyIconBtn = styled.button<{ $copied: boolean }>`
  ${iconBtnBase}
  background: ${({ $copied }) => ($copied ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.08)')};
`;

const DirectPaymentNote = styled.p`
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;

  strong {
    color: rgba(255, 255, 255, 0.82);
    font-weight: 600;
  }
`;

const DirectPaymentLink = styled.a`
  color: rgba(255, 255, 255, 0.82);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
  &:hover { color: ${({ theme }) => theme.colors.white}; }
`;
