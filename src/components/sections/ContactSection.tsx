'use client';

import React, { useState } from 'react';
import ScrollReveal from '../common/ScrollReveal';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="w-full py-16 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
              Have a project in mind? We&apos;d love to hear from you. Get in touch and let&apos;s 
              discuss how we can bring your vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left: Contact Form */}
          <ScrollReveal animation="fade-right">
            <div className="bg-gray-50/50 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-all placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-all placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-all placeholder:text-gray-400"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 md:px-5 md:py-4 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-all resize-none placeholder:text-gray-400"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-600/20 uppercase tracking-widest text-sm"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right: Contact Information & Map */}
          <ScrollReveal animation="fade-left">
            <div className="space-y-6 md:space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-5 md:p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100 h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-600/20">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 tracking-tight">Visit Us</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-snug">
                      Rama Nature Works<br />
                      Industrial Area, Udaipur, RJ 313001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 md:p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100 h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-600/20">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 tracking-tight">Call Us</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-snug">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>
              </div>

              {/* Map - Embedded Google Maps */}
              <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973188278!2d73.52264!3d24.585445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56e5a5b1c1f%3A0x6b9b1e6b5e5b1c1f!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rama Nature Works Location"
                />
              </div>

              {/* Business Hours */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl shadow-2xl border border-gray-800">
                <h3 className="font-bold text-xl mb-4 text-amber-500 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm md:text-base pb-3 border-b border-gray-800">
                    <span className="text-gray-400">Monday - Saturday</span>
                    <span className="font-bold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-gray-400">Sunday</span>
                    <span className="font-bold text-amber-500">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;