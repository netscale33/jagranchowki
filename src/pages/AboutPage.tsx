import React, { useState } from 'react';
import { Award, Users, Heart, Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PHONE_NUMBER_PRIMARY, WHATSAPP_NUMBER } from '../data/mockData';

const MATA_IMAGE_1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Goddess_Durga.jpg/800px-Goddess_Durga.jpg";
const MATA_IMAGE_2 = "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20190110-WA0002-773x1030.jpg";

export const AboutPage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(MATA_IMAGE_1);

  return (
    <div className="py-10 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold" style={{ background: 'rgba(212,105,10,0.12)', color: 'var(--c-gold)', border: '1px solid rgba(212,105,10,0.25)' }}>
          <span>🪔 15+ Years Of Devotional Excellence</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-cream">
          About Shri Sanjeev Batra & Party
        </h1>
        <p className="text-sm sm:text-base font-hindi font-medium max-w-2xl mx-auto text-gold">
          "भगवान की सेवा और भक्तों के दिल को छूने वाली मधुर भजनों की यात्रा"
        </p>
        <div className="section-divider mx-auto" />
      </div>

      {/* Main Image Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Image */}
        <div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-2xl border bg-black group" style={{ borderColor: 'var(--c-border-strong)' }}>
          <img
            src={imgSrc}
            alt="Sherawali Mata Rani Sanjeev Batra"
            loading="eager"
            onError={() => setImgSrc(MATA_IMAGE_2)}
            className="w-full h-80 sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="photo-overlay absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-1.5" style={{ color: 'var(--c-gold)' }}>
              <Sparkles className="w-4 h-4 text-gold" />
              Shri Sanjeev Batra & Party (Delhi NCR)
            </span>
            <h3 className="text-lg font-bold font-display text-cream mt-1">
              Divine Sherawali Mata Ka Bhawan & Bhajan Samiti
            </h3>
            <p className="text-xs text-muted mt-1">
              Organizing authentic Mata Ki Chowki, Jagran, Sunderkand & Sai Sandhya for over 15 years.
            </p>
          </div>
        </div>

        {/* Right Story Content */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-cream">
              Our Journey & Devotional Mission
            </h2>
            <div className="section-divider" />
          </div>

          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
            Founded by <strong className="text-cream">Shri Sanjeev Batra</strong>, our devotional group has been at the forefront of bringing authentic, soul-stirring spiritual events to families and grand samitis across Delhi NCR, Haryana, Uttar Pradesh, Punjab, and Rajasthan.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
            We specialize in complete end-to-end management of <strong className="text-saffron-light">Mata Ki Chowki (starting ₹11,000/-)</strong>, <strong className="text-cream">Bhagwati Jagran</strong>, <strong className="text-cream">Balaji Sunderkand Paath</strong>, <strong className="text-cream">Sai Sandhya</strong>, and <strong className="text-cream">Khatu Shyam Kirtan</strong>. Our team includes lead male & female bhajan singers, traditional dholak and pad players, high-power sound engineers, and professional stage artists for live costume Jhankis.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold font-display text-saffron-light">5,000+</div>
              <div className="text-xs font-semibold text-muted">Successful Events</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold font-display text-gold">15+ Yrs</div>
              <div className="text-xs font-semibold text-muted">Spiritual Legacy</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href={`tel:${PHONE_NUMBER_PRIMARY}`} className="btn-primary text-xs px-5 py-2.5">
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call +91 97164 79938</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa text-xs px-5 py-2.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {[
          {
            icon: Award,
            title: "Purity & Devotion",
            desc: "Every bhajan and bhent is performed with strict spiritual etiquette and pure devotion."
          },
          {
            icon: Users,
            title: "Professional Singers",
            desc: "Renowned male and female vocalists trained in classical devotional sangeet."
          },
          {
            icon: Heart,
            title: "Host Satisfaction",
            desc: "We take full responsibility for sound, Bhawan decoration, lighting, and stage setup."
          }
        ].map((item, idx) => (
          <div key={idx} className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ background: 'rgba(212,105,10,0.1)', color: 'var(--c-saffron-light)' }}>
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-cream">{item.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
