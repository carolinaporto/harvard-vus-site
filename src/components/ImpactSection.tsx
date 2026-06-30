import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BookOpen, UsersThree, Star } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';

const icons: ReactNode[] = [
  <BookOpen size={26} weight="duotone" />,
  <UsersThree size={26} weight="duotone" />,
  <Star size={26} weight="duotone" />,
];

const cards = {
  pt: [
    {
      title: 'Conhecimento que volta',
      body: 'Quero voltar com repertório para construir IA que funcione para o Brasil de verdade — um país continental que os sistemas feitos lá fora não enxergam direito.',
    },
    {
      title: 'Comunidades que abrem portas',
      body: 'A Insper AI me mostrou que, quando uma oportunidade não existe, alguém pode começar a construí-la.',
    },
    {
      title: 'Uma referência possível',
      body: 'Quero que outros estudantes bolsistas olhem para essa trajetória e sintam que esses espaços também podem ser deles.',
    },
  ],
  en: [
    {
      title: 'Knowledge that comes back',
      body: 'I want to come back with the repertoire to build AI that actually works for Brazil — a continental country that systems built elsewhere rarely see clearly.',
    },
    {
      title: 'Communities that open doors',
      body: 'Insper AI showed me that when an opportunity does not exist, someone can start building it.',
    },
    {
      title: 'A possible reference',
      body: 'I want other scholarship students to look at this path and feel that these spaces can belong to them too.',
    },
  ],
};

const copy = {
  pt: {
    tag: 'Por que apoiar',
    title: 'O que essa oportunidade pode multiplicar',
    subtitle:
      'Harvard não é só um lugar onde eu vou aprender. É um lugar de onde eu quero voltar com mais repertório, mais coragem e mais capacidade de construir para outras pessoas.',
    closing:
      'Apoiar essa campanha não é financiar um ano isolado. É ajudar a transformar o que esse ano pode virar depois.',
  },
  en: {
    tag: 'Why support',
    title: 'What this opportunity can multiply',
    subtitle:
      'Harvard is not only a place where I will learn. It is a place I want to return from with more perspective, more courage, and more ability to build for others.',
    closing:
      'Supporting this campaign is not funding one isolated year. It is helping transform what this year can become afterward.',
  },
};

export default function ImpactSection() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const cardList = cards[lang];

  return (
    <Section>
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

        <Grid>
          {cardList.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: 'easeOut' }}
            >
              <Card>
                <CardIcon>{icons[i]}</CardIcon>
                <CardTitle>{card.title}</CardTitle>
                <CardBody>{card.body}</CardBody>
              </Card>
            </motion.div>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Closing>{t.closing}</Closing>
        </motion.div>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.warmOffWhite};
  padding: 80px 40px 64px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 56px 20px 48px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 36px;
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
  font-size: clamp(24px, 3vw, 38px);
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: clamp(14px, 1.3vw, 16px);
  color: ${({ theme }) => theme.colors.mutedText};
  max-width: 560px;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 24px 22px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const CardIcon = styled.div`
  color: ${({ theme }) => theme.colors.harvardCrimson};
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.3;
`;

const CardBody = styled.p`
  font-size: 14.5px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const Closing = styled.p`
  font-size: clamp(16px, 1.8vw, 20px);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.6;
  max-width: 680px;
  padding-top: 8px;
  border-top: 2px solid ${({ theme }) => theme.colors.harvardCrimson}33;
`;
