import { secondaryAction } from '../styles/actions';
import { Heart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { content } from '../data/content';
import { useProgress } from '../hooks/useProgress';
import SupportersCard from '../components/SupportersCard';
import ImpactSection from '../components/ImpactSection';

const copy = {
  pt: {
    tag: 'Harvard College · Visiting Undergraduate Student · 2026/2027',
    headline: 'Já estou em Harvard.',
    invitation: 'Faça parte dos próximos capítulos.',
    intro: 'Comecei meu primeiro semestre buscando aprender além da Engenharia da Computação: novas áreas, novas perguntas e outras formas de olhar para o mundo.',
    support: 'Essa história está acontecendo com apoio de muita gente. A campanha continua para ajudar a cobrir os custos desse ano — e você pode fazer parte dela.',
    donate: 'Faça parte: doe',
    semester: 'Meu primeiro semestre',
    campaign: 'A campanha continua',
    transparency: 'Entenda os custos e como ajudar',
    explore: 'Conheça e acompanhe essa história',
    storyTag: 'O caminho até aqui',
    storyTitle: 'Minha trajetória',
    storyText: 'Os recomeços, a bolsa no Insper, as comunidades e as experiências que me trouxeram até Harvard.',
    storyLink: 'Conheça minha história',
    harvardTag: 'O capítulo atual · 1º semestre',
    harvardTitle: 'Em Harvard',
    harvardText: 'Minhas matérias em Harvard e no MIT, descobertas dentro e fora da sala de aula e o que estou construindo por aqui.',
    harvardLink: 'Acompanhe o semestre',
    photoAlt: 'Maria Carolina Porto segurando uma bandeira vermelha com o nome Harvard.',
  },
  en: {
    tag: 'Harvard College · Visiting Undergraduate Student · 2026/2027',
    headline: 'I’m at Harvard.',
    invitation: 'Be part of the next chapters.',
    intro: 'I started my first semester looking to learn beyond Computer Engineering: new fields, new questions, and different ways of seeing the world.',
    support: 'This story is unfolding with the support of many people. The campaign continues to help cover the costs of this year — and you can be part of it.',
    donate: 'Be part of it: donate',
    semester: 'My first semester',
    campaign: 'The campaign continues',
    transparency: 'Explore the costs and ways to help',
    explore: 'Get to know and follow this story',
    storyTag: 'The journey here',
    storyTitle: 'My story',
    storyText: 'The fresh starts, my scholarship at Insper, the communities, and the experiences that brought me to Harvard.',
    storyLink: 'Get to know my story',
    harvardTag: 'The current chapter · First semester',
    harvardTitle: 'At Harvard',
    harvardText: 'My courses at Harvard and MIT, discoveries inside and outside the classroom, and what I’m building along the way.',
    harvardLink: 'Follow the semester',
    photoAlt: 'Maria Carolina Porto holding a red Harvard flag.',
  },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const progress = useProgress();
  const t = copy[lang];
  const funding = content[lang].funding;
  const raisedValue = progress.loading ? funding.raisedValue : progress.raisedFormatted;
  const goalValue = progress.loading ? funding.goalValue : progress.goalFormatted;
  const progressPercent = progress.loading ? funding.progressPercent : progress.percent;

  return (
    <Page>
      <Hero aria-labelledby="home-title">
        <HeroText>
          <Eyebrow>{t.tag}</Eyebrow>
          <Headline id="home-title">
            {t.headline}
            <span>{t.invitation}</span>
          </Headline>
          <Intro>{t.intro}</Intro>
          <SupportText>{t.support}</SupportText>
          <Actions>
            <DonateButton type="button" onClick={openModal}>
              <Heart size={19} weight="fill" aria-hidden="true" />
              {t.donate}
            </DonateButton>
            <SemesterLink to="/em-harvard">
              {t.semester}
            </SemesterLink>
          </Actions>
        </HeroText>
        <Portrait>
          <img src="/photos/harvard-flag.jpg" alt={t.photoAlt} width="1066" height="1600" fetchPriority="high" />
          <figcaption>Maria Carolina Porto</figcaption>
        </Portrait>
      </Hero>

      <Campaign aria-labelledby="campaign-title">
        <CampaignHeading>
          <h2 id="campaign-title">{t.campaign}</h2>
          <TransparencyLink to="/como-ajudar">
            {t.transparency}
          </TransparencyLink>
        </CampaignHeading>
        <ProgressArea>
          <ProgressNumbers>
            <div><strong>{raisedValue}</strong><span>{funding.raisedLabel}</span></div>
            <div><strong>{goalValue}</strong><span>{funding.goalLabel}</span></div>
          </ProgressNumbers>
          <ProgressTrack
            role="progressbar"
            aria-label={funding.raisedLabel}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progressPercent}
            aria-valuetext={`${raisedValue} / ${goalValue}`}
          >
            <ProgressFill style={{ width: `${progressPercent}%` }} />
          </ProgressTrack>
          <ProgressNote>{funding.progressNote}</ProgressNote>
        </ProgressArea>
      </Campaign>

      <ImpactSection />

      <Supporters>
        <SupportersCard compact />
      </Supporters>

      <Explore aria-labelledby="explore-title">
        <ExploreTitle id="explore-title">{t.explore}</ExploreTitle>
        <CardGrid>
          <ExploreCard to="/minha-trajetoria">
            <CardTag>{t.storyTag}</CardTag>
            <h3>{t.storyTitle}</h3>
            <p>{t.storyText}</p>
            <CardAction>{t.storyLink}</CardAction>
          </ExploreCard>
          <ExploreCard to="/em-harvard" $current>
            <CardTag>{t.harvardTag}</CardTag>
            <h3>{t.harvardTitle}</h3>
            <p>{t.harvardText}</p>
            <CardAction>{t.harvardLink}</CardAction>
          </ExploreCard>
        </CardGrid>
      </Explore>
    </Page>
  );
}

