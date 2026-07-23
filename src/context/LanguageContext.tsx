import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'pt' | 'en';

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggle = () => setLang(l => (l === 'pt' ? 'en' : 'pt'));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
