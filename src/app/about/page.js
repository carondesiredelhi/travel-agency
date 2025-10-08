'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// export const metadata = {
//   title: 'About Us | Delhi Travel Agency',
//   description: 'Learn about our premium travel agency offering quality transportation services from Delhi to various destinations across North India.',
//   keywords: 'about delhi travel agency, delhi car rental history, travel agency experience, professional drivers'
// };

// Custom hook for count animation
function useCountAnimation(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [count, ref];
}

export default function About() {
  const [yearsCount, yearsRef] = useCountAnimation(15);
  const [vehiclesCount, vehiclesRef] = useCountAnimation(50);
  const [customersCount, customersRef] = useCountAnimation(10000);
  const [destinationsCount, destinationsRef] = useCountAnimation(500);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/about-hero.png" 
            alt="About Our Travel Agency" 
            fill 
            className="object-cover object-bottom hover:scale-105 transition-transform duration-1000"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            About <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up delay-100">
            Your trusted travel partner in North India since 2005
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-slide-up delay-100">
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-yellow-600">Story</span></h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, Tourist transport Agency began with a small fleet of just 3 vehicles and a passion for showcasing the beauty of North India to travelers. What started as a modest family business has grown into one of the region's most trusted travel service providers.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been defined by our commitment to exceptional service, safety, and creating memorable experiences for our clients. From business travelers to family vacationers, we've helped thousands of people explore the diverse landscapes and rich cultural heritage of North India.
              </p>
              <p className="text-gray-700">
                Today, we operate a diverse fleet of premium vehicles and offer comprehensive travel services, but our core values remain the same: reliability, comfort, and personalized attention to every journey.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-slide-up delay-200">
              <Image 
                src="/about-story.png" 
                alt="Our Journey" 
                fill 
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our <span className="text-yellow-600">Values</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-100">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Safety First</h3>
              <p className="text-gray-600 text-center">
                We prioritize the safety of our passengers above all else, with well-maintained vehicles and professional drivers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-200">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Reliability</h3>
              <p className="text-gray-600 text-center">
                Count on us for punctual service, transparent pricing, and consistent quality on every journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-300">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Value for Money</h3>
              <p className="text-gray-600 text-center">
                We offer competitive rates without compromising on the quality of our vehicles or services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-400">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600 text-center">
                We go the extra mile to ensure our clients have comfortable, enjoyable, and memorable travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Meet Our <span className="text-yellow-600">Team</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up delay-100">
              <div className="relative h-64">
                <Image 
                  src="/team-member1.jpg" 
                  alt="Rajesh Kumar" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rajesh Kumar</h3>
                <p className="text-yellow-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years in the travel industry, Rajesh's vision and leadership have been instrumental in our growth and success.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up delay-200">
              <div className="relative h-64">
                <Image 
                  src="/team-member2.jpg" 
                  alt="Priya Singh" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Priya Singh</h3>
                <p className="text-yellow-600 mb-4">Operations Manager</p>
                <p className="text-gray-600">
                  Priya ensures that every journey is meticulously planned and executed, overseeing our fleet operations and driver training.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up delay-300">
              <div className="relative h-64">
                <Image 
                  src="/team-member3.jpg" 
                  alt="Amit Sharma" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Amit Sharma</h3>
                <p className="text-yellow-600 mb-4">Customer Relations</p>
                <p className="text-gray-600">
                  Amit leads our customer service team, ensuring that client needs are met with prompt, friendly, and professional assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our <span className="text-yellow-600">Achievements</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 animate-slide-up delay-100" ref={yearsRef}>
              <div className="text-4xl font-bold text-yellow-600 mb-2">{yearsCount}+</div>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </div>
            
            <div className="p-6 animate-slide-up delay-200" ref={vehiclesRef}>
              <div className="text-4xl font-bold text-yellow-600 mb-2">{vehiclesCount}+</div>
              <p className="text-gray-700 font-medium">Premium Vehicles</p>
            </div>
            
            <div className="p-6 animate-slide-up delay-300" ref={customersRef}>
              <div className="text-4xl font-bold text-yellow-600 mb-2">{customersCount.toLocaleString()}+</div>
              <p className="text-gray-700 font-medium">Happy Customers</p>
            </div>
            
            <div className="p-6 animate-slide-up delay-400" ref={destinationsRef}>
              <div className="text-4xl font-bold text-yellow-600 mb-2">{destinationsCount}+</div>
              <p className="text-gray-700 font-medium">Destinations Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">What Our <span className="text-yellow-600">Clients Say</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Ananya Patel</h4>
                  <p className="text-gray-500">Family Vacation</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-gray-600">
                "Our family trip to Uttarakhand was perfect thanks to Delhi Travel Agency. The vehicle was comfortable, the driver was knowledgeable and friendly, and the itinerary was well-planned."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-200">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Vikram Mehta</h4>
                  <p className="text-gray-500">Business Travel</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-gray-600">
                "I regularly use their services for business trips across North India. Their punctuality, professional drivers, and well-maintained vehicles make them my go-to travel partner."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500">International Tourist</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-gray-600">
                "As a foreign visitor, I was nervous about traveling in India, but this agency made it so easy and comfortable. Our driver was excellent and the vehicle was luxurious."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to <span className="text-yellow-600">Experience Our Service?</span></h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
            Join thousands of satisfied customers who trust us for their travel needs across North India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform">
              Contact Us Today
            </Link>
            <Link href="/fleet" className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform">
              Explore Our Fleet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}