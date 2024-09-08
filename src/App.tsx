import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import CertificationsPage from './pages/CertificationsPage';
import RequestsPage from './pages/RequestsPage';
import PortfolioPage from './pages/PortfolioPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
