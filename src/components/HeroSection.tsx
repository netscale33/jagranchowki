import React, { useState } from 'react';
import { Phone, Sparkles, Star, Play, X, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import { DiyaGlow } from './DiyaGlow';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

// 100% Guaranteed Worldwide High-Resolution Sherawali Mata Image Links (Wikipedia Commons & CDN)
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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-6 sm:py-10 px-3 sm:px-8 bg-gradient-to-b from-orange-100/90 via-amber-50/80 to-[#FFFDF9] border-b border-orange-200">
      {/* Decorative Divine Radial Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-orange-400/20 via-amber-300/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Hero Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column - Content & Action CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-6 text-center lg:text-left py-1">
          {/* Top Spiritual Tag - Fixed Single Line */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold shadow-sm w-fit mx-auto lg:mx-0">
            <DiyaGlow size="sm" />
            <span className="font-hindi text-sm sm:text-base text-red-700 font-bold whitespace-nowrap">|| जय माता दी ||</span>
            <span className="text-orange-400">•</span>
            <span className="whitespace-nowrap">श्री संजीव बत्रा एवं पार्टी</span>
          </div>

          {/* Headline */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight tracking-tight text-slate-900">
              Mata Ki Chowki & Bhagwati Jagran <span className="saffron-gradient-text">Organizers</span>
            </h1>
            <p className="text-sm sm:text-2xl font-hindi text-orange-900 font-extrabold leading-relaxed">
              दिल्ली NCR की सबसे प्रसिद्ध एवं प्रामाणिक जागरण पार्टी • भक्तिमय संगीत अनुभव
            </p>
          </div>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
            {[
              "Renowned Singer Team",
              "JBL/RCF Sound Setup",
              "Fresh Flower Bhawan",
              "Live Costume Jhankiyan",
              "Akhand Jyoti Prachand"
            ].map((tag, idx) => (
              <span key={idx} className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-900 text-[11px] sm:text-xs font-bold flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Book Shri Sanjeev Batra & Party for auspicious Mata Ki Chowki, Bhagwati Jagran, Sunderkand Paath, Sai Sandhya & Khatu Shyam Bhajan across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad.
          </p>

          {/* Action CTAs with Hover Glow */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white font-extrabold text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/40 border border-orange-300"
            >
              <Phone className="w-4 h-4 fill-current text-yellow-300" />
              <span>Book Now (+91 97164 79938)</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki/Jagran.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-emerald-500/40 border border-emerald-400"
            >
              <WhatsAppIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
              <span>WhatsApp Booking</span>
            </a>

            <button
              onClick={() => setShowVideoModal(true)}
              className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-full bg-white hover:bg-orange-50 text-orange-700 font-bold text-xs sm:text-sm transition-all border-2 border-orange-300 shadow-md hover:scale-105"
            >
              <Play className="w-4 h-4 text-orange-600 fill-current animate-pulse" />
              <span>Watch Live Video</span>
            </button>
          </div>

          {/* Trust Stats Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-700 font-semibold border-t border-orange-200/80">
            <div className="flex items-center gap-1 font-bold text-amber-600">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="ml-1 text-slate-900 font-bold">4.9 / 5 (1,280+ Reviews)</span>
            </div>
            <span>•</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              15+ Yrs Legacy
            </span>
            <span>•</span>
            <span className="font-bold text-orange-700 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-orange-600" />
              5,000+ Events
            </span>
          </div>
        </div>

        {/* Right Column - Standard Size Box Shifted Slightly UP & LEFT */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:-mt-8 lg:-ml-5">
          <div className="relative w-full h-[380px] sm:h-[490px] rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-400 bg-white p-3 group">
            {/* Bright, Crystal Clear Sherawali Mata Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-amber-50">
              <img
                src={imgSrc}
                alt="Sherawali Mata Rani Riding Lion"
                loading="eager"
                decoding="async"
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Light Bottom Gradient Only so Image is 100% Bright & Visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Play Live Video Overlay Button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 group/play"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-2xl group-hover/play:scale-115 transition-transform border-4 border-yellow-300">
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1 text-yellow-300" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-white bg-black/85 px-4 py-2 rounded-full backdrop-blur-md border border-yellow-300/60 shadow-xl">
                  Click to Watch Live Performance Video
                </span>
              </button>

              {/* Special Booking Offer Badge */}
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white font-black text-xs uppercase shadow-xl border border-yellow-300">
                Special Booking Offer
              </div>

              {/* Bottom Card Strip */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2 font-bold text-yellow-300">
                  <Sparkles className="w-4.5 h-4.5 text-yellow-300" />
                  <span>Full Bhawan Setup & Orchestra Included</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-extrabold hover:scale-105 transition-all text-xs"
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
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200">
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-400 p-4 space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/bJMSNncshgo?autoplay=1"
                title="Jagran Chowki Sanjeev Batra Live Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold font-heading text-orange-700">
                Shri Sanjeev Batra & Party - Live Jagran & Jhanki Highlights
              </h3>
              <p className="text-xs text-slate-600">
                Call +91 97164 79938 for date booking and live video clips on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
