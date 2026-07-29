import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Play, X, Star, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';

const MATA_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Goddess_Durga.jpg/800px-Goddess_Durga.jpg",
  "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231125-WA0033-1030x773.jpg",
  "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20190110-WA0002-773x1030.jpg",
];

const highlights = [
  "Live Bhajan Singers",
  "JBL/RCF Sound System",
  "Fresh Flower Bhawan",
  "Live Costume Jhankiyan",
];

export const HeroSection: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const handleImgError = () => {
    if (imgIdx < MATA_IMAGES.length - 1) setImgIdx(imgIdx + 1);
  };

  return (
    <>
      <section
        className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden hero-texture"
        style={{ background: 'linear-gradient(135deg, #0C0500 0%, #1A0800 60%, #0C0500 100%)' }}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #D4690A 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 pointer-events-none" style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* — Left: Text content — */}
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">

            {/* Hindi badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium border" style={{ borderColor: 'var(--c-border-strong)', color: 'var(--c-gold)', background: 'rgba(201,162,39,0.08)' }}>
              <span className="animate-diya text-base">🪔</span>
              <span className="font-hindi text-sm font-semibold">|| जय माता दी || श्री संजीव बत्रा एवं पार्टी</span>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ color: 'var(--c-text)' }}>
                Mata Ki Chowki &{' '}
                <span style={{ color: 'var(--c-saffron-light)' }}>Bhagwati Jagran</span>{' '}
                Organizers
              </h1>
              <p className="font-hindi text-base sm:text-xl font-medium leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
                दिल्ली NCR की सबसे प्रसिद्ध एवं विश्वसनीय जागरण पार्टी — भक्तिमय संगीत अनुभव
              </p>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {highlights.map((h, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded" style={{ background: 'rgba(200,120,30,0.1)', border: '1px solid rgba(200,120,30,0.2)', color: 'var(--c-text-muted)' }}>
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: '#10B981' }} />
                  {h}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed max-w-lg mx-auto lg:mx-0" style={{ color: 'var(--c-text-muted)' }}>
              Book Shri Sanjeev Batra & Party for Mata Ki Chowki, Bhagwati Jagran, Sunderkand Paath, Sai Sandhya & Khatu Shyam Bhajan across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a href={`tel:${PHONE_NUMBER_PRIMARY}`} className="btn-primary text-sm px-5 py-3">
                <Phone className="w-4 h-4 fill-current" />
                Call +91 97164 79938
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki/Jagran.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa text-sm px-5 py-3"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                WhatsApp Booking
              </a>
              <button onClick={() => setVideoOpen(true)} className="btn-outline text-sm px-5 py-3">
                <Play className="w-4 h-4 fill-current" style={{ color: 'var(--c-saffron-light)' }} />
                Watch Live
              </button>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs" style={{ color: 'var(--c-text-muted)', borderTop: '1px solid var(--c-border)' }}>
              <div className="flex items-center gap-1.5 pt-3">
                <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
                <span className="font-semibold" style={{ color: 'var(--c-text)' }}>4.9/5</span>
                <span>(1,280+ reviews)</span>
              </div>
              <span style={{ color: 'var(--c-border-strong)' }}>·</span>
              <div className="flex items-center gap-1.5 pt-3">
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: '#10B981' }} />
                <span>15+ Years Legacy</span>
              </div>
              <span style={{ color: 'var(--c-border-strong)' }}>·</span>
              <div className="flex items-center gap-1.5 pt-3">
                <Flame className="w-3.5 h-3.5" style={{ color: 'var(--c-saffron-light)' }} />
                <span>5,000+ Events</span>
              </div>
            </div>
          </div>

          {/* — Right: Photo card — */}
          <div className="relative">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
              style={{ border: '1px solid var(--c-border-strong)', height: '420px' }}
              onClick={() => setVideoOpen(true)}
            >
              <img
                src={MATA_IMAGES[imgIdx]}
                alt="Sherawali Mata Rani — Jagran Chowki by Sanjeev Batra & Party"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                onError={handleImgError}
              />
              <div className="photo-overlay absolute inset-0" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'rgba(212,105,10,0.92)', border: '2px solid rgba(255,255,255,0.3)' }}>
                  <Play className="w-6 h-6 fill-current text-white ml-0.5" />
                </div>
                <span className="text-xs font-semibold text-white px-4 py-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  Watch Live Performance
                </span>
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: 'var(--c-saffron)' }}>
                Special Booking Offer
              </div>

              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between" style={{ background: 'rgba(12,5,0,0.9)', borderTop: '1px solid rgba(200,120,30,0.2)' }}>
                <span className="text-xs font-medium" style={{ color: 'var(--c-gold)' }}>Full Bhawan Setup & Orchestra Included</span>
                <Link
                  to="/contact"
                  className="text-[11px] font-bold px-3 py-1.5 rounded text-white"
                  style={{ background: 'var(--c-saffron)' }}
                  onClick={e => e.stopPropagation()}
                >
                  Book Date →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(6px)' }}>
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-full max-w-3xl rounded-xl overflow-hidden" style={{ border: '1px solid var(--c-border-strong)' }}>
            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/bJMSNncshgo?autoplay=1&rel=0"
                title="Shri Sanjeev Batra & Party — Live Mata Ki Chowki Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="px-4 py-3 text-center" style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)' }}>
              <p className="text-sm font-semibold" style={{ color: 'var(--c-gold)' }}>Shri Sanjeev Batra & Party — Live Jagran & Jhanki Highlights</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--c-text-muted)' }}>Call +91 97164 79938 to book your date</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
