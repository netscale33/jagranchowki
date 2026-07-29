import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER, BASE_PRICE } from '../data/mockData';

const navItems = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.5)]' : ''}`} style={{ background: 'rgba(12,5,0,0.97)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(200,120,30,0.15)' }}>

      {/* Announcement strip */}
      <div className="py-1.5 px-4 text-center text-[11px] font-medium" style={{ background: 'var(--c-saffron)', color: '#fff' }}>
        <span>🪔 Mata Ki Chowki Package — {BASE_PRICE} &nbsp;|&nbsp; Call&nbsp;
          <a href={`tel:${PHONE_NUMBER_PRIMARY}`} className="font-bold underline underline-offset-2 hover:no-underline">+91 97164 79938</a>
        </span>
      </div>

      {/* Main Nav */}
      <nav className="px-4 sm:px-6 py-3 max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={closeMobile} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded flex items-center justify-center text-xl animate-diya" style={{ lineHeight: 1 }}>🪔</div>
          <div>
            <div className="font-display font-bold text-base sm:text-lg leading-tight" style={{ color: 'var(--c-gold)' }}>
              JAGRAN CHOWKI
            </div>
            <div className="font-hindi text-[10px] leading-none" style={{ color: 'var(--c-muted)' }}>
              श्री संजीव बत्रा एवं पार्टी
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) =>
                `px-3.5 py-2 text-xs font-semibold uppercase tracking-wide rounded transition-colors ${
                  isActive
                    ? 'text-saffron-light bg-white/5'
                    : 'text-muted hover:text-cream'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? 'var(--c-saffron-light)' : 'var(--c-text-muted)',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa text-[12px] py-2 px-4"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
            Book on WhatsApp
          </a>
          <a href={`tel:${PHONE_NUMBER_PRIMARY}`} className="btn-primary text-[12px] py-2 px-4">
            <Phone className="w-3.5 h-3.5 fill-current" />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded transition-colors"
          style={{ color: 'var(--c-text-muted)', border: '1px solid var(--c-border)' }}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t px-4 py-3 space-y-1" style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              onClick={closeMobile}
              className={({ isActive }) =>
                `flex items-center gap-2 w-full px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  isActive ? 'bg-white/5' : 'hover:bg-white/5'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? 'var(--c-saffron-light)' : 'var(--c-text)',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t" style={{ borderColor: 'var(--c-border)' }}>
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="btn-primary justify-center text-[13px] py-2.5"
            >
              <Phone className="w-4 h-4 fill-current" /> Call +91 97164 79938
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20Book%20Chowki/Jagran.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa justify-center text-[13px] py-2.5"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" /> Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
