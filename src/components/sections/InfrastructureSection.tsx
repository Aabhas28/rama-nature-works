import React from 'react';
import Image from 'next/image';

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
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Infrastructure
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            World-class facilities and infrastructure enabling us to deliver excellence 
            in every project.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/factory.png"
                alt="Modern warehouse facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-amber-600 p-6 rounded-xl shadow-2xl hidden md:block">
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">25+</p>
                <p className="text-sm uppercase tracking-wide">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Facilities for Premium Quality
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our cutting-edge infrastructure includes climate-controlled warehouses, 
              advanced processing equipment, and specialized storage systems that ensure 
              every piece of natural stone maintains its pristine quality from quarry to 
              installation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With direct partnerships with quarries across Italy, Turkey, Brazil, Spain, 
              and Vietnam, we maintain a vast inventory of over 500 material varieties, 
              ready to meet any project requirement.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-amber-600/50 transition-all hover:bg-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <svg 
                  className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" 
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
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-3xl font-bold text-amber-600 mb-3">{feature.value}</p>
              <p className="text-gray-400 text-sm">{feature.description}</p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber-600/0 group-hover:border-amber-600/30 rounded-tr-2xl transition-all" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl">
            SCHEDULE A FACILITY TOUR
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;