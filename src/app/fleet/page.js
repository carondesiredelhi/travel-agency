import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Premium Fleet | Travel Agency',
  description: 'Explore our premium fleet of vehicles including Sedan, SUV, MUV, Urbania, and Tempo Traveller for your comfortable journey from Delhi, Chandigarh and Dehradun.',
  keywords: 'travel fleet, sedan, suv, muv, urbania, tempo traveller, delhi travel, luxury vehicles'
};

export default function Fleet() {

  // const fleetData = [
  //   {
  //     name: 'Sedan',
  //     image: '/sedan.png',
  //     description: 'Comfortable and economical option for small groups or couples. Perfect for city travel and short distances.',
  //     features: ['4 Passengers', 'Air Conditioning', '3 Luggage Capacity', 'Fuel Efficient', 'Ideal for City Travel'],
  //     idealFor: 'Couples, Small Families, Business Travelers'
  //   },
  //   {
  //     name: 'SUV',
  //     image: '/suv.png',
  //     description: 'Spacious and powerful vehicles perfect for long journeys and rough terrains. Ideal for family trips to hill stations.',
  //     features: ['7 Passengers', 'Air Conditioning', '5 Luggage Capacity', 'All-Terrain Capability', 'Comfortable Seating'],
  //     idealFor: 'Families, Groups, Hill Station Trips'
  //   },
  //   {
  //     name: 'MUV',
  //     image: '/muv.png',
  //     description: 'Multi-Utility Vehicles offering extra space and comfort for larger groups while maintaining good fuel efficiency.',
  //     features: ['8 Passengers', 'Air Conditioning', '6 Luggage Capacity', 'Spacious Interiors', 'Fuel Efficient'],
  //     idealFor: 'Large Families, Extended Groups, Long Journeys'
  //   },
  //   {
  //     name: 'Urbania',
  //     image: '/urbania.png',
  //     description: 'Premium luxury vehicles with enhanced comfort features for those who seek a touch of elegance in their journey.',
  //     features: ['5 Passengers', 'Premium Air Conditioning', '4 Luggage Capacity', 'Leather Seating', 'Advanced Entertainment System'],
  //     idealFor: 'Luxury Travelers, Corporate Executives, Special Occasions'
  //   },
  //   {
  //     name: 'Tempo Traveller',
  //     image: '/tempo.png',
  //     description: 'Spacious mini-buses perfect for large groups traveling together. Ideal for corporate outings or large family trips.',
  //     features: ['12-14 Passengers', 'Air Conditioning', '10+ Luggage Capacity', 'Comfortable Push-back Seats', 'Ample Leg Room'],
  //     idealFor: 'Large Groups, Corporate Outings, Tour Groups'
  //   }
  // ];


  const fleetData = [
  {
    name: 'Swift Dzire',
    image: '/sedan.png',
    description: 'Compact sedan known for reliability, comfort, and excellent fuel efficiency. Ideal for daily commutes and city rides.',
    features: ['4 Passengers', 'Air Conditioning', '3 Luggage Capacity', 'Fuel Efficient', 'Smooth City Drive'],
    idealFor: 'Couples, Small Families, Business Travelers, Airport Transfers'
  },
  {
    name: 'Innova Crysta',
    image: '/suv.png',
    description: 'Premium MPV with plush interiors, powerful performance, and ultimate comfort for long-distance travel.',
    features: ['7 Passengers', 'Air Conditioning', '5-6 Luggage Capacity', 'Spacious Interiors', 'Smooth Ride'],
    idealFor: 'Families, Corporate Travel, Outstation Journeys, Hill Station Trips'
  },
  {
    name: 'Tempo Traveller',
    image: '/tempo.png',
    description: 'The go-to choice for big groups, offering spacious interiors and comfortable seating for long trips together.',
    features: ['12-17 Passengers', 'Air Conditioning', '10+ Luggage Capacity', 'Push-back Seats', 'Ample Leg Room'],
    idealFor: 'Large Families, Corporate Outings, Group Tours, Pilgrimage Trips'
  },
  {
    name: 'Urbania',
    image: '/urbania.png',
    description: 'Luxury van with advanced features, offering business-class comfort and style for travel in larger groups.',
    features: ['8-10 Passengers', 'Premium Air Conditioning', '6-7 Luggage Capacity', 'Luxury Interiors', 'Entertainment System'],
    idealFor: 'Corporate Executives, Luxury Travelers, Special Events, VIP Transfers'
  },
  {
    name: 'Kia',
    image: '/kia.jpg',
    description: 'A sporty luxury sedan delivering high performance, sleek design, and a premium driving experience.',
    features: ['4 Passengers', 'Premium Air Conditioning', '3 Luggage Capacity', 'Leather Interiors', 'High Performance Engine'],
    idealFor: 'Luxury Travelers, Couples, Business Executives, Special Occasions'
  },
  {
    name: 'Ertiga',
    image: '/ertiga.jpg',
    description: 'A practical and spacious MPV offering comfort and efficiency for medium-sized families and groups.',
    features: ['6-7 Passengers', 'Air Conditioning', '4-5 Luggage Capacity', 'Flexible Seating', 'Fuel Efficient'],
    idealFor: 'Families, Small Groups, Outstation Trips'
  }
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/fleet-hero.jpg" 
            alt="Premium Fleet" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Premium <span className="text-yellow-400">Fleet</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up delay-100">
            Travel in comfort and style with our well-maintained luxury vehicles
          </p>
        </div>
      </section>

      {/* Fleet Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Experience <span className="text-yellow-600">Luxury Travel</span></h2>
            <p className="text-gray-700 mb-8 animate-slide-up delay-100">
              Our fleet consists of well-maintained, air-conditioned vehicles driven by experienced chauffeurs. 
              We offer a range of options to suit your specific needs, whether you're traveling solo, 
              with family, or in a large group. All our vehicles undergo regular maintenance checks 
              to ensure your safety and comfort throughout the journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-200">
              <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">Regularly Serviced</span>
              </div>
              <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">Air Conditioned</span>
              </div>
              <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">Professional Drivers</span>
              </div>
              <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our <span className="text-yellow-600">Vehicles</span></h2>
          
          <div className="space-y-16">
            {fleetData.map((vehicle, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up delay-${(index + 1) * 100}`}>
                <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden group">
                  <Image 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{vehicle.name}</span>
                  </div>
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-6">{vehicle.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="flex items-center hover:text-yellow-600 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Ideal For:</h4>
                    <p className="text-gray-600">{vehicle.idealFor}</p>
                  </div>
                  
                  <Link href="/contact" className="self-start bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 transform">
                    Book This Vehicle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Fleet */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Why Choose <span className="text-yellow-600">Our Fleet</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up delay-100">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Safety First</h3>
              <p className="text-gray-600 text-center">
                All our vehicles undergo regular safety checks and maintenance to ensure a secure journey for our passengers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up delay-200">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Punctuality</h3>
              <p className="text-gray-600 text-center">
                We value your time and ensure our drivers arrive promptly for pickup and adhere to scheduled timelines.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up delay-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Transparent Pricing</h3>
              <p className="text-gray-600 text-center">
                We offer clear, upfront pricing with no hidden charges. Get detailed quotes before booking your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to <span className="text-yellow-600">Book Your Journey?</span></h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
            Contact us today to reserve the perfect vehicle for your travel needs. Our team is ready to assist you 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform">
              Book Now
            </Link>
            <Link href="/routes/delhi-to-uttarakhand" className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform">
              Explore Routes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}