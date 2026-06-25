import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const variantStyles = {
  confirmed: { color: '#2A7A4B', bg: 'rgba(42,122,75,0.10)' },
  actionable: { color: '#1A6BAA', bg: 'rgba(26,107,170,0.10)' },
  open: { color: '#A51C30', bg: 'rgba(165,28,48,0.10)' },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
} as const;

export default function WhyHelpSection() {
  const { lang } = useLanguage();
  const t = content[lang].whyHelp;

  return (
    <Section id="why-help">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <Tag>{t.tag}</Tag>
          <Title>{t.title}</Title>
        </motion.div>

        <Grid>
          <TextBlock>
            {[t.p1, t.p2, t.p3].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {para}
              </motion.p>
            ))}

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.quote}
            </motion.blockquote>
          </TextBlock>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <RealityCard>
              <ConfirmedBadge>
                <CheckCircle size={15} weight="fill" />
                {t.reality.confirmedLabel}
              </ConfirmedBadge>
              <ConfirmedText>{t.reality.confirmedText}</ConfirmedText>
              <RealityStatement>{t.reality.statement}</RealityStatement>
              <StatusGrid>
                {t.reality.statusItems.map((item) => (
                  <StatusItem key={item.label}>
                    <StatusLabel>{item.label}</StatusLabel>
                    <StatusBadge $color={variantStyles[item.variant].color} $bg={variantStyles[item.variant].bg}>
                      {item.status}
                    </StatusBadge>
                  </StatusItem>
                ))}
              </StatusGrid>
              <RealityDivider />
              <RealityTitle>{t.reality.enablesLabel}</RealityTitle>
              <RealityGroup>
                {t.reality.enables.map((item) => (
                  <RealityRow key={item}>
                    <ArrowRight size={15} weight="bold" />
                    <span>{item}</span>
                  </RealityRow>
                ))}
              </RealityGroup>
            </RealityCard>
          </motion.div>
        </Grid>
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
  font-size: clamp(28px, 4vw, 46px);
  color: ${({ theme }) => theme.colors.darkText};
  max-width: 640px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 64px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: clamp(16px, 1.5vw, 18px);
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.darkText};
  }

  blockquote {
    margin: 8px 0 0;
    padding: 20px 24px;
    border-left: 4px solid ${({ theme }) => theme.colors.harvardCrimson};
    background: rgba(165, 28, 48, 0.04);
    border-radius: 0 8px 8px 0;
    font-size: clamp(16px, 1.5vw, 18px);
    font-style: italic;
    color: ${({ theme }) => theme.colors.harvardDarkCrimson};
    line-height: 1.6;
  }
`;

const RealityCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px 24px 22px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ConfirmedBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2A7A4B;
  background: rgba(42, 122, 75, 0.08);
  border-radius: 100px;
  padding: 4px 10px 4px 8px;
  width: fit-content;
`;

const ConfirmedText = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.3;
`;

const RealityStatement = styled.p`
  font-size: 13px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const RealityDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 2px 0;
`;

const RealityTitle = styled.p`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const RealityGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const RealityRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 13.5px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.darkText};

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.harvardCrimson};
  }
`;

const StatusGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const StatusLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.darkText};
`;

const StatusBadge = styled.span<{ $color: string; $bg: string }>`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 3px 9px;
  border-radius: 100px;
  white-space: nowrap;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
`;
