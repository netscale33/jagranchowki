import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQ_DATA, PHONE_NUMBER_PRIMARY } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 px-4 sm:px-6" id="faq">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-saffron">Got Questions?</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-cream">
            Frequently Asked Questions
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--c-text-muted)' }}>
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
                className="card overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-cream font-bold text-sm sm:text-base gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: 'var(--c-saffron)', color: '#fff' }}>
                      Q
                    </span>
                    <span className="font-display font-semibold">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-saffron-light transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm leading-relaxed border-t" style={{ borderColor: 'var(--c-border)', color: 'var(--c-text-muted)', background: 'var(--c-surface)' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Prompt */}
        <div className="card p-6 sm:p-8 text-center space-y-3" style={{ background: 'linear-gradient(135deg, #1C0D04 0%, #2A1205 100%)' }}>
          <h3 className="text-base sm:text-lg font-display font-bold text-cream">Have a specific question about your event?</h3>
          <p className="text-xs font-medium" style={{ color: 'var(--c-text-muted)' }}>Speak directly with Shri Sanjeev Batra for customized date confirmation.</p>
          <div className="flex justify-center gap-3 pt-2">
            <a
              href={`tel:${PHONE_NUMBER_PRIMARY}`}
              className="btn-primary text-xs px-5 py-2.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call +91 97164 79938</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
