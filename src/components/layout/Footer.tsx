import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <div className="flex flex-col mb-6 items-center sm:items-start">
              <span className="font-bold text-2xl tracking-wider text-white">RAMA</span>
              <span className="text-xs tracking-[0.2em] font-bold text-amber-500">NATURE WORKS</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
              Premium marble and natural stone suppliers based in Udaipur, Rajasthan. 
              Sourcing the finest stones from across the world to transform your spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 border-b-2 border-amber-600/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-amber-500 transition-colors">Products</Link></li>
              <li><Link href="/#projects" className="hover:text-amber-500 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 border-b-2 border-amber-600/30 pb-2 inline-block">Our Products</h4>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li><Link href="/products" className="hover:text-amber-500 transition-colors">Imported Marble</Link></li>
              <li><Link href="/products" className="hover:text-amber-500 transition-colors">Granite & Stones</Link></li>
              <li><Link href="/products" className="hover:text-amber-500 transition-colors">Luxury Furniture</Link></li>
              <li><Link href="/products" className="hover:text-amber-500 transition-colors">Stone Handicrafts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 border-b-2 border-amber-600/30 pb-2 inline-block">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Industrial Area, Udaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 0 00-2-2H5a2 0 00-2 2v10a2 0 002 2z" />
                </svg>
                <span>info@ramanatureworks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Rama Nature Works. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
