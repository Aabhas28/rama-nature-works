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
    <section id="spaces" className="w-full py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Spaces We Transform
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From intimate residential spaces to grand commercial projects, we bring natural 
              beauty and timeless elegance to every corner.
            </p>
          </div>
        </ScrollReveal>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <ScrollReveal key={space.id} animation="fade-up" delay={index * 100}>
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full"
              >
                {/* Image Container */}
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-600 transition-colors">
                    {space.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {space.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4 flex items-center gap-2 text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition-all group-hover:gap-4">
                    <span>Explore</span>
                    <svg 
                      className="w-5 h-5" 
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
                <div className="absolute top-6 right-6 w-12 h-12 bg-amber-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;