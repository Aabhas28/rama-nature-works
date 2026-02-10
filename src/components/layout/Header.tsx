'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'SPACES', href: '/#spaces' },
    { name: 'INFRASTRUCTURE', href: '/#infrastructure' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'
      } px-6 flex items-center justify-between border-b border-gray-100`}
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110">
          <Image
            src="/images/hero-bg.png"
            alt="Rama Nature Works"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg md:text-xl tracking-wider text-[#4A3228]">RAMA</span>
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-medium text-[#4A3228]">NATURE WORKS</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden xl:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.href} 
            className="text-gray-600 hover:text-[#B58E3F] transition-colors font-semibold text-sm tracking-wide"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block bg-[#C6A052] text-white px-6 py-2 md:px-8 md:py-2.5 rounded-lg font-semibold hover:bg-[#B58E3F] transition-all hover:shadow-lg uppercase text-xs md:text-sm">
          Brochure
        </button>

        {/* Mobile Menu Icon */}
        <button 
          className="xl:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 xl:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white/95 backdrop-blur-xl z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 text-gray-900 overflow-y-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-wider text-[#4A3228]">RAMA</span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-amber-600 uppercase">Nature Works</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-[#4A3228] transition-colors"
              aria-label="Close Menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 text-lg font-bold hover:text-amber-600 transition-all py-3 border-b border-gray-100 no-underline flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <button className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold hover:bg-amber-700 transition-all uppercase shadow-lg shadow-amber-600/20 active:scale-[0.98]">
              Download Brochure
            </button>
            <div className="mt-8 flex flex-col gap-4 text-gray-500 text-sm">
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 0 00-2-2H5a2 0 00-2 2v10a2 0 002 2z" />
                </svg>
                <span>info@ramanatureworks.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
