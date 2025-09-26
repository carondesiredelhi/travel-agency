"use client";
import Link from 'next/link';

const pdfs = [
  { name: 'Himachal Taxi Rates', file: '/pdf/Himachal Taxi Rates.pdf', size: '~1 MB' },
  { name: 'Uttarakhand Taxi Rates', file: '/pdf/Uttarakhand Taxi Rates.pdf', size: '~2 MB' },
  { name: 'Rajasthan Taxi Rates', file: '/pdf/Rajasthan Taxi Rates.pdf', size: '~3.4 MB' },
];

export default function CataloguesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-blue-800"></div>
        <div className="absolute inset-0 opacity-30" style={{backgroundImage:'url(/globe.svg)', backgroundRepeat:'no-repeat', backgroundPosition:'right -100px top -100px'}}></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Catalogues</h1>
          <p className="text-white/90 max-w-2xl mx-auto">Download our latest route pricing catalogues in PDF format.</p>
        </div>
      </section>

      {/* List */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfs.map((p) => (
              <div key={p.file} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 2h-9A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-10L14.5 2z"/><path d="M14 2v6h6" fill="#fff"/></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                      <p className="text-gray-500 text-sm">PDF • {p.size}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href={p.file} target="_blank" className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
                      Open
                    </Link>
                    <a href={p.file} download className="inline-flex items-center px-4 py-2 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


