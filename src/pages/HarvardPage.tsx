import { secondaryAction } from '../styles/actions';
import styled from 'styled-components';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CaretDown,
  ChatCircleText,
  Code,
  GraduationCap,
  UsersThree,
} from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { harvardContent } from '../data/harvard';

const communityIcons = {
  tech: Code,
  mentoring: GraduationCap,
  people: UsersThree,
  beyond: ChatCircleText,
};

export default function HarvardPage() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const t = harvardContent[lang];

  return (
    <Page>
      <Intro>
        <Container>
          <IntroMeta>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <Semester>{t.semester}</Semester>
          </IntroMeta>
          <IntroGrid>
            <div>
              <Title>{t.title}<span>{t.titleAccent}</span></Title>
              <IntroText>{t.intro}</IntroText>
              <JumpLinks aria-label={lang === 'pt' ? 'Neste semestre' : 'This semester'}>
                <a href="#materias">{t.courseLink}<ArrowDown size={16} aria-hidden="true" /></a>
                <a href="#alem-da-sala">{t.lifeLink}<ArrowDown size={16} aria-hidden="true" /></a>
              </JumpLinks>
            </div>
            <IntroPhoto>
              <IntroPhotoFrame>
                <img src="/photos/harvard-autumn.jpg" alt={t.heroPhotoAlt} width="1200" height="1600" fetchPriority="high" />
                <PhotoStatement>
                  {t.photoStatement}{' '}
                  <span>{t.photoStatementAccent}</span>
                </PhotoStatement>
              </IntroPhotoFrame>
              <figcaption>{t.location}</figcaption>
            </IntroPhoto>
          </IntroGrid>
        </Container>
      </Intro>

      <Section id="materias" aria-labelledby="courses-title">
        <Container>
          <SectionHeading>
            <Eyebrow>{t.coursesLabel}</Eyebrow>
            <SectionTitle id="courses-title">{t.coursesTitle}</SectionTitle>
            <SectionIntro>{t.coursesIntro}</SectionIntro>
          </SectionHeading>
          <CourseGrid>
            {t.courses.map((course, index) => (
              <CourseCard key={course.id} aria-labelledby={`course-${course.id}`}>
                <CourseHeader>
                  <CourseMeta>
                    <Institution>{course.institution}</Institution>
                    <CourseNumber aria-hidden="true">0{index + 1}</CourseNumber>
                  </CourseMeta>
                  <CourseTitle id={`course-${course.id}`}>{course.title}</CourseTitle>
                  {course.subtitle && <CourseSubtitle>{course.subtitle}</CourseSubtitle>}
                </CourseHeader>
                <CourseNotes>
                  <div><dt>{t.reasonLabel}</dt><dd>{course.reason}</dd></div>
                  <div><dt>{t.reflectionLabel}</dt><dd>{course.learning}</dd></div>
                </CourseNotes>
                <CourseDetails>
                  <summary>{t.sourceLabel}<CaretDown size={14} aria-hidden="true" /></summary>
                  <CourseDetailsBody>
                    <p>{course.code}</p>
                    <p>{t.facultyLabel} {course.faculty}</p>
                    <SourceLink href={course.source} target="_blank" rel="noopener noreferrer" aria-label={`${lang === 'pt' ? 'Página oficial' : 'Official course page'}: ${course.title} (${lang === 'pt' ? 'nova aba' : 'new tab'})`}>
                      {lang === 'pt' ? 'Página oficial' : 'Official course page'}<ArrowUpRight size={14} aria-hidden="true" />
                    </SourceLink>
                  </CourseDetailsBody>
                </CourseDetails>
              </CourseCard>
            ))}
          </CourseGrid>
        </Container>
      </Section>

      <LifeSection id="alem-da-sala" aria-labelledby="life-title">
        <Container>
          <LifeHeading>
            <Eyebrow>{t.lifeLabel}</Eyebrow>
            <SectionTitle id="life-title">{t.lifeTitle}</SectionTitle>
            <SectionIntro>{t.lifeIntro}</SectionIntro>
          </LifeHeading>
          <BrasilFeature aria-labelledby="brasil-project-title">
            <BrasilText>
              <BrasilRole>{t.brazil.role}</BrasilRole>
              <BrasilTitle id="brasil-project-title">{t.brazil.title}</BrasilTitle>
            </BrasilText>
            <BrasilBody>{t.brazil.body}</BrasilBody>
          </BrasilFeature>
          <CommunityGrid>
            {t.communityGroups.map(group => {
              const Icon = communityIcons[group.id];
              return (
                <CommunityGroup key={group.id} aria-labelledby={`community-${group.id}`}>
                  <CommunityHeader>
                    <Icon size={20} weight="duotone" aria-hidden="true" />
                    <h3 id={`community-${group.id}`}>{group.title}</h3>
                  </CommunityHeader>
                  <CommunityBody>
                    {group.body.split('**').map((part, index) =>
                      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                    )}
                  </CommunityBody>
                </CommunityGroup>
              );
            })}
          </CommunityGrid>
          <CommunityGallery aria-label={t.communityPhotosLabel}>
            <CommunityPhotos>
              {t.communityPhotos.map(photo => (
                <CommunityPhoto key={photo.src}>
                  <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
                  <figcaption>{photo.caption}</figcaption>
                </CommunityPhoto>
              ))}
            </CommunityPhotos>
          </CommunityGallery>
        </Container>
      </LifeSection>

      <SupportSection>
        <SupportContainer>
          <div>
            <SupportLabel>{t.supportLabel}</SupportLabel>
            <SupportTitle>{t.supportTitle}</SupportTitle>
            <SupportBody>{t.supportBody}</SupportBody>
          </div>
          <DonateButton type="button" onClick={openModal}>
            {t.supportButton}<ArrowRight size={19} aria-hidden="true" />
          </DonateButton>
        </SupportContainer>
      </SupportSection>
    </Page>
  );
}

