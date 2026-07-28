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
    <header className="sticky top-0 z-40 w-full shadow-md relative bg-white">
      {/* Top Bar - THIS IS THE 1 SINGLE ALLOWED PLACE FOR PRICE */}
      <div className="bg-[#F05A1A] text-white text-[11px] py-1.5 px-3 sm:px-6 border-b border-orange-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Mobile Top Bar (Only Package Badge with Flower SVG) */}
          <div className="sm:hidden w-full flex items-center justify-center py-0.5">
            <span className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/20 text-white font-bold text-[10px]">
              <Flower2 className="w-3 h-3 text-yellow-350 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Mata Ki Chowki Package: {BASE_PRICE}</span>
            </span>
          </div>

          {/* Desktop Top Bar Left */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold text-[10px] shadow-sm">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              Mata Ki Chowki Package: {BASE_PRICE}
            </span>
            <span className="hidden md:flex items-center gap-1 text-orange-100 text-[10px] font-medium">
              <MapPin className="w-3 h-3 text-yellow-300" />
              Dilshad Garden, Delhi NCR & All India
            </span>
          </div>

          {/* Desktop Top Bar Right */}
          <div className="hidden sm:flex items-center gap-3 ml-auto">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="flex items-center gap-1 hover:text-yellow-250 transition-colors font-bold text-white text-xs"
            >
              <Phone className="w-3 h-3 fill-current text-yellow-300" />
              <span>+91 97164 79938</span>
            </a>
            <span className="text-orange-300">|</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20inquire%20about%20Jagran%20Chowki%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all hover:scale-102 text-[10px] shadow-sm"
            >
              <WhatsAppIcon className="w-3 h-3 text-white" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white border-b border-orange-100 py-2.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left"
          >
            <DiyaGlow size="sm" />
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-xl font-extrabold tracking-tight text-orange-600 leading-tight">
                JAGRAN CHOWKI
              </span>
              <span className="text-[8px] sm:text-[10px] text-amber-800 font-hindi tracking-wider font-bold">
                श्री संजीव बत्रा एवं पार्टी (Delhi NCR)
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all duration-150 ${
                    active
                      ? 'text-orange-650 bg-orange-50/80 border border-orange-200/50'
                      : 'text-slate-700 hover:text-orange-655 hover:bg-orange-50/30'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Action Call Button */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold text-xs hover:scale-102 transition-all shadow"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors border border-orange-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </nav>

      {/* Optimized Mobile Drawer - Absolute below header, tight spacing */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-orange-200 shadow-xl z-50 p-3 space-y-2.5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left text-xs font-bold uppercase tracking-wider transition-all ${
                  currentPage === item.id
                    ? 'bg-orange-50 text-orange-650 border border-orange-200/60 shadow-sm'
                    : 'text-slate-755 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold text-xs shadow active:scale-98 transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Sanjeev Batra (+91 97164 79938)</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki/Jagran.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow active:scale-98 transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
