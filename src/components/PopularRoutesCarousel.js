// app/components/PopularRoutesCarousel.js
"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const defaultRoutes = [
  {
    title: "Delhi to Uttarakhand",
    description: "Explore majestic mountains and spiritual retreats.",
    imageUrl: "/uttarakhand.webp",
    link: "/routes/delhi-to-uttarakhand",
  },
  {
    title: "Delhi to Himachal",
    description: "Discover scenic beauty and thrilling adventures.",
    imageUrl: "/himachal.avif",
    link: "/routes/delhi-to-himachal",
  },
  {
    title: "Delhi to Rajasthan",
    description: "Experience royal heritage and vast deserts.",
    imageUrl: "/rajasthan.png",
    link: "/routes/delhi-to-rajasthan",
  },
  {
    title: "Delhi to Uttar Pradesh",
    description: "Witness the timeless beauty of the Taj Mahal.",
    imageUrl: "/varanasi.png",
    link: "/routes/delhi-to-up",
  },
  {
    title: "Delhi to Punjab",
    description: "Immerse in the vibrant culture and history of Punjab.",
    imageUrl: "/punjab-hero.webp",
    link: "/routes/delhi-to-punjab",
  },
];

const RouteCard = ({ route }) => (
  <div className="embla__slide flex-[0_0_100%]">
    <div className="relative h-[60vh] md:h-[70vh] w-full">
      <Image 
        src={route.imageUrl || route.image} 
        alt={route.title || route.name} 
        fill 
        className="object-cover" 
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  </div>
);

export default function PopularRoutesCarousel({ routes = defaultRoutes }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [textAnimating, setTextAnimating] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setTextAnimating(true);
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // end animation after a short duration
    setTimeout(() => setTextAnimating(false), 450);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {routes.map((route, index) => (
            <RouteCard key={index} route={route} />
          ))}
        </div>
      </div>

      {/* Fixed overlayed text that animates in place */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <div className={`max-w-2xl pr-2 sm:pr-4 md:pr-8 lg:pr-12 transition-all duration-500 ease-out will-change-transform will-change-opacity ${textAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-3 sm:mb-4">
              {routes[selectedIndex].title || `Delhi to ${routes[selectedIndex].name}`}
            </h3>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-4">
              {routes[selectedIndex].description}
            </p>
            {/* Show distance and travel time if available */}
            {(routes[selectedIndex].distance || routes[selectedIndex].travelTime) && (
              <div className="flex flex-wrap gap-4 text-white/80 text-sm sm:text-base">
                {routes[selectedIndex].distance && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {routes[selectedIndex].distance}
                  </div>
                )}
                {routes[selectedIndex].travelTime && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {routes[selectedIndex].travelTime}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="pointer-events-auto mt-5 sm:mt-6">
            <Link 
              href={routes[selectedIndex].link || `#${routes[selectedIndex].name?.toLowerCase()}`} 
              className="inline-flex items-center bg-white/90 text-gray-900 hover:bg-white rounded-full px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 font-semibold transition"
            >
              Explore {routes[selectedIndex].name || 'route'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Controls like the reference image */}
      <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 flex items-center gap-3 sm:gap-4">
        <div className="text-white/90 text-xs sm:text-sm md:text-base">{selectedIndex + 1} / {routes.length}</div>
        <div className="flex items-center gap-2">
          <button onClick={scrollPrev} className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/60 text-white flex items-center justify-center hover:bg-white/20 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={scrollNext} className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/60 text-white flex items-center justify-center hover:bg-white/20 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}