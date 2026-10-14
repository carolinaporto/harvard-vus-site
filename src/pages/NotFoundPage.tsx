import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { lang } = useLanguage();
  return <Section>
    <p>404</p>
    <h1>{lang === 'pt' ? 'Essa página não foi encontrada.' : 'This page could not be found.'}</h1>
    <Link to="/">{lang === 'pt' ? 'Voltar para o início →' : 'Back to home →'}</Link>
  </Section>;
}
const Section = styled.section`
  padding: 160px 24px 100px; min-height: 65vh; text-align: center;
  p, a { color: ${({ theme }) => theme.colors.harvardCrimson}; font-weight: 700; }
  h1 { font-size: clamp(28px, 4vw, 44px); margin: 16px auto 28px; }
`;
