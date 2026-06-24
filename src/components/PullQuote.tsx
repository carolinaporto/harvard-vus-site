import styled from 'styled-components';
import { motion } from 'framer-motion';

interface PullQuoteProps {
  quote: string;
  variant?: 'light' | 'dark';
}

export default function PullQuote({ quote, variant = 'dark' }: PullQuoteProps) {
  return (
    <Section $variant={variant}>
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <Mark $variant={variant}>"</Mark>
          <Quote $variant={variant}>{quote}</Quote>
          <Line $variant={variant} />
        </motion.div>
      </Inner>
    </Section>
  );
}

const Section = styled.section<{ $variant: 'light' | 'dark' }>`
  padding: 80px 40px;
  background: ${({ $variant, theme }) =>
    $variant === 'dark' ? theme.colors.darkText : theme.colors.warmOffWhite};

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 56px 24px;
  }
`;

const Inner = styled.div`
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
`;

const Mark = styled.div<{ $variant: 'light' | 'dark' }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 120px;
  line-height: 0.6;
  color: ${({ $variant, theme }) =>
    $variant === 'dark' ? theme.colors.harvardCrimson : theme.colors.border};
  margin-bottom: 8px;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    font-size: 80px;
  }
`;

const Quote = styled.p<{ $variant: 'light' | 'dark' }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(20px, 3vw, 34px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.45;
  color: ${({ $variant, theme }) =>
    $variant === 'dark' ? theme.colors.white : theme.colors.darkText};
  letter-spacing: 0;
`;

const Line = styled.div<{ $variant: 'light' | 'dark' }>`
  width: 48px;
  height: 3px;
  border-radius: 2px;
  margin: 28px auto 0;
  background: ${({ $variant, theme }) =>
    $variant === 'dark' ? theme.colors.harvardCrimson : theme.colors.border};
`;
