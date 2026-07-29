import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Play, X, Star, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';

const SHERAWALI_MATA_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Goddess_Durga.jpg/800px-Goddess_Durga.jpg";
const SHERAWALI_MATA_FALLBACK = "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20190110-WA0002-773x1030.jpg";

export const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(SHERAWALI_MATA_IMAGE);

  return (
    <section className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EA] to-[#FAF7F2] border-b border-amber-900/10 py-8 sm:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left Column: Headline & Information */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">

          {/* Spiritual Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-950 text-xs font-bold w-fit mx-auto lg:mx-0 shadow-sm">
            <span className="text-red-700 font-hindi font-bold">|| जय माता दी ||</span>
            <span className="text-orange-400">•</span>
            <span className="text-slate-800">श्री संजीव बत्रा एवं पार्टी (Delhi NCR)</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-tight tracking-tight">
              Mata Ki Chowki & <span className="text-[#C84B26]">Bhagwati Jagran</span> Organizers
            </h1>
            <p className="text-sm sm:text-xl font-hindi text-amber-900 font-bold leading-relaxed">
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
              <span key={idx} className="px-2.5 py-1 rounded-md bg-white border border-amber-900/10 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-650 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Book Shri Sanjeev Batra & Party for auspicious Mata Ki Chowki, Bhagwati Jagran, Sunderkand Paath, Sai Sandhya & Khatu Shyam Bhajan across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="btn-vermilion text-xs sm:text-sm py-3 px-6 shadow-md hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-4 h-4 fill-current text-yellow-300" />
              <span>Book Event (+91 97164 79938)</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Jai%20Mata%20Di!%20I%20want%20to%20book%20a%20Chowki/Jagran.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-light text-xs sm:text-sm py-3 px-5 shadow-md hover:scale-[1.02] transition-transform"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Booking</span>
            </a>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="btn-outline-light text-xs sm:text-sm py-3 px-4 shadow-sm"
            >
              <Play className="w-4 h-4 text-[#C84B26] fill-current" />
              <span>Watch Live Performance</span>
            </button>
          </div>

          {/* Trust Stats Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-slate-600 font-medium border-t border-amber-900/10">
            <div className="flex items-center gap-1 text-amber-600 font-bold">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="ml-1 text-slate-900">4.9 / 5 (1,280+ Reviews)</span>
            </div>
            <span>•</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              15+ Yrs Legacy
            </span>
            <span>•</span>
            <span className="font-bold text-orange-700 flex items-center gap-1">
              <Flame className="w-4 h-4 text-orange-600" />
              5,000+ Events
            </span>
          </div>
        </div>

        {/* Right Column: Clean Sherawali Mata Media Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onClick={() => setVideoModalOpen(true)}
            className="relative w-full max-w-md h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-lg border border-amber-900/15 bg-white p-2.5 group cursor-pointer"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-amber-50">
              <img
                src={imgSrc}
                alt="Sherawali Mata Rani Sanjeev Batra"
                decoding="async"
                onError={() => setImgSrc(SHERAWALI_MATA_FALLBACK)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Center Play Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 group/play">
                <div className="w-14 h-14 rounded-full bg-[#C84B26] text-white flex items-center justify-center shadow-lg group-hover/play:scale-110 transition-transform border-2 border-amber-200">
                  <Play className="w-7 h-7 fill-current ml-0.5 text-yellow-300" />
                </div>
                <span className="text-xs font-bold text-white bg-black/75 px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                  Click to Watch Performance Video
                </span>
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-[#C84B26] text-white font-bold text-[11px] uppercase tracking-wider shadow-sm">
                Special Booking Offer
              </div>

              {/* Bottom Strip */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/85 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-between text-white text-xs">
                <span className="font-semibold text-amber-300 text-[11px]">Full Bhawan Setup & Orchestra Included</span>
                <Link
                  to="/contact"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1 rounded bg-[#C84B26] hover:bg-[#AF3E1E] text-white font-bold text-[10px] transition-colors"
                >
                  Book Date →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-150">
          <button
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden border border-amber-300 p-3 space-y-3 shadow-2xl">
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
              <h3 className="text-base font-bold font-display text-slate-900">
                Shri Sanjeev Batra & Party — Live Jagran & Jhanki Highlights
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Call +91 97164 79938 for date booking and live video clips on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
