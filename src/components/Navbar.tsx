import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER, BASE_PRICE } from '../data/mockData';

const navItems = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact & Booking' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}>
      {/* Top Announcement Bar */}
      <div className="bg-[#C84B26] text-white py-1.5 px-4 text-center text-xs font-medium border-b border-red-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold">🪔 Package Offer</span>
            <span>Mata Ki Chowki Package: <strong>{BASE_PRICE}</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
            <a href={`tel:${PHONE_NUMBER_PRIMARY}`} className="hover:underline flex items-center gap-1 font-bold">
              <Phone className="w-3 h-3 fill-current" /> +91 97164 79938
            </a>
            <span>•</span>
            <span>Dilshad Garden, Delhi NCR</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-amber-900/10 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMobile} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded bg-orange-100 text-orange-700 flex items-center justify-center text-lg font-bold">
              🪔
            </div>
            <div>
              <div className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-tight group-hover:text-[#C84B26] transition-colors">
                JAGRAN CHOWKI
              </div>
              <div className="font-hindi text-[11px] text-amber-900 font-semibold leading-none">
                श्री संजीव बत्रा एवं पार्टी (Delhi NCR)
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded ${
                    isActive
                      ? 'text-[#C84B26] bg-orange-50 font-bold border border-orange-200/60'
                      : 'text-slate-700 hover:text-[#C84B26] hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="btn-vermilion text-xs py-2 px-4 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki/Jagran.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-light text-xs py-2 px-3.5 shadow-sm"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-b border-amber-900/10 shadow-lg px-4 py-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-[#C84B26] bg-orange-50 border border-orange-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="btn-vermilion text-xs py-2.5 justify-center"
            >
              <Phone className="w-4 h-4 fill-current" /> Call +91 97164 79938
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20Book%20Chowki/Jagran.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-light text-xs py-2.5 justify-center"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" /> WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
