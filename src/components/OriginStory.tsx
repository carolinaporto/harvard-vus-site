import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function OriginStory() {
  const { lang } = useLanguage();
  const t = content[lang].originStory;

  return (
    <Section id="origin">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <Tag>{t.tag}</Tag>
          <Headline>{t.headline}</Headline>
        </motion.div>

        <ContentGrid>
          <StoryBlock>
            {t.story.flatMap((para, i) => {
              const paragraph = (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                >
                  {para}
                </motion.p>
              );
              if (i === 1) {
                return [
                  paragraph,
                  <motion.blockquote
                    key="family-quote"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    {t.familyQuote}
                  </motion.blockquote>,
                ];
              }
              return [paragraph];
            })}
          </StoryBlock>

          <PhotoColumn>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <StoryPhoto src="/familia.jpg" alt="Família de Maria Carolina Porto" />
              <PhotoCaption>{t.familyCaption}</PhotoCaption>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <StoryPhoto src="/sisters.png" alt="Irmãs de Maria Carolina Porto" />
              <PhotoCaption>{t.sistersCaption}</PhotoCaption>
            </motion.div>
          </PhotoColumn>
        </ContentGrid>

      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.warmOffWhite};
  padding: 96px 40px 48px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 64px 20px 40px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Tag = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  margin-bottom: 12px;
`;

const Headline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(28px, 4vw, 46px);
  color: ${({ theme }) => theme.colors.darkText};
  max-width: 680px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 64px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: 65fr 35fr;
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: clamp(16px, 1.5vw, 18px);
    line-height: 1.85;
    color: ${({ theme }) => theme.colors.darkText};
  }

  blockquote {
    margin: 4px 0;
    padding: 18px 24px;
    border-left: 3px solid ${({ theme }) => theme.colors.harvardCrimson};
    background: rgba(165, 28, 48, 0.04);
    border-radius: 0 8px 8px 0;
    font-size: clamp(16px, 1.4vw, 18px);
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.harvardDarkCrimson};
    line-height: 1.65;
  }
`;

const PhotoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.bp.tablet}) {
    position: sticky;
    top: 80px;
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    order: 1;
  }
`;

const StoryPhoto = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.14);
  display: block;
  object-fit: cover;
`;

const PhotoCaption = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
  font-style: italic;
`;

