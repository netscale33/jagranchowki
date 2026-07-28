import React, { useState } from 'react';
import { Phone, Sparkles, Star, Play, X, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import { DiyaGlow } from './DiyaGlow';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const SHERAWALI_MATA_IMAGE_1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Goddess_Durga.jpg/800px-Goddess_Durga.jpg";
const SHERAWALI_MATA_IMAGE_2 = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Durga_Puja_Mata_Durga.jpg";
const SHERAWALI_MATA_IMAGE_3 = "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20190110-WA0002-773x1030.jpg";

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [imgSrc, setImgSrc] = useState(SHERAWALI_MATA_IMAGE_1);

  const handleImageError = () => {
    if (imgSrc === SHERAWALI_MATA_IMAGE_1) {
      setImgSrc(SHERAWALI_MATA_IMAGE_2);
    } else if (imgSrc === SHERAWALI_MATA_IMAGE_2) {
      setImgSrc(SHERAWALI_MATA_IMAGE_3);
    }
  };

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-4 sm:py-8 px-3 sm:px-6 bg-gradient-to-b from-orange-50 via-amber-50/30 to-[#FFFDF9] border-b border-orange-100">
      {/* Decorative background aura (subtle, no high-intensity neon glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-orange-200/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Hero Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center w-full">
        {/* Left Column - Content & Action CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-3 sm:space-y-4 text-center lg:text-left py-1">
          {/* Top Spiritual Tag - Fixed Single Line */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-950 text-xs sm:text-sm font-bold shadow-sm w-fit mx-auto lg:mx-0">
            <DiyaGlow size="sm" />
            <span className="font-hindi text-sm text-red-700 font-bold whitespace-nowrap">|| जय माता दी ||</span>
            <span className="text-orange-400">•</span>
            <span className="whitespace-nowrap">श्री संजीव बत्रा एवं पार्टी</span>
          </div>

          {/* Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight tracking-tight text-slate-900">
              Mata Ki Chowki & Bhagwati Jagran <span className="text-orange-600">Organizers</span>
            </h1>
            <p className="text-xs sm:text-lg font-hindi text-orange-900 font-bold leading-normal">
              दिल्ली NCR की सबसे प्रसिद्ध एवं प्रामाणिक जागरण पार्टी • भक्तिमय संगीत अनुभव
            </p>
          </div>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-1.5">
            {[
              "Renowned Singer Team",
              "JBL/RCF Sound Setup",
              "Fresh Flower Bhawan",
              "Live Costume Jhankiyan",
              "Akhand Jyoti Prachand"
            ].map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md bg-orange-50/50 border border-orange-100 text-orange-900 text-[10px] sm:text-xs font-semibold flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-650 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Book Shri Sanjeev Batra & Party for auspicious Mata Ki Chowki, Bhagwati Jagran, Sunderkand Paath, Sai Sandhya & Khatu Shyam Bhajan across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold text-xs sm:text-sm hover:scale-102 transition-all duration-200 shadow-md border border-orange-500"
            >
              <Phone className="w-3.5 h-3.5 fill-current text-yellow-300" />
              <span>Book Now (+91 97164 79938)</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki/Jagran.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm hover:scale-102 transition-all duration-200 shadow-md border border-emerald-500"
            >
              <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
              <span>WhatsApp Booking</span>
            </a>

            <button
              onClick={() => setShowVideoModal(true)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-orange-50 text-orange-700 font-bold text-xs sm:text-sm transition-all border border-orange-200 shadow-sm"
            >
              <Play className="w-3.5 h-3.5 text-orange-650 fill-current" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* Trust Stats Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-500 font-semibold border-t border-slate-100">
            <div className="flex items-center gap-1 text-amber-600">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="ml-0.5 text-slate-800 font-bold">4.9 (1,280+ Reviews)</span>
            </div>
            <span>•</span>
            <span className="font-bold text-emerald-700 flex items-center gap-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              15+ Yrs Legacy
            </span>
            <span>•</span>
            <span className="font-bold text-orange-700 flex items-center gap-0.5">
              <Flame className="w-3.5 h-3.5 text-orange-600" />
              5,000+ Events
            </span>
          </div>
        </div>

        {/* Right Column - Standard Size Box Shifted Slightly UP & LEFT */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:-mt-6 lg:-ml-4">
          <div className="relative w-full h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-orange-200/80 bg-white p-2.5 group">
            {/* Bright, Crystal Clear Sherawali Mata Image */}
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner bg-amber-50">
              <img
                src={imgSrc}
                alt="Sherawali Mata Rani Riding Lion"
                loading="eager"
                decoding="async"
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-700"
              />

              {/* Light Bottom Gradient Only so Image is 100% Bright & Visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Play Live Video Overlay Button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 group/play"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-lg group-hover/play:scale-105 transition-transform border-2 border-yellow-300">
                  <Play className="w-7 h-7 fill-current ml-0.5 text-yellow-300" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-white bg-black/80 px-3 py-1.5 rounded-full border border-yellow-300/40 shadow-md">
                  Click to Watch Performance Video
                </span>
              </button>

              {/* Special Booking Offer Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-[10px] uppercase shadow-md border border-yellow-400/50">
                Special Booking Offer
              </div>

              {/* Bottom Card Strip */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/85 rounded-xl border border-white/10 flex items-center justify-between text-white text-[11px]">
                <div className="flex items-center gap-1.5 font-bold text-yellow-300">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Bhawan Setup & Orchestra</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-3 py-1 rounded bg-orange-600 hover:bg-orange-500 text-white font-bold text-[10px]"
                >
                  Book Date →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center animate-in fade-in duration-150">
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-colors z-50"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden border border-orange-400 p-3 space-y-3 shadow-2xl">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/bJMSNncshgo?autoplay=1"
                title="Jagran Chowki Sanjeev Batra Live Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center space-y-0.5">
              <h3 className="text-sm sm:text-base font-bold font-heading text-orange-700">
                Shri Sanjeev Batra & Party - Live Jagran & Jhanki Highlights
              </h3>
              <p className="text-[11px] text-slate-500">
                Call +91 97164 79938 for date booking and live video clips on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
