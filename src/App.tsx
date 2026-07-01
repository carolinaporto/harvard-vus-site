import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { LanguageProvider } from './context/LanguageContext';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AchievementTicker from './components/AchievementTicker';
import LogoMarquee from './components/LogoMarquee';
import WhyHelpSection from './components/WhyHelpSection';
import FundingGoalSection from './components/FundingGoalSection';
import StoryTimeline from './components/StoryTimeline';
import PhotoCollage from './components/PhotoCollage';
import ImpactSection from './components/ImpactSection';
import DonateSection from './components/DonateSection';
import FAQSection from './components/FAQSection';
import UpdatesSection from './components/UpdatesSection';
import StickyDonate from './components/StickyDonate';
import Footer from './components/Footer';
function SiteContent() {

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AchievementTicker />
        <LogoMarquee />
        <WhyHelpSection />
        <FundingGoalSection />
        <StoryTimeline />
        <PhotoCollage />
        <DonateSection />
        <ImpactSection />
        <FAQSection />
      </main>
      <UpdatesSection />
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
