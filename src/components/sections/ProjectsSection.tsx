import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Luxury Villa Interior',
      category: 'Residential',
      location: 'Udaipur, Rajasthan',
      image: '/images/project-luxury.png',
    },
    {
      id: '2',
      title: 'Royal Palace Restoration',
      category: 'Heritage',
      location: 'Jaipur, Rajasthan',
      image: '/images/project-luxury.png',
    },
    {
      id: '3',
      title: 'Modern Hotel Lobby',
      category: 'Commercial',
      location: 'Delhi, India',
      image: '/images/hero-marble.png',
    },
    {
      id: '4',
      title: 'Boutique Showroom',
      category: 'Retail',
      location: 'Mumbai, India',
      image: '/images/hero-marble.png',
    },
  ];

  return (
    <section id="projects" className="w-full py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Our Projects
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Explore our portfolio of premium stone installations across residential, 
              commercial, and heritage projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={index * 200}>
              <div
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-96 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay - More visible on mobile for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:opacity-80 lg:group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-amber-600 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full mb-3 shadow-lg">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg 
                      className="w-4 h-4 md:w-5 md:h-5 text-amber-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <p className="text-xs md:text-sm">{project.location}</p>
                  </div>

                  {/* View Project Link - Always visible or accessible */}
                  <div className="mt-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:gap-4 transition-all uppercase tracking-wider">
                      View Project
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5" 
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
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 md:mt-16">
          <button className="px-8 py-3.5 md:px-10 md:py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-amber-600 transition-all shadow-xl hover:-translate-y-1">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;