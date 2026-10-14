import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const titles: Record<string, { pt: string; en: string }> = {
  '/': { pt: 'Carol Porto | Harvard VUS 2026/2027', en: 'Carol Porto | Harvard VUS 2026/2027' },
  '/minha-trajetoria': { pt: 'Minha trajetória | Carol Porto', en: 'My journey | Carol Porto' },
  '/em-harvard': { pt: 'Primeiro semestre em Harvard | Carol Porto', en: 'First semester at Harvard | Carol Porto' },
  '/como-ajudar': { pt: 'Como ajudar | Carol Porto', en: 'How to help | Carol Porto' },
};

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const pagePath = pathname.replace(/\/+$/, '') || '/';
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = titles[pagePath]?.[lang] ?? (lang === 'pt' ? 'Página não encontrada | Carol Porto' : 'Page not found | Carol Porto');
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://mcporto.com${pagePath === '/' ? '' : pagePath}`);
  }, [pathname, lang]);

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main-content')?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
