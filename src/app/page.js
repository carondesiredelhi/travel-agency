'use client';
import Image from "next/image";
import Link from "next/link";
import TimedCards from "@/components/TimedCard/TimedCard";

// Consistent icon component with theme colors
const IconCheck = (props) => (
  <svg className="h-5 w-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - No changes needed, already consistent */}
      <section className="min-h-screen relative flex items-center justify-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image 
            src="/hero.jpg" 
            alt="Beautiful Indian destination" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 text-left text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-5xl">
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
              <span className="block">WORLD</span>
              <span className="block">
                OF <span className="text-transparent" style={{ WebkitTextStroke: "2px white", textStroke: "2px white" }}>PARADISE,</span>
              </span>
              <span className="block text-white">INDIA</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl leading-relaxed">
            Let's explore one of the most diverse and beautiful countries in the world, namely India. Enjoy premium travel packages at competitive prices with authentic experiences and unforgettable memories.
          </p>

          <div className="border-t border-white/20 pt-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl">
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Most Popular Activity</h3>
                <p className="text-white/80 text-sm">Mountain Trekking in Himachal</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Most Excited Place</h3>
                <p className="text-white/80 text-sm">Rajasthan Heritage & Culture</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Travel Style</h3>
                <p className="text-white/80 text-sm">Luxury Comfort Tours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Section - Consistent with theme */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-12 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our <span className="text-indigo-600">Premium Fleet</span></h2>
              <p className="text-gray-600 mt-2">Travel in style and comfort with our meticulously maintained vehicles.</p>
            </div>
            <div className="text-center md:text-right">
              <Link href="/fleet" className="hidden md:inline-block bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
                View All Vehicles
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 border-2 border-transparent">
              <div className="relative h-44 sm:h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/sedan.png" alt="Sedan" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Sedan</h3>
                <p className="text-gray-600 mb-4">Ideal for solo travelers or small families seeking comfort and class.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center"><IconCheck /> Up to 4 passengers</li>
                  <li className="flex items-center"><IconCheck /> Air Conditioned</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 border-2 border-transparent">
              <div className="relative h-44 sm:h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/tempo.png" alt="Tempo Traveller" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Tempo Traveller</h3>
                <p className="text-gray-600 mb-4">The ultimate choice for large groups wanting to travel together in luxury.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center"><IconCheck /> Up to 12 passengers</li>
                  <li className="flex items-center"><IconCheck /> Luxury Seating</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 border-2 border-transparent">
              <div className="relative h-44 sm:h-48 mb-4 rounded-lg overflow-hidden">
                <Image src="/suv.png" alt="SUV" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">SUV</h3>
                <p className="text-gray-600 mb-4">Spacious, robust, and perfect for families exploring any terrain.</p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center"><IconCheck /> Up to 7 passengers</li>
                  <li className="flex items-center"><IconCheck /> Ample Luggage Space</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link href="/fleet" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes Section - TimedCards */}
      <section className="relative w-full bg-gray-50">
        <div className="py-12">
          <div className="container mx-auto px-4 max-w-7xl text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular <span className="text-indigo-600">Destinations</span></h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover India's most captivating destinations with our curated travel experiences.</p>
          </div>
          <TimedCards
            items={[
              { place: 'Uttarakhand', title: 'DELHI TO', title2: 'UTTARAKHAND', description: 'Explore majestic mountains and spiritual retreats in the land of gods.', image: '/uttarakhand.webp' },
              { place: 'Himachal Pradesh', title: 'DELHI TO', title2: 'HIMACHAL', description: 'Discover scenic beauty and thrilling adventures in the Himalayan valleys.', image: '/himachal.avif' },
              { place: 'Rajasthan', title: 'DELHI TO', title2: 'RAJASTHAN', description: 'Experience royal heritage and vast deserts in the land of kings.', image: '/rajasthan.png' },
              { place: 'Uttar Pradesh', title: 'DELHI TO', title2: 'UP', description: 'Witness the timeless beauty of the Taj Mahal and cultural heritage.', image: '/varanasi.png' },
              { place: 'Punjab', title: 'DELHI TO', title2: 'PUNJAB', description: 'Immerse in the vibrant culture and history of the golden state.', image: '/punjab-hero.webp' }
            ]}
            showNav={false}
            showPagination={true}
          />
        </div>
      </section>

      {/* How It Works Section - Consistent styling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Just <span className="text-indigo-600">Three Steps</span> to Your Journey</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">Plan your perfect getaway in three simple steps with our streamlined booking process.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-3xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Choose Your Ride</h3>
              <p className="text-gray-600 leading-relaxed">Select the perfect vehicle from our premium fleet to match your travel needs and group size.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-3xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Share Your Plan</h3>
              <p className="text-gray-600 leading-relaxed">Tell us your destination and schedule. We'll handle all the planning and logistics for you.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-3xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Enjoy the Journey</h3>
              <p className="text-gray-600 leading-relaxed">Sit back, relax, and enjoy a seamless travel experience with our expert chauffeurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - FIXED theme consistency */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Client <span className="text-indigo-600 relative">Reviews<span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400 rounded-full"></span></span></h2>
              <p className="text-gray-600 mt-2 text-lg">Hear what our satisfied travelers have to say about their experiences.</p>
            </div>
            <div className="hidden sm:flex space-x-2 mt-4 md:mt-0">
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Traveler Image - FIXED decorative colors */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative z-10">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto relative border-4 border-white shadow-lg">
                    <Image src="/about-story.png" alt="Happy Traveler" fill className="object-cover" />
                  </div>
                </div>
                {/* FIXED: Updated decorative elements to match indigo theme */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-indigo-100 opacity-80"></div>
                  <div className="absolute bottom-10 left-20 w-8 h-8 rounded-full bg-indigo-200 opacity-70"></div>
                  <div className="absolute top-1/2 right-10 w-12 h-12 rounded-full bg-indigo-50 opacity-90"></div>
                  <svg className="absolute -bottom-10 left-1/4 text-amber-400" width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,50 Q75,0 140,50 Q75,100 10,50" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Testimonial Content - FIXED colors */}
            <div className="bg-white p-8 rounded-3xl shadow-lg relative">
              <div className="absolute -top-8 left-8 bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">"Exceptional service and unforgettable experiences! The team made our Rajasthan trip absolutely magical. From the comfortable vehicles to the knowledgeable drivers, everything exceeded our expectations."</p>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Priya Sharma</h3>
                  <p className="text-gray-500">Travel Enthusiast</p>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold mr-2 text-gray-800">5.0</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Consistent with theme */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Start Your <span className="text-indigo-600">Journey?</span></h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">Let's plan your perfect getaway. Get in touch with our travel experts today for a personalized quote and itinerary tailored just for you.</p>
          <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Book Your Trip Now
          </Link>
        </div>
      </section>
    </main>
  );
}
