import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FAQSection } from '../components/FAQSection';
import { SERVICES_DATA, GALLERY_DATA, TESTIMONIALS_DATA, PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';
import { DiyaGlow } from '../components/DiyaGlow';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Star, CheckCircle, ArrowRight, Sparkles, Phone, HeartHandshake, Music, Calendar } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 sm:space-y-12">
      {/* Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* Special Offer Highlight Banner */}
      <section className="px-3 sm:px-6">
        <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 p-4 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 border border-orange-400">
          <div className="space-y-1.5 z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              <span>Most Popular Choice</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading tracking-tight">
              Complete Mata Ki Chowki & Jagran Setup
            </h2>
            <p className="text-xs sm:text-sm text-orange-100 font-medium max-w-xl">
              Includes Singer Team, Dholak, Pad, Sound System, Temple Bhawan Decor, Jyoti Prachand & Kanya Pujan Prasad arrangement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 z-10 w-full md:w-auto">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="px-5 py-2.5 rounded-full bg-white text-orange-700 font-bold text-xs sm:text-sm hover:bg-orange-50 transition-all flex items-center justify-center gap-1.5 shadow-md hover:scale-102"
            >
              <Phone className="w-3.5 h-3.5 fill-current text-orange-650" />
              <span>Book Your Event</span>
            </a>
            <button
              onClick={() => onNavigate('services', 'mata-ki-chowki')}
              className="px-4 py-2.5 rounded-full bg-black/25 hover:bg-black/35 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Package Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-2 sm:py-8 px-3 sm:px-6 max-w-7xl mx-auto space-y-4 sm:space-y-10">
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-850 text-xs font-semibold">
            <DiyaGlow size="sm" />
            <span>Devotional Offerings</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Our Spiritual Event Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-medium">
            Delivering divine vibrations and soulful musical devotional experiences across Delhi NCR & India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-orange-100/80 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {service.popular && (
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-orange-600 text-white font-bold text-[9px] uppercase tracking-wider">
                    Popular
                  </span>
                )}
                <div className="absolute bottom-2.5 left-3 text-white">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-600/90 shadow-sm">
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                    {service.title}
                  </h3>
                  <div className="text-xs font-hindi text-orange-700 font-bold">{service.hindiTitle}</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onNavigate('services', service.id)}
                    className="text-xs text-orange-600 hover:text-orange-850 font-bold flex items-center gap-0.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all text-xs font-bold flex items-center gap-1"
                    title="Quick Book on WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Book</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Optimized Tight Mobile Grid */}
      <section className="py-4 sm:py-10 px-3 sm:px-6 bg-gradient-to-b from-[#FFFDF9] via-orange-50/20 to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-8">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Why Devotees Trust Sanjeev Batra & Party
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
              Our commitment to spiritual purity, musical excellence, and flawless event coordination.
            </p>
          </div>

          {/* 2-Column Grid on Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {[
              {
                icon: Calendar,
                title: "15+ Yrs Experience",
                desc: "5,000+ events across Delhi NCR, UP & Rajasthan."
              },
              {
                icon: Music,
                title: "Renowned Artists",
                desc: "Male & female singers performing with pure devotion."
              },
              {
                icon: HeartHandshake,
                title: "Punctual Setup",
                desc: "Venue setup 2 hours prior for smooth event execution."
              },
              {
                icon: Sparkles,
                title: "Grand Bhawan Decor",
                desc: "Floral Darbar, live Jhankis & crystal clear sound."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-3 sm:p-5 rounded-xl border border-orange-100/70 shadow-sm text-center space-y-1">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 mx-auto flex items-center justify-center">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-heading text-[11px] sm:text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery Preview */}
      <section className="py-2 sm:py-8 px-3 sm:px-6 max-w-7xl mx-auto space-y-3 sm:space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 border-b border-slate-100 pb-2">
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Divine Glimpses & Videos
            </h2>
            <p className="text-xs text-slate-500 font-medium">Recent Mata Ki Chowki & Jagran setups by our party.</p>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="px-3.5 py-1 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold border border-orange-200/50 flex items-center gap-1 transition-all"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {GALLERY_DATA.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('gallery')}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group relative h-40 sm:h-52 cursor-pointer"
            >
              <img
                src={item.thumbnail || item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-3 sm:p-4 flex flex-col justify-end text-white">
                <span className="text-[9px] font-bold text-yellow-300 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1">{item.title}</h3>
                <p className="text-[10px] text-orange-100 line-clamp-1 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / Reviews */}
      <section className="py-4 sm:py-8 px-3 sm:px-6 max-w-7xl mx-auto space-y-4 sm:space-y-8">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            Devotee Experiences & Reviews
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
            Read what host families say about our devotional bhajan programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="bg-white p-3 sm:p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{t.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
                "{t.comment}"
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[10px] text-slate-450 font-medium">{t.location}</div>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded bg-orange-50 text-orange-850 font-bold border border-orange-100">
                  {t.eventType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Bottom CTA Banner */}
      <section className="px-3 sm:px-6 pb-6">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 p-4 sm:p-10 text-center text-white space-y-3 sm:space-y-5 shadow-lg border border-orange-400">
          <DiyaGlow size="md" className="mx-auto" />
          <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Ready to Organize a Divine Mata Ki Chowki or Jagran?
          </h2>
          <p className="text-xs sm:text-sm text-orange-100 max-w-xl mx-auto font-medium">
            Book Shri Sanjeev Batra & Party for your auspicious date. Call us directly or chat on WhatsApp for instant booking confirmation.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 pt-1">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="px-5 py-2.5 rounded-full bg-white text-orange-850 font-bold text-xs sm:text-sm hover:scale-102 transition-all shadow-md"
            >
              Call +91 97164 79938
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:scale-102 transition-all shadow-md flex items-center gap-1.5 border border-emerald-500"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
