import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative w-12 h-12">
          <Image
            src="/images/hero-bg.png" // Placeholder logo or use a real one if available
            alt="Rama Nature Works"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl tracking-wider text-[#4A3228]">RAMA</span>
          <span className="text-[10px] tracking-[0.2em] font-medium text-[#4A3228]">NATURE WORKS</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-[#B58E3F] font-semibold border-b-2 border-[#B58E3F]">HOME</Link>
        <Link href="/about-us" className="text-gray-600 hover:text-[#B58E3F] transition-colors font-medium">ABOUT US</Link>
        <Link href="/products" className="text-gray-600 hover:text-[#B58E3F] transition-colors font-medium">
          PRODUCTS
        </Link>
        <Link href="/#projects" className="text-gray-600 hover:text-[#B58E3F] transition-colors font-medium">PROJECTS</Link>
        <Link href="/#spaces" className="text-gray-600 hover:text-[#B58E3F] transition-colors font-medium">SPACES</Link>
        <Link href="/#infrastructure" className="text-gray-600 hover:text-[#B58E3F] transition-colors font-medium">INFRASTRUCTURE</Link>
        <Link href="/contact" className="text-gray-600 hover:text-[#B58E3F] transition-colors font-medium">CONTACT</Link>
      </nav>

      <button className="bg-[#C6A052] text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-[#B58E3F] transition-colors uppercase text-sm">
        Brochure
      </button>

      {/* Mobile Menu Icon (Hidden on desktop) */}
      <button className="md:hidden text-gray-600">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
