"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-600">Delhi</span>
            <span className="text-2xl font-bold text-gray-800">Travel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center">
                Routes
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/routes/delhi-to-uttarakhand" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50">
                  Delhi to Uttarakhand
                </Link>
                <Link href="/routes/delhi-to-himachal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50">
                  Delhi to Himachal
                </Link>
                <Link href="/routes/delhi-to-rajasthan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50">
                  Delhi to Rajasthan
                </Link>
                <Link href="/routes/delhi-to-up" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50">
                  Delhi to UP
                </Link>
                <Link href="/routes/delhi-to-punjab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50">
                  Delhi to Punjab
                </Link>
              </div>
            </div>
            <Link href="/fleet" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
              Our Fleet
            </Link>
            <Link href="/catalogues" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
              Catalogues
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center text-gray-700 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Home
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-gray-700">Routes</div>
                <div className="pl-4 space-y-2 flex flex-col">
                  <Link href="/routes/delhi-to-uttarakhand" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Delhi to Uttarakhand
                  </Link>
                  <Link href="/routes/delhi-to-himachal" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Delhi to Himachal
                  </Link>
                  <Link href="/routes/delhi-to-rajasthan" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Delhi to Rajasthan
                  </Link>
                  <Link href="/routes/delhi-to-up" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Delhi to UP
                  </Link>
                  <Link href="/routes/delhi-to-punjab" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Delhi to Punjab
                  </Link>
                </div>
              </div>
              <Link href="/catalogues" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Catalogues
              </Link>
              <Link href="/fleet" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Our Fleet
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}