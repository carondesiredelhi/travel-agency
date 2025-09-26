import Image from "next/image";
import Link from "next/link";
// import PopularRoutesCarousel from "./components/PopularRoutesCarousel"; // Import the carousel
import PopularRoutesCarousel from "@/components/PopularRoutesCarousel";

// You can create a dedicated icons component file for cleanliness
const IconCheck = (props) => (
  <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] relative flex items-center justify-center text-black overflow-hidden">
        <div className="container mx-auto px-4 z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Visit The Most</span>
                <span className="block text-blue-500">Beautiful Places</span>
                <span className="block">In India</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
                Plan And Book Your Perfect Trip With Expert Advice. Travel Tips. Destination Information. And Inspiration From Us.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link href="/fleet" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Our Fleet
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <Image src="/hero-bg.jpg" alt="Beautiful destination" fill className="object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <Image src="/rajasthan.png" alt="Beautiful destination" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <Image src="/himachal.avif" alt="Beautiful destination" fill className="object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <Image src="/uttarakhand.webp" alt="Beautiful destination" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us - Features Strip */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
              <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">✓</div>
              <div>
                <p className="font-semibold text-gray-900">Trusted Drivers</p>
                <p className="text-gray-600 text-sm">Experienced, verified and courteous chauffeurs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
              <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">★</div>
              <div>
                <p className="font-semibold text-gray-900">Premium Fleet</p>
                <p className="text-gray-600 text-sm">Clean, comfortable and well‑maintained vehicles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
              <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">₹</div>
              <div>
                <p className="font-semibold text-gray-900">Transparent Pricing</p>
                <p className="text-gray-600 text-sm">No hidden fees. Clear quotes upfront.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
              <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">24/7</div>
              <div>
                <p className="font-semibold text-gray-900">Support</p>
                <p className="text-gray-600 text-sm">Round‑the‑clock assistance for your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="relative w-full">
        <PopularRoutesCarousel />
      </section>
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Chart Your Next <span className="text-indigo-600">Adventure</span></h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">From the majestic Himalayas to the royal deserts, your next story begins here.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 px-4">
            <Link href="/routes/delhi-to-himachal" className="flex flex-col items-center group">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl md:rounded-[30px] overflow-hidden mb-2 transition-transform duration-300 lg:group-hover:scale-105">
                <Image src="/himachal.avif" alt="Himachal Pradesh" fill className="object-cover" />
                <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Explore Himachal</p>
                </div>
              </div>
              <p className="font-medium text-gray-800 group-hover:text-indigo-600 text-xs sm:text-sm md:text-base">Himachal</p>
            </Link>
            
            <Link href="/routes/delhi-to-uttarakhand" className="flex flex-col items-center group">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl md:rounded-[30px] overflow-hidden mb-2 transition-transform duration-300 lg:group-hover:scale-105">
                <Image src="/uttarakhand.webp" alt="Uttarakhand" fill className="object-cover" />
                <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Explore Uttarakhand</p>
                </div>
              </div>
              <p className="font-medium text-gray-800 group-hover:text-indigo-600 text-xs sm:text-sm md:text-base">Uttarakhand</p>
            </Link>
            
            <Link href="/routes/delhi-to-rajasthan" className="flex flex-col items-center group md:col-span-2 lg:col-span-1">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl md:rounded-[30px] overflow-hidden mb-2 transition-transform duration-300 lg:group-hover:scale-105">
                <Image src="/jaipur.png" alt="Rajasthan" fill className="object-cover" />
                <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Explore Rajasthan</p>
                </div>
              </div>
              <p className="font-medium text-gray-800 group-hover:text-indigo-600 text-xs sm:text-sm md:text-base">Rajasthan</p>
            </Link>
            
            <Link href="/routes/delhi-to-punjab" className="flex flex-col items-center group">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl md:rounded-[30px] overflow-hidden mb-2 transition-transform duration-300 lg:group-hover:scale-105">
                <Image src="/amritsar.png" alt="Punjab" fill className="object-cover" />
                <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Explore Punjab</p>
                </div>
              </div>
              <p className="font-medium text-gray-800 group-hover:text-indigo-600 text-xs sm:text-sm md:text-base">Punjab</p>
            </Link>
            
            <Link href="/routes/delhi-to-up" className="flex flex-col items-center group">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl md:rounded-[30px] overflow-hidden mb-2 transition-transform duration-300 lg:group-hover:scale-105">
                <Image src="/varanasi.png" alt="Uttar Pradesh" fill className="object-cover" />
                <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 text-center px-2">Explore Uttar Pradesh</p>
                </div>
              </div>
              <p className="font-medium text-gray-800 group-hover:text-indigo-600 text-xs sm:text-sm md:text-base">Uttar Pradesh</p>
            </Link>
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Just <span className="text-indigo-600">Three Steps</span> to Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mb-4 text-3xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Ride</h3>
              <p className="text-gray-600">Select the perfect vehicle from our premium fleet to match your travel needs.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mb-4 text-3xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Share Your Plan</h3>
              <p className="text-gray-600">Tell us your destination and schedule. We'll handle all the planning and logistics.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mb-4 text-3xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Enjoy the Journey</h3>
              <p className="text-gray-600">Sit back, relax, and enjoy a seamless travel experience with our expert chauffeurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* --- UPDATED SECTION HEADER --- */}
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our <span className="text-indigo-600">Premium Fleet</span></h2>
            </div>
            <div className="text-center md:text-right">
              <Link href="/fleet" className="hidden md:inline-block bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
                View All Vehicles
              </Link>
            </div>
          </div>
          {/* --- END UPDATED SECTION HEADER --- */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Vehicle Cards (No changes here, as requested) */}
            <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 border-2 border-transparent">
              <div className="relative h-44 sm:h-48 mb-4 rounded-lg overflow-hidden"><Image src="/sedan.png" alt="Sedan" fill className="object-cover" /></div>
              <h3 className="text-xl font-bold mb-2">Sedan</h3>
              <p className="text-gray-600 mb-4">Ideal for solo travelers or small families seeking comfort and class.</p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-center"><IconCheck /> Up to 4 passengers</li>
                <li className="flex items-center"><IconCheck /> Air Conditioned</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 border-2 border-transparent">
              <div className="relative h-44 sm:h-48 mb-4 rounded-lg overflow-hidden"><Image src="/tempo.png" alt="Tempo Traveller" fill className="object-cover" /></div>
              <h3 className="text-xl font-bold mb-2">Tempo Traveller</h3>
              <p className="text-gray-600 mb-4">The ultimate choice for large groups wanting to travel together in luxury.</p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-center"><IconCheck /> Up to 12 passengers</li>
                <li className="flex items-center"><IconCheck /> Luxury Seating</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 border-2 border-transparent">
              <div className="relative h-44 sm:h-48 mb-4 rounded-lg overflow-hidden"><Image src="/suv.png" alt="SUV" fill className="object-cover" /></div>
              <h3 className="text-xl font-bold mb-2">SUV</h3>
              <p className="text-gray-600 mb-4">Spacious, robust, and perfect for families exploring any terrain.</p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-center"><IconCheck /> Up to 7 passengers</li>
                <li className="flex items-center"><IconCheck /> Ample Luggage Space</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center text-lg mt-10 md:mt-12 max-w-3xl mx-auto">Travel in style and comfort with our meticulously maintained and modern vehicles.</p>

          {/* Mobile-only "View All" button */}
          <div className="text-center mt-12 md:hidden">
            <Link href="/fleet" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Client <span className="text-indigo-600 relative">Review<span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></span></span></h2>
              <p className="text-gray-600 mt-2">5 Brilliant reasons Entrada should be your one-stop-shop!</p>
            </div>
            <div className="hidden sm:flex space-x-2 mt-4 md:mt-0">
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Traveler Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative z-10">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto relative">
                    <Image src="/about-story.png" alt="Happy Traveler" fill className="object-cover" />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-blue-200 opacity-70"></div>
                  <div className="absolute bottom-10 left-20 w-8 h-8 rounded-full bg-blue-200 opacity-70"></div>
                  <div className="absolute top-1/2 right-10 w-8 h-8 rounded-full bg-blue-200 opacity-70"></div>
                  <svg className="absolute -bottom-10 left-1/4 text-yellow-400" width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,50 Q75,0 140,50 Q75,100 10,50" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="bg-white p-8 rounded-3xl shadow-lg relative">
              <div className="absolute -top-8 left-8 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 mb-6">Lorem ipsum mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit in veniam consequat sunt nostrud amet.</p>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Jane Cooper</h3>
                  <p className="text-gray-500">Patient</p>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold mr-2">5</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">Let's plan your perfect getaway. Get in touch with our travel experts today for a personalized quote and itinerary.</p>
          <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Book Your Trip Now
          </Link>
        </div>
      </section>
    </main>
  );
}