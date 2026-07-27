import React, { useState } from 'react';
import { Phone, Menu, X, MapPin, Sparkles, ChevronRight, Flower2 } from 'lucide-react';
import { DiyaGlow } from './DiyaGlow';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER, BASE_PRICE } from '../data/mockData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'gallery', label: 'Photo & Video Gallery' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-lg">
      {/* Top Bar - THIS IS THE 1 SINGLE ALLOWED PLACE FOR PRICE */}
      <div className="bg-[#F05A1A] text-white text-xs py-1.5 sm:py-2.5 px-3 sm:px-8 border-b border-orange-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Mobile Top Bar (Only Package Badge with Flower SVG) */}
          <div className="sm:hidden w-full flex items-center justify-center py-0.5">
            <span className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/20 text-white font-bold text-[11px]">
              <Flower2 className="w-3 h-3 text-yellow-300 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Mata Ki Chowki Package: {BASE_PRICE}</span>
            </span>
          </div>

          {/* Desktop Top Bar Left */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-[11px] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Mata Ki Chowki Package: {BASE_PRICE}
            </span>
            <span className="hidden md:flex items-center gap-1 text-orange-100 text-[11px] font-medium">
              <MapPin className="w-3.5 h-3.5 text-yellow-300" />
              Dilshad Garden, Delhi NCR & All India
            </span>
          </div>

          {/* Desktop Top Bar Right */}
          <div className="hidden sm:flex items-center gap-3 ml-auto">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="flex items-center gap-1 hover:text-yellow-200 transition-colors font-bold text-white text-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current text-yellow-300" />
              <span>+91 97164 79938</span>
            </a>
            <span className="text-orange-300">|</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20inquire%20about%20Jagran%20Chowki%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all hover:scale-105 text-[11px] shadow-sm"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-amber-200 py-3 px-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left"
          >
            <DiyaGlow size="md" />
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-2xl font-bold tracking-wide text-orange-600 drop-shadow-sm leading-tight">
                JAGRAN CHOWKI
              </span>
              <span className="text-[9px] sm:text-xs text-amber-800 font-hindi tracking-wider font-semibold">
                श्री संजीव बत्रा एवं पार्टी (Delhi NCR)
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 relative ${
                    active
                      ? 'text-orange-600 bg-orange-50 font-bold border border-orange-200'
                      : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50/60'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Action Call Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xs hover:from-orange-500 hover:to-amber-500 transition-all shadow-md hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-orange-600 hover:bg-orange-50 rounded-xl transition-colors border border-orange-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Optimized Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[90px] bg-white/98 backdrop-blur-xl border-b-2 border-orange-400 shadow-2xl z-50 p-4 space-y-3 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all ${
                  currentPage === item.id
                    ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-orange-500" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-orange-100 flex flex-col gap-2">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xs shadow-md active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Sanjeev Batra (+91 97164 79938)</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki/Jagran.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md active:scale-95 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
