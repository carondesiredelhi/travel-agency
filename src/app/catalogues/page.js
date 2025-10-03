"use client";
import Image from 'next/image';
import Link from 'next/link';

const pdfs = [
  { name: 'Himachal Taxi Rates', file: '/pdf/Himachal Taxi Rates.pdf', size: '~1 MB' },
  { name: 'Uttarakhand Taxi Rates', file: '/pdf/Uttarakhand Taxi Rates.pdf', size: '~2 MB' },
  { name: 'Rajasthan Taxi Rates', file: '/pdf/Rajasthan Taxi Rates.pdf', size: '~3.4 MB' },
];

export default function CataloguesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
     <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/catalogue.jpg" 
            alt="Catalogue" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our <span className="text-yellow-400">Catalogues</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up delay-100">
            Download our latest route pricing catalogues in PDF format.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pdfs.map((p) => (
              <div key={p.file} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition hover:shadow-xl hover:border-indigo-500 group flex flex-col justify-between">
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 2h-9A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-10L14.5 2z"/><path d="M14 2v6h6" fill="#fff"/></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                      <p className="text-gray-500 text-sm">PDF • {p.size}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Link href={p.file} target="_blank" className="inline-flex items-center px-5 py-2.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 font-semibold transition shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      Open
                    </Link>
                    <a href={p.file} download className="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white mt-8">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Need a Custom Quote?</h2>
          <p className="text-gray-600 text-lg mb-8">Contact our travel experts for a personalized itinerary and the best rates for your journey.</p>
          <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}


