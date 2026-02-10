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
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Projects
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our portfolio of premium stone installations across residential, 
              commercial, and heritage projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={index * 200}>
              <div
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer h-full"
              >
                {/* Project Image */}
                <div className="relative w-full h-96 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform">
                  {/* Category Badge */}
                  <span className="inline-block px-4 py-1 bg-amber-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <p className="text-sm">{project.location}</p>
                  </div>

                  {/* View Project Link */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:gap-4 transition-all">
                      View Project
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
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;