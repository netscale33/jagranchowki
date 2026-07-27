import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FlowerShower } from './components/FlowerShower';
import { MobileQuickBar } from './components/MobileQuickBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: string, serviceId?: string) => {
    setCurrentPage(page);
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-900 flex flex-col justify-between selection:bg-orange-500 selection:text-white font-sans relative">
      {/* Flower Shower ONLY on the Home Page top fold */}
      {currentPage === 'home' && <FlowerShower />}

      {/* Floating Mobile Corner Action Buttons (Call & WhatsApp) */}
      <MobileQuickBar />

      {/* Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && (
          <ServicesPage selectedServiceId={selectedServiceId} onNavigate={handleNavigate} />
        )}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
