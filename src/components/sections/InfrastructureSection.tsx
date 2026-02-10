import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';

interface InfraFeature {
  id: string;
  icon: string;
  title: string;
  value: string;
  description: string;
}

const InfrastructureSection: React.FC = () => {
  const features: InfraFeature[] = [
    {
      id: '1',
      icon: 'warehouse',
      title: 'Warehouse Capacity',
      value: '50,000+ sq ft',
      description: 'State-of-the-art storage facilities',
    },
    {
      id: '2',
      icon: 'inventory',
      title: 'Material Stock',
      value: '500+ Varieties',
      description: 'Extensive marble and stone collection',
    },
    {
      id: '3',
      icon: 'countries',
      title: 'Global Sourcing',
      value: '10+ Countries',
      description: 'Direct quarry partnerships worldwide',
    },
    {
      id: '4',
      icon: 'quality',
      title: 'Quality Assurance',
      value: '100% Certified',
      description: 'Every slab quality-checked',
    },
  ];

  return (
    <section id="infrastructure" className="w-full py-16 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("/images/marble-pattern.svg")',
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Our Infrastructure
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              World-class facilities and infrastructure enabling us to deliver excellence 
              in every project.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 md:mb-20">
          {/* Left: Image */}
          <ScrollReveal animation="fade-right">
            <div className="relative">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/factory.png"
                  alt="Modern warehouse facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Floating Stats Card - Better positioned for mobile or hidden if too crowded */}
              <div className="absolute -bottom-6 -right-6 bg-amber-600 p-6 rounded-xl shadow-2xl hidden md:block border border-white/20">
                <div className="text-center">
                  <p className="text-4xl font-bold mb-1">25+</p>
                  <p className="text-sm uppercase font-bold tracking-widest">Years Experience</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal animation="fade-left">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-amber-500">
                Advanced Facilities for Premium Quality
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Our cutting-edge infrastructure includes climate-controlled warehouses, 
                advanced processing equipment, and specialized storage systems that ensure 
                every piece of natural stone maintains its pristine quality from quarry to 
                installation.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                With direct partnerships with quarries across Italy, Turkey, Brazil, Spain, 
                and Vietnam, we maintain a vast inventory of over 500 material varieties, 
                ready to meet any project requirement.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} animation="fade-up" delay={index * 150}>
              <div
                className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-amber-600/50 transition-all hover:bg-white/10 h-full shadow-lg"
              >
                {/* Icon Placeholder */}
                <div className="w-14 h-14 bg-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-all duration-300 group-hover:scale-110">
                  <svg 
                    className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
                    />
                  </svg>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold mb-2 text-gray-200">{feature.title}</h4>
                <p className="text-3xl font-black text-amber-600 mb-3">{feature.value}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-600/0 group-hover:border-amber-600/50 rounded-tr-2xl transition-all" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="px-8 py-3.5 md:px-10 md:py-4 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all shadow-xl hover:-translate-y-1 shadow-amber-600/20">
            SCHEDULE A FACILITY TOUR
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;