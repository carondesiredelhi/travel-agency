import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Delhi Travel Agency',
  description: 'Get in touch with our travel experts for booking inquiries, custom travel packages, and fleet services from Delhi to popular destinations.',
  keywords: 'contact travel agency, delhi travel booking, travel inquiry, fleet booking'
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/contact-hero.jpg" 
            alt="Contact Us" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up delay-100">
            We're here to help plan your perfect journey
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3 animate-slide-up delay-100">
              <h2 className="text-3xl font-bold mb-8">Get in <span className="text-yellow-600">Touch</span></h2>
              
              <div className="space-y-6">
                <div className="flex items-start hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">L-320, Ground floor, Mahipalpur, <br/> IGI Airport, New Delhi, India.</p>
                    <br/>
                    <p className="text-gray-600">14/2, sector 45, Chandigarh, India.</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91 98765 43210 (Bookings)</p>
                    <p className="text-gray-600">+91 98765 43211 (Customer Support)</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">bookings@delhitravelagency.com</p>
                    <p className="text-gray-600">support@delhitravelagency.com</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-yellow-100 p-3 rounded-full text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-yellow-100 p-3 rounded-full text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-yellow-100 p-3 rounded-full text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-lg animate-slide-up delay-200">
              <h2 className="text-3xl font-bold mb-6">Send us a <span className="text-yellow-600">Message</span></h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" 
                      placeholder="Booking Inquiry"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" 
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Find <span className="text-yellow-600">Us</span></h2>
          
          <div className="bg-white p-4 rounded-xl shadow-lg overflow-hidden animate-slide-up delay-100">
            <div className="relative h-[400px] w-full">
              {/* Replace with actual map component or embed */}
              <iframe src="https://www.google.com/maps/d/embed?mid=17_s_A9tqK7jus_rhRnxoFUJNwWs5KpA&ehbc=2E312F" className='h-full w-full'></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Frequently Asked <span className="text-yellow-600">Questions</span></h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-100">
              <h3 className="text-xl font-bold mb-3">How do I book a vehicle?</h3>
              <p className="text-gray-600">
                You can book a vehicle by filling out our contact form, calling our booking number, or sending us an email. We'll get back to you within 2 hours to confirm your booking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-200">
              <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit/debit cards, UPI payments, net banking, and cash payments. For long journeys, a 25% advance payment is required to confirm your booking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-300">
              <h3 className="text-xl font-bold mb-3">Can I customize my travel itinerary?</h3>
              <p className="text-gray-600">
                Absolutely! We offer customized travel packages based on your preferences. Just let us know your requirements, and our travel experts will design a personalized itinerary for you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up delay-400">
              <h3 className="text-xl font-bold mb-3">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                Cancellations made 48 hours before the journey start time are eligible for a full refund. Cancellations within 24-48 hours will incur a 25% charge, and cancellations within 24 hours will incur a 50% charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to <span className="text-yellow-600">Start Your Journey?</span></h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
            Contact us today to book your perfect vehicle or customize your travel package. Our team is ready to assist you 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
            <Link href="/fleet" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform">
              Explore Our Fleet
            </Link>
            <Link href="/routes/delhi-to-uttarakhand" className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform">
              View Popular Routes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}