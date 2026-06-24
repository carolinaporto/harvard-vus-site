import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function ExploringSection() {
  const { lang } = useLanguage();
  const t = content[lang].exploring;

  return (
    <Section>
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

        <TextBlock>
          {t.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
            >
              {para}
            </motion.p>
          ))}
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
  max-width: 720px;
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
  font-size: clamp(26px, 3.5vw, 42px);
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: clamp(14px, 1.4vw, 16px);
  color: ${({ theme }) => theme.colors.mutedText};
  font-style: italic;
  margin-bottom: 48px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    font-size: clamp(15px, 1.5vw, 17px);
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.darkText};
  }

  p:first-child {
    font-size: clamp(17px, 1.8vw, 20px);
    font-weight: 500;
  }
`;
