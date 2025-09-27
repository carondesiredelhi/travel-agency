"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Use a slightly higher threshold to avoid flickering
      setScrolled(scrollTop > 50);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center space-x-2 transition-all duration-300 ${
              !scrolled ? 'drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]' : ''
            }`}
          >
            <Image 
              src="/logo.png" 
              alt="Delhi Premium Travel Agency Logo"
              width={48}
              height={48}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-600 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className={`transition-colors duration-300 flex items-center ${
                scrolled 
                  ? 'text-gray-600 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]'
              }`}>
                Routes
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/routes/delhi-to-uttarakhand" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200">Delhi to Uttarakhand</Link>
                <Link href="/routes/delhi-to-himachal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200">Delhi to Himachal</Link>
                <Link href="/routes/delhi-to-rajasthan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200">Delhi to Rajasthan</Link>
                <Link href="/routes/delhi-to-up" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200">Delhi to UP</Link>
                <Link href="/routes/delhi-to-punjab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200">Delhi to Punjab</Link>
              </div>
            </div>

            <Link href="/fleet" className={`transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-yellow-600' : 'text-white hover:text-yellow-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]'}`}>Our Fleet</Link>
            <Link href="/catalogues" className={`transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-yellow-600' : 'text-white hover:text-yellow-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]'}`}>Catalogues</Link>
            <Link href="/about" className={`transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-yellow-600' : 'text-white hover:text-yellow-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]'}`}>About Us</Link>
            <Link href="/contact" className={`transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-yellow-600' : 'text-white hover:text-yellow-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]'}`}>Contact</Link>
          </nav>

          {/* Mobile menu button - Fixed styling */}
          <button 
            className={`md:hidden flex items-center focus:outline-none transition-colors duration-300 ${
              scrolled ? 'text-gray-700' : 'text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 mt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200">
                Home
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-gray-700">Routes</div>
                <div className="pl-4 space-y-2 flex flex-col">
                  <Link href="/routes/delhi-to-uttarakhand" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                    Delhi to Uttarakhand
                  </Link>
                  <Link href="/routes/delhi-to-himachal" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                    Delhi to Himachal
                  </Link>
                  <Link href="/routes/delhi-to-rajasthan" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                    Delhi to Rajasthan
                  </Link>
                  <Link href="/routes/delhi-to-up" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                    Delhi to UP
                  </Link>
                  <Link href="/routes/delhi-to-punjab" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                    Delhi to Punjab
                  </Link>
                </div>
              </div>
              <Link href="/catalogues" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200">
                Catalogues
              </Link>
              <Link href="/fleet" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200">
                Our Fleet
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
