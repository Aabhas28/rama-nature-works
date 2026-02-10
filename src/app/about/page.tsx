import AboutSection from '@/components/sections/AboutSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Rama Nature Works',
  description: 'Learn about Rama Nature Works, the best stone suppliers in Udaipur with over 25 years of experience.',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutSection />
    </main>
  );
}
