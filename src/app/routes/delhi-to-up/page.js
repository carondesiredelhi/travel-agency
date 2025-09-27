import Image from 'next/image';
import Link from 'next/link';
import PopularRoutesCarousel from '@/components/PopularRoutesCarousel';

export const metadata = {
  title: 'Delhi to Uttar Pradesh Travel Services | Premium Fleet Options',
  description: 'Premium travel services from Delhi to Uttar Pradesh with luxury fleet options. Visit Agra, Varanasi, Lucknow, and more with our comfortable vehicles.',
  keywords: 'delhi to UP, uttar pradesh travel, agra travel, varanasi travel, lucknow travel, mathura travel'
};

export default function DelhiToUP() {
  // Pricing data for different vehicles
  const pricingData = [
    {
      vehicle: 'Sedan',
      capacity: '4 Passengers',
      oneWay: '₹6,500',
      roundTrip: '₹12,000',
      multiDay: '₹3,500/day'
    },
    {
      vehicle: 'SUV',
      capacity: '7 Passengers',
      oneWay: '₹9,000',
      roundTrip: '₹17,000',
      multiDay: '₹4,500/day'
    },
    {
      vehicle: 'MUV',
      capacity: '8 Passengers',
      oneWay: '₹10,500',
      roundTrip: '₹20,000',
      multiDay: '₹5,500/day'
    },
    {
      vehicle: 'Tempo Traveller',
      capacity: '12 Passengers',
      oneWay: '₹14,000',
      roundTrip: '₹26,000',
      multiDay: '₹7,000/day'
    },
    {
      vehicle: 'Arvenia',
      capacity: '5 Passengers',
      oneWay: '₹8,000',
      roundTrip: '₹15,000',
      multiDay: '₹4,000/day'
    }
  ];

  // Popular destinations in Uttar Pradesh
  const destinations = [
    {
      name: 'Agra',
      image: '/agra.png',
      description: 'Home to the iconic Taj Mahal, Agra Fort, and Fatehpur Sikri. A must-visit destination for history and architecture enthusiasts.',
      distance: '230 km from Delhi',
      travelTime: '3-4 hours'
    },
    {
      name: 'Varanasi',
      image: '/varanasi.png',
      description: 'One of the world\'s oldest continuously inhabited cities, known for its spiritual ghats along the Ganges River and vibrant cultural heritage.',
      distance: '820 km from Delhi',
      travelTime: '14-16 hours'
    },
    {
      name: 'Lucknow',
      image: '/lucknow.png',
      description: 'The capital city of UP, famous for its Nawabi heritage, exquisite cuisine, and architectural marvels like Bara Imambara and Rumi Darwaza.',
      distance: '530 km from Delhi',
      travelTime: '8-9 hours'
    },
    {
      name: 'Mathura-Vrindavan',
      image: '/mathura.png',
      description: 'The birthplace of Lord Krishna, offering a spiritual journey through numerous temples and the sacred Yamuna River.',
      distance: '180 km from Delhi',
      travelTime: '3-4 hours'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-800 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <Image 
            src="/up-hero.png" 
            alt="Uttar Pradesh Landmarks" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delhi to <span className="text-yellow-300">Uttar Pradesh</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the cultural heritage, spiritual landmarks, and historical wonders of Uttar Pradesh
          </p>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700"><strong>Duration:</strong> 3-16 hours</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700"><strong>Distance:</strong> 180-820 km</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700"><strong>24/7 Support:</strong> +91 98765 43210</span>
            </div>
          </div>
        </div>
      </section>

      {/* About the Route */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About <span className="text-blue-600">Delhi to Uttar Pradesh</span> Route</h2>
          <div className="max-w-4xl mx-auto text-gray-700">
            <p className="mb-4">
              The journey from Delhi to Uttar Pradesh connects India's capital to its most populous state, home to some of the country's most significant historical and spiritual landmarks. The route varies greatly depending on your destination within this vast state.
            </p>
            <p className="mb-4">
              For closer destinations like Mathura and Agra, the journey is relatively short and takes you along well-maintained highways. For more distant locations like Varanasi or Lucknow, the journey is longer but rewards travelers with a glimpse into the heart of India's cultural heritage.
            </p>
            <p>
              Our fleet of comfortable vehicles and experienced drivers ensure a smooth journey regardless of your destination in UP. We provide regular comfort breaks, knowledgeable insights about the regions you're passing through, and a reliable travel experience from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <PopularRoutesCarousel routes={destinations} />

      {/* Pricing Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-blue-600">Pricing</span></h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Vehicle Type</th>
                  <th className="py-4 px-6 text-left">Capacity</th>
                  <th className="py-4 px-6 text-left">One Way</th>
                  <th className="py-4 px-6 text-left">Round Trip</th>
                  <th className="py-4 px-6 text-left">Multi-Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pricingData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-4 px-6 font-medium">{item.vehicle}</td>
                    <td className="py-4 px-6">{item.capacity}</td>
                    <td className="py-4 px-6">{item.oneWay}</td>
                    <td className="py-4 px-6">{item.roundTrip}</td>
                    <td className="py-4 px-6">{item.multiDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>* Prices are indicative and may vary based on season, fuel prices, and specific requirements.</p>
            <p>* Additional charges may apply for night halts, driver allowances, and toll/parking fees.</p>
            <p>* For destinations beyond Agra/Mathura (like Lucknow, Varanasi), additional charges apply due to longer distances.</p>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services <span className="text-yellow-300">Included</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="bg-yellow-300 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Drivers</h3>
              <p>Experienced drivers familiar with UP's roads and tourist destinations, ensuring a safe and informative journey.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="bg-yellow-300 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Luxury Vehicles</h3>
              <p>Well-maintained, air-conditioned vehicles with comfortable seating and ample luggage space for a pleasant journey.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="bg-yellow-300 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
              <p>Round-the-clock assistance for any queries or emergencies during your journey through Uttar Pradesh.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="bg-yellow-300 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Travel Plans</h3>
              <p>Personalized itineraries based on your interests, whether it's historical sites, spiritual destinations, or cultural experiences.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="bg-yellow-300 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">All-Inclusive Pricing</h3>
              <p>Transparent fare structure with no hidden costs, covering fuel, driver allowances, and vehicle maintenance.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="bg-yellow-300 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Insights</h3>
              <p>Information about local traditions, festivals, and customs to enhance your understanding of Uttar Pradesh's rich heritage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to <span className="text-blue-600">Explore Uttar Pradesh?</span></h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Book your premium travel experience from Delhi to Uttar Pradesh today and discover the cultural and historical treasures of this fascinating state.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Book Now
            </Link>
            <Link href="/fleet" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}