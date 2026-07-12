import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShareNetwork } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { content } from '../data/content';

export default function StickyDonate() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const t = content[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById('hero');
      if (!heroEl) return;
      const heroBottom = heroEl.getBoundingClientRect().bottom;
      setVisible(heroBottom < 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <AnimatePresence>
      {visible && (
        <Bar
          as={motion.div}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <DonateBtn onClick={openModal}>
            <Heart size={18} weight="fill" />
            {lang === 'pt' ? 'Doe Agora' : 'Donate Now'}
          </DonateBtn>
          <ShareBtn
            href={`https://wa.me/?text=${encodeURIComponent(t.donate.whatsappMessage + ' ' + pageUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShareNetwork size={18} />
            {lang === 'pt' ? 'Compartilhar' : 'Share'}
          </ShareBtn>
        </Bar>
      )}
    </AnimatePresence>
  );
}

const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 0;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.12);
  padding: 12px 16px;
  padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));

  /* Only visible on mobile */
  @media (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: none;
  }
`;

const DonateBtn = styled.button`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  background: ${({ theme }) => theme.colors.harvardCrimson};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 8px;
`;

const ShareBtn = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 14px;
  background: ${({ theme }) => theme.colors.softGray};
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
