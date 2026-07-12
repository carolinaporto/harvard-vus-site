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
              <ShareNetwork size={18} />
              {t.shareSubtitle}
            </ShareTitle>
            <ShareGrid>
              <ShareBtn
                href={`https://wa.me/?text=${encodeURIComponent(t.whatsappMessage + ' ' + pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                $color="#25D366"
              >
                <WhatsappLogo size={18} weight="fill" />
                {t.shareWhatsApp}
              </ShareBtn>
              <ShareBtn
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                $color="#0A66C2"
              >
                <LinkedinLogo size={18} weight="fill" />
                {t.shareLinkedIn}
              </ShareBtn>
              <InstagramCopyBtn onClick={handleInstagramCopy} $copied={copiedInstagram}>
                {copiedInstagram
                  ? <Check size={18} weight="bold" />
                  : <InstagramLogo size={18} weight="fill" />}
                {copiedInstagram ? t.instagramCopied : t.shareInstagram}
              </InstagramCopyBtn>
              <CopyBtn onClick={handleCopy} $copied={copied}>
                {copied ? <Check size={18} weight="bold" /> : <Copy size={18} />}
                {copied ? t.shareCopied : t.shareCopy}
              </CopyBtn>
            </ShareGrid>
          </ShareBlock>
        </motion.div>

        <DirectPaymentNote>
          <strong>
            {lang === 'pt'
              ? 'Quer pagar a tuition diretamente para Harvard?'
              : 'Prefer to pay tuition directly to Harvard?'}
          </strong>{' '}
          {lang === 'pt'
            ? 'Essa opção é viável e pode ter benefícios fiscais para você. Entre em contato e acertamos os detalhes.'
            : "That's possible and may offer tax benefits for you. Reach out and we'll work out the details."}{' '}
          <DirectPaymentLink href="mailto:carolporto04@gmail.com">
            carolporto04@gmail.com
          </DirectPaymentLink>
        </DirectPaymentNote>
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
  gap: 40px;
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
  font-size: 11.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.38);
  margin-top: 14px;
`;

const ShareBlock = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px 28px;
  max-width: 620px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 20px;
  }
`;

const ShareTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
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
  padding: 11px 16px;
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background 0.2s ease;
  background: rgba(255, 255, 255, 0.06);

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;

const InstagramCopyBtn = styled.button<{ $copied: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 16px;
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $copied }) => ($copied ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)')};
  white-space: nowrap;
  overflow: hidden;
`;

const CopyBtn = styled.button<{ $copied: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 16px;
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $copied }) => ($copied ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)')};

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;

const DirectPaymentNote = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  max-width: 620px;

  strong {
    color: rgba(255, 255, 255, 0.88);
    font-weight: 600;
  }
`;

const DirectPaymentLink = styled.a`
  color: rgba(255, 255, 255, 0.88);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
