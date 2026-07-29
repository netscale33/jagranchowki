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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-950 text-xs font-bold shadow-sm">
          <span>🪔 Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900">
          Bookings & Contact Us
        </h1>
        <p className="text-xs sm:text-sm font-medium max-w-xl mx-auto text-slate-600">
          Contact Shri Sanjeev Batra & Party for date confirmation, availability, and instant quotes.
        </p>
        <div className="section-line mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info (Left Col) */}
        <div className="space-y-6">
          <div className="card-light p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-display font-bold text-slate-900 border-b border-slate-100 pb-3">
              Contact Information
            </h2>

            <div className="space-y-3">
              {/* Primary Call Line 1 */}
              <a
                href={`tel:${PHONE_NUMBER_PRIMARY}`}
                className="flex items-center gap-4 p-3.5 rounded-lg border border-slate-200 bg-slate-50 hover:border-[#C84B26] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C84B26] text-white flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5 fill-current text-yellow-300" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#C84B26]">Mobile Number (Primary)</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#C84B26] transition-colors">
                    +91 97164 79938
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Shri Sanjeev Batra</div>
                </div>
              </a>

              {/* Primary Call Line 2 */}
              <a
                href={`tel:${PHONE_NUMBER_SECONDARY}`}
                className="flex items-center gap-4 p-3.5 rounded-lg border border-slate-200 bg-slate-50 hover:border-[#C84B26] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C84B26] text-white flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5 fill-current text-yellow-300" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#C84B26]">Mobile Number (Secondary)</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#C84B26] transition-colors">
                    +91 70115 48995
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Booking Desk</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-4 p-3.5 rounded-lg border border-slate-200 bg-slate-50 hover:border-[#C84B26] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-amber-800">Email Address</div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#C84B26] transition-colors break-all">
                    {EMAIL_ADDRESS}
                  </div>
                </div>
              </a>

              {/* WhatsApp Instant Chat */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-lg border border-emerald-200 bg-emerald-50 hover:border-emerald-500 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-800">Instant WhatsApp Booking</div>
                  <div className="text-base font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-emerald-600 font-medium">24/7 Fast Response</div>
                </div>
              </a>
            </div>

            {/* Address & Timings */}
            <div className="pt-4 space-y-3 border-t border-slate-100 text-xs text-slate-650">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C84B26] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 uppercase text-[10px] block">Office Address:</span>
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C84B26] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 uppercase text-[10px] block">Open Status & Timings:</span>
                  <div className="space-y-0.5 text-slate-600 font-medium">
                    <div>Mon To Sat: 10:00am to 10:00pm</div>
                    <div>Sun: 12:00pm To 7:00pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form (Right Col) */}
        <div className="card-light p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-display font-bold text-slate-900 border-b border-slate-100 pb-3">
            Send Booking Inquiry
          </h2>

          {submitted ? (
            <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-900">Opening WhatsApp...</h3>
              <p className="text-xs text-emerald-700 font-medium">Your booking details have been formatted for instant WhatsApp chat.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#C84B26] font-bold underline pt-2"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded text-sm text-slate-900 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#C84B26]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9716479938"
                  className="w-full px-3.5 py-2.5 rounded text-sm text-slate-900 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#C84B26]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded text-sm text-slate-900 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#C84B26]"
                  >
                    <option value="Mata Ki Chowki (₹11k)">Mata Ki Chowki (₹11,000)</option>
                    <option value="Bhagwati Jagran">Bhagwati Jagran (Full Night)</option>
                    <option value="Sunderkand Paath">Balaji Sunderkand Paath</option>
                    <option value="Sai Sandhya">Shirdi Sai Sandhya</option>
                    <option value="Khatu Shyam Kirtan">Khatu Shyam Sandhya</option>
                    <option value="Ladies Sangeet">Ladies Sangeet & Dhol</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Tentative Event Date</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded text-sm text-slate-900 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#C84B26]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Venue City / Address *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Dilshad Garden, Delhi / Sector 62, Noida"
                  className="w-full px-3.5 py-2.5 rounded text-sm text-slate-900 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#C84B26]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Additional Requirements</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Need fresh flower Bhawan and 2 Jhankiyan"
                  className="w-full px-3.5 py-2.5 rounded text-sm text-slate-900 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#C84B26]"
                />
              </div>

              <button
                type="submit"
                className="btn-whatsapp-light w-full py-3 justify-center text-sm font-bold shadow-sm"
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