const Page = styled.div`
  padding-top: 72px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding-top: 60px;
  }

  a:focus-visible, button:focus-visible, summary:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.goldAccent};
    outline-offset: 5px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Intro = styled.header`
  padding: 40px 40px 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 28px 20px 32px;
  }
`;

const IntroMeta = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }
`;

const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 1.7px;
  text-transform: uppercase;
`;

const Semester = styled.p`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  padding: 5px 13px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mutedText};
  white-space: nowrap;
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 18px;

  span {
    display: block;
    color: ${({ theme }) => theme.colors.harvardCrimson};
    font-weight: 600;
  }
`;

const IntroText = styled.p`
  max-width: 640px;
  font-size: 16px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const JumpLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
  a { ${secondaryAction} font-size: 13px; }
`;

const IntroPhoto = styled.figure`
  margin: 0;
  width: 100%;
  max-width: 430px;
  justify-self: end;

  figcaption {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 11px;
    letter-spacing: 0.3px;
  }

  @media (max-width: 850px) {
    justify-self: center;
  }
`;

const IntroPhotoFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 45%, rgba(36, 12, 17, 0.12) 60%, rgba(36, 12, 17, 0.8) 82%, rgba(36, 12, 17, 0.97) 100%);
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 56%;
    transform: scale(1.4);
    transform-origin: center;
  }
`;

const PhotoStatement = styled.p`
  position: absolute;
  z-index: 1;
  inset: auto 22px 18px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.3px;
  text-wrap: balance;

  &::before {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    background: ${({ theme }) => theme.colors.goldAccent};
    margin-bottom: 8px;
  }

  span {
    display: block;
    margin-top: 4px;
    color: #f4d5ba;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    inset: auto 16px 16px;
    font-size: clamp(16px, 4.5vw, 20px);
  }
`;

const Section = styled.section`
  padding: 64px 40px;
  scroll-margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 48px 20px;
    scroll-margin-top: 82px;
  }
`;

const SectionHeading = styled.div`
  max-width: 730px;
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const SectionIntro = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 15px;
  line-height: 1.8;
  margin-top: 16px;
  max-width: 650px;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled.article`
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.white};
`;

const CourseHeader = styled.div`
  padding: 22px 22px 16px;
  min-height: 150px;

  @media (max-width: 960px) { min-height: 0; }
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const CourseNumber = styled.span`
  color: ${({ theme }) => theme.colors.border};
  font-size: 16px;
  font-weight: 600;
`;

