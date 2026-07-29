import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQ_DATA, PHONE_NUMBER_PRIMARY } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-10 px-4 sm:px-6" id="faq">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C84B26]">Got Questions?</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="section-line mx-auto" />
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Answers to common questions regarding Jagran Chowki, Sunderkand, and event bookings.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="card-light overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-slate-900 font-bold text-sm sm:text-base gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-[#C84B26] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
                      Q
                    </span>
                    <span className="font-display font-bold">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C84B26] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-100 bg-slate-50/50 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Prompt */}
        <div className="card-light p-6 sm:p-8 text-center space-y-3 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
          <h3 className="text-base sm:text-lg font-display font-bold text-slate-900">Have a specific question about your event?</h3>
          <p className="text-xs text-slate-600 font-medium">Speak directly with Shri Sanjeev Batra for customized date confirmation.</p>
          <div className="flex justify-center gap-3 pt-1">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="btn-vermilion text-xs px-5 py-2.5 shadow-sm"
            >
              <Phone className="w-4 h-4 fill-current text-yellow-300" />
              <span>Call +91 97164 79938</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
