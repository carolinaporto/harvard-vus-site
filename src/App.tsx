import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { LanguageProvider } from './context/LanguageContext';
import { ModalProvider } from './context/ModalContext';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import StoryTimeline from './components/StoryTimeline';
import AchievementTicker from './components/AchievementTicker';
import LogoMarquee from './components/LogoMarquee';
import FundingGoalSection from './components/FundingGoalSection';
import DonateSection from './components/DonateSection';
import UpdatesSection from './components/UpdatesSection';
import PhotoCollage from './components/PhotoCollage';
import ImpactSection from './components/ImpactSection';
import FAQSection from './components/FAQSection';
import StickyDonate from './components/StickyDonate';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';


function SiteContent() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <StoryTimeline />
        <AchievementTicker />
        <LogoMarquee />
        <FundingGoalSection />
        <DonateSection />
        <UpdatesSection />
        <PhotoCollage />
        <ImpactSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyDonate />
      <DonationModal />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LanguageProvider>
        <ModalProvider>
          <SiteContent />
        </ModalProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
