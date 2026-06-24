import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Brain,
  GlobeHemisphereWest,
  Rocket,
  Users,
} from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const iconMap: Record<string, ReactNode> = {
  book: <BookOpen size={26} weight="duotone" />,
  brain: <Brain size={26} weight="duotone" />,
  network: <Users size={26} weight="duotone" />,
  globe: <GlobeHemisphereWest size={26} weight="duotone" />,
  rocket: <Rocket size={26} weight="duotone" />,
};

function HarvardPhoto({ src }: { src: string }) {
  const [hidden, setHidden] = useState(false);
  return (
    <PhotoSlot $hidden={hidden}>
      <img src={src} alt="" onError={() => setHidden(true)} />
    </PhotoSlot>
  );
}

export default function HarvardSection() {
  const { lang } = useLanguage();
  const t = content[lang].harvard;

  return (
    <Section id="harvard">
      <Overlay />
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

        <PillarsGrid>
          {t.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            >
              <PillarCard>
                <PillarIcon>{iconMap[pillar.iconKey] ?? null}</PillarIcon>
                <PillarTitle>{pillar.title}</PillarTitle>
                <PillarDesc>{pillar.description}</PillarDesc>
              </PillarCard>
            </motion.div>
          ))}
        </PillarsGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <PhotoRow>
            {[1, 2, 3].map(n => (
              <HarvardPhoto key={n} src={`/photos/harvard-${n}.jpg`} />
            ))}
          </PhotoRow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <CTARow>
            <DonateBtn href="#donate">
              {lang === 'pt' ? 'Me ajude a ir para Harvard →' : 'Help me get to Harvard →'}
            </DonateBtn>
          </CTARow>
        </motion.div>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  background: linear-gradient(
    150deg,
    ${({ theme }) => theme.colors.deepWine} 0%,
    ${({ theme }) => theme.colors.harvardCrimson} 55%,
    ${({ theme }) => theme.colors.harvardDarkCrimson} 100%
  );
  padding: 96px 40px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 64px 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
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
  color: ${({ theme }) => theme.colors.goldAccent};
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(28px, 4vw, 46px);
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: clamp(15px, 1.5vw, 18px);
  color: rgba(255, 255, 255, 0.72);
  max-width: 540px;
  line-height: 1.7;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled.div`
  padding: 28px 24px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.13);
    transform: translateY(-3px);
  }
`;

const PillarIcon = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
`;

const PillarTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
`;

const PillarDesc = styled.p`
  font-size: 13.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
`;

const PhotoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PhotoSlot = styled.div<{ $hidden: boolean }>`
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  display: ${({ $hidden }) => ($hidden ? 'none' : 'block')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const CTARow = styled.div`
  display: flex;
  justify-content: center;
`;

const DonateBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 36px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  }
`;
