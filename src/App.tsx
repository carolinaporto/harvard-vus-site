import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { LanguageProvider } from './context/LanguageContext';
import { ModalProvider } from './context/ModalContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StickyDonate from './components/StickyDonate';
import DonationModal from './components/DonationModal';
import RouteEffects from './components/RouteEffects';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import HarvardPage from './pages/HarvardPage';
import SupportPage from './pages/SupportPage';
import NotFoundPage from './pages/NotFoundPage';

// Keep links shared before the move to separate pages working.
const legacySections: Record<string, string> = {
  '#my-story': '/minha-trajetoria#my-story',
  '#funding': '/como-ajudar#funding',
  '#donate': '/como-ajudar#donate',
  '#faq': '/como-ajudar#faq',
  '#why-help': '/como-ajudar',
};

function HomeRoute() {
  const { hash } = useLocation();
  return legacySections[hash] ? <Navigate to={legacySections[hash]} replace /> : <HomePage />;
}

function SiteContent() {
  const { pathname } = useLocation();
  return (
    <>
      <RouteEffects />
      <NavBar key={`nav:${pathname}`} />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/minha-trajetoria" element={<StoryPage />} />
          <Route path="/em-harvard" element={<HarvardPage />} />
          <Route path="/como-ajudar" element={<SupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyDonate key={`sticky:${pathname}`} />
      <DonationModal />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MotionConfig reducedMotion="user">
        <LanguageProvider>
          <ModalProvider>
            <BrowserRouter>
              <SiteContent />
            </BrowserRouter>
          </ModalProvider>
        </LanguageProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
