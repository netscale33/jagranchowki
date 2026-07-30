import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  PHONE_NUMBER_PRIMARY,
  WHATSAPP_NUMBER,
  EMAIL_ADDRESS,
  OFFICE_ADDRESS
} from '../data/mockData';

export const Footer: React.FC = () => {
  const seoKeywords = [
    { label: "Mata Ki Chowki Delhi", to: "/services/mata-ki-chowki" },
    { label: "Bhagwati Jagran Party Delhi NCR", to: "/services/bhagwati-jagran" },
    { label: "Sanjeev Batra Jagran Party", to: "/about" },
    { label: "Dilshad Garden Jagran Chowki", to: "/contact" },
    { label: "Sunderkand Paath Booking Noida", to: "/services/sunderkand-paath" },
    { label: "Khatu Shyam Bhajan Gurgaon", to: "/services/khatu-shyam" },
    { label: "Sai Sandhya Organizers Ghaziabad", to: "/services/sai-sandhya" },
    { label: "Best Mata Chowki Rohini & Dwarka", to: "/services/mata-ki-chowki" },
    { label: "Ladies Sangeet Dhol Orchestra", to: "/services/ladies-sangeet" },
    { label: "Pitampura Mata Ki Chowki", to: "/services/mata-ki-chowki" },
    { label: "Janakpuri Jagran Organizers", to: "/services/bhagwati-jagran" },
    { label: "Indirapuram Sunderkand Recital", to: "/services/sunderkand-paath" },
    { label: "Vaishali Sai Bhajan Sandhya", to: "/services/sai-sandhya" },
    { label: "Faridabad Mata Chowki Booking", to: "/services/mata-ki-chowki" },
    { label: "South Delhi Jagran Samiti", to: "/services/bhagwati-jagran" },
    { label: "Photo & Video Gallery Highlights", to: "/gallery" }
  ];

  return (
    <footer className="bg-white border-t border-amber-900/10 text-slate-700 pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
        {/* Brand & Mission */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-orange-100 text-orange-700 flex items-center justify-center text-lg font-bold">
              🪔
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">JAGRAN CHOWKI</h3>
              <p className="text-xs font-hindi text-[#C84B26] font-bold">Shri Sanjeev Batra & Party</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed font-medium text-slate-600">
            Delhi NCR's most trusted spiritual event organizers with 15+ years of divine service. Specialized in Mata Ki Chowki, Bhagwati Jagran, Sai Sandhya, Sunderkand Paath & Khatu Shyam Bhajan.
          </p>
          <div className="pt-1 flex items-center gap-2.5">
            <a
              href="https://instagram.com/sanjeev.batra.and.party/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#C84B26] hover:text-white transition-colors"
              title="Follow on Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-500 transition-colors"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1.5">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs font-medium">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Our Services', to: '/services' },
              { label: 'Photo & Video Gallery', to: '/gallery' },
              { label: 'Contact & Booking', to: '/contact' }
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-[#C84B26] transition-colors flex items-center gap-1.5 text-slate-700 font-semibold"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className="text-[#C84B26] font-bold">▸</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Open Status Timings */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1.5">
            Open Status
          </h4>
          <div className="space-y-2 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Clock className="w-3.5 h-3.5 text-[#C84B26] flex-shrink-0" />
              <span>Opening Timings: 10:00am to 10:00pm</span>
            </div>
            <p>Mon To Sat : 10:00am to 10:00pm</p>
            <p>Sun : 12:00pm To 7:00pm</p>
          </div>
        </div>

        {/* Contact Info & Address */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1.5">
            Contact Us
          </h4>
          <div className="space-y-2 text-xs font-medium text-slate-650">
            <a href={`tel:${PHONE_NUMBER_PRIMARY}`} className="flex items-center gap-2 hover:text-[#C84B26] transition-colors font-bold text-slate-900">
              <Phone className="w-3.5 h-3.5 text-[#C84B26] flex-shrink-0" />
              <span>Mobile: 9716479938 , 7011548995</span>
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 hover:text-[#C84B26] transition-colors break-all">
              <Mail className="w-3.5 h-3.5 text-[#C84B26] flex-shrink-0" />
              <span>{EMAIL_ADDRESS}</span>
            </a>
            <div className="flex items-start gap-2 pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#C84B26] flex-shrink-0 mt-0.5" />
              <span>{OFFICE_ADDRESS}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Working SEO Keywords Matrix with Real Router Links */}
      <div className="max-w-7xl mx-auto py-4 border-b border-slate-200 text-xs font-medium flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-center text-slate-600">
        {seoKeywords.map((item, idx) => (
          <React.Fragment key={idx}>
            <Link
              to={item.to}
              className="hover:text-[#C84B26] hover:underline transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {item.label}
            </Link>
            {idx < seoKeywords.length - 1 && <span className="text-slate-300">•</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Copyright & Attribution */}
      <div className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-slate-500">
        <p>© {new Date().getFullYear()} JagranChowki.in (Shri Sanjeev Batra & Party). All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          <span>Designed and Developed by</span>
          <a
            href="https://zorvent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C84B26] hover:underline transition-colors font-bold"
          >
            Zorvent
          </a>
        </p>
      </div>
    </footer>
  );
};
