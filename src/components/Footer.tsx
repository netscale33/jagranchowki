import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { DiyaGlow } from './DiyaGlow';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  PHONE_NUMBER_PRIMARY,
  WHATSAPP_NUMBER,
  EMAIL_ADDRESS,
  OFFICE_ADDRESS
} from '../data/mockData';

interface FooterProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const seoKeywords = [
    { label: "Mata Ki Chowki Delhi", page: "services", serviceId: "mata-ki-chowki" },
    { label: "Bhagwati Jagran Party Delhi NCR", page: "services", serviceId: "bhagwati-jagran" },
    { label: "Sanjeev Batra Jagran Party", page: "about" },
    { label: "Dilshad Garden Jagran Chowki", page: "contact" },
    { label: "Sunderkand Paath Booking Noida", page: "services", serviceId: "sunderkand-paath" },
    { label: "Khatu Shyam Bhajan Gurgaon", page: "services", serviceId: "khatu-shyam" },
    { label: "Sai Sandhya Organizers Ghaziabad", page: "services", serviceId: "sai-sandhya" },
    { label: "Best Mata Chowki Rohini & Dwarka", page: "services", serviceId: "mata-ki-chowki" },
    { label: "Ladies Sangeet Dhol Orchestra", page: "services", serviceId: "ladies-sangeet" },
    { label: "Photo & Video Gallery Highlights", page: "gallery" }
  ];

  const handleKeywordClick = (page: string, serviceId?: string) => {
    onNavigate(page, serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1C0D07] via-[#120804] to-[#0A0402] border-t-4 border-orange-500 text-orange-100 pt-12 pb-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-orange-500/20">
        {/* Brand & Spiritual Mission */}
        <div className="space-y-3.5">
          <div className="flex items-center gap-3">
            <DiyaGlow size="md" />
            <div>
              <h3 className="font-heading text-xl font-bold text-yellow-300">JAGRAN CHOWKI</h3>
              <p className="text-xs sm:text-sm text-orange-200 font-hindi font-semibold">Shri Sanjeev Batra & Party</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-orange-100/90 font-medium">
            Delhi NCR's most trusted spiritual event organizers with 15+ years of divine service. Specialized in Mata Ki Chowki, Bhagwati Jagran, Sai Sandhya, Sunderkand Paath & Khatu Shyam Bhajan.
          </p>
          <div className="pt-1 flex items-center gap-3">
            <a
              href="https://instagram.com/sanjeev.batra.and.party/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-orange-600/40 border border-orange-400/50 flex items-center justify-center text-yellow-300 hover:bg-orange-500 hover:text-white transition-all hover:scale-110"
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
              className="w-9 h-9 rounded-full bg-emerald-600/50 border border-emerald-400/50 flex items-center justify-center text-white hover:bg-emerald-500 transition-all hover:scale-110"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-heading text-base font-bold text-yellow-300 uppercase tracking-wider border-b border-orange-500/30 pb-2">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-medium text-orange-100">
            {['home', 'about', 'services', 'gallery', 'contact'].map((page) => (
              <li key={page}>
                <button
                  onClick={() => handleKeywordClick(page)}
                  className="hover:text-yellow-300 transition-colors capitalize flex items-center gap-2"
                >
                  <span className="text-orange-400 font-bold">▸</span> {page.replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Open Status Timings */}
        <div className="space-y-3">
          <h4 className="font-heading text-base font-bold text-yellow-300 uppercase tracking-wider border-b border-orange-500/30 pb-2">
            Open Status
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-orange-100">
            <div className="flex items-center gap-2 text-yellow-200 font-bold">
              <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>Opening Timings: 10:00am to 10:00pm</span>
            </div>
            <p className="text-orange-100/90 font-medium">Mon To Sat : 10:00am to 10:00pm</p>
            <p className="text-orange-100/90 font-medium">Sun : 12:00pm To 7:00pm</p>
          </div>
        </div>

        {/* Contact Info & Address */}
        <div className="space-y-3">
          <h4 className="font-heading text-base font-bold text-yellow-300 uppercase tracking-wider border-b border-orange-500/30 pb-2">
            Contact Us
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-orange-100">
            <a href={`tel:${PHONE_NUMBER_PRIMARY}`} className="flex items-center gap-2 hover:text-yellow-300 transition-colors font-bold text-white">
              <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>Mobile: 9716479938 , 7011548995</span>
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 hover:text-yellow-300 transition-colors break-all font-medium">
              <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>{EMAIL_ADDRESS}</span>
            </a>
            <div className="flex items-start gap-2 text-orange-100 font-medium pt-0.5">
              <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              <span>{OFFICE_ADDRESS}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Interactive Working SEO Keywords Matrix */}
      <div className="max-w-7xl mx-auto py-5 border-b border-orange-500/20 text-xs sm:text-sm text-orange-200/80 font-medium flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
        {seoKeywords.map((item, idx) => (
          <React.Fragment key={idx}>
            <button
              onClick={() => handleKeywordClick(item.page, item.serviceId)}
              className="hover:text-yellow-300 hover:underline transition-colors cursor-pointer"
            >
              {item.label}
            </button>
            {idx < seoKeywords.length - 1 && <span className="text-orange-500/60">•</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Copyright & Attribution */}
      <div className="max-w-7xl mx-auto pt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs sm:text-sm text-orange-200/80">
        <p>© {new Date().getFullYear()} JagranChowki.in (Shri Sanjeev Batra & Party). All Rights Reserved.</p>
        <p className="flex items-center gap-1.5 font-semibold">
          <span>Designed and Developed by</span>
          <a
            href="https://zorvent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 font-bold hover:underline hover:text-white transition-colors"
          >
            Zorvent
          </a>
        </p>
      </div>
    </footer>
  );
};
