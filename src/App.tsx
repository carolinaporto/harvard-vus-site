import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { LanguageProvider } from './context/LanguageContext';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AchievementTicker from './components/AchievementTicker';
import LogoMarquee from './components/LogoMarquee';
import WhyHelpSection from './components/WhyHelpSection';
import PullQuote from './components/PullQuote';
import FundingGoalSection from './components/FundingGoalSection';
import StoryTimeline from './components/StoryTimeline';
import PhotoCollage from './components/PhotoCollage';
import OriginStory from './components/OriginStory';
import HarvardSection from './components/HarvardSection';
import ImpactSection from './components/ImpactSection';
import DonateSection from './components/DonateSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import StickyDonate from './components/StickyDonate';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import { content } from './data/content';

function SiteContent() {
  const { lang } = useLanguage();
  const t = content[lang].pullQuotes;

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AchievementTicker />
        <LogoMarquee />
        <WhyHelpSection />
        <FundingGoalSection />
        <OriginStory />
        <PullQuote quote={t.one} variant="light" />
        <StoryTimeline />
        <PhotoCollage />
        <HarvardSection />
        <ImpactSection />
        <DonateSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyDonate />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LanguageProvider>
        <SiteContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
