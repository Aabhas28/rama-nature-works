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
    <section id="products" className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-0">
              Our Products
            </h2>

            {/* Tab Navigation */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('marble')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'marble'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                MARBLE
              </button>
              <button
                onClick={() => setActiveTab('furniture')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'furniture'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                FURNITURE
              </button>
              <button
                onClick={() => setActiveTab('handicrafts')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'handicrafts'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                HANDICRAFTS
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="w-full h-0.5 bg-gray-700 mb-16" />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={index * 150}>
              <div
                className="group cursor-pointer"
              >
                {/* Product Image - Circular */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>

                {/* Product Name */}
                <h3 className="text-center text-2xl font-semibold group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-16">
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <div className="w-3 h-3 rounded-full bg-amber-600" />
          <div className="w-3 h-3 rounded-full bg-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;