const Page = styled.div`
  padding: 72px 40px 64px;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 60px 20px 40px;
  }
`;

const Hero = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  align-items: center;
  gap: clamp(32px, 5vw, 72px);
  padding: 58px 0 44px;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 34px 0;
  }
`;

const HeroText = styled.div`
  min-width: 0;
`;

const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Headline = styled.h1`
  font-size: clamp(36px, 4vw, 56px);
  line-height: 1.12;
  font-weight: 600;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.colors.darkText};
  span {
    display: block;
    color: ${({ theme }) => theme.colors.harvardCrimson};
    margin-top: 8px;
  }
  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    font-size: 36px;
    letter-spacing: -1.3px;
  }
`;

const Intro = styled.p`
  margin-top: 24px;
  font-size: 16px;
  line-height: 1.8;
  max-width: 600px;
`;

const SupportText = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 14px;
  line-height: 1.8;
  max-width: 570px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px 22px;
  flex-wrap: wrap;
  margin-top: 26px;
`;

const DonateButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 23px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  transition: background 0.2s;
  &:hover { background: ${({ theme }) => theme.colors.harvardDarkCrimson}; }
`;

const SemesterLink = styled(Link)`
  ${secondaryAction}
`;

const Portrait = styled.figure`
  position: relative;
  align-self: center;
  width: 100%;
  aspect-ratio: 1 / 1.1;
  min-height: 380px;
  max-height: 500px;
  border-radius: 16px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.border};
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 75%;
  }
  figcaption {
    position: absolute;
    inset: auto 0 0;
    padding: 44px 24px 20px;
    color: white;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.55));
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    max-width: 440px;
    aspect-ratio: 1;
    min-height: 0;
    justify-self: center;
  }
`;

const Campaign = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 28px 32px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  display: grid;
  grid-template-columns: 0.95fr 1.3fr;
  align-items: center;
  gap: 36px;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 24px 20px;
  }
`;

const CampaignHeading = styled.div`
  h2 { font-size: 21px; font-weight: 650; margin-bottom: 8px; }
`;

const TransparencyLink = styled(Link)`
  ${secondaryAction}
  font-size: 13px;
`;

const ProgressArea = styled.div`
  min-width: 0;
`;

const ProgressNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  strong { display: block; font-size: 20px; font-weight: 700; }
  span { display: block; font-size: 11px; color: ${({ theme }) => theme.colors.mutedText}; }
  div:last-child { text-align: right; }
  @media (max-width: 360px) { strong { font-size: 17px; } }
`;

const ProgressTrack = styled.div`
  height: 7px;
  border-radius: 6px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.softGray};
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  transition: width 0.7s ease;
`;

const ProgressNote = styled.p`
  margin-top: 7px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const Explore = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 40px auto 0;
`;

const Supporters = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 28px auto 0;
`;

const ExploreTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { grid-template-columns: 1fr; }
`;

const ExploreCard = styled(Link)<{ $current?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 28px 30px;
  border-radius: 12px;
  border: 1px solid ${({ theme, $current }) => $current ? theme.colors.harvardCrimson : theme.colors.border};
  background: ${({ theme, $current }) => $current ? theme.colors.harvardCrimson : theme.colors.white};
  color: ${({ theme, $current }) => $current ? theme.colors.white : theme.colors.darkText};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  h3 { margin-top: 10px; font-size: 29px; font-weight: 600; }
  p { margin: 12px 0 22px; font-size: 14px; line-height: 1.75; opacity: 0.8; max-width: 460px; }
  &:hover { transform: translateY(-3px); box-shadow: 0 8px 22px rgba(91, 15, 27, 0.08); }
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { padding: 24px; }
`;

const CardTag = styled.span`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  opacity: 0.75;
`;

const CardAction = styled.span`
  ${secondaryAction}
  align-self: flex-start;
  margin-top: auto;
  ${ExploreCard}:hover & { background: #F8E9EB; }
`;
