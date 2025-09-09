import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { JoinForcesPage } from './pages/JoinForcesPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/join-forces" element={<JoinForcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;