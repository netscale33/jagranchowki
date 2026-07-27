import React, { useState } from 'react';
import {
  PHONE_NUMBER_PRIMARY,
  PHONE_NUMBER_SECONDARY,
  WHATSAPP_NUMBER,
  EMAIL_ADDRESS,
  OFFICE_ADDRESS,
} from '../data/mockData';
import { DiyaGlow } from '../components/DiyaGlow';
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

    // Direct Instant Redirect to WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="py-12 px-4 sm:px-8 max-w-6xl mx-auto space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-bold shadow-sm">
          <DiyaGlow size="sm" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900">
          Bookings & Contact Us
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Contact Shri Sanjeev Batra & Party for date confirmation, availability, and instant quotes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info (Left Col) */}
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-orange-200 shadow-xl space-y-6">
            <h2 className="text-xl font-bold font-heading text-slate-900 border-b border-orange-100 pb-3">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* Primary Call Line 1 */}
              <a
                href={`tel:${PHONE_NUMBER_PRIMARY}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-200 hover:border-orange-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-md">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-orange-800 font-bold uppercase">Mobile Number (Primary)</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    9716479938
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Shri Sanjeev Batra</div>
                </div>
              </a>

              {/* Primary Call Line 2 */}
              <a
                href={`tel:${PHONE_NUMBER_SECONDARY}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-200 hover:border-orange-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-md">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-orange-800 font-bold uppercase">Mobile Number (Secondary)</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    7011548995
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Booking Desk</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-200 hover:border-orange-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-orange-800 font-bold uppercase">Email Address</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors break-all">
                    {EMAIL_ADDRESS}
                  </div>
                </div>
              </a>

              {/* WhatsApp Instant Chat */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 hover:border-emerald-500 transition-all hover:scale-102 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-bold uppercase">Instant WhatsApp Booking</div>
                  <div className="text-lg font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-emerald-600 font-medium">24/7 Fast Response</div>
                </div>
              </a>
            </div>

            {/* Address & Timings */}
            <div className="pt-3 space-y-3 border-t border-orange-100 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 uppercase text-[11px] block">Office Address:</span>
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 uppercase text-[11px] block">Open Status & Timings:</span>
                  <div className="space-y-0.5 text-slate-600">
                    <div>Mon To Sat: 10:00am to 10:00pm</div>
                    <div>Sun: 12:00pm To 7:00pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form (Right Col) */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-orange-200 shadow-xl space-y-6">
          <h2 className="text-xl font-bold font-heading text-slate-900 border-b border-orange-100 pb-3">
            Send Booking Inquiry (Redirects to WhatsApp)
          </h2>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900">Redirecting to WhatsApp...</h3>
              <p className="text-xs text-emerald-700">Your inquiry parameters have been formatted for direct WhatsApp chat.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-orange-600 font-bold underline pt-2"
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
                  className="w-full px-4 py-3 rounded-xl bg-orange-50/40 border border-orange-200 text-slate-900 text-sm focus:border-orange-500 focus:outline-none"
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
                  className="w-full px-4 py-3 rounded-xl bg-orange-50/40 border border-orange-200 text-slate-900 text-sm focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-orange-50/40 border border-orange-200 text-slate-900 text-sm focus:border-orange-500 focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-xl bg-orange-50/40 border border-orange-200 text-slate-900 text-sm focus:border-orange-500 focus:outline-none"
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
                  className="w-full px-4 py-3 rounded-xl bg-orange-50/40 border border-orange-200 text-slate-900 text-sm focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Additional Message / Requirements</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Need fresh flower Bhawan and 2 Jhankiyan"
                  className="w-full px-4 py-3 rounded-xl bg-orange-50/40 border border-orange-200 text-slate-900 text-sm focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 text-white font-extrabold text-sm hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-2 border border-emerald-400"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Submit & Open Instant WhatsApp Chat</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
