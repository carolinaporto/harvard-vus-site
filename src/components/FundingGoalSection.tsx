import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  House,
  ForkKnife,
  Heart,
  Airplane,
  BookOpen,
  Bus,
  Coins,
} from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { useProgress } from '../hooks/useProgress';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  house: <House size={22} weight="duotone" />,
  fork: <ForkKnife size={22} weight="duotone" />,
  heart: <Heart size={22} weight="duotone" />,
  airplane: <Airplane size={22} weight="duotone" />,
  book: <BookOpen size={22} weight="duotone" />,
  bus: <Bus size={22} weight="duotone" />,
  coins: <Coins size={22} weight="duotone" />,
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

      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.softGray};
  padding: 96px 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 64px 20px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 56px;
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

