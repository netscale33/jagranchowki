import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
import { FAQ_DATA, PHONE_NUMBER_PRIMARY } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 sm:px-8 bg-[#FFFDF9]" id="faq">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-bold shadow-sm">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Answers to common questions regarding Jagran Chowki, Sunderkand, and event bookings.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-orange-200 shadow-md overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-900 font-bold text-sm sm:text-base gap-4 hover:bg-orange-50/50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-orange-100 bg-orange-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-orange-600 to-amber-600 text-white text-center space-y-3 shadow-xl">
          <h3 className="text-lg font-bold font-heading">Have a specific question about your event?</h3>
          <p className="text-xs text-orange-100">Speak directly with Shri Sanjeev Batra for customized date confirmation.</p>
          <div className="flex justify-center gap-3 pt-2">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="px-6 py-3 rounded-full bg-white text-orange-800 font-bold text-xs hover:bg-orange-50 transition-colors flex items-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 fill-current text-orange-600" />
              <span>Call +91 98116 34026</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
