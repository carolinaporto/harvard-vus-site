import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShareNetwork,
  WhatsappLogo,
  LinkedinLogo,
  InstagramLogo,
  Copy,
  Check,
  Heart,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { useDonors } from '../hooks/useDonors';
import { content, donationCount } from '../data/content';

const MEDALS = ['🥇', '🥈', '🥉'];
const MEDAL_COLORS = ['#D4A843', '#9BA8B5', '#B07B4A'];

export default function DonateSection() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const t = content[lang].donate;
  const [copied, setCopied] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const { donors, top3, chips, overflow } = useDonors();
  const withMessages = donors.filter(d => d.message);
  const showRanking = donors.length > 0;

  const prevQuote = () => setQuoteIndex(i => (i === 0 ? withMessages.length - 1 : i - 1));
  const nextQuote = () => setQuoteIndex(i => (i === withMessages.length - 1 ? 0 : i + 1));

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
        <TwoCol $hasRanking={showRanking}>

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

          {/* ── Right: ranking ── */}
          {showRanking && (
            <RightCol
              as={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              <RankingCard>
                {/* Header */}
                <RankingHeader>
                  <RankingHeaderTop>
                    <RankingTitle>
                      {lang === 'pt' ? 'Quem está tornando isso real' : 'The people making this real'}
                    </RankingTitle>
                    {donationCount > 0 && (
                      <DonationBadge>
                        <strong>{donationCount}</strong>
                        {lang === 'pt' ? ' doações' : ' donations'}
                      </DonationBadge>
                    )}
                  </RankingHeaderTop>
                </RankingHeader>

                {/* Podium */}
                {top3.length > 0 && (
                  <PodiumRow>
                    {top3.map((donor, i) => (
                      <PodiumSlot key={i} $accent={MEDAL_COLORS[i]}>
                        <Medal>{MEDALS[i]}</Medal>
                        <PodiumName>{donor.name}</PodiumName>
                      </PodiumSlot>
                    ))}
                  </PodiumRow>
                )}

                {/* Other donors */}
                {chips.length > 0 && (
                  <ChipsSection>
                    <ChipsLabel>
                      {lang === 'pt' ? 'Outros apoiadores' : 'Other supporters'}
                    </ChipsLabel>
                    <ChipsRow>
                      {chips.map((donor, i) => (
                        <Chip key={i}>{donor.name}</Chip>
                      ))}
                      {overflow > 0 && <Chip $muted>+{overflow}</Chip>}
                    </ChipsRow>
                  </ChipsSection>
                )}

                {/* Quote carousel */}
                {withMessages.length > 0 && (
                  <QuoteSection>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={quoteIndex}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.22 }}
                      >
                        <QuoteMark>"</QuoteMark>
                        <QuoteText>{withMessages[quoteIndex].message}</QuoteText>
                        <QuoteAuthor>— {withMessages[quoteIndex].name}</QuoteAuthor>
                      </motion.div>
                    </AnimatePresence>
                    {withMessages.length > 1 && (
                      <QuoteControls>
                        <QuoteNavBtn onClick={prevQuote} aria-label="anterior">
                          <CaretLeft size={14} weight="bold" />
                        </QuoteNavBtn>
                        <QuoteDots>
                          {withMessages.map((_, i) => (
                            <Dot key={i} $active={i === quoteIndex} onClick={() => setQuoteIndex(i)} />
                          ))}
                        </QuoteDots>
                        <QuoteNavBtn onClick={nextQuote} aria-label="próximo">
                          <CaretRight size={14} weight="bold" />
                        </QuoteNavBtn>
                      </QuoteControls>
                    )}
                  </QuoteSection>
                )}

                {/* Footer CTA */}
                <RankingFooter>
                  {lang === 'pt' ? 'Quer aparecer aqui?' : 'Want to be listed here?'}{' '}
                  <FooterLink as="button" onClick={openModal}>
                    {lang === 'pt' ? 'Doe agora →' : 'Donate now →'}
                  </FooterLink>
                </RankingFooter>
              </RankingCard>
            </RightCol>
          )}
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

const TwoCol = styled.div<{ $hasRanking: boolean }>`
  display: grid;
  grid-template-columns: ${({ $hasRanking }) => ($hasRanking ? '1fr 1fr' : '1fr')};
  gap: 52px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftCol = styled.div`
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
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
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

/* ── Ranking card ── */

const RankingCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22), 0 4px 16px rgba(0, 0, 0, 0.12);
`;

const RankingHeader = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.harvardDarkCrimson} 0%,
    ${({ theme }) => theme.colors.harvardCrimson} 100%
  );
  padding: 20px 22px 18px;
`;

const RankingHeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const RankingTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
`;

const DonationBadge = styled.div`
  background: rgba(255, 255, 255, 0.18);
  border-radius: 100px;
  padding: 3px 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  flex-shrink: 0;

  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const PodiumRow = styled.div`
  display: flex;
  gap: 1px;
  padding: 16px 16px 0;
  background: ${({ theme }) => theme.colors.white};
`;

const PodiumSlot = styled.div<{ $accent: string }>`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 6px 16px;
  border-bottom: 3px solid ${({ $accent }) => $accent};
  border-radius: 10px 10px 0 0;
  background: ${({ $accent }) => $accent}12;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ $accent }) => $accent}22;
  }
`;

const Medal = styled.span`
  font-size: 22px;
  line-height: 1;
`;

const PodiumName = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  line-height: 1.3;
  word-break: break-word;
`;

const ChipsSection = styled.div`
  padding: 14px 18px 0;
  background: ${({ theme }) => theme.colors.white};
`;

const ChipsLabel = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-bottom: 8px;
  opacity: 0.6;
`;

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.span<{ $muted?: boolean }>`
  padding: 4px 11px;
  background: ${({ $muted, theme }) => ($muted ? theme.colors.border : theme.colors.softGray)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ $muted, theme }) => ($muted ? theme.colors.mutedText : theme.colors.darkText)};
`;

const QuoteSection = styled.div`
  padding: 18px 20px 0;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 14px;
`;

const QuoteMark = styled.span`
  display: block;
  font-size: 48px;
  line-height: 0.65;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  opacity: 0.15;
  font-family: Georgia, serif;
  margin-bottom: -4px;
  user-select: none;
`;

const QuoteText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkText};
  min-height: 64px;
`;

const QuoteAuthor = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const QuoteControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  padding-bottom: 4px;
`;

const QuoteNavBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mutedText};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.harvardCrimson};
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const QuoteDots = styled.div`
  display: flex;
  gap: 5px;
  flex: 1;
  justify-content: center;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '18px' : '6px')};
  height: 6px;
  border-radius: 100px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.harvardCrimson : theme.colors.border};
  cursor: pointer;
  transition: all 0.25s ease;
`;

const RankingFooter = styled.div`
  padding: 14px 20px 18px;
  background: ${({ theme }) => theme.colors.warmOffWhite};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.18s ease;

  &:hover { opacity: 0.7; }
`;
