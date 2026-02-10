import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-marble.png"
          alt="Luxurious interior with marble and wood accents"
          fill
          priority
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center">
        <ScrollReveal animation="fade-up" delay={200} duration={1200}>
          <div className="max-w-3xl">
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-12 md:w-16 h-0.5 bg-amber-600" />
              <p className="text-amber-600 text-base md:text-lg font-light tracking-wide uppercase">
                Welcome to Rama Nature Works
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Best Stone Suppliers in Udaipur
            </h1>

            {/* Description */}
            <p className="text-white/90 text-base md:text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl">
              Rama Nature Works is an innovative marble supplier known for its exceptional 
              quality and distinctive designs featured in our extensive portfolio of over 40 
              products. With our diverse range of more than 500 material references, we 
              proudly stand among the Best Stone Suppliers in Udaipur.
            </p>

            {/* CTA Button */}
            <button className="group flex items-center gap-3 text-white text-base md:text-lg font-bold hover:gap-5 transition-all duration-300 bg-amber-600 px-8 py-4 rounded-lg hover:bg-amber-700 shadow-xl">
              <span>KNOW MORE</span>
              <svg 
                className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative Featured Product Card */}
      <div className="absolute bottom-12 right-12 hidden lg:block z-10">
        <ScrollReveal animation="zoom-in" delay={600} duration={1200}>
          <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm">
            <Image
              src="/images/product-marble.png"
              alt="Featured Marble Product"
              fill
              className="object-cover"
              sizes="256px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm font-medium tracking-widest uppercase mb-1">Featured</p>
              <p className="text-white text-xl font-bold">Premium Slabs</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;