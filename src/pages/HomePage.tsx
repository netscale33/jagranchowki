import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { FAQSection } from '../components/FAQSection';
import { SERVICES_DATA, GALLERY_DATA, TESTIMONIALS_DATA, PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Star, CheckCircle2, ArrowRight, Phone, Calendar, Music, HeartHandshake, ShieldCheck } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-10 sm:space-y-16 pb-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Special Offer Highlight Banner */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto rounded-xl bg-gradient-to-r from-[#C84B26] to-[#D96B27] p-6 sm:p-10 text-white shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-orange-700">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <span>🪔 Most Popular Choice</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Complete Mata Ki Chowki & Jagran Setup
            </h2>
            <p className="text-xs sm:text-sm text-orange-100 font-medium max-w-xl">
              Includes Singer Team, Dholak, Pad, Sound System, Temple Bhawan Decor, Jyoti Prachand & Kanya Pujan Prasad arrangement.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center w-full md:w-auto">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="px-5 py-3 rounded-md bg-white text-[#C84B26] font-bold text-xs sm:text-sm hover:bg-orange-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 fill-current text-[#C84B26]" />
              <span>Book Your Event</span>
            </a>
            <Link
              to="/services/mata-ki-chowki"
              className="px-5 py-3 rounded-md bg-black/20 hover:bg-black/30 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Package Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-2 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C84B26]">Devotional Offerings</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
            Our Spiritual Event Services
          </h2>
          <div className="section-line mx-auto" />
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-medium">
            Delivering divine vibrations and soulful musical devotional experiences across Delhi NCR & India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="card-light overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {service.popular && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#C84B26] text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
                    Popular
                  </span>
                )}
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-black/80 shadow-sm border border-white/20">
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-[#C84B26] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-hindi font-bold text-[#C84B26]">{service.hindiTitle}</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between gap-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-xs font-bold flex items-center gap-1 text-[#C84B26] hover:underline"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-light text-xs py-1.5 px-3"
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

      {/* Why Choose Us */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Why Devotees Trust Sanjeev Batra & Party
            </h2>
            <div className="section-line mx-auto" />
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
              Our commitment to spiritual purity, musical excellence, and flawless event coordination.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                icon: ShieldCheck,
                title: "Grand Bhawan Decor",
                desc: "Floral Darbar, live Jhankis & crystal clear sound."
              }
            ].map((item, idx) => (
              <div key={idx} className="card-light p-4 sm:p-6 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#C84B26] flex items-center justify-center mx-auto">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery Preview */}
      <section className="py-4 px-4 sm:px-6 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Divine Glimpses & Videos
            </h2>
            <p className="text-xs text-slate-600 font-medium">Recent Mata Ki Chowki & Jagran setups by our party.</p>
          </div>
          <Link
            to="/gallery"
            className="btn-outline-light text-xs px-4 py-2"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_DATA.slice(0, 6).map((item) => (
            <Link
              to="/gallery"
              key={item.id}
              className="card-light overflow-hidden relative h-52 group cursor-pointer"
            >
              <img
                src={item.thumbnail || item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-sm font-bold text-white line-clamp-1">{item.title}</h3>
                <p className="text-xs text-orange-100 line-clamp-1 font-medium">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            Devotee Experiences & Reviews
          </h2>
          <div className="section-line mx-auto" />
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Read what host families say about our devotional bhajan programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="card-light p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{t.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
                "{t.comment}"
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{t.location}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-50 text-[#C84B26] font-bold border border-orange-200">
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
      <section className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-xl bg-gradient-to-r from-[#C84B26] to-[#D96B27] p-8 sm:p-12 text-center text-white space-y-4 shadow-md border border-orange-700">
          <div className="text-3xl">🪔</div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Ready to Organize a Divine Mata Ki Chowki or Jagran?
          </h2>
          <p className="text-xs sm:text-sm text-orange-100 font-medium max-w-xl mx-auto">
            Book Shri Sanjeev Batra & Party for your auspicious date. Call us directly or chat on WhatsApp for instant booking confirmation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="px-6 py-3 rounded-md bg-white text-[#C84B26] font-bold text-xs sm:text-sm hover:bg-orange-50 transition-colors shadow-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current text-[#C84B26]" />
              <span>Call +91 97164 79938</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-light text-xs sm:text-sm px-6 py-3 shadow-sm"
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
