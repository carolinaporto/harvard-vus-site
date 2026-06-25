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
  padding: 48px 40px;
  background: ${({ $variant, theme }) =>
    $variant === 'dark' ? theme.colors.darkText : theme.colors.warmOffWhite};

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 36px 24px;
  }
`;

const Inner = styled.div`
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
`;

const Mark = styled.div<{ $variant: 'light' | 'dark' }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 48px;
  line-height: 0.8;
  color: ${({ $variant, theme }) =>
    $variant === 'dark' ? theme.colors.harvardCrimson : theme.colors.border};
  margin-bottom: 4px;
  user-select: none;
`;

const Quote = styled.p<{ $variant: 'light' | 'dark' }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(16px, 1.8vw, 22px);
  font-style: italic;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ $variant, theme }) =>
    $variant === 'dark' ? theme.colors.white : theme.colors.mutedText};
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
