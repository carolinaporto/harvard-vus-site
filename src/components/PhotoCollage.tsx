import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const rotations = [-3, 1.5, -1, 2.5, -2, 1, -1.5, 2];
const emojis = ['🎓', '🤖', '💼', '🌆', '🌎', '🇧🇷', '🏆', '🎉'];

function PhotoImage({ src, alt, emoji }: { src: string; alt: string; emoji: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <PlaceholderContent>
        <PlaceholderEmoji>{emoji}</PlaceholderEmoji>
      </PlaceholderContent>
    );
  }
  return <img src={src} alt={alt} onError={() => setErrored(true)} />;
}

export default function PhotoCollage() {
  const { lang } = useLanguage();
  const t = content[lang].photoCollage;

  return (
    <Section>
      <HeaderContainer>
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
      </HeaderContainer>

      <PhotosArea>
        <Grid>
          {t.photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, rotate: rotations[i] * 0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[i] }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
              style={{ zIndex: i % 2 === 0 ? 1 : 2 }}
            >
              <Polaroid $tall={i === 0 || i === 7}>
                <PhotoSlot $tall={i === 0 || i === 7}>
                  <PhotoImage
                    src={photo.src}
                    alt={photo.caption}
                    emoji={emojis[i]}
                  />
                </PhotoSlot>
                <Caption>{photo.caption}</Caption>
              </Polaroid>
            </motion.div>
          ))}
        </Grid>
      </PhotosArea>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.softGray};
  padding: 80px 0 88px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 56px 0 64px;
  }
`;

const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 0 20px;
  }
`;

const PhotosArea = styled.div`
  max-width: min(1400px, 94vw);
  margin: 0 auto;
  padding-top: 40px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: start;

  /* stagger row heights */
  & > *:nth-child(even) {
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    & > *:nth-child(even) {
      margin-top: 28px;
    }
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    & > *:nth-child(even) {
      margin-top: 16px;
    }
  }
`;

const Polaroid = styled.div<{ $tall: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  padding: 12px 12px 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.08);
  cursor: default;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PhotoSlot = styled.div<{ $tall: boolean }>`
  width: 100%;
  aspect-ratio: ${({ $tall }) => ($tall ? '3/4' : '4/3')};
  background: ${({ theme }) => theme.colors.softGray};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

const PlaceholderContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 10px;
`;

const PlaceholderEmoji = styled.div`
  font-size: 36px;
  line-height: 1;
`;

const Caption = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
  margin-top: 10px;
  line-height: 1.4;
`;
