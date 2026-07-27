import React, { useState } from 'react';
import { DiyaGlow } from '../components/DiyaGlow';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const MATA_IMAGE_1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Goddess_Durga.jpg/800px-Goddess_Durga.jpg";
const MATA_IMAGE_2 = "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20190110-WA0002-773x1030.jpg";

export const AboutPage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(MATA_IMAGE_1);

  return (
    <div className="py-12 px-4 sm:px-8 max-w-6xl mx-auto space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-bold shadow-sm">
          <DiyaGlow size="sm" />
          <span>15+ Years Of Devotional Excellence</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900">
          About Shri Sanjeev Batra & Party
        </h1>
        <p className="text-sm sm:text-base text-orange-950 font-hindi font-semibold max-w-2xl mx-auto">
          "भगवान की सेवा और भक्तों के दिल को छूने वाली मधुर भजनों की यात्रा"
        </p>
      </div>

      {/* Main Image Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Image (Goddess Durga / Mata Rani) */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-400 bg-amber-50 group">
          <img
            src={imgSrc}
            alt="Sherawali Mata Rani Sanjeev Batra"
            loading="eager"
            onError={() => setImgSrc(MATA_IMAGE_2)}
            className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Shri Sanjeev Batra & Party (Delhi NCR)
            </span>
            <h3 className="text-xl font-bold font-heading text-white">
              Divine Sherawali Mata Ka Bhawan & Bhajan Samiti
            </h3>
            <p className="text-xs text-orange-100 mt-1">
              Organizing authentic Mata Ki Chowki, Jagran, Sunderkand & Sai Sandhya for over 15 years.
            </p>
          </div>
        </div>

        {/* Right Story Content */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Our Journey & Devotional Mission
            </h2>
            <div className="h-1 w-20 bg-orange-600 rounded-full" />
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Founded by <strong>Shri Sanjeev Batra</strong>, our devotional group has been at the forefront of bringing authentic, soul-stirring spiritual events to families and grand samitis across Delhi NCR, Haryana, Uttar Pradesh, Punjab, and Rajasthan.
          </p>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            We specialize in complete end-to-end management of <strong>Mata Ki Chowki (starting ₹11,000/-)</strong>, <strong>Bhagwati Jagran</strong>, <strong>Balaji Sunderkand Paath</strong>, <strong>Sai Sandhya</strong>, and <strong>Khatu Shyam Kirtan</strong>. Our team includes lead male & female bhajan singers, traditional dholak and pad players, high-power sound engineers, and professional stage artists for live costume Jhankis.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-center">
              <div className="text-2xl font-bold text-orange-600 font-heading">5,000+</div>
              <div className="text-xs font-semibold text-slate-700">Successful Events</div>
            </div>
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-center">
              <div className="text-2xl font-bold text-orange-600 font-heading">15+ Yrs</div>
              <div className="text-xs font-semibold text-slate-700">Spiritual Legacy</div>
            </div>
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
          <div key={idx} className="bg-white p-6 rounded-3xl border border-orange-200 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">{item.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
