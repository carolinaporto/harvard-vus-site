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

        <TimelineOuter>
          <CenterLine />
          {t.milestones.map((item, i) => {
            const isRight = i % 2 === 1;
            const color = phaseColor[item.phase];
            const isHighlight = 'isHighlight' in item && !!item.isHighlight;
            const isPlaceholder = 'isPlaceholder' in item && !!item.isPlaceholder;
            return (
              <Entry key={i} $isRight={isRight}>
                {/* Dot: positioned at the center line (desktop) or left line (mobile) */}
                <DotWrapper>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                  >
                    <Dot $color={color} $highlight={isHighlight} />
                  </motion.div>
                </DotWrapper>

                {/* Card: switches side on desktop, always full-width on mobile */}
                <CardWrapper $isRight={isRight}>
                  <EntryCard
                    $highlight={isHighlight}
                    as={motion.div}
                    initial={{ opacity: 0, x: isRight ? 36 : -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.65 }}
                  >
                    {isHighlight && <HighlightGlow />}
                    <YearBadge $color={color} $placeholder={isPlaceholder} $highlight={isHighlight}>
                      {item.year}
                    </YearBadge>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDesc $placeholder={isPlaceholder}>
                      {item.description}
                    </CardDesc>
                  </EntryCard>
                </CardWrapper>
              </Entry>
            );
          })}
        </TimelineOuter>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.warmOffWhite};
  padding: 96px 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 64px 20px;
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
  margin-bottom: 64px;
`;

const TimelineOuter = styled.div`
  position: relative;
`;

const CenterLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    to bottom,
    #8b7355 0%,
    #c8102e 38%,
    #b7161b 62%,
    #a51c30 100%
  );

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    left: 20px;
    transform: none;
  }
`;

const Entry = styled.div<{ $isRight: boolean }>`
  position: relative;
  padding-bottom: 48px;

  /* Desktop: pseudo-two-column via flex */
  @media (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: flex;
    flex-direction: ${({ $isRight }) => ($isRight ? 'row-reverse' : 'row')};
    align-items: flex-start;
    gap: 0;
  }

  /* Mobile: single-column with left-side line */
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    display: block;
    padding-left: 52px;
    padding-bottom: 36px;
  }
`;

const DotWrapper = styled.div`
  /* Desktop: absolutely centered on the line */
  @media (min-width: ${({ theme }) => theme.bp.tablet}) {
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    z-index: 2;
  }

  /* Mobile: absolute on the left line */
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    position: absolute;
    left: 13px;
    top: 18px;
    z-index: 2;
  }
`;

const Dot = styled.div<{ $color: string; $highlight: boolean }>`
  width: ${({ $highlight }) => ($highlight ? '20px' : '14px')};
  height: ${({ $highlight }) => ($highlight ? '20px' : '14px')};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 3px solid ${({ theme }) => theme.colors.warmOffWhite};
  box-shadow: 0 0 0 2px ${({ $color }) => $color};
  ${({ $highlight, $color }) =>
    $highlight && `box-shadow: 0 0 0 3px ${$color}, 0 0 18px ${$color}66;`}
`;

const CardWrapper = styled.div<{ $isRight: boolean }>`
  @media (min-width: ${({ theme }) => theme.bp.tablet}) {
    width: calc(50% - 28px);
    ${({ $isRight }) => ($isRight ? 'margin-left: auto; padding-left: 28px;' : 'padding-right: 28px;')}
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    width: 100%;
  }
`;

const EntryCard = styled.div<{ $highlight: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  padding: 24px 28px;
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

const YearBadge = styled.span<{ $color: string; $placeholder: boolean; $highlight: boolean }>`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 3px 10px;
  border-radius: 100px;
  background: ${({ $color, $placeholder, $highlight }) =>
    $highlight ? 'rgba(255,255,255,0.18)' : $placeholder ? 'rgba(0,0,0,0.06)' : `${$color}22`};
  color: ${({ $color, $placeholder, $highlight }) =>
    $highlight ? 'rgba(255,255,255,0.9)' : $placeholder ? '#999' : $color};
  font-style: ${({ $placeholder }) => ($placeholder ? 'italic' : 'normal')};
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 17px;
  font-weight: 700;
  color: inherit;
  margin-bottom: 8px;
`;

const CardDesc = styled.p<{ $placeholder: boolean }>`
  font-size: 14px;
  line-height: 1.7;
  color: inherit;
  opacity: ${({ $placeholder }) => ($placeholder ? 0.6 : 0.85)};
  font-style: ${({ $placeholder }) => ($placeholder ? 'italic' : 'normal')};
`;
