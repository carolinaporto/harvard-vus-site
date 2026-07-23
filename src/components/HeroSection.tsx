import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowDown, Heart, ArrowRight, ShareNetwork } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { content } from '../data/content';

export default function HeroSection() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const t = content[lang].hero;
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <Section id="hero">
      <Overlay />
      <Inner>
        <TextCol>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Tag>{t.tag}</Tag>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <Headline>
              <span>{t.headline1}</span>
              <HeadlineStrong>{t.headline2}</HeadlineStrong>
            </Headline>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Subtitle>{t.subtitle}</Subtitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <CTAs>
              <PrimaryBtn as="button" onClick={openModal}>
                <Heart size={17} weight="fill" />
                {t.cta1}
              </PrimaryBtn>
              <SecondaryBtn href="#my-story">
                {t.cta2}
                <ArrowRight size={16} />
              </SecondaryBtn>
              <ShareBtn
                href={`https://wa.me/?text=${encodeURIComponent(
                  content[lang].donate.whatsappMessage + ' ' + (typeof window !== 'undefined' ? window.location.href : '')
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShareNetwork size={16} />
                {t.cta3}
              </ShareBtn>
            </CTAs>
          </motion.div>
        </TextCol>

        <PhotoCol
          as={motion.div}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <PhotoPlaceholder>
            {!heroImgError && (
              <img
                src="/photos/hero.jpg"
                alt="Maria Carolina Porto"
                onError={() => setHeroImgError(true)}
              />
            )}
            {heroImgError && (
              <PlaceholderInner>
                <PlaceholderIcon>🎓</PlaceholderIcon>
              </PlaceholderInner>
            )}
          </PhotoPlaceholder>
          <PhotoCaption>Harvard College · 2026</PhotoCaption>

          <LetterSnippet>
            <LetterImg src="/approval-letter.png" alt="Carta de aprovação Harvard" />
            <LetterLabel>
              {lang === 'pt' ? 'Carta de aprovação · Harvard College' : 'Acceptance letter · Harvard College'}
            </LetterLabel>
          </LetterSnippet>

        </PhotoCol>
      </Inner>

      <ScrollHint
        href="#why-help"
        as={motion.a}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>{t.scrollHint}</span>
        <ArrowDown size={18} />
      </ScrollHint>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.deepWine} 0%,
    ${({ theme }) => theme.colors.harvardCrimson} 45%,
    ${({ theme }) => theme.colors.harvardDarkCrimson} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 40px 56px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 72px 20px 48px;
    min-height: 100svh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 56px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.9);
  width: fit-content;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.goldAccent};
    flex-shrink: 0;
  }
`;

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(36px, 5vw, 62px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.12;
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-weight: 400;
    opacity: 0.9;
  }
`;

const HeadlineStrong = styled.span`
  font-weight: 700 !important;
  opacity: 1 !important;
`;

const Subtitle = styled.p`
  font-size: clamp(15px, 1.5vw, 18px);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.82);
  max-width: 520px;
`;

const CTAs = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
  white-space: nowrap;

  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const ShareBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 14px 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const PhotoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }
`;

const PhotoPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  max-height: 360px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

const PlaceholderInner = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  gap: 16px;
`;

const PlaceholderIcon = styled.div`
  font-size: 56px;
  line-height: 1;
`;

const PhotoCaption = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.5px;
`;

const LetterSnippet = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
`;

const LetterImg = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const LetterLabel = styled.p`
  padding: 10px 14px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  background: rgba(0, 0, 0, 0.25);
`;

const ScrollHint = styled.a`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: color 0.2s ease;
  animation: bounceDown 2s ease-in-out infinite;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @keyframes bounceDown {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(5px); }
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    display: none;
  }
`;
