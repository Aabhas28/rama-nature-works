'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';

interface Product {
  id: string;
  name: string;
  image: string;
}

const ProductsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'marble' | 'furniture' | 'handicrafts'>('marble');

  const marbleProducts: Product[] = [
    { id: '1', name: 'Sofita Beige', image: '/images/product-marble.png' },
    { id: '2', name: 'Spider Beige', image: '/images/product-marble.png' },
    { id: '3', name: 'Dyna', image: '/images/product-marble.png' },
  ];

  const furnitureProducts: Product[] = [
    { id: '4', name: 'Marble Table', image: '/images/project-luxury.png' },
    { id: '5', name: 'Stone Console', image: '/images/project-luxury.png' },
    { id: '6', name: 'Luxury Chair', image: '/images/project-luxury.png' },
  ];

  const handicraftsProducts: Product[] = [
    { id: '7', name: 'Stone Bowl', image: '/images/product-marble.png' },
    { id: '8', name: 'Marble Vase', image: '/images/product-marble.png' },
    { id: '9', name: 'Decorative Plate', image: '/images/product-marble.png' },
  ];

  const getProducts = () => {
    switch (activeTab) {
      case 'marble':
        return marbleProducts;
      case 'furniture':
        return furnitureProducts;
      case 'handicrafts':
        return handicraftsProducts;
      default:
        return marbleProducts;
    }
  };

  const products = getProducts();

  return (
    <section id="products" className="w-full py-16 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-0 text-center lg:text-left">
              Our Products
            </h2>

            {/* Tab Navigation - Scrollable on mobile */}
            <div className="flex gap-3 overflow-x-auto pb-4 lg:pb-0 no-scrollbar justify-start lg:justify-end -mx-6 px-6 lg:mx-0 lg:px-0">
              <button
                onClick={() => setActiveTab('marble')}
                className={`flex-shrink-0 px-6 lg:px-8 py-3 rounded-full font-bold transition-all text-sm md:text-base ${
                  activeTab === 'marble'
                    ? 'bg-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                MARBLE
              </button>
              <button
                onClick={() => setActiveTab('furniture')}
                className={`flex-shrink-0 px-6 lg:px-8 py-3 rounded-full font-bold transition-all text-sm md:text-base ${
                  activeTab === 'furniture'
                    ? 'bg-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                FURNITURE
              </button>
              <button
                onClick={() => setActiveTab('handicrafts')}
                className={`flex-shrink-0 px-6 lg:px-8 py-3 rounded-full font-bold transition-all text-sm md:text-base ${
                  activeTab === 'handicrafts'
                    ? 'bg-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                HANDICRAFTS
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="w-full h-px bg-gray-800 mb-16" />

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 -translate-x-6 group-hover/carousel:translate-x-0"
            onClick={() => {
              const el = document.getElementById('product-carousel');
              if (el) el.scrollBy({ left: -300, behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 translate-x-6 group-hover/carousel:translate-x-0"
            onClick={() => {
              const el = document.getElementById('product-carousel');
              if (el) el.scrollBy({ left: 300, behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Products Row */}
          <div 
            id="product-carousel"
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 px-4"
          >
            {[...products, ...products].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[350px] snap-center group"
              >
                <ScrollReveal animation="fade-up" delay={(index % products.length) * 100}>
                  <div className="flex flex-col items-center">
                    {/* Product Image - Circular as in screenshot */}
                    <div className="relative w-full aspect-square mb-8 overflow-hidden rounded-full border-4 border-white/5 group-hover:border-amber-600 transition-all duration-500 shadow-2xl">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 280px, 350px"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest">Details</span>
                      </div>
                    </div>

                    {/* Product Name - Stylized as in screenshot */}
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-amber-500 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots - Static for now, as in screenshot */}
        <div className="flex justify-center gap-3 mt-8">
          <button className="w-2.5 h-2.5 rounded-full bg-gray-700 hover:bg-amber-600 transition-colors" />
          <button className="w-2.5 h-2.5 rounded-full bg-gray-700 hover:bg-amber-600 transition-colors" />
          <button className="w-8 h-2.5 rounded-full bg-amber-600 transition-all shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
          <button className="w-2.5 h-2.5 rounded-full bg-gray-700 hover:bg-amber-600 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;