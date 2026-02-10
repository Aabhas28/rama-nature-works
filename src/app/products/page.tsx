import ProductsSection from '@/components/sections/ProductsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marble Slabs, Furniture, Handicrafts | Products',
  description: 'Explore our wide range of premium marble, granite, luxury furniture and stone handicrafts.',
};

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <ProductsSection />
    </main>
  );
}
