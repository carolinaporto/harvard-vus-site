import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Envelope, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === 'pt'
        ? `Mensagem de ${name}: Campanha Harvard Carol Porto`
        : `Message from ${name}: Carol Porto Harvard Campaign`
    );
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:carolporto04@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact">
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
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <LinksCol>
              <ContactLink href={`mailto:${t.emailValue}`}>
                <LinkIconWrapper>
                  <Envelope size={22} weight="duotone" />
                </LinkIconWrapper>
                <div>
                  <LinkLabel>{t.emailLabel}</LinkLabel>
                  <LinkValue>{t.emailValue}</LinkValue>
                </div>
              </ContactLink>

              <ContactLink
                href={
                  t.linkedinValue.startsWith('TODO')
                    ? '#contact'
                    : t.linkedinValue
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIconWrapper>
                  <LinkedinLogo size={22} weight="duotone" />
                </LinkIconWrapper>
                <div>
                  <LinkLabel>{t.linkedinLabel}</LinkLabel>
                  <LinkValue>{t.linkedinValue}</LinkValue>
                </div>
              </ContactLink>

              <Divider />

              <QuoteBox>
                <QuoteText>
                  {lang === 'pt'
                    ? '"Para doações institucionais, parcerias ou conversas sobre como apoiar, estou disponível e será uma alegria conversar."'
                    : '"For institutional donations, partnerships, or conversations about how to support, I am available and would love to talk."'}
                </QuoteText>
                <QuoteAuthor>Maria Carolina Porto</QuoteAuthor>
              </QuoteBox>
            </LinksCol>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <Form onSubmit={handleSubmit}>
              <FieldGroup>
                <Label htmlFor="contact-name">{t.formName}</Label>
                <Input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Maria Silva"
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="contact-email">{t.formEmail}</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="maria@email.com"
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="contact-message">{t.formMessage}</Label>
                <Textarea
                  id="contact-message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={t.formMessagePlaceholder}
                  rows={5}
                  required
                />
              </FieldGroup>

              <FormNote>{t.formNote}</FormNote>

              <SubmitBtn type="submit">
                <PaperPlaneTilt size={18} weight="fill" />
                {t.formSubmit}
              </SubmitBtn>
            </Form>
          </motion.div>
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.warmOffWhite};
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
  color: ${({ theme }) => theme.colors.harvardCrimson};
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(28px, 4vw, 46px);
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: clamp(15px, 1.5vw, 17px);
  color: ${({ theme }) => theme.colors.mutedText};
  max-width: 540px;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const LinksCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
`;

const LinkIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.warmOffWhite};
  color: ${({ theme }) => theme.colors.harvardCrimson};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const LinkLabel = styled.p`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-bottom: 2px;
`;

const LinkValue = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
  word-break: break-all;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;

const QuoteBox = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const QuoteText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;

const QuoteAuthor = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 36px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    padding: 24px 20px;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.darkText};
  background: ${({ theme }) => theme.colors.white};
  transition: border-color 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText};
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.darkText};
  background: ${({ theme }) => theme.colors.white};
  resize: vertical;
  transition: border-color 0.2s ease;
  outline: none;
  line-height: 1.6;

  &:focus {
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText};
  }
`;

const FormNote = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-style: italic;
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  width: fit-content;

  &:hover {
    background: ${({ theme }) => theme.colors.harvardDarkCrimson};
    transform: translateY(-1px);
  }
`;
