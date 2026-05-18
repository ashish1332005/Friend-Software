import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ERPPage from './pages/ERPPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/privacypollicy';
import TermsConditionsPage from './pages/TermsConditionpage';
import AffiliateDisclaimerPage from './pages/AffiliateDisclaimerPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/erp-solutions" element={<ERPPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/affiliate-disclaimer" element={<AffiliateDisclaimerPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
