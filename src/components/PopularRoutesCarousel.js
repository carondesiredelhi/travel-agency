// app/components/PopularRoutesCarousel.js
"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const routes = [
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
  <div className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col m-2">
      <div className="relative h-56">
        <Image
          src={route.imageUrl}
          alt={route.title}
          fill
          className="object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {route.title}
        </h3>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 flex-grow">{route.description}</p>
        <Link
          href={route.link}
          className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center group mt-auto"
        >
          Explore Route
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export default function PopularRoutesCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {routes.map((route, index) => (
          <RouteCard key={index} route={route} />
        ))}
      </div>
    </div>
  );
}