const Institution = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.harvardCrimson};
`;

const CourseTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: 22px;
  line-height: 1.25;
  letter-spacing: -0.3px;
`;

const CourseSubtitle = styled.p`
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const CourseNotes = styled.dl`
  padding: 0 22px 20px;
  display: grid;
  gap: 16px;

  dt {
    font-size: 11px;
    font-weight: 750;
    color: ${({ theme }) => theme.colors.harvardCrimson};
    margin-bottom: 5px;
  }

  dd {
    margin: 0;
    font-size: 13px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.mutedText};
  }
`;

const Body = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const CourseDetails = styled.details`
  margin: 0 22px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  summary {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    list-style: none;
    padding: 12px 0;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 11px;
  }

  summary::-webkit-details-marker { display: none; }
  summary:hover { color: ${({ theme }) => theme.colors.harvardCrimson}; }
  summary svg { flex-shrink: 0; transition: transform 0.2s ease; }
  &[open] summary svg { transform: rotate(180deg); }
`;

const CourseDetailsBody = styled.div`
  padding-bottom: 16px;
  display: grid;
  gap: 6px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 11px;
  line-height: 1.6;
`;

const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  text-decoration: underline;
  text-underline-offset: 3px;
`;

const LifeSection = styled(Section)`
  padding-top: 44px;
  padding-bottom: 36px;
  background:
    radial-gradient(ellipse at 100% 100%, rgba(214, 167, 86, 0.13), transparent 55%),
    linear-gradient(135deg, #FFFCF8, #F7F0E7);
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding-top: 32px;
    padding-bottom: 28px;
  }
`;

const LifeHeading = styled(SectionHeading)`
  max-width: none;
  margin-bottom: 20px;

  h2 { font-size: clamp(26px, 2.8vw, 32px); }
  > p:last-child { font-size: 14px; line-height: 1.6; margin-top: 10px; max-width: 780px; }
`;

const BrasilFeature = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.3fr);
  gap: 24px;
  align-items: center;
  padding: 20px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.deepWine};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 18px;
  }
`;

const BrasilText = styled.div`
  min-width: 0;
`;

const BrasilTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.6px;
  line-height: 1.2;
  margin-top: 6px;
`;

const BrasilRole = styled.p`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.goldAccent};
`;

const BrasilBody = styled.p`
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const CommunityGroup = styled.article`
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
`;

const CommunityHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  svg { color: ${({ theme }) => theme.colors.harvardCrimson}; flex-shrink: 0; }
  h3 { font-size: 16px; font-weight: 650; line-height: 1.3; }
`;

const CommunityBody = styled(Body)`
  strong {
    color: ${({ theme }) => theme.colors.deepWine};
    font-weight: 650;
  }
`;

const CommunityGallery = styled.div`
  margin-top: 20px;
`;

const CommunityPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CommunityPhoto = styled.figure`
  margin: 0;
  min-width: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 12px;
  }

  figcaption {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 12px;
    line-height: 1.6;
  }
`;

const SupportSection = styled.section`
  padding: 56px 40px;
  background: ${({ theme }) => theme.colors.deepWine};
  color: white;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 40px 20px;
  }
`;

const SupportContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }
`;

const SupportLabel = styled.p`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const SupportTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: clamp(27px, 3vw, 37px);
  line-height: 1.25;
  max-width: 680px;
`;

const SupportBody = styled.p`
  font-size: 14px;
  line-height: 1.85;
  margin-top: 18px;
  color: rgba(255,255,255,0.8);
  max-width: 660px;
`;

const DonateButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-shrink: 0;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.warmOffWhite};
  color: ${({ theme }) => theme.colors.deepWine};
  border-radius: 7px;
  font-size: 14px;
  font-weight: 700;
  transition: background 0.2s ease;

  &:hover { background: ${({ theme }) => theme.colors.white}; }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    width: 100%;
  }
`;
