import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA, PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { CheckCircle2, Phone, Send, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId?: string }>();

  return (
    <div className="py-10 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">
      {/* Page Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold" style={{ background: 'rgba(212,105,10,0.12)', color: 'var(--c-gold)', border: '1px solid rgba(212,105,10,0.25)' }}>
          <span>🪔 Divine Services Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-cream">
          Our Spiritual Events & Offerings
        </h1>
        <p className="text-sm sm:text-base font-hindi font-medium max-w-2xl mx-auto text-gold">
          माता की चौकी, भगवती जागरण, सुंदरकांड पाठ, साईं संध्या एवं खाटू श्याम भजन
        </p>
        <div className="section-divider mx-auto" />
      </div>

      {/* Services Breakdown Cards */}
      <div className="space-y-8">
        {SERVICES_DATA.map((service) => {
          const isSelected = serviceId === service.id;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`card p-6 sm:p-8 transition-all duration-300 ${
                isSelected ? 'ring-2 ring-saffron border-saffron' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Image (5 cols) */}
                <div className="lg:col-span-5 relative h-56 sm:h-72 rounded-xl overflow-hidden bg-black border border-orange-500/20">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="photo-overlay absolute inset-0" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="px-3 py-1 rounded text-xs font-bold" style={{ background: 'rgba(12,5,0,0.85)', border: '1px solid var(--c-border)' }}>
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Right Content (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-2xl font-display font-bold text-cream">
                        {service.title}
                      </h2>
                      <span className="text-xs font-hindi text-gold font-semibold">{service.hindiTitle}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
                    {service.fullDetails}
                  </p>

                  {/* Included Features */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-saffron mb-2.5">
                      What is included in this package:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" style={{ color: 'var(--c-text-muted)' }}>
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 border-t" style={{ borderColor: 'var(--c-border)' }}>
                    <a
                      href={`tel:${PHONE_NUMBER_PRIMARY}`}
                      className="btn-primary text-xs px-5 py-2.5"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Call to Book</span>
                    </a>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa text-xs px-5 py-2.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>WhatsApp Inquire</span>
                    </a>

                    <Link
                      to="/contact"
                      className="btn-outline text-xs px-4 py-2.5"
                    >
                      <Send className="w-3.5 h-3.5 text-saffron-light" />
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
