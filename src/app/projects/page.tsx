import ProjectsSection from '@/components/sections/ProjectsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | Rama Nature Works',
  description: 'View our portfolio of luxury stone installations in residential, commercial and heritage buildings.',
};

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <ProjectsSection />
    </main>
  );
}
