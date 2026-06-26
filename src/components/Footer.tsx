import styled from 'styled-components';
import { Envelope, Heart } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang].footer;

  return (
    <FooterEl>
      <Container>
        <Top>
          <Brand>
            <BrandName>{t.name}</BrandName>
            <BrandTagline>{t.tagline}</BrandTagline>
          </Brand>
          <Links>
            <FooterLink href={`mailto:${t.email}`}>
              <Envelope size={18} />
              {t.email}
            </FooterLink>
          </Links>
          <DonateBtn href="#donate">
            <Heart size={16} weight="fill" />
            {lang === 'pt' ? 'Doe Agora' : 'Donate Now'}
          </DonateBtn>
        </Top>

        <Divider />

        <Bottom>
          <Copyright>{t.copyright}</Copyright>
          <MadeWith>
            {t.madeWith}
          </MadeWith>
        </Bottom>
      </Container>
    </FooterEl>
  );
}

const FooterEl = styled.footer`
  background: ${({ theme }) => theme.colors.darkText};
  padding: 56px 40px 32px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 48px 20px 24px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BrandName = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const BrandTagline = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
  max-width: 320px;
  line-height: 1.5;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const DonateBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;
  height: fit-content;

  &:hover {
    background: ${({ theme }) => theme.colors.harvardDarkCrimson};
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
`;

const MadeWith = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  gap: 6px;
`;
