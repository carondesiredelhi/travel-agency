import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Delhi to Punjab Travel Services | Premium Fleet Options',
  description: 'Premium travel services from Delhi to Punjab with luxury fleet options. Visit Amritsar, Chandigarh, Ludhiana, and more with our comfortable vehicles.',
  keywords: 'delhi to punjab, punjab travel, amritsar travel, chandigarh travel, ludhiana travel, jalandhar travel'
};

export default function DelhiToPunjab() {
  // Pricing data for different vehicles
  const pricingData = [
    {
      vehicle: 'Sedan',
      capacity: '4 Passengers',
      oneWay: '₹7,500',
      roundTrip: '₹14,000',
      multiDay: '₹3,800/day'
    },
    {
      vehicle: 'SUV',
      capacity: '7 Passengers',
      oneWay: '₹10,500',
      roundTrip: '₹19,500',
      multiDay: '₹5,500/day'
    },
    {
      vehicle: 'MUV',
      capacity: '8 Passengers',
      oneWay: '₹12,000',
      roundTrip: '₹22,000',
      multiDay: '₹6,000/day'
    },
    {
      vehicle: 'Tempo Traveller',
      capacity: '12 Passengers',
      oneWay: '₹16,000',
      roundTrip: '₹30,000',
      multiDay: '₹8,000/day'
    },
    {
      vehicle: 'Arvenia',
      capacity: '5 Passengers',
      oneWay: '₹9,000',
      roundTrip: '₹17,000',
      multiDay: '₹4,500/day'
    }
  ];

  // Popular destinations in Punjab
  const destinations = [
    {
      name: 'Amritsar',
      image: '/amritsar.png',
      description: 'Home to the magnificent Golden Temple, Wagah Border ceremony, and Jallianwala Bagh. A spiritual and historical center of Sikhism.',
      distance: '460 km from Delhi',
      travelTime: '8-9 hours'
    },
    {
      name: 'Chandigarh',
      image: '/chandigarh.png',
      description: 'The well-planned capital of Punjab and Haryana, featuring the Rock Garden, Sukhna Lake, and Rose Garden. Known for its modern architecture and clean environment.',
      distance: '250 km from Delhi',
      travelTime: '4-5 hours'
    },
    {
      name: 'Ludhiana',
      image: '/ludhiana.png',
      description: 'The industrial hub of Punjab with attractions like Punjab Agricultural University, Lodhi Fort, and vibrant markets for shopping enthusiasts.',
      distance: '320 km from Delhi',
      travelTime: '6-7 hours'
    },
    {
      name: 'Jalandhar',
      image: '/jalandhar.png',
      description: 'Known for sports goods manufacturing, Devi Talab Mandir, and Wonderland Theme Park. A blend of tradition and modernity.',
      distance: '370 km from Delhi',
      travelTime: '7-8 hours'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-yellow-700 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <Image 
            src="/punjab-hero.webp" 
            alt="Punjab Landmarks" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delhi to <span className="text-green-300">Punjab</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the vibrant culture, delicious cuisine, and warm hospitality of Punjab
          </p>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700"><strong>Duration:</strong> 4-9 hours</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700"><strong>Distance:</strong> 250-460 km</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <h2 className="text-3xl font-bold text-center mb-8">About <span className="text-yellow-600">Delhi to Punjab</span> Route</h2>
          <div className="max-w-4xl mx-auto text-gray-700">
            <p className="mb-4">
              The journey from Delhi to Punjab takes you through the fertile plains of North India, with scenic agricultural landscapes that change with the seasons. The route is well-connected via national highways, making it a comfortable drive.
            </p>
            <p className="mb-4">
              Depending on your destination within Punjab, the journey can take between 4 to 9 hours. The closest major city, Chandigarh, is just a 4-5 hour drive from Delhi, while reaching Amritsar near the Pakistan border takes around 8-9 hours.
            </p>
            <p>
              Our fleet of comfortable vehicles and experienced drivers ensure a pleasant journey to the land of five rivers. We provide regular comfort breaks at quality rest stops along the way, and our drivers are knowledgeable about the region's history and culture.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular <span className="text-yellow-600">Destinations</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="relative h-64 md:h-auto md:w-2/5">
                  <Image 
                    src={destination.image} 
                    alt={destination.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {destination.distance}
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {destination.travelTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-yellow-600">Pricing</span></h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-yellow-600 text-white">
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
            <p>* For destinations beyond Chandigarh (like Amritsar, Jalandhar), additional charges apply due to longer distances.</p>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-yellow-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services <span className="text-green-300">Included</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-700 p-6 rounded-lg">
              <div className="bg-green-300 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Drivers</h3>
              <p>Professional drivers with extensive knowledge of Punjab's roads, culture, and tourist attractions.</p>
            </div>
            
            <div className="bg-yellow-700 p-6 rounded-lg">
              <div className="bg-green-300 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Vehicles</h3>
              <p>Well-maintained, air-conditioned vehicles with comfortable seating and ample luggage space.</p>
            </div>
            
            <div className="bg-yellow-700 p-6 rounded-lg">
              <div className="bg-green-300 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Assistance</h3>
              <p>Round-the-clock customer support to address any concerns or emergencies during your journey.</p>
            </div>
            
            <div className="bg-yellow-700 p-6 rounded-lg">
              <div className="bg-green-300 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Itineraries</h3>
              <p>Customized travel plans tailored to your preferences, including recommended stops and attractions.</p>
            </div>
            
            <div className="bg-yellow-700 p-6 rounded-lg">
              <div className="bg-green-300 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p>Clear pricing with no hidden charges, including fuel costs, driver allowances, and toll fees.</p>
            </div>
            
            <div className="bg-yellow-700 p-6 rounded-lg">
              <div className="bg-green-300 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Experience</h3>
              <p>Insights into Punjab's rich culture, traditions, and recommendations for authentic Punjabi cuisine experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to <span className="text-yellow-600">Explore Punjab?</span></h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Book your premium travel experience from Delhi to Punjab today and immerse yourself in the vibrant culture and warm hospitality of the region.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Book Now
            </Link>
            <Link href="/fleet" className="bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}