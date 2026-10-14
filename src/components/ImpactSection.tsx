import styled from 'styled-components';
import { BookOpen, UsersThree, Star } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

const icons = [BookOpen, UsersThree, Star];

const copy = {
  pt: {
    title: 'O que seu apoio pode multiplicar',
    items: [
      {
        title: 'Conhecimento para o Brasil',
        body: 'Levar o que aprendo para criar IA conectada à realidade brasileira.',
      },
      {
        title: 'Comunidades que abrem portas',
        body: 'Criar espaços de troca e oportunidades, como fiz com a Insper AI.',
      },
      {
        title: 'Uma referência possível',
        body: 'Mostrar a outros bolsistas que esses espaços também podem ser deles.',
      },
    ],
  },
  en: {
    title: 'What your support can make possible',
    items: [
      {
        title: 'Knowledge for Brazil',
        body: 'Bring what I learn to building AI that reflects Brazil’s realities.',
      },
      {
        title: 'Communities that open doors',
        body: 'Create spaces for shared learning and opportunity, as I did with Insper AI.',
      },
      {
        title: 'A path others can see',
        body: 'Show other scholarship students that these spaces can be theirs, too.',
      },
    ],
  },
};

export default function ImpactSection() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <Section aria-labelledby="impact-title">
      <Title id="impact-title">{t.title}</Title>
      <Reasons>
        {t.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reason key={item.title}>
              <Icon size={22} weight="duotone" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reason>
          );
        })}
      </Reasons>
    </Section>
  );
}

const Section = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 28px auto 0;
  padding: 8px 0;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 18px;
`;

const Reasons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const Reason = styled.li`
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    padding-left: 20px;
  }

  svg { flex-shrink: 0; color: ${({ theme }) => theme.colors.harvardCrimson}; }
  h3 { font-size: 14px; font-weight: 650; line-height: 1.4; margin-bottom: 5px; }
  p { font-size: 13px; line-height: 1.65; color: ${({ theme }) => theme.colors.mutedText}; }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    & + & {
      border-left: 0;
      padding-left: 0;
      border-top: 1px solid ${({ theme }) => theme.colors.border};
      padding-top: 14px;
    }
  }
`;
