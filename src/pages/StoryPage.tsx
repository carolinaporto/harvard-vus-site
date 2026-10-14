import { secondaryAction } from '../styles/actions';
import { Heart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AchievementTicker from '../components/AchievementTicker';
import LogoMarquee from '../components/LogoMarquee';
import PhotoCollage from '../components/PhotoCollage';
import StoryTimeline from '../components/StoryTimeline';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';

const copy = {
  pt: {
    tag: 'Maria Carolina Porto',
    title: 'Minha trajetória',
    intro: 'Uma história de recomeços, curiosidade e oportunidades construídas com o apoio de muita gente.',
    letter: 'Trecho da carta de aprovação · Harvard College',
    nextTitle: 'A história continua em Harvard.',
    nextText: 'Conheça as matérias, as descobertas e as experiências do meu primeiro semestre.',
    semester: 'Acompanhe o semestre',
    donate: 'Faça parte: doe',
  },
  en: {
    tag: 'Maria Carolina Porto',
    title: 'My story',
    intro: 'A story of fresh starts, curiosity, and opportunities built with the support of many people.',
    letter: 'Excerpt from my acceptance letter · Harvard College',
    nextTitle: 'The story continues at Harvard.',
    nextText: 'Explore the courses, discoveries, and experiences of my first semester.',
    semester: 'Follow the semester',
    donate: 'Be part of it: donate',
  },
};

export default function StoryPage() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const t = copy[lang];

  return (
    <Page>
      <Heading>
        <HeadingInner>
          <div>
            <Eyebrow>{t.tag}</Eyebrow>
            <h1>{t.title}</h1>
            <Intro>{t.intro}</Intro>
          </div>
          <Letter>
            <a href="/approval-letter.png" target="_blank" rel="noopener noreferrer">
              <img src="/approval-letter.png" alt={t.letter} />
            </a>
            <figcaption>{t.letter}</figcaption>
          </Letter>
        </HeadingInner>
      </Heading>
      <StoryTimeline />
      <AchievementTicker />
      <LogoMarquee />
      <PhotoCollage />
      <NextChapter>
        <div>
          <h2>{t.nextTitle}</h2>
          <p>{t.nextText}</p>
        </div>
        <Actions>
          <SemesterLink to="/em-harvard">{t.semester}</SemesterLink>
          <DonateButton type="button" onClick={openModal}><Heart size={17} weight="fill" aria-hidden="true" />{t.donate}</DonateButton>
        </Actions>
      </NextChapter>
    </Page>
  );
}

const Page = styled.div`
  padding-top: 72px;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { padding-top: 60px; }
`;

const Heading = styled.header`
  padding: 54px 40px;
  background:
    radial-gradient(ellipse at 95% 0%, rgba(165, 28, 48, 0.09), transparent 55%),
    radial-gradient(ellipse at 0% 100%, rgba(214, 167, 86, 0.12), transparent 55%),
    ${({ theme }) => theme.colors.warmOffWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { padding: 36px 20px; }
`;

const HeadingInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 60px;
  h1 { font-size: clamp(36px, 4vw, 52px); font-weight: 650; letter-spacing: -1.4px; }
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { grid-template-columns: 1fr; gap: 28px; }
`;

const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const Intro = styled.p`
  max-width: 500px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-top: 18px;
  line-height: 1.8;
`;

const Letter = styled.figure`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 6px 20px rgba(91, 15, 27, 0.04);
  img { width: 100%; }
  figcaption {
    padding: 10px 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 10px;
    color: ${({ theme }) => theme.colors.mutedText};
  }
`;

const NextChapter = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 54px 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  h2 { font-size: 26px; font-weight: 600; }
  p { color: ${({ theme }) => theme.colors.mutedText}; font-size: 14px; margin-top: 8px; }
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { padding: 40px 20px; }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
`;

const SemesterLink = styled(Link)`
  ${secondaryAction}
`;

const DonateButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  &:hover { background: ${({ theme }) => theme.colors.harvardDarkCrimson}; }
`;
