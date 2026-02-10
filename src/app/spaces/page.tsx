import SpacesSection from '@/components/sections/SpacesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spaces We Transform | Rama Nature Works',
  description: 'From living rooms to bathrooms and outdoor areas, see how we transform spaces with natural stone.',
};

export default function SpacesPage() {
  return (
    <main className="pt-20">
      <SpacesSection />
    </main>
  );
}
