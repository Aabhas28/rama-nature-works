import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Rama Nature Works',
  description: 'Get in touch with Rama Nature Works for premium marble and natural stone requirements in Udaipur.',
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactSection />
    </main>
  );
}
