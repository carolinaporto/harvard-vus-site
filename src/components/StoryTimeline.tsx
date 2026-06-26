import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

type Phase = 'childhood' | 'insper' | 'transition' | 'harvard';

const phaseColor: Record<Phase, string> = {
  childhood: '#8B7355',
  insper: '#C8102E',
  transition: '#B7161B',
  harvard: '#A51C30',
};

export default function StoryTimeline() {
  const { lang } = useLanguage();
  const t = content[lang].timeline;

  return (
    <Section id="my-story">
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

        <MilestoneGrid>
          {t.milestones.map((item, i) => {
            const isHighlight = 'isHighlight' in item && !!item.isHighlight;
            const color = phaseColor[item.phase];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                style={{ height: '100%' }}
              >
                <MilestoneCard $highlight={isHighlight}>
                  {isHighlight && <HighlightGlow />}
                  <YearBadge $color={color} $highlight={isHighlight}>
                    {item.year}
                  </YearBadge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDesc>{item.description}</CardDesc>
                </MilestoneCard>
              </motion.div>
            );
          })}
        </MilestoneGrid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.warmOffWhite};
  padding: 80px 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 56px 20px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
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
  max-width: 540px;
  line-height: 1.7;
`;

const MilestoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 48px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const MilestoneCard = styled.div<{ $highlight: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  padding: 20px 22px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  ${({ $highlight, theme }) =>
    $highlight
      ? `
        background: ${theme.colors.harvardCrimson};
        color: ${theme.colors.white};
        box-shadow: 0 8px 32px rgba(165,28,48,0.28);
        border: none;
      `
      : `
        background: ${theme.colors.white};
        color: ${theme.colors.darkText};
        border: 1px solid ${theme.colors.border};
        box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      `}

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ $highlight }) =>
      $highlight
        ? '0 16px 40px rgba(165,28,48,0.36)'
        : '0 8px 24px rgba(0,0,0,0.1)'};
  }
`;

const HighlightGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 80% 10%,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 60%
  );
  pointer-events: none;
`;

const YearBadge = styled.span<{ $color: string; $highlight: boolean }>`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 3px 10px;
  border-radius: 100px;
  width: fit-content;
  background: ${({ $color, $highlight }) =>
    $highlight ? 'rgba(255,255,255,0.18)' : `${$color}22`};
  color: ${({ $color, $highlight }) =>
    $highlight ? 'rgba(255,255,255,0.9)' : $color};
  margin-bottom: 4px;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 700;
  color: inherit;
  line-height: 1.3;
`;

const CardDesc = styled.p`
  font-size: 13.5px;
  line-height: 1.65;
  color: inherit;
  opacity: 0.82;
`;
