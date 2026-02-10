import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';

interface Space {
  id: string;
  title: string;
  description: string;
  image: string;
}

const SpacesSection: React.FC = () => {
  const spaces: Space[] = [
    {
      id: '1',
      title: 'Living Spaces',
      description: 'Transform your living rooms with elegant marble flooring and stunning stone features.',
      image: '/images/project-luxury.png',
    },
    {
      id: '2',
      title: 'Kitchen & Dining',
      description: 'Premium countertops and backsplashes that combine beauty with durability.',
      image: '/images/product-marble.png',
    },
    {
      id: '3',
      title: 'Bathrooms',
      description: 'Luxurious marble walls and flooring for spa-like bathroom experiences.',
      image: '/images/hero-marble.png',
    },
    {
      id: '4',
      title: 'Outdoor Areas',
      description: 'Weather-resistant natural stones perfect for patios, gardens, and facades.',
      image: '/images/quarry.png',
    },
    {
      id: '5',
      title: 'Commercial Spaces',
      description: 'Make a lasting impression with premium stone installations for offices and hotels.',
      image: '/images/factory.png',
    },
    {
      id: '6',
      title: 'Feature Walls',
      description: 'Create dramatic focal points with unique marble and stone feature walls.',
      image: '/images/about-slabs.png',
    },
  ];

  return (
    <section id="spaces" className="w-full py-16 md:py-32 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Spaces We Transform
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              From intimate residential spaces to grand commercial projects, we bring natural 
              beauty and timeless elegance to every corner.
            </p>
          </div>
        </ScrollReveal>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {spaces.map((space, index) => (
            <ScrollReveal key={space.id} animation="fade-up" delay={index * 100}>
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full border border-gray-200"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-amber-600 transition-colors">
                    {space.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {space.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 flex items-center gap-2 text-amber-600 font-bold opacity-0 md:opacity-0 group-hover:opacity-100 transition-all group-hover:gap-4 uppercase text-xs tracking-widest">
                    <span>Explore Space</span>
                    <svg 
                      className="w-4 h-4" 
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
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-amber-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;