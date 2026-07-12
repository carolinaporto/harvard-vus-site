import styled from 'styled-components';
import { motion } from 'framer-motion';
import { House, ForkKnife, Heart, BookOpen } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content, donationCount } from '../data/content';
import { useProgress } from '../hooks/useProgress';
import { useDonors } from '../hooks/useDonors';
import { useModal } from '../context/ModalContext';
import { useRef } from 'react';
import type { ReactNode } from 'react';

const MEDALS = ['🥇', '🥈', '🥉'];
const MEDAL_COLORS = ['#D4A843', '#9BA8B5', '#B07B4A'];

const iconMap: Record<string, ReactNode> = {
  house: <House size={22} weight="duotone" />,
  fork: <ForkKnife size={22} weight="duotone" />,
  heart: <Heart size={22} weight="duotone" />,
  book: <BookOpen size={22} weight="duotone" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export default function FundingGoalSection() {
  const { lang } = useLanguage();
  const t = content[lang].funding;
  const progress = useProgress();

  const { donors, top3, chips, overflow } = useDonors();
  const { openModal } = useModal();
  const withMessages = donors.filter(d => d.message);
  const showRanking = donors.length > 0;
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === 'right' ? trackRef.current.offsetWidth * 0.85 : -trackRef.current.offsetWidth * 0.85, behavior: 'smooth' });
  };

  const raisedValue = progress.loading ? t.raisedValue : progress.raisedFormatted;
  const goalValue = progress.loading ? t.goalValue : progress.goalFormatted;
  const progressPercent = progress.loading ? t.progressPercent : progress.percent;

  return (
    <Section id="funding">
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

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <ProgressCard>
            <ProgressMeta>
              <ProgressItem>
                <ProgressItemValue>{raisedValue}</ProgressItemValue>
                <ProgressItemLabel>{t.raisedLabel}</ProgressItemLabel>
              </ProgressItem>
              <ProgressItem $right>
                <ProgressItemValue>{goalValue}</ProgressItemValue>
                <ProgressItemLabel>{t.goalLabel}</ProgressItemLabel>
              </ProgressItem>
            </ProgressMeta>
            <BarTrack>
              <BarFill
                as={motion.div}
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.max(progressPercent, 2)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
              />
            </BarTrack>
            {t.progressNote ? <ProgressNote>{t.progressNote}</ProgressNote> : null}
            <TrustNote>
              {lang === 'pt'
                ? 'Meta baseada no orçamento previsto pela Harvard College para um ano acadêmico.'
                : "Goal based on Harvard College's estimated budget for one academic year."}
            </TrustNote>
          </ProgressCard>
        </motion.div>

        {/* Cost Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CategoriesTitle>
            {lang === 'pt' ? 'Composição dos custos' : 'Cost breakdown'}
          </CategoriesTitle>
          <CategoriesGrid>
            {t.categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
              >
                <CategoryCard>
                  <CategoryIcon>{iconMap[cat.iconKey] ?? null}</CategoryIcon>
                  <div>
                    <CategoryLabel>{cat.label}</CategoryLabel>
                    <CategoryNote>{cat.note}</CategoryNote>
                  </div>
                </CategoryCard>
              </motion.div>
            ))}
          </CategoriesGrid>
        </motion.div>

        {/* Donors Ranking */}
        {showRanking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <RankingBlock>
              <RankingHeader>
                <RankingTitle>
                  {lang === 'pt' ? 'Quem está tornando isso real' : 'The people making this real'}
                </RankingTitle>
                {donationCount > 0 && (
                  <DonationStat>
                    <strong>{donationCount}</strong>
                    {lang === 'pt' ? ' doações recebidas' : ' donations received'}
                  </DonationStat>
                )}
              </RankingHeader>

              {top3.length > 0 && (
                <Podium>
                  {top3.map((donor, i) => (
                    <PodiumCard key={i} $accent={MEDAL_COLORS[i]}>
                      <MedalEmoji>{MEDALS[i]}</MedalEmoji>
                      <DonorName>{donor.name}</DonorName>
                    </PodiumCard>
                  ))}
                </Podium>
              )}

              {chips.length > 0 && (
                <RestRow>
                  {chips.map((donor, i) => (
                    <RestCard key={i}>{donor.name}</RestCard>
                  ))}
                  {overflow > 0 && (
                    <RestCard>+{overflow}</RestCard>
                  )}
                </RestRow>
              )}

              {withMessages.length > 0 && (
                <QuotesSection>
                  <QuotesTrack ref={trackRef}>
                    {withMessages.map((donor, i) => (
                      <QuoteSlide key={i}>
                        <BigQuote>"</BigQuote>
                        <QuoteBody>{donor.message}</QuoteBody>
                        <QuoteByline>— {donor.name}</QuoteByline>
                      </QuoteSlide>
                    ))}
                  </QuotesTrack>
                  <QuoteNav>
                    <NavBtn onClick={() => scrollCarousel('left')} aria-label="anterior">‹</NavBtn>
                    <NavBtn onClick={() => scrollCarousel('right')} aria-label="próximo">›</NavBtn>
                  </QuoteNav>
                </QuotesSection>
              )}

              <RankingCta>
                {lang === 'pt'
                  ? 'Quer fazer parte do ranking?'
                  : 'Want to appear on this list?'}
                {' '}
                <CtaLink as="button" onClick={openModal}>
                  {lang === 'pt' ? 'Doe agora →' : 'Donate now →'}
                </CtaLink>
              </RankingCta>
            </RankingBlock>
          </motion.div>
        )}

      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.softGray};
  padding: 80px 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 56px 20px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

const Tag = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(28px, 4vw, 46px);
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: clamp(15px, 1.5vw, 17px);
  color: ${({ theme }) => theme.colors.mutedText};
  max-width: 600px;
  line-height: 1.7;
`;

const ProgressCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 32px 36px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 24px 20px;
  }
`;

const ProgressMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const ProgressItem = styled.div<{ $right?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: ${({ $right }) => ($right ? 'right' : 'left')};
`;

const ProgressItemValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
`;

const ProgressItemLabel = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedText};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const BarTrack = styled.div`
  height: 12px;
  background: ${({ theme }) => theme.colors.softGray};
  border-radius: 100px;
  overflow: hidden;
  margin-bottom: 12px;
`;

const BarFill = styled.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.harvardCrimson},
    ${({ theme }) => theme.colors.goldAccent}
  );
  border-radius: 100px;
`;


const TrustNote = styled.p`
  font-size: 11.5px;
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.5;
  opacity: 0.7;
  margin-top: 4px;
`;

const ProgressNote = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-top: 4px;
`;

const CategoriesTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 24px;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
`;

const CategoryIcon = styled.div`
  color: ${({ theme }) => theme.colors.harvardCrimson};
  flex-shrink: 0;
  margin-top: 2px;
`;

const CategoryLabel = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 4px;
`;

const CategoryNote = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.5;
`;

const RankingBlock = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 32px 36px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 24px 20px;
  }
`;

const RankingHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const RankingTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
`;

const DonationStat = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};

  strong {
    color: ${({ theme }) => theme.colors.harvardCrimson};
    font-size: 18px;
    font-weight: 700;
  }
`;

const Podium = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

const PodiumCard = styled.div<{ $accent: string }>`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ $accent }) => $accent};
  border-radius: 14px;
  box-shadow: 0 4px 16px ${({ $accent }) => $accent}30;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const MedalEmoji = styled.span`
  font-size: 28px;
  line-height: 1;
`;

const DonorName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
`;


const RestRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const RestCard = styled.span`
  padding: 6px 14px;
  background: ${({ theme }) => theme.colors.softGray};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};
`;

const QuotesSection = styled.div`
  margin-top: 4px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const QuotesTrack = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  gap: 0;
  padding-bottom: 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const QuoteSlide = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 30%;
  padding-right: 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    width: 72%;
    padding-right: 24px;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    width: 88%;
    padding-right: 20px;
  }
`;

const BigQuote = styled.span`
  display: block;
  font-size: 72px;
  line-height: 0.7;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  opacity: 0.18;
  font-family: Georgia, serif;
  margin-bottom: -8px;
  user-select: none;
`;

const QuoteBody = styled.p`
  font-size: 16px;
  line-height: 1.75;
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkText};
`;

const QuoteByline = styled.p`
  margin-top: 12px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const QuoteNav = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const NavBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
  }
`;

const RankingCta = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-top: 8px;
`;

const CtaLink = styled.a`
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

