import React, { useState } from 'react';
import {
  PHONE_NUMBER_PRIMARY,
  PHONE_NUMBER_SECONDARY,
  WHATSAPP_NUMBER,
  EMAIL_ADDRESS,
  OFFICE_ADDRESS,
} from '../data/mockData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Phone, MapPin, CheckCircle2, Clock, Mail } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Mata Ki Chowki',
    eventDate: '',
    city: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Jai Mata Di! New Booking Request:%0A- *Name:* ${formData.name}%0A- *Phone:* ${formData.phone}%0A- *Event Type:* ${formData.eventType}%0A- *Event Date:* ${formData.eventDate}%0A- *Location/City:* ${formData.city}%0A- *Notes:* ${formData.notes || 'None'}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="py-10 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold" style={{ background: 'rgba(212,105,10,0.12)', color: 'var(--c-gold)', border: '1px solid rgba(212,105,10,0.25)' }}>
          <span>🪔 Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-cream">
          Bookings & Contact Us
        </h1>
        <p className="text-xs sm:text-sm font-medium max-w-xl mx-auto text-muted">
          Contact Shri Sanjeev Batra & Party for date confirmation, availability, and instant quotes.
        </p>
        <div className="section-divider mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info (Left Col) */}
        <div className="space-y-6">
          <div className="card p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-display font-bold text-cream border-b pb-3" style={{ borderColor: 'var(--c-border)' }}>
              Contact Information
            </h2>

            <div className="space-y-3">
              {/* Primary Call Line 1 */}
              <a
                href={`tel:${PHONE_NUMBER_PRIMARY}`}
                className="flex items-center gap-4 p-3.5 rounded-lg border hover:border-saffron transition-all group"
                style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ background: 'var(--c-saffron)', color: '#fff' }}>
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-saffron-light">Mobile Number (Primary)</div>
                  <div className="text-base font-bold text-cream group-hover:text-saffron-light transition-colors">
                    +91 97164 79938
                  </div>
                  <div className="text-[11px] text-muted font-medium">Shri Sanjeev Batra</div>
                </div>
              </a>

              {/* Primary Call Line 2 */}
              <a
                href={`tel:${PHONE_NUMBER_SECONDARY}`}
                className="flex items-center gap-4 p-3.5 rounded-lg border hover:border-saffron transition-all group"
                style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ background: 'var(--c-saffron)', color: '#fff' }}>
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-saffron-light">Mobile Number (Secondary)</div>
                  <div className="text-base font-bold text-cream group-hover:text-saffron-light transition-colors">
                    +91 70115 48995
                  </div>
                  <div className="text-[11px] text-muted font-medium">Booking Desk</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-4 p-3.5 rounded-lg border hover:border-saffron transition-all group"
                style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ background: 'var(--c-gold)', color: '#000' }}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gold">Email Address</div>
                  <div className="text-xs font-bold text-cream group-hover:text-gold transition-colors break-all">
                    {EMAIL_ADDRESS}
                  </div>
                </div>
              </a>

              {/* WhatsApp Instant Chat */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-lg border hover:border-emerald-500 transition-all group"
                style={{ background: 'rgba(22,163,74,0.1)', borderColor: 'rgba(22,163,74,0.3)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-400">Instant WhatsApp Booking</div>
                  <div className="text-base font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">24/7 Fast Response</div>
                </div>
              </a>
            </div>

            {/* Address & Timings */}
            <div className="pt-4 space-y-3 border-t text-xs text-muted" style={{ borderColor: 'var(--c-border)' }}>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-cream uppercase text-[10px] block">Office Address:</span>
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-cream uppercase text-[10px] block">Open Status & Timings:</span>
                  <div className="space-y-0.5 text-muted">
                    <div>Mon To Sat: 10:00am to 10:00pm</div>
                    <div>Sun: 12:00pm To 7:00pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form (Right Col) */}
        <div className="card p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-display font-bold text-cream border-b pb-3" style={{ borderColor: 'var(--c-border)' }}>
            Send Booking Inquiry
          </h2>

          {submitted ? (
            <div className="p-6 rounded-lg text-center space-y-3" style={{ background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.3)' }}>
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h3 className="text-base font-bold text-emerald-300">Opening WhatsApp...</h3>
              <p className="text-xs text-emerald-400">Your booking details have been formatted for instant WhatsApp chat.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-saffron-light font-bold underline pt-2"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-muted">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded text-sm text-cream focus:outline-none focus:border-saffron"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9716479938"
                  className="w-full px-3.5 py-2.5 rounded text-sm text-cream focus:outline-none focus:border-saffron"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded text-sm text-cream focus:outline-none focus:border-saffron"
                    style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                  >
                    <option value="Mata Ki Chowki (₹11k)" style={{ background: '#160A02' }}>Mata Ki Chowki (₹11,000)</option>
                    <option value="Bhagwati Jagran" style={{ background: '#160A02' }}>Bhagwati Jagran (Full Night)</option>
                    <option value="Sunderkand Paath" style={{ background: '#160A02' }}>Balaji Sunderkand Paath</option>
                    <option value="Sai Sandhya" style={{ background: '#160A02' }}>Shirdi Sai Sandhya</option>
                    <option value="Khatu Shyam Kirtan" style={{ background: '#160A02' }}>Khatu Shyam Sandhya</option>
                    <option value="Ladies Sangeet" style={{ background: '#160A02' }}>Ladies Sangeet & Dhol</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted">Tentative Event Date</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded text-sm text-cream focus:outline-none focus:border-saffron"
                    style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted">Venue City / Address *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Dilshad Garden, Delhi / Sector 62, Noida"
                  className="w-full px-3.5 py-2.5 rounded text-sm text-cream focus:outline-none focus:border-saffron"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted">Additional Requirements</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Need fresh flower Bhawan and 2 Jhankiyan"
                  className="w-full px-3.5 py-2.5 rounded text-sm text-cream focus:outline-none focus:border-saffron"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                />
              </div>

              <button
                type="submit"
                className="btn-wa w-full py-3 justify-center text-sm font-bold shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Submit & Open WhatsApp Chat</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
