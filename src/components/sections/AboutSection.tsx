import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h2>
            <div className="w-20 h-1 bg-amber-600 mb-8" />

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Based in Udaipur, Rajasthan, we are recognized as one of the{' '}
                <span className="font-semibold text-gray-900">
                  Best Stone Suppliers in Udaipur
                </span>
                , trusted for delivering world-class marble and natural stones. 
                Through strong, long-standing partnerships with leading quarries across 
                10+ countries—including Italy, Turkey, Vietnam, Brazil, and Spain—we source 
                only the finest, exotic stones.
              </p>

              <p>
                As a leading{' '}
                <span className="font-semibold text-amber-700">
                  Marble Supplier in Udaipur
                </span>
                , we maintain complete control over our supply chain with expert procurement 
                teams, ensuring that every slab of marble is premium, quality-assured, and 
                tailored to meet the highest industry standards.
              </p>
            </div>

            <button className="mt-10 px-10 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl">
              KNOW MORE
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gray-200 rounded-full blur-3xl opacity-50" />

            {/* Main Image Container */}
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-slabs.png"
                alt="Premium marble slabs in warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            {/* Decorative Image Overlays */}
            <div className="absolute top-8 -right-4 w-24 h-24 rounded-2xl overflow-hidden shadow-xl hidden xl:block">
              <Image
                src="/images/marble-texture-1.jpg"
                alt="Marble texture detail"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>

            <div className="absolute bottom-12 -left-4 w-28 h-28 rounded-2xl overflow-hidden shadow-xl hidden xl:block">
              <Image
                src="/images/marble-texture-2.jpg"
                alt="Stone texture detail"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;