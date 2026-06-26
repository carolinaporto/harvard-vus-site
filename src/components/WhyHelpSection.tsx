import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

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

        <TextBlock>
          {[t.p1, t.p2].map((para, i) => (
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

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 720px;

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
