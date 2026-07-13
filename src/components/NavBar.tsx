import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { content } from '../data/content';

export default function NavBar() {
  const { lang, toggle } = useLanguage();
  const { openModal } = useModal();
  const t = content[lang].nav;
  const tLang = content[lang].lang;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Nav
      as={motion.nav}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      $scrolled={scrolled}
    >
      <Inner>
        <Logo href="#hero" $scrolled={scrolled}>
          Carol Porto
        </Logo>

        <Links>
          {([
            ['#my-story', t.story],
            ['#funding', t.harvard],
            ['#donate', t.donate],
          ] as [string, string][]).map(([href, label]) => (
            <NavLink key={href} href={href} $scrolled={scrolled}>
              {label}
            </NavLink>
          ))}
        </Links>

        <Right>
          <LangToggle onClick={toggle} $scrolled={scrolled} aria-label="Toggle language">
            {tLang.toggle}
          </LangToggle>
          <DonateBtn as="button" onClick={openModal} $scrolled={scrolled}>
            {t.donateBtn}
          </DonateBtn>
          <Hamburger
            onClick={() => setMenuOpen(o => !o)}
            $scrolled={scrolled}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </Hamburger>
        </Right>
      </Inner>

      {menuOpen && (
        <MobileMenu
          as={motion.div}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {([
            ['#my-story', t.story],
            ['#funding', t.harvard],
            ['#donate', t.donate],
          ] as [string, string][]).map(([href, label]) => (
            <MobileLink key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </MobileLink>
          ))}
          <MobileDonateBtn as="button" onClick={() => { setMenuOpen(false); openModal(); }}>
            {t.donateBtn}
          </MobileDonateBtn>
        </MobileMenu>
      )}
    </Nav>
  );
}

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.35s ease, box-shadow 0.35s ease;

  ${({ $scrolled, theme }) =>
    $scrolled
      ? css`
          background: ${theme.colors.white};
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.08);
        `
      : css`
          background: transparent;
        `}
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 40px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 0 20px;
    height: 60px;
  }
`;

const Logo = styled.a<{ $scrolled: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;
  color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.darkText : theme.colors.white)};
  transition: color 0.35s ease;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a<{ $scrolled: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.mutedText : 'rgba(255,255,255,0.82)'};
  transition: color 0.25s ease;

  &:hover {
    color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.darkText : theme.colors.white)};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LangToggle = styled.button<{ $scrolled: boolean }>`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 6px 12px;
  border-radius: 4px;
  color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.darkText : theme.colors.white)};
  border: 1.5px solid
    ${({ $scrolled }) => ($scrolled ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.4)')};
  transition: all 0.25s ease;

  &:hover {
    background: ${({ $scrolled }) =>
      $scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.12)'};
  }
`;

const DonateBtn = styled.a<{ $scrolled: boolean }>`
  display: none;
  font-size: 13px;
  font-weight: 600;
  padding: 9px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.25s ease;

  ${({ $scrolled, theme }) =>
    $scrolled
      ? css`
          background: ${theme.colors.harvardCrimson};
          color: ${theme.colors.white};
          &:hover {
            background: ${theme.colors.harvardDarkCrimson};
          }
        `
      : css`
          background: ${theme.colors.white};
          color: ${theme.colors.harvardCrimson};
          &:hover {
            background: rgba(255, 255, 255, 0.9);
          }
        `}

  @media (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: block;
  }
`;

const Hamburger = styled.button<{ $scrolled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.darkText : theme.colors.white};
    transition: background 0.35s ease;
  }

  @media (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  padding: 16px 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MobileLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};
  padding: 12px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    border-bottom: none;
  }
`;

const MobileDonateBtn = styled.a`
  margin-top: 12px;
  padding: 14px;
  text-align: center;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
`;
