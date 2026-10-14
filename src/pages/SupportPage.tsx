import styled from 'styled-components';
import { Heart } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import DonateSection from '../components/DonateSection';
import FundingGoalSection from '../components/FundingGoalSection';
import FAQSection from '../components/FAQSection';
import UpdatesSection from '../components/UpdatesSection';

export default function SupportPage() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  return <>
    <Header>
      <Inner>
        <Eyebrow>{lang === 'pt' ? 'A campanha continua' : 'The campaign continues'}</Eyebrow>
        <h1>{lang === 'pt' ? 'Faça parte dos próximos capítulos.' : 'Be part of the next chapters.'}</h1>
        <p>{lang === 'pt'
          ? 'Já estou em Harvard, vivendo essa oportunidade com o apoio de muita gente. A arrecadação continua para ajudar a cobrir os custos do ano. Cada contribuição e cada compartilhamento fazem diferença.'
          : 'I am already at Harvard, experiencing this opportunity with the support of so many people. Fundraising continues to help cover the costs of the year. Every contribution and every share makes a difference.'}</p>
        <Button onClick={openModal}><Heart size={18} weight="fill" />{lang === 'pt' ? 'Doe Agora' : 'Donate Now'}</Button>
        <BudgetLink href="#funding">{lang === 'pt' ? 'Conheça o orçamento ↓' : 'Explore the budget ↓'}</BudgetLink>
      </Inner>
    </Header>
    <DonateSection />
    <FundingGoalSection />
    <FAQSection />
    <UpdatesSection />
  </>;
}
const Header = styled.header`
  padding: 132px 40px 60px; background: ${({ theme }) => theme.colors.deepWine}; color: white;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { padding: 100px 20px 40px; }
`;
const Inner = styled.div`
  max-width: 1120px; margin: auto;
  h1 { font-size: clamp(32px, 4.5vw, 54px); max-width: 740px; letter-spacing: -1.5px; }
  p { max-width: 630px; margin: 22px 0 28px; color: #f1dfe1; }
`;
const Eyebrow = styled.div`text-transform: uppercase; letter-spacing: 2px; font-size: 11px; font-weight: 700; color: ${({ theme }) => theme.colors.goldAccent}; margin-bottom: 16px;`;
const Button = styled.button`display: inline-flex; align-items: center; gap: 8px; padding: 14px 25px; background: white; color: ${({ theme }) => theme.colors.deepWine}; font-weight: 700; font-size: 14px; border-radius: 8px;`;
const BudgetLink = styled.a`display: inline-block; padding: 14px 0; margin-left: 22px; font-size: 13px; text-decoration: underline; text-underline-offset: 4px;`;
