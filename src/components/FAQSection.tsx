import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function FAQSection() {
  const { lang } = useLanguage();
  const t = content[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <Section id="faq">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <Tag>{t.tag}</Tag>
          <Title>{t.title}</Title>
        </motion.div>

        <FAQList>
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <FAQItem $open={openIndex === i}>
                <FAQQuestion onClick={() => toggle(i)}>
                  <QuestionText>{item.question}</QuestionText>
                  <IconWrapper $open={openIndex === i}>
                    {openIndex === i ? (
                      <Minus size={18} weight="bold" />
                    ) : (
                      <Plus size={18} weight="bold" />
                    )}
                  </IconWrapper>
                </FAQQuestion>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <FAQAnswer>{item.answer}</FAQAnswer>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FAQItem>
            </motion.div>
          ))}
        </FAQList>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BottomCTA>
            <BottomCTAText>
              {lang === 'pt'
                ? 'Ainda tem dúvidas? Fale comigo diretamente.'
                : 'Still have questions? Reach out directly.'}
            </BottomCTAText>
            <BottomCTABtn href="mailto:carolporto04@gmail.com">
              {lang === 'pt' ? 'Entrar em contato →' : 'Get in touch →'}
            </BottomCTABtn>
          </BottomCTA>
        </motion.div>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.softGray};
  padding: 96px 40px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 64px 20px;
  }
`;

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
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
  font-size: clamp(28px, 4vw, 44px);
  color: ${({ theme }) => theme.colors.darkText};
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FAQItem = styled.div<{ $open: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  border: 1px solid
    ${({ $open, theme }) => ($open ? theme.colors.harvardCrimson + '44' : theme.colors.border)};
  overflow: hidden;
  transition: border-color 0.25s ease;
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.warmOffWhite};
  }
`;

const QuestionText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.4;
`;

const IconWrapper = styled.div<{ $open: boolean }>`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $open, theme }) =>
    $open ? theme.colors.harvardCrimson : theme.colors.softGray};
  color: ${({ $open, theme }) => ($open ? theme.colors.white : theme.colors.mutedText)};
  transition: background 0.25s ease, color 0.25s ease;
`;

const FAQAnswer = styled.p`
  padding: 0 24px 20px;
  font-size: 15px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const BottomCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const BottomCTAText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};
`;

const BottomCTABtn = styled.a`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
