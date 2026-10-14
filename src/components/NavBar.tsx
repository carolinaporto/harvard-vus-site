import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { List, X } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { content } from '../data/content';

export default function NavBar() {
  const { lang, toggle } = useLanguage();
  const { openModal } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: '/', label: lang === 'pt' ? 'Início' : 'Home' },
    { to: '/minha-trajetoria', label: lang === 'pt' ? 'Minha trajetória' : 'My journey' },
    { to: '/em-harvard', label: lang === 'pt' ? 'Em Harvard' : 'At Harvard' },
    { to: '/como-ajudar', label: lang === 'pt' ? 'Como ajudar' : 'How to help' },
  ];
  return (
    <Nav aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'} onKeyDown={event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    }}>
      <SkipLink href="#main-content">{lang === 'pt' ? 'Ir para o conteúdo' : 'Skip to content'}</SkipLink>
      <Inner>
        <Logo to="/" aria-label={lang === 'pt' ? 'Carol Porto (início)' : 'Carol Porto (home)'}>Carol Porto<span>HARVARD VUS · 26/27</span></Logo>
        <DesktopLinks>
          {links.map(link => <PageLink key={link.to} to={link.to} end>{link.label}</PageLink>)}
        </DesktopLinks>
        <Actions>
          <LanguageButton onClick={toggle} aria-label={lang === 'pt' ? 'Read in English' : 'Ler em português'}>{content[lang].lang.toggle}</LanguageButton>
          <DonateButton onClick={openModal}>{content[lang].nav.donateBtn}</DonateButton>
          <MenuButton id="menu-toggle" aria-label={lang === 'pt' ? (menuOpen ? 'Fechar menu' : 'Abrir menu') : (menuOpen ? 'Close menu' : 'Open menu')}
            aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </MenuButton>
        </Actions>
      </Inner>
      {menuOpen && <MobileLinks id="mobile-navigation">
        {links.map(link => <PageLink key={link.to} to={link.to} end onClick={() => setMenuOpen(false)}>{link.label}</PageLink>)}
      </MobileLinks>}
    </Nav>
  );
}
const Nav = styled.nav`
  position: fixed; inset: 0 0 auto; z-index: 100;
  background: rgba(255, 248, 242, 0.97);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(16px);
`;
const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}; margin: auto; padding: 0 40px;
  height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px;
  @media (max-width: 900px) { padding: 0 20px; gap: 12px; }
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { height: 60px; }
`;
const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.deepWine}; font-size: 20px; font-weight: 800; line-height: 1.15;
  letter-spacing: -0.6px; flex-shrink: 0;
  span { display: block; font-size: 8px; font-weight: 600; letter-spacing: 1.6px; margin-top: 5px; }
  @media (max-width: 380px) { font-size: 17px; span { font-size: 7px; letter-spacing: 1px; } }
`;
const DesktopLinks = styled.div`
  display: flex; align-items: center; gap: 24px;
  @media (max-width: 1000px) { gap: 16px; }
  @media (max-width: 900px) { display: none; }
`;
const PageLink = styled(NavLink)`
  font-size: 13px; font-weight: 600; color: ${({ theme }) => theme.colors.mutedText};
  padding: 8px 0; border-bottom: 2px solid transparent; white-space: nowrap;
  &:hover, &[aria-current='page'] { color: ${({ theme }) => theme.colors.harvardCrimson}; }
  &[aria-current='page'] { border-bottom-color: ${({ theme }) => theme.colors.harvardCrimson}; }
`;
const Actions = styled.div`display: flex; align-items: center; gap: 12px; @media (max-width: 380px) { gap: 7px; }`;
const LanguageButton = styled.button`
  font-size: 11px; font-weight: 700; min-height: 36px; padding: 6px;
  color: ${({ theme }) => theme.colors.mutedText};
`;
const DonateButton = styled.button`
  padding: 10px 17px; border-radius: 7px; font-size: 12px; font-weight: 700; white-space: nowrap;
  background: ${({ theme }) => theme.colors.harvardCrimson}; color: white;
  &:hover { background: ${({ theme }) => theme.colors.harvardDarkCrimson}; }
  @media (max-width: 380px) { padding: 9px 11px; font-size: 11px; }
`;
const MenuButton = styled.button`
  display: none; align-items: center; justify-content: center; color: ${({ theme }) => theme.colors.deepWine};
  min-width: 32px; min-height: 40px;
  @media (max-width: 900px) { display: flex; }
`;
const MobileLinks = styled.div`
  display: flex; flex-direction: column; padding: 12px 20px 22px; background: ${({ theme }) => theme.colors.warmOffWhite};
  border-top: 1px solid ${({ theme }) => theme.colors.border}; box-shadow: 0 14px 20px rgba(0,0,0,.07);
  a { padding: 12px 0; font-size: 16px; }
  @media (min-width: 901px) { display: none; }
`;
const SkipLink = styled.a`
  position: absolute; left: 20px; top: -100px; background: white; color: #5b0f1b; padding: 10px 18px; z-index: 101;
  &:focus { top: 8px; }
`;
