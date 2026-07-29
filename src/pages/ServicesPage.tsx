import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA, PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { CheckCircle2, Phone, Send } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId?: string }>();

  return (
    <div className="py-10 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">
      {/* Page Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-950 text-xs font-bold shadow-sm">
          <span>🪔 Divine Services Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900">
          Our Spiritual Events & Offerings
        </h1>
        <p className="text-sm sm:text-base font-hindi font-bold text-[#C84B26] max-w-2xl mx-auto">
          माता की चौकी, भगवती जागरण, सुंदरकांड पाठ, साईं संध्या एवं खाटू श्याम भजन
        </p>
        <div className="section-line mx-auto" />
      </div>

      {/* Services Breakdown Cards */}
      <div className="space-y-8">
        {SERVICES_DATA.map((service) => {
          const isSelected = serviceId === service.id;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`card-light p-6 sm:p-8 transition-all duration-300 ${
                isSelected ? 'ring-2 ring-[#C84B26] border-[#C84B26]' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Image (5 cols) */}
                <div className="lg:col-span-5 relative h-56 sm:h-72 rounded-xl overflow-hidden bg-slate-100 border border-amber-900/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="px-3 py-1 rounded bg-black/80 font-bold text-xs shadow-sm border border-white/20">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Right Content (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-2xl font-display font-bold text-slate-900">
                        {service.title}
                      </h2>
                      <span className="text-xs font-hindi text-[#C84B26] font-bold">{service.hindiTitle}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                    {service.fullDetails}
                  </p>

                  {/* Included Features */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#C84B26] mb-2.5">
                      What is included in this package:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-100">
                    <a
                      href={`tel:${PHONE_NUMBER_PRIMARY}`}
                      className="btn-vermilion text-xs px-5 py-2.5 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current text-yellow-300" />
                      <span>Call to Book</span>
                    </a>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-light text-xs px-5 py-2.5 shadow-sm"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>WhatsApp Inquire</span>
                    </a>

                    <Link
                      to="/contact"
                      className="btn-outline-light text-xs px-4 py-2.5 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C84B26]" />
                      <span>Book Event</span>
                    </Link>
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
