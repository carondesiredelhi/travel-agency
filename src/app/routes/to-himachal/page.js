"use client";
import PopularRoutesCarousel from "@/components/PopularRoutesCarousel";
import Image from "next/image";
import Link from "next/link";

// Extracted from PDF - only real routes and durations
const himachalRoutes = [
    {
        name: "Shimla",
        image: "/shimla.png",
        description:
            "The capital of Himachal Pradesh, known for its colonial architecture, Mall Road, and the toy train.",
        nights: "2N/3D",
    },
    {
        name: "Manali",
        image: "/manali.png",
        description:
            "A popular hill station offering adventure sports, scenic beauty, and access to Rohtang Pass & Atal Tunnel.",
        nights: "3N/4D or 6N/7D",
    },
    {
        name: "Dharamshala",
        image: "/dharamshala.png",
        description:
            "Spiritual Dharamshala and scenic Dalhousie with Khajjiar – Mini Switzerland of India.",
        nights: "4N/5D or 9N/10D",
    },
    {
        name: "Multi-Destination Tour",
        image: "/dalhousie.png",
        description:
            "Comprehensive tours covering Shimla, Manali, Dharamshala, Dalhousie & Amritsar.",
        nights: "6N/7D to 10N/11D",
    },
];

// Pricing strictly from PDF (EX DELHI and EX CHANDIGARH)
// Format: [destination, weekend (2N/3D), week-long (6N/7D), long (10N/11D)]
const delhiPricing = [
    {
        destination: "Shimla (2N/3D)",
        sedan: "₹11,500",
        suv: "₹17,000",
        tempo: "₹22,500",
    },
    {
        destination: "Manali (3N/4D)",
        sedan: "₹15,000",
        suv: "₹22,000",
        tempo: "₹32,500",
    },
    {
        destination: "Manali (6N/7D)",
        sedan: "₹23,000",
        suv: "₹38,000",
        tempo: "₹52,500",
    },
    {
        destination: "Shimla + Manali + Amritsar (7N/8D)",
        sedan: "₹26,500",
        suv: "₹40,800",
        tempo: "₹60,000",
    },
    {
        destination:
            "Shimla + Manali + Dharamshala + Dalhousie + Amritsar (10N/11D)",
        sedan: "₹33,700",
        suv: "₹55,000",
        tempo: "₹84,000",
    },
];

const chandigarhPricing = [
    {
        destination: "Shimla (2N/3D)",
        sedan: "₹10,200",
        suv: "₹12,800",
        tempo: "₹19,500",
    },
    {
        destination: "Manali (3N/4D)",
        sedan: "₹13,700",
        suv: "₹18,000",
        tempo: "₹27,500",
    },
    {
        destination: "Manali (6N/7D)",
        sedan: "₹21,000",
        suv: "₹29,000",
        tempo: "₹45,500",
    },
    {
        destination: "Shimla + Manali + Chandigarh (6N/7D)",
        sedan: "₹22,000",
        suv: "₹35,000",
        tempo: "₹52,500",
    },
    {
        destination:
            "Shimla + Manali + Dharamshala + Dalhousie + Amritsar (10N/11D)",
        sedan: "₹32,900",
        suv: "₹44,000",
        tempo: "₹71,500",
    },
];

export default function HimachalTaxiPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-green-900 to-emerald-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-80">
                    <Image
                        src="/himachal.avif"
                        alt="Himachal Mountains"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Explore{" "}
                        <span className="text-yellow-400">
                            Himachal Pradesh
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Discover the breathtaking beauty of the Himalayan
                        valleys with our premium travel services
                    </p>
                </div>
            </section>

            {/* Quick Info Section */}
            <section className="py-8 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-600 mr-2"
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
                                <strong>Duration:</strong> 2N to 11N tours
                            </span>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-600 mr-2"
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
                                <strong>Pickup:</strong> Delhi or Chandigarh
                            </span>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-600 mr-2"
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
                        Himachal Route{" "}
                        <span className="text-green-600">Packages</span>
                    </h2>
                    <div className="max-w-4xl mx-auto text-gray-700">
                        <p className="mb-4">
                            The journey from Delhi to Himachal Pradesh takes you
                            through diverse landscapes, from the plains of North
                            India to the majestic Himalayan mountains. As you
                            travel northward, you'll witness a gradual change in
                            scenery, climate, and culture.
                        </p>
                        <p className="mb-4">
                            We offer curated taxi packages from Delhi and
                            Chandigarh to all major destinations in Himachal
                            Pradesh — including Shimla, Manali, Dharamshala,
                            Dalhousie, and Amritsar. Depending on your specific
                            destination within Himachal, the journey can take
                            between 8 to 14 hours by road.
                        </p>
                        <p>
                            Our experienced drivers are well-versed with the
                            mountain roads, ensuring a safe and comfortable
                            journey. All our vehicles are equipped with
                            necessary amenities to make your long journey
                            pleasant, with regular stops at scenic viewpoints
                            and comfortable rest areas along the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <PopularRoutesCarousel routes={himachalRoutes} />

            {/* Pricing Tables */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Pricing from{" "}
                        <span className="text-green-600">Delhi</span>
                    </h2>
                    <div className="overflow-x-auto mb-12">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                            <thead className="bg-green-600 text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">
                                        Destination (Duration)
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Sedan (4+D)
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        SUV (6+D)
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Tempo Traveller (12+D)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {delhiPricing.map((item, i) => (
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

                    <h2 className="text-3xl font-bold text-center mb-8">
                        Pricing from{" "}
                        <span className="text-green-600">Chandigarh</span>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                            <thead className="bg-green-600 text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">
                                        Destination (Duration)
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Sedan (4+D)
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        SUV (6+D)
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Tempo Traveller (12+D)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {chandigarhPricing.map((item, i) => (
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
                            * Prices are indicative and may vary based on
                            season, fuel prices, and specific requirements.
                        </p>
                        <p>
                            * Additional charges may apply for night halts,
                            driver allowances, and toll/parking fees.
                        </p>
                        <p>
                            * 10% surcharge applicable during Christmas, New
                            Year & long weekends.
                        </p>
                        <p>
                            * Add-ons like Atal Tunnel, Chamba, Manikaran
                            available at extra cost.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Included */}
            <section className="py-16 bg-green-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Services{" "}
                        <span className="text-yellow-400">Included</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-green-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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

                        <div className="bg-green-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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

                        <div className="bg-green-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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

                        <div className="bg-green-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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

                        <div className="bg-green-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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

                        <div className="bg-green-800 p-6 rounded-lg">
                            <div className="bg-yellow-400 text-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                        Plan Your{" "}
                        <span className="text-green-600">Himachal Trip</span>
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact us to book your taxi package from Delhi or
                        Chandigarh with transparent, all-inclusive pricing.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/919310389959"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                        >
                            WhatsApp Now
                        </a>
                        <Link
                            href="/contact"
                            className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
