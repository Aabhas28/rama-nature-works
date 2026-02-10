import React from 'react';
import Image from 'next/image';

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
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-amber-600" />
            <p className="text-amber-600 text-lg font-light tracking-wide">
              Welcome to Rama Nature Works
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Best Stone Suppliers in Udaipur
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
            Rama Nature Works is an innovative marble supplier known for its exceptional 
            quality and distinctive designs featured in our extensive portfolio of over 40 
            products. With our diverse range of more than 500 material references, we 
            proudly stand among the Best Stone Suppliers in Udaipur.
          </p>

          {/* CTA Button */}
          <button className="group flex items-center gap-3 text-white text-lg font-medium hover:gap-5 transition-all duration-300">
            <span>KNOW MORE</span>
            <svg 
              className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" 
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
      </div>

      {/* Decorative Product Preview Cards */}
      <div className="absolute bottom-8 right-8 hidden lg:flex gap-4 z-10">
        {/* Card 1 */}
        <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
          <Image
            src="/images/product-preview-1.jpg"
            alt="Marble interior preview"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>

        {/* Card 2 */}
        <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
          <Image
            src="/images/product-preview-2.jpg"
            alt="Stone interior preview"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>

        {/* Card 3 */}
        <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
          <Image
            src="/images/product-preview-3.jpg"
            alt="Natural stone preview"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;