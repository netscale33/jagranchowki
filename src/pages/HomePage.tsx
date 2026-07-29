import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { FAQSection } from '../components/FAQSection';
import { SERVICES_DATA, GALLERY_DATA, TESTIMONIALS_DATA, PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Star, CheckCircle2, ArrowRight, Phone, Calendar, Music, HeartHandshake, ShieldCheck } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-20 pb-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Special Offer Highlight Banner */}
      <section className="px-4 sm:px-6">
        <div
          className="max-w-7xl mx-auto rounded-xl p-6 sm:p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, #1C0D04 0%, #2A1205 100%)', border: '1px solid var(--c-border-strong)' }}
        >
          <div className="space-y-2 z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider" style={{ background: 'rgba(212,105,10,0.15)', color: 'var(--c-saffron-light)', border: '1px solid rgba(212,105,10,0.3)' }}>
              <span>🪔 Most Requested Package</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-cream">
              Complete Mata Ki Chowki & Jagran Setup
            </h2>
            <p className="text-xs sm:text-sm font-medium max-w-xl" style={{ color: 'var(--c-text-muted)' }}>
              Includes Singer Team, Dholak, Pad, Sound System, Temple Bhawan Decor, Jyoti Prachand & Kanya Pujan Prasad arrangement.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 z-10 w-full md:w-auto justify-center">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="btn-primary text-xs sm:text-sm px-5 py-3"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Book Event</span>
            </a>
            <Link
              to="/services/mata-ki-chowki"
              className="btn-outline text-xs sm:text-sm px-5 py-3"
            >
              <span>Package Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-4 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-saffron">Devotional Offerings</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-cream">
            Our Spiritual Event Services
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-xs sm:text-sm max-w-xl mx-auto font-medium" style={{ color: 'var(--c-text-muted)' }}>
            Delivering divine vibrations and soulful musical devotional experiences across Delhi NCR & India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="card overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="photo-overlay absolute inset-0" />
                {service.popular && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: 'var(--c-saffron)' }}>
                    Popular
                  </span>
                )}
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ background: 'rgba(12,5,0,0.85)', border: '1px solid var(--c-border)' }}>
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-display font-bold text-cream group-hover:text-saffron-light transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-xs font-hindi font-semibold" style={{ color: 'var(--c-gold)' }}>{service.hindiTitle}</div>
                  <p className="text-xs leading-relaxed font-medium" style={{ color: 'var(--c-text-muted)' }}>
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t" style={{ borderColor: 'var(--c-border)' }}>
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--c-text-muted)' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between gap-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-xs font-bold flex items-center gap-1 text-saffron hover:underline"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa text-xs py-1.5 px-3"
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
      <section className="py-12 px-4 sm:px-6" style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)', borderBottom: '1px solid var(--c-border)' }}>
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-cream">
              Why Devotees Trust Sanjeev Batra & Party
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-xs sm:text-sm font-medium max-w-xl mx-auto" style={{ color: 'var(--c-text-muted)' }}>
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
              <div key={idx} className="card p-4 sm:p-6 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto" style={{ background: 'rgba(212,105,10,0.1)', color: 'var(--c-saffron-light)' }}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-cream">{item.title}</h3>
                <p className="text-xs leading-relaxed font-medium" style={{ color: 'var(--c-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery Preview */}
      <section className="py-4 px-4 sm:px-6 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-cream">
              Divine Glimpses & Videos
            </h2>
            <p className="text-xs font-medium" style={{ color: 'var(--c-text-muted)' }}>Recent Mata Ki Chowki & Jagran setups by our party.</p>
          </div>
          <Link
            to="/gallery"
            className="btn-outline text-xs px-4 py-2"
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
              className="card overflow-hidden relative h-52 group cursor-pointer"
            >
              <img
                src={item.thumbnail || item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="photo-overlay absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider">{item.category}</span>
                <h3 className="text-sm font-bold text-cream line-clamp-1">{item.title}</h3>
                <p className="text-xs text-muted line-clamp-1 font-medium">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-cream">
            Devotee Experiences & Reviews
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-xs sm:text-sm font-medium max-w-xl mx-auto" style={{ color: 'var(--c-text-muted)' }}>
            Read what host families say about our devotional bhajan programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] font-medium" style={{ color: 'var(--c-text-faint)' }}>{t.date}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed italic font-medium" style={{ color: 'var(--c-text)' }}>
                "{t.comment}"
              </p>
              <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: 'var(--c-border)' }}>
                <div>
                  <div className="text-xs font-bold text-cream">{t.name}</div>
                  <div className="text-[11px]" style={{ color: 'var(--c-text-muted)' }}>{t.location}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded font-bold" style={{ background: 'rgba(212,105,10,0.15)', color: 'var(--c-saffron-light)', border: '1px solid rgba(212,105,10,0.3)' }}>
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
        <div
          className="max-w-5xl mx-auto rounded-xl p-8 sm:p-12 text-center text-white space-y-4 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1C0D04 0%, #321505 100%)', border: '1px solid var(--c-border-strong)' }}
        >
          <div className="text-3xl animate-diya">🪔</div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-cream">
            Ready to Organize a Divine Mata Ki Chowki or Jagran?
          </h2>
          <p className="text-xs sm:text-sm font-medium max-w-xl mx-auto" style={{ color: 'var(--c-text-muted)' }}>
            Book Shri Sanjeev Batra & Party for your auspicious date. Call us directly or chat on WhatsApp for instant booking confirmation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="btn-primary text-xs sm:text-sm px-6 py-3"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call +91 97164 79938</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa text-xs sm:text-sm px-6 py-3"
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
