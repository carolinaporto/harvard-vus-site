import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BellSimple, Envelope } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

const FORM_URL = 'https://forms.gle/BSUTjV3jNPLShbpx8';

export default function UpdatesSection() {
  const { lang } = useLanguage();

  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Inner>
            <TextSide>
              <IconRing>
                <BellSimple size={22} weight="fill" />
              </IconRing>
              <TextBody>
                <Headline>
                  {lang === 'pt'
                    ? 'Acompanhe minha jornada em Harvard.'
                    : 'Follow my journey at Harvard.'}
                </Headline>
                <Description>
                  {lang === 'pt'
                    ? 'Inscreva-se para receber atualizações trimestrais com fotos, relatos e novidades de Cambridge.'
                    : 'Sign up to receive quarterly updates with photos, stories, and news from Cambridge.'}
                </Description>
              </TextBody>
            </TextSide>

            <CtaSide>
              <CtaBtn href={FORM_URL} target="_blank" rel="noopener noreferrer">
                <Envelope size={17} weight="fill" />
                {lang === 'pt' ? 'Inscrever-me para receber atualizações' : 'Sign up for updates'}
              </CtaBtn>
            </CtaSide>
          </Inner>
        </motion.div>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.warmOffWhite};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 48px 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 40px 20px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }
`;

const TextSide = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
`;

const IconRing = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

const TextBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Headline = styled.p`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.mutedText};
  max-width: 480px;
`;

const CtaSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    align-items: flex-start;
  }
`;

const CtaBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 24px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.harvardDarkCrimson};
    transform: translateY(-1px);
  }
`;

const CtaNote = styled.p`
  font-size: 11.5px;
  color: ${({ theme }) => theme.colors.mutedText};
  opacity: 0.7;
`;
