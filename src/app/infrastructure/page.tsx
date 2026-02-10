import InfrastructureSection from '@/components/sections/InfrastructureSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Infrastructure | Rama Nature Works',
  description: 'Our world-class warehouse and production facilities in Udaipur ensure premium quality for every slab.',
};

export default function InfrastructurePage() {
  return (
    <main className="pt-20">
      <InfrastructureSection />
    </main>
  );
}
