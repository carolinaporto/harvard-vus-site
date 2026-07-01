import styled from 'styled-components';
import { BellSimple } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

const FORM_URL = 'https://forms.gle/BSUTjV3jNPLShbpx8';

export default function UpdatesSection() {
  const { lang } = useLanguage();

  return (
    <Section>
      <Inner>
        <Text>
          <strong>
            {lang === 'pt'
              ? 'Quer acompanhar minha jornada em Harvard?'
              : 'Want to follow my journey at Harvard?'}
          </strong>{' '}
          {lang === 'pt'
            ? 'Pretendo enviar atualizações trimestrais — fotos, relatos e novidades de Cambridge. Deixe seu contato se quiser receber.'
            : "I plan to send quarterly updates — photos, stories, and news from Cambridge. Leave your contact if you'd like to follow along."}
        </Text>
        <Btn href={FORM_URL} target="_blank" rel="noopener noreferrer">
          <BellSimple size={16} weight="fill" />
          {lang === 'pt' ? 'Quero receber atualizações' : 'Keep me updated'}
        </Btn>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.deepWine};
  padding: 36px 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 32px 20px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
  max-width: 600px;

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
  }
`;

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.deepWine};
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
