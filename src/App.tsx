import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { LanguageProvider } from './context/LanguageContext';
import { ModalProvider } from './context/ModalContext';

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
import DonationModal from './components/DonationModal';

function PaymentSuccessBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('payment') === 'success') {
      setVisible(true);
      window.history.replaceState({}, '', window.location.pathname);
      setTimeout(() => setVisible(false), 6000);
    }
  }, []);

  if (!visible) return null;

  return (
    <SuccessBanner>
      🎉 Pagamento confirmado! Seu nome vai aparecer no ranking em instantes.
    </SuccessBanner>
  );
}

const slideDown = keyframes`from { opacity: 0; transform: translateY(-20px) } to { opacity: 1; transform: translateY(0) }`;

const SuccessBanner = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  background: #1a7f4b;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  white-space: nowrap;
  animation: ${slideDown} 0.3s ease;

  @media (max-width: 600px) {
    white-space: normal;
    text-align: center;
    width: calc(100% - 32px);
  }
`;

function SiteContent() {
  return (
    <>
      <PaymentSuccessBanner />
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
        <UpdatesSection />
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
