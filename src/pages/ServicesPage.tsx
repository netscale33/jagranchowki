import React from 'react';
import { SERVICES_DATA, PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';
import { DiyaGlow } from '../components/DiyaGlow';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { CheckCircle, Phone, Send } from 'lucide-react';

interface ServicesPageProps {
  selectedServiceId?: string;
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ selectedServiceId, onNavigate }) => {
  return (
    <div className="py-12 px-4 sm:px-8 max-w-6xl mx-auto space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-bold shadow-sm">
          <DiyaGlow size="sm" />
          <span>Divine Services Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900">
          Our Spiritual Events & Offerings
        </h1>
        <p className="text-sm sm:text-base text-orange-950 max-w-2xl mx-auto font-hindi font-semibold">
          माता की चौकी, भगवती जागरण, सुंदरकांड पाठ, साईं संध्या एवं खाटू श्याम भजन
        </p>
      </div>

      {/* Services Breakdown Cards */}
      <div className="space-y-10">
        {SERVICES_DATA.map((service) => {
          const isHighlighted = selectedServiceId === service.id;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-xl transition-all duration-300 ${
                isHighlighted
                  ? 'border-orange-500 ring-2 ring-orange-400 bg-orange-50/20'
                  : 'border-orange-200 hover:border-orange-300'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Image (Left 1 col) */}
                <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden border border-orange-200 shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="px-3 py-1 rounded-full bg-orange-600 font-bold text-xs shadow-md">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Content (Right 2 cols) */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-2xl font-bold font-heading text-slate-900">
                        {service.title}
                      </h2>
                      <span className="text-sm font-hindi text-orange-700 font-bold">{service.hindiTitle}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.fullDetails}
                  </p>

                  {/* Included Features Grid */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-orange-800 mb-2.5">
                      What is included in this package:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${PHONE_NUMBER_PRIMARY}`}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xs hover:scale-105 transition-all shadow-md flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Call to Book Event</span>
                    </a>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all hover:scale-105 flex items-center gap-2 shadow-md border border-emerald-400"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>WhatsApp Inquire</span>
                    </a>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-5 py-3 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold text-xs border border-orange-200 flex items-center gap-1.5 transition-all"
                    >
                      <Send className="w-3.5 h-3.5 text-orange-600" />
                      <span>Book Event</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
