import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-4 z-40 sm:hidden flex flex-col items-end gap-3 pointer-events-auto">
      {/* Small Floating Circular Call Button */}
      <a
        href={`tel:${PHONE_NUMBER_PRIMARY}`}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-center shadow-2xl hover:scale-115 active:scale-90 transition-all duration-300 border-2 border-white/80"
        title="Call Now (+91 97164 79938)"
      >
        <Phone className="w-5.5 h-5.5 fill-current text-yellow-300" />
      </a>

      {/* Small Floating Circular WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki/Jagran.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-115 active:scale-90 transition-all duration-300 border-2 border-white/80"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};
