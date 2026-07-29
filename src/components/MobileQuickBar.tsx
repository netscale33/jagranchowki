import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-4 z-40 sm:hidden flex flex-col items-end gap-2.5">
      <a
        href={`tel:${PHONE_NUMBER_PRIMARY}`}
        className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        style={{ background: 'var(--c-saffron)', border: '2px solid rgba(255,255,255,0.2)' }}
        title="Call Now"
      >
        <Phone className="w-5 h-5 fill-current text-white" />
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20Book%20Chowki/Jagran.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        style={{ background: '#16a34a', border: '2px solid rgba(255,255,255,0.2)' }}
        title="WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white" />
      </a>
    </div>
  );
};
