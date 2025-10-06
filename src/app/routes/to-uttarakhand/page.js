import PopularRoutesCarousel from "@/components/PopularRoutesCarousel";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Delhi to Uttarakhand Travel Services | Premium Fleet Options",
    description:
        "Premium travel services from Delhi to Uttarakhand with luxury fleet options. Visit Rishikesh, Mussoorie, Nainital, and more with our comfortable vehicles.",
    keywords:
        "delhi to uttarakhand, uttarakhand travel, rishikesh travel, mussoorie travel, nainital travel, haridwar travel",
};

// Extracted popular destinations from PDF
const uttarakhandRoutes = [
    {
        name: "Rishikesh",
        image: "/rishikesh.png",
        description:
            'Known as the "Yoga Capital of the World", Rishikesh offers spiritual experiences, adventure sports, and the famous Laxman Jhula bridge.',
        nights: "2N/3D",
    },
    {
        name: "Mussoorie",
        image: "/mussoorie.png",
        description:
            'A popular hill station known as the "Queen of Hills" with stunning mountain views, Mall Road, and pleasant weather throughout the year.',
        nights: "2N/3D or 5N/6D",
    },

    {
        name: "Nainital",
        image: "/nainital.png",
        description:
            "Famous for its pear-shaped lake, Nainital offers boating, shopping on Mall Road, and panoramic views from Naina Peak.",
        nights: "3N/4D to 6N/7D",
    },
    {
        name: "Haridwar",
        image: "/haridwar.png",
        description:
            "One of the seven holiest places in Hinduism, known for the Ganga Aarti at Har Ki Pauri and numerous ancient temples.",
        nights: "3N/4D to 6N/7D",
    },
];

// Only real combinations from PDF are used

const delhiPricing = [
    {
        destination: "Haridwar & Rishikesh (2N/3D)",
        sedan: "₹10,000",
        suv: "₹15,000",
        tempo: "₹22,000",
    },
    {
        destination: "Jim Corbett + Nainital (3N/4D)",
        sedan: "₹13,500",
        suv: "₹20,000",
        tempo: "₹30,000",
    },
    {
        destination: "Nainital + Corbett + Haridwar/Rishikesh (5N/6D)",
        sedan: "₹19,000",
        suv: "₹30,000",
        tempo: "₹46,500",
    },
    {
        destination: "Nainital + Corbett + Haridwar/Rishikesh (6N/7D)",
        sedan: "₹22,000",
        suv: "₹33,800",
        tempo: "₹52,500",
    },
    {
        destination:
            "Mussoorie + Haridwar/Rishikesh + Corbett + Nainital + Kausani (10N/11D)",
        sedan: "₹33,000",
        suv: "₹52,800",
        tempo: "₹84,000",
    },
];

const dehradunPricing = [
    {
        destination: "Haridwar & Rishikesh (2N/3D)",
        sedan: "₹9,000",
        suv: "₹13,500",
        tempo: "₹19,000",
    },
    {
        destination: "Jim Corbett + Nainital (3N/4D)",
        sedan: "₹13,700",
        suv: "₹19,000",
        tempo: "₹29,500",
    },
    {
        destination: "Nainital + Corbett + Haridwar/Rishikesh (5N/6D)",
        sedan: "₹18,900",
        suv: "₹27,000",
        tempo: "₹44,800",
    },
    {
        destination: "Nainital + Corbett + Haridwar/Rishikesh (6N/7D)",
        sedan: "₹21,000",
        suv: "₹31,500",
        tempo: "₹51,500",
    },
    {
        destination:
            "Mussoorie + Haridwar/Rishikesh + Corbett + Nainital + Kausani (10N/11D)",
        sedan: "₹32,900",
        suv: "₹49,500",
        tempo: "₹78,500",
    },
];

// Helper to render pricing table
const renderPricingTable = (pricingData, title) => (
    <div className="overflow-x-auto mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
            Pricing <span className="text-blue-700">{title}</span>
        </h2>
        <div className="overflow-x-auto mb-12">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">
                            Destination (Duration)
                        </th>
                        <th className="py-3 px-4 text-left">Sedan (4+D)</th>
                        <th className="py-3 px-4 text-left">SUV (6+D)</th>
                        <th className="py-3 px-4 text-left">
                            Tempo Traveller (12+D)
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {pricingData.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">
                                {item.destination}
                            </td>
                            <td className="py-3 px-4">{item.sedan}</td>
                            <td className="py-3 px-4">{item.suv}</td>
                            <td className="py-3 px-4">{item.tempo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default function UttarakhandTaxiPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-cyan-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-80">
                    <Image
                        src="/uttarakhand.webp"
                        alt="Uttarakhand Mountains"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Explore{" "}
                        <span className="text-yellow-300">Uttarakhand</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Journey through the Divine Himalayas — Haridwar,
                        Rishikesh, Corbett, Nainital & more
                    </p>
                </div>
            </section>

            {/* Quick Info Section */}
            <section className="py-8 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-gray-700">
                                <strong>Duration:</strong> 2N to 12N tours
                            </span>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span className="text-gray-700">
                                <strong>Pickup:</strong> Delhi or Dehradun
                            </span>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <span className="text-gray-700">
                                <strong>Support:</strong> +91 93103 89959
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Service */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Uttarakhand Route{" "}
                        <span className="text-blue-600">Packages</span>
                    </h2>
                    <div className="max-w-4xl mx-auto text-gray-700">
                        <p className="mb-4">
                            Uttarakhand, the "Land of the Gods", offers a
                            perfect blend of spirituality, wildlife, and
                            Himalayan beauty. From the sacred ghats of Haridwar
                            to the jungles of Jim Corbett and the serene lakes
                            of Nainital — every journey is unforgettable.
                        </p>
                        <p className="mb-4">
                            We offer all-inclusive taxi packages from Delhi and
                            Dehradun to major destinations across Uttarakhand.
                            Whether you seek peace, adventure, or nature, our
                            curated itineraries cover it all.
                        </p>
                        <p>
                            All vehicles come with experienced drivers familiar
                            with mountain terrain. Your safety and comfort are
                            our priority.
                        </p>
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <PopularRoutesCarousel routes={uttarakhandRoutes} />

            {/* Pricing Tables */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {renderPricingTable(delhiPricing, "from Delhi")}
                    {renderPricingTable(dehradunPricing, "from Dehradun")}

                    <div className="mt-8 text-center text-gray-600 text-sm">
                        <p>
                            * All prices include toll, parking, state taxes, and
                            driver allowance.
                        </p>
                        <p>
                            * Pickup & drop, hotel transfers, and sightseeing as
                            per fixed itinerary.
                        </p>
                        <p>
                            * 10% surcharge applicable during Christmas, New
                            Year & long weekends.
                        </p>
                        <p>
                            * Add-ons like Dhanaulti, Mukteshwar, Baijnath
                            available at extra cost.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Included — aligned with PDF */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Services{" "}
                        <span className="text-yellow-400">Included</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-blue-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Reliable Drivers
                            </h3>
                            <p>
                                Professional drivers familiar with Himachal
                                routes and safety protocols.
                            </p>
                        </div>

                        <div className="bg-blue-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Standard Vehicles
                            </h3>
                            <p>
                                Well-maintained Sedan (Etios/Dzire), SUV
                                (Innova/Marazzo), or Tempo Traveller as booked.
                            </p>
                        </div>

                        <div className="bg-blue-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Timely Support
                            </h3>
                            <p>
                                Assistance available during service hours (8
                                AM–8 PM, except first and last day).
                            </p>
                        </div>

                        <div className="bg-blue-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Fixed Itinerary Only
                            </h3>
                            <p>
                                We strictly follow the scheduled tour plan — no
                                custom changes allowed.
                            </p>
                        </div>

                        <div className="bg-blue-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Transparent Inclusions
                            </h3>
                            <p>
                                All toll, parking, state taxes, and driver
                                allowance covered as per package.
                            </p>
                        </div>

                        <div className="bg-blue-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Complete Transfers
                            </h3>
                            <p>
                                Pickup, drop-off, and all destination-to-hotel
                                transfers as per itinerary.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Book Your{" "}
                        <span className="text-blue-600">
                            Uttarakhand Journey
                        </span>
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get an all-inclusive taxi package from Delhi or Dehradun
                        with transparent pricing.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/919310389959"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                        >
                            WhatsApp Now
                        </a>
                        <Link
                            href="/contact"
                            className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
