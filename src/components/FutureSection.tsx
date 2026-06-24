import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function FutureSection() {
  const { lang } = useLanguage();
  const t = content[lang].future;

  return (
    <Section id="future">
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
          <ItemsList>
            {t.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <ListItem>
                  <CheckCircle size={20} weight="fill" color="#D6A756" />
                  <span>{item}</span>
                </ListItem>
              </motion.div>
            ))}
          </ItemsList>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <CalloutBox>
              <CalloutQuote>"{t.closing}"</CalloutQuote>
              <CalloutDivider />
              <DonateBtn href="#donate">
                {lang === 'pt' ? 'Faça parte dessa história' : 'Be part of this story'}
                <ArrowRight size={18} />
              </DonateBtn>
            </CalloutBox>
          </motion.div>
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.deepWine};
  padding: 96px 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 64px 20px;
  }
`;

const Container = styled.div`
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
  color: rgba(255, 255, 255, 0.65);
  max-width: 540px;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 64px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: background 0.2s ease;

  svg {
    flex-shrink: 0;
    margin-top: 1px;
  }

  span {
    font-size: 16px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.88);
    font-weight: 500;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CalloutBox = styled.div`
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const CalloutQuote = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(18px, 2vw, 22px);
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
`;

const CalloutDivider = styled.div`
  width: 48px;
  height: 2px;
  background: ${({ theme }) => theme.colors.goldAccent};
  border-radius: 2px;
`;

const DonateBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.colors.goldAccent};
  color: ${({ theme }) => theme.colors.deepWine};
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(214, 167, 86, 0.35);
  }
`;
