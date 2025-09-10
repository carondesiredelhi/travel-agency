import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/hero-bg.jpg"
            alt="Delhi Premium Travel"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Explore North India with <span className="text-yellow-400">Premium Travel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up delay-100">
            Experience comfort and luxury as you journey from Delhi to the most beautiful destinations across North India
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
            <Link href="/fleet" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              View Our Fleet
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular <span className="text-indigo-600">Routes</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Route Card - Uttarakhand */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/uttarakhand.webp"
                  alt="Uttarakhand"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Delhi to Uttarakhand</h3>
                <p className="text-gray-600 mb-4">Explore the majestic mountains and spiritual retreats of Uttarakhand.</p>
                <Link href="/routes/delhi-to-uttarakhand" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                  Explore Route
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Route Card - Himachal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/himachal.avif"
                  alt="Himachal Pradesh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Delhi to Himachal</h3>
                <p className="text-gray-600 mb-4">Discover the scenic beauty and adventure of Himachal Pradesh.</p>
                <Link href="/routes/delhi-to-himachal" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                  Explore Route
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Route Card - Rajasthan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/rajasthan.png"
                  alt="Rajasthan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Delhi to Rajasthan</h3>
                <p className="text-gray-600 mb-4">Experience the royal heritage and desert beauty of Rajasthan.</p>
                <Link href="/routes/delhi-to-rajasthan" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                  Explore Route
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/routes" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              View All Routes
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our <span className="text-indigo-600">Premium Fleet</span></h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">Choose from our range of comfortable and luxurious vehicles for your journey</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vehicle Card - Sedan */}
            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/sedan.png"
                  alt="Sedan"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sedan</h3>
              <p className="text-gray-600 mb-4">Comfortable and economical option for small groups and families.</p>
              <ul className="text-gray-700 mb-4">
                <li className="flex items-center mb-1">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Up to 4 passengers
                </li>
                <li className="flex items-center mb-1">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Air conditioned
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  2 luggage capacity
                </li>
              </ul>
              <Link href="/fleet/sedan" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                View Details
              </Link>
            </div>

            {/* Vehicle Card - Tempo Traveller */}
            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/tempo.png"
                  alt="Tempo Traveller"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Tempo Traveller</h3>
              <p className="text-gray-600 mb-4">Perfect for large groups and extended family trips.</p>
              <ul className="text-gray-700 mb-4">
                <li className="flex items-center mb-1">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Up to 12 passengers
                </li>
                <li className="flex items-center mb-1">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Luxury seating
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ample luggage space
                </li>
              </ul>
              <Link href="/fleet/tempo" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                View Details
              </Link>
            </div>

            {/* Vehicle Card - SUV */}
            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/suv.png"
                  alt="SUV"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">SUV</h3>
              <p className="text-gray-600 mb-4">Spacious and comfortable for family trips and rough terrains.</p>
              <ul className="text-gray-700 mb-4">
                <li className="flex items-center mb-1">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Up to 7 passengers
                </li>
                <li className="flex items-center mb-1">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Premium air conditioning
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  4 luggage capacity
                </li>
              </ul>
              <Link href="/fleet/suv" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                View Details
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/fleet" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why <span className="text-yellow-400">Choose Us</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg bg-indigo-800 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-yellow-400 text-indigo-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
              <p>Available round the clock for your travel needs with prompt response.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg bg-indigo-800 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-yellow-400 text-indigo-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p>Well-maintained vehicles with experienced and professional drivers.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg bg-indigo-800 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-yellow-400 text-indigo-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Rates</h3>
              <p>Competitive pricing with no hidden charges and transparent billing.</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-lg bg-indigo-800 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-yellow-400 text-indigo-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Experience</h3>
              <p>Luxury vehicles with amenities for a comfortable and enjoyable journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to <span className="text-indigo-600">Start Your Journey?</span></h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Book your premium travel experience from Delhi to your favorite destination today.</p>
          <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
