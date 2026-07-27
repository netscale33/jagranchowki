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
    <div className="space-y-6 sm:space-y-16">
      {/* Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* Special Offer Highlight Banner */}
      <section className="px-3 sm:px-8">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 p-5 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 border-2 border-orange-300">
          <div className="space-y-2 z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Most Popular Choice</span>
            </div>
            <h2 className="text-xl sm:text-4xl font-bold font-heading">
              Complete Mata Ki Chowki & Jagran Setup
            </h2>
            <p className="text-xs sm:text-base text-orange-100 font-medium max-w-xl">
              Includes Singer Team, Dholak, Pad, Sound System, Temple Bhawan Decor, Jyoti Prachand & Kanya Pujan Prasad arrangement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 z-10 w-full md:w-auto">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="px-6 py-3 rounded-full bg-white text-orange-700 font-bold text-xs sm:text-sm hover:bg-orange-50 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current text-orange-600" />
              <span>Book Your Event</span>
            </a>
            <button
              onClick={() => onNavigate('services', 'mata-ki-chowki')}
              className="px-5 py-3 rounded-full bg-black/20 hover:bg-black/30 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Package Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-4 sm:py-12 px-3 sm:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-12">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-bold shadow-sm">
            <DiyaGlow size="sm" />
            <span>Devotional Offerings</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900">
            Our Spiritual Event Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Delivering divine vibrations and soulful musical devotional experiences across Delhi NCR & India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-orange-200 shadow-xl spiritual-card-hover group flex flex-col justify-between"
            >
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {service.popular && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-md">
                    Popular Choice
                  </span>
                )}
                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-xs font-bold px-3 py-1 rounded-lg bg-orange-600/90 backdrop-blur-md shadow-md">
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-xl font-bold font-heading text-slate-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-hindi text-orange-700 font-semibold">{service.hindiTitle}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2.5 border-t border-orange-100">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2.5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onNavigate('services', service.id)}
                    className="text-xs text-orange-600 hover:text-orange-800 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all hover:scale-105 text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    title="Quick Book on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Book</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Optimized Tight Mobile Grid */}
      <section className="py-8 sm:py-16 px-3 sm:px-8 bg-gradient-to-b from-[#FFFDF9] via-orange-50/60 to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-12">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900">
              Why Devotees Trust Sanjeev Batra & Party
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Our commitment to spiritual purity, musical excellence, and flawless event coordination.
            </p>
          </div>

          {/* 2-Column Grid on Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
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
              <div key={idx} className="bg-white p-3 sm:p-6 rounded-2xl border border-orange-200 shadow-md text-center space-y-1.5 hover:shadow-xl transition-all">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-orange-600 mx-auto flex items-center justify-center">
                  <item.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading text-xs sm:text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery Preview */}
      <section className="py-4 sm:py-12 px-3 sm:px-8 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-orange-200 pb-2.5">
          <div>
            <h2 className="text-xl sm:text-3xl font-bold font-heading text-slate-900">
              Divine Glimpses & Videos
            </h2>
            <p className="text-xs text-slate-600">Recent Mata Ki Chowki & Jagran setups by our party.</p>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="px-4 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold border border-orange-200 flex items-center gap-1.5 transition-all"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {GALLERY_DATA.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('gallery')}
              className="bg-white rounded-3xl overflow-hidden border border-orange-200 shadow-md group relative h-48 sm:h-64 cursor-pointer"
            >
              <img
                src={item.thumbnail || item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 sm:p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-yellow-300 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1">{item.title}</h3>
                <p className="text-[10px] sm:text-[11px] text-orange-100 line-clamp-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / Reviews */}
      <section className="py-6 sm:py-16 px-3 sm:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-12">
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900">
            Devotee Experiences & Reviews
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Read what host families say about our devotional bhajan programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="bg-white p-3.5 sm:p-6 rounded-3xl border border-orange-200 shadow-md space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400">{t.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{t.comment}"
              </p>
              <div className="pt-2 border-t border-orange-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">{t.location}</div>
                </div>
                <span className="text-[9px] sm:text-[10px] px-2.5 py-0.5 sm:py-1 rounded-full bg-orange-100 text-orange-800 font-bold">
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
      <section className="px-3 sm:px-8 pb-8">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-orange-600 to-amber-600 p-5 sm:p-12 text-center text-white space-y-3.5 sm:space-y-6 shadow-2xl">
          <DiyaGlow size="lg" className="mx-auto" />
          <h2 className="text-xl sm:text-4xl font-bold font-heading text-white">
            Ready to Organize a Divine Mata Ki Chowki or Jagran?
          </h2>
          <p className="text-xs sm:text-base text-orange-100 max-w-xl mx-auto">
            Book Shri Sanjeev Batra & Party for your auspicious date. Call us directly or chat on WhatsApp for instant booking confirmation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-1">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-orange-800 font-bold text-xs sm:text-base hover:scale-105 transition-all shadow-xl"
            >
              Call +91 97164 79938
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-base hover:scale-105 transition-all shadow-xl flex items-center gap-2 border border-emerald-400"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
