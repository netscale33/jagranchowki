import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER_PRIMARY } from '../data/mockData';

export const PackageCalculator: React.FC = () => {
  const [eventType, setEventType] = useState<'chowki' | 'jagran' | 'sunderkand' | 'sai' | 'khatu'>('chowki');
  const [singers, setSingers] = useState<number>(1);
  const [soundSize, setSoundSize] = useState<'standard' | 'large' | 'concert'>('standard');
  const [jhankiCount, setJhankiCount] = useState<number>(2);
  const [flowerDecor, setFlowerDecor] = useState<'basic' | 'fresh' | 'royal'>('basic');
  const [includePhoolHoli, setIncludePhoolHoli] = useState<boolean>(false);

  // Price Calculation Logic
  const basePrices = {
    chowki: 11000,
    jagran: 21000,
    sunderkand: 7500,
    sai: 11000,
    khatu: 15000,
  };

  let total = basePrices[eventType];

  if (singers === 2) total += 4000;
  if (singers === 3) total += 9000;

  if (soundSize === 'large') total += 3000;
  if (soundSize === 'concert') total += 8000;

  total += jhankiCount * 2500;

  if (flowerDecor === 'fresh') total += 5000;
  if (flowerDecor === 'royal') total += 12000;

  if (includePhoolHoli) total += 2500;

  const handleWhatsAppQuote = () => {
    const text = `Jai Mata Di! I calculated a customized package on your website:%0A- Event: ${eventType.toUpperCase()}%0A- Singers: ${singers}%0A- Sound: ${soundSize}%0A- Jhankiyan: ${jhankiCount}%0A- Decor: ${flowerDecor}%0A- Phoolon Ki Holi: ${includePhoolHoli ? 'Yes' : 'No'}%0A*Estimated Total: ₹${total.toLocaleString('en-IN')}/-*%0APlease confirm availability for my date.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-[#FFF7ED]" id="package-calculator">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-bold shadow-sm">
            <Calculator className="w-4 h-4 text-orange-600" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900">
            Custom Package & Pricing Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Customize singers, sound system, Jhankiyan, and Bhawan decor to calculate your estimated package cost instantly.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Options (Left 2 cols) */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-orange-200 shadow-xl space-y-6">
            {/* Step 1: Event Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-orange-800">
                1. Select Divine Event Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'chowki', label: 'Mata Ki Chowki', price: '₹11,000' },
                  { id: 'jagran', label: 'Bhagwati Jagran', price: '₹21,000' },
                  { id: 'sunderkand', label: 'Sunderkand Paath', price: '₹7,500' },
                  { id: 'sai', label: 'Sai Sandhya', price: '₹11,000' },
                  { id: 'khatu', label: 'Khatu Shyam Sandhya', price: '₹15,000' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEventType(item.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      eventType === item.id
                        ? 'bg-orange-500 text-white font-bold border-orange-600 shadow-md'
                        : 'bg-orange-50/50 border-orange-200 text-slate-700 hover:bg-orange-100'
                    }`}
                  >
                    <div className="text-xs font-semibold">{item.label}</div>
                    <div className={`text-[11px] mt-1 ${eventType === item.id ? 'text-yellow-200' : 'text-orange-600 font-bold'}`}>
                      {item.price} base
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Singer Team */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-orange-800">
                2. Number of Vocal Artists (Singers)
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { count: 1, label: '1 Lead Artist' },
                  { count: 2, label: '2 Lead Artists (+₹4k)' },
                  { count: 3, label: 'Renowned Group (+₹9k)' },
                ].map((item) => (
                  <button
                    key={item.count}
                    onClick={() => setSingers(item.count)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      singers === item.count
                        ? 'bg-orange-600 text-white font-bold border-orange-600'
                        : 'bg-orange-50/50 border-orange-200 text-slate-700 hover:bg-orange-100'
                    }`}
                  >
                    <div className="text-xs">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Sound System */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-orange-800">
                3. Sound System Output
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard JBL 2000W' },
                  { id: 'large', label: 'RCF Sound 5000W (+₹3k)' },
                  { id: 'concert', label: 'Concert Line Array (+₹8k)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSoundSize(item.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      soundSize === item.id
                        ? 'bg-orange-600 text-white font-bold border-orange-600'
                        : 'bg-orange-50/50 border-orange-200 text-slate-700 hover:bg-orange-100'
                    }`}
                  >
                    <div className="text-xs">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Live Jhankiyan */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-orange-800">
                4. Live Costume Jhankiyan (₹2,500 per Jhanki)
              </label>
              <div className="grid grid-cols-4 gap-2.5">
                {[0, 2, 3, 5].map((count) => (
                  <button
                    key={count}
                    onClick={() => setJhankiCount(count)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      jhankiCount === count
                        ? 'bg-orange-600 text-white font-bold border-orange-600'
                        : 'bg-orange-50/50 border-orange-200 text-slate-700 hover:bg-orange-100'
                    }`}
                  >
                    <div className="text-xs">{count === 0 ? 'No Jhanki' : `${count} Jhankiyan`}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Flower Decor */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-orange-800">
                5. Bhawan Flower Decor
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'basic', label: 'Standard Bhawan Decor' },
                  { id: 'fresh', label: 'Fresh Rose Bhawan (+₹5k)' },
                  { id: 'royal', label: 'Royal Imported Flowers (+₹12k)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFlowerDecor(item.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      flowerDecor === item.id
                        ? 'bg-orange-600 text-white font-bold border-orange-600'
                        : 'bg-orange-50/50 border-orange-200 text-slate-700 hover:bg-orange-100'
                    }`}
                  >
                    <div className="text-xs">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Option */}
            <div className="pt-2">
              <label className="flex items-center gap-3 p-3.5 rounded-xl bg-orange-50 border border-orange-200 cursor-pointer hover:border-orange-300">
                <input
                  type="checkbox"
                  checked={includePhoolHoli}
                  onChange={(e) => setIncludePhoolHoli(e.target.checked)}
                  className="w-4 h-4 accent-orange-600 rounded"
                />
                <span className="text-xs font-bold text-orange-950">
                  Include Phoolon Ki Holi & Organic Rose Petal Rain (+₹2,500)
                </span>
              </label>
            </div>
          </div>

          {/* Result Card (Right 1 col) */}
          <div className="sticky top-28 bg-gradient-to-br from-orange-600 to-amber-700 text-white p-6 rounded-3xl shadow-2xl space-y-6">
            <div className="text-center pb-4 border-b border-orange-400/40 space-y-1">
              <div className="text-xs font-bold text-yellow-200 uppercase tracking-wider">Estimated Total Cost</div>
              <div className="text-4xl font-extrabold font-heading text-white">
                ₹{total.toLocaleString('en-IN')}
                <span className="text-xs font-sans text-orange-100 font-normal"> /- approx</span>
              </div>
              <div className="text-[11px] text-emerald-200 font-bold">No hidden charges • All inclusive</div>
            </div>

            <div className="space-y-2.5 text-xs text-orange-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                <span>Full Musical Instruments & Dholak</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                <span>Jyoti Prachand & Kanya Pujan Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                <span>Pushp Varsha & Grand Aarti</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                <span>Punctual arrival 2 hours prior</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-lg hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Instant Quote on WhatsApp</span>
              </button>

              <a
                href={`tel:${PHONE_NUMBER_PRIMARY}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white text-orange-800 font-bold text-xs hover:bg-orange-50 transition-all shadow-lg hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-current text-orange-600" />
                <span>Call Sanjeev Batra (+91 98116 34026)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
