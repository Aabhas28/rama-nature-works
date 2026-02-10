import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SpacesSection from '@/components/sections/SpacesSection';
import InfrastructureSection from '@/components/sections/InfrastructureSection';
import ContactSection from '@/components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProjectsSection />
      <SpacesSection />
      <InfrastructureSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
