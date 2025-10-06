import PopularRoutesCarousel from "@/components/PopularRoutesCarousel";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Delhi to Rajasthan Travel Services | Premium Fleet Options",
    description:
        "Premium travel services from Delhi to Rajasthan with luxury fleet options. Visit Jaipur, Udaipur, Jaisalmer, and more with our comfortable vehicles.",
    keywords:
        "delhi to rajasthan, rajasthan travel, jaipur travel, udaipur travel, jaisalmer travel, jodhpur travel",
};

// Extracted ONLY from PDF – real Rajasthan routes
const rajasthanRoutes = [
    {
        name: "Jaipur",
        image: "/jaipur.png",
        description:
            "The Pink City of India, known for its stunning architecture including Hawa Mahal, City Palace, and Amber Fort. Perfect for history enthusiasts and photographers.",
        nights: "2N/3D",
    },
    {
        name: "Udaipur",
        image: "/udaipur.png",
        description:
            "The City of Lakes, famous for its romantic setting, Lake Palace, and City Palace. Ideal for couples and those seeking a serene experience.",
        nights: "1N/2D",
    },
    {
        name: "Jaisalmer",
        image: "/jaisalmer.png",
        description:
            "The Golden City with its magnificent fort rising from the desert, offering camel safaris and desert camping experiences. Perfect for adventure seekers.",
        nights: "1N/2D",
    },
    {
        name: "Jodhpur",
        image: "/jodhpur.png",
        description:
            "The Blue City dominated by the impressive Mehrangarh Fort, offering a glimpse into Rajasthan's royal heritage and vibrant culture.",

        nights: "2N/3D",
    },
];

// Pricing STRICTLY from PDF (EX-DELHI only)
const rajasthanPricing = [
    {
        destination: "Agra (1N/2D)",
        sedan: "₹7,500",
        suv: "₹11,500 / ₹12,500",
        tempo: "₹14,000",
    },
    {
        destination: "Jaipur (2N/3D)",
        sedan: "₹10,500",
        suv: "₹16,500 / ₹18,000",
        tempo: "₹24,000",
    },
    {
        destination: "Delhi-Agra-Jaipur (4N/5D)",
        sedan: "₹15,500",
        suv: "₹27,000 / ₹29,500",
        tempo: "₹34,500",
    },
    {
        destination: "Delhi-Jaipur-Pushkar/Ajmer (5N/6D)",
        sedan: "₹17,300",
        suv: "₹30,000 / ₹33,000",
        tempo: "₹45,000",
    },
    {
        destination: "Delhi-Jaipur-Jodhpur (6N/7D)",
        sedan: "₹21,000",
        suv: "₹37,000 / ₹40,500",
        tempo: "₹52,000",
    },
];

export default function RajasthanTaxiPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-amber-900 to-orange-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-80">
                    <Image
                        src="/rajasthan.png"
                        alt="Rajasthan Forts"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Discover{" "}
                        <span className="text-yellow-300">Rajasthan</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Experience the royal grandeur, desert forts, and vibrant
                        culture of the Land of Kings
                    </p>
                </div>
            </section>

            {/* Quick Info Section */}
            <section className="py-8 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-amber-600 mr-2"
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
                                <strong>Duration:</strong> 2D to 8D tours
                            </span>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-amber-600 mr-2"
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
                                <strong>Pickup:</strong> Delhi only
                            </span>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-amber-600 mr-2"
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
                        Rajasthan Route{" "}
                        <span className="text-amber-600">Packages</span>
                    </h2>
                    <div className="max-w-4xl mx-auto text-gray-700">
                        <p className="mb-4">
                            Embark on a royal journey through Rajasthan’s
                            majestic forts, palaces, and desert landscapes.
                            Starting from Delhi, our curated taxi packages take
                            you to iconic destinations like Jaipur, Agra,
                            Pushkar, Ajmer, and Jodhpur.
                        </p>
                        <p className="mb-4">
                            All itineraries are designed to showcase the best of
                            Rajasthan’s heritage, with seamless transfers and
                            comfortable travel in well-maintained vehicles.
                        </p>
                        <p>
                            Our experienced drivers ensure safe and timely
                            travel across North India’s historic Golden Triangle
                            and beyond, adhering strictly to the scheduled
                            itinerary.
                        </p>
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <PopularRoutesCarousel routes={rajasthanRoutes} />

            {/* Pricing Tables */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Pricing from{" "}
                        <span className="text-amber-600">Delhi</span>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                            <thead className="bg-amber-600 text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">
                                        Destination (Duration)
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Sedan (4+D)
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Innova/Crysta
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Tempo Traveller (12+D)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {rajasthanPricing.map((item, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium">
                                            {item.destination}
                                        </td>
                                        <td className="py-3 px-4">
                                            {item.sedan}
                                        </td>
                                        <td className="py-3 px-4">
                                            {item.suv}
                                        </td>
                                        <td className="py-3 px-4">
                                            {item.tempo}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 text-center text-gray-600 text-sm">
                        <p>
                            * Prices are as per official PDF rates from
                            CarOnDesire.com.
                        </p>
                        <p>
                            * All tolls, parking, state taxes, and driver
                            allowance included.
                        </p>
                        <p>
                            * 10% surcharge applicable during Christmas, New
                            Year & long weekends.
                        </p>
                        <p>
                            * Add-ons like Fatehpur Sikri available at extra
                            cost (see PDF).
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Included */}
            <section className="py-16 bg-amber-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Services{" "}
                        <span className="text-yellow-300">Included</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-amber-800 p-6 rounded-lg">
                            <div className="bg-yellow-300 text-amber-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                                Professional Drivers
                            </h3>
                            <p>
                                Trained drivers familiar with Rajasthan routes
                                and monument timings.
                            </p>
                        </div>

                        <div className="bg-amber-800 p-6 rounded-lg">
                            <div className="bg-yellow-300 text-amber-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                                Sedan (Etios/Dzire), SUV (Innova/Crysta), or
                                Tempo Traveller as booked.
                            </p>
                        </div>

                        <div className="bg-amber-800 p-6 rounded-lg">
                            <div className="bg-yellow-300 text-amber-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                                Fixed Itinerary
                            </h3>
                            <p>
                                We strictly follow the scheduled plan — no
                                deviations allowed.
                            </p>
                        </div>

                        <div className="bg-amber-800 p-6 rounded-lg">
                            <div className="bg-yellow-300 text-amber-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                                All-Inclusive
                            </h3>
                            <p>
                                Toll, parking, state taxes, and driver allowance
                                covered.
                            </p>
                        </div>

                        <div className="bg-amber-800 p-6 rounded-lg">
                            <div className="bg-yellow-300 text-amber-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                                Full Transfers
                            </h3>
                            <p>
                                Pickup, drop-off, and all hotel-to-sightseeing
                                transfers included.
                            </p>
                        </div>

                        <div className="bg-amber-800 p-6 rounded-lg">
                            <div className="bg-yellow-300 text-amber-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                                NRI & Foreigner Support
                            </h3>
                            <p>
                                Special rates + complimentary monument guide for
                                international guests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-stone-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Book Your{" "}
                        <span className="text-amber-600">Rajasthan Tour</span>
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get an all-inclusive taxi package from Delhi to
                        Rajasthan’s royal cities.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/919310389959"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                        >
                            WhatsApp Now
                        </a>
                        <Link
                            href="/contact"
                            className="bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
