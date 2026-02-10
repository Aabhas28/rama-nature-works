import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fade-right">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                About Us
              </h2>
              <div className="w-20 h-1 bg-amber-600 mb-8 mx-auto lg:mx-0" />

              <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Based in Udaipur, Rajasthan, we are recognized as one of the{' '}
                  <span className="font-semibold text-gray-900 border-b-2 border-amber-200">
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

              <button className="mt-10 px-8 py-4 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                KNOW MORE
              </button>
            </div>
          </ScrollReveal>

          {/* Right Image */}
          <ScrollReveal animation="fade-left">
            <div className="relative mt-12 lg:mt-0">
              {/* Decorative floating elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50 hidden md:block" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-200 rounded-full blur-3xl opacity-50 hidden md:block" />

              {/* Main Image Container */}
              <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-slabs.png"
                  alt="Premium marble slabs in warehouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;