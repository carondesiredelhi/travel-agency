import FleetCard from "@/components/FleetCard";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Our Premium Fleet | Travel Agency",
    description:
        "Explore our premium fleet of vehicles including Sedan, SUV, MUV, Urbania, and Tempo Traveller for your comfortable journey from Delhi, Chandigarh, and Dehradun.",
    keywords:
        "travel fleet, sedan, suv, muv, urbania, tempo traveller, delhi travel, luxury vehicles",
};

export default function FleetPage() {
    const fleetData = [
        {
            name: "Swift Dzire",
            images: ["/sedan.png", "/sedan_int.png", "/sedan_space.avif"],
            description:
                "Compact sedan known for reliability, comfort, and ideal for long rides. Ideal for daily commutes and city rides.",
            features: [
                "4 Passengers",
                "Air Conditioning",
                "3 Luggage Capacity",
                // "Fuel Efficient",
                "Smooth City Drive",
            ],
            idealFor:
                "Couples, Small Families, Business Travelers, Airport Transfers",
        },
        {
            name: "Innova Crysta",
            images: ["/suv.avif", "/suv_int.png"],
            description:
                "Premium MPV with plush interiors, powerful performance, and ultimate comfort for long-distance travel.",
            features: [
                "6 Passengers",
                "Air Conditioning",
                "5-6 Luggage Capacity",
                "Spacious Interiors",
                "Smooth Ride",
            ],
            idealFor:
                "Families, Corporate Travel, Outstation Journeys, Hill Station Trips",
        },
        {
            name: "Tempo Traveller 20 seater",
            images: ["/tempo_20.png", "/tempo_20_int.png"],
            description:
                "The go-to choice for big groups, offering spacious interiors and comfortable seating for long trips together.",
            features: [
                "20 + Driver",
                "Air Conditioning",
                "10+ Luggage Capacity",
                "Push-back Seats",
                "Ample Leg Room",
            ],
            idealFor:
                "Large Families, Corporate Outings, Group Tours, Pilgrimage Trips",
        },
        {
            name: "Tempo Traveller 12 seater",
            images: ["/tempo.png", "/tempo_int.png"],
            description:
                "The go-to choice for big groups, offering spacious interiors and comfortable seating for long trips together.",
            features: [
                "12 + Driver",
                "Air Conditioning",
                "10+ Luggage Capacity",
                "Push-back Seats",
                "Ample Leg Room",
            ],
            idealFor:
                "Large Families, Corporate Outings, Group Tours, Pilgrimage Trips",
        },
        {
            name: "Urbania 12 seater",
            images: ["/urbania.png", "/urbania_int.png"],
            description:
                "Luxury van with advanced features, offering business-class comfort and style for travel in larger groups.",
            features: [
                "12 Passengers",
                "Premium Air Conditioning",
                "6-7 Luggage Capacity",
                "Luxury Interiors",
                "Entertainment System",
            ],
            idealFor:
                "Corporate Executives, Luxury Travelers, Special Events, VIP Transfers",
        },
        {
            name: "Urbania 16 seater",
            images: ["/urbania_16.png", "/urbania_16_int.png"],
            description:
                "Luxury van with advanced features, offering business-class comfort and style for travel in larger groups.",
            features: [
                "16 Passengers",
                "Premium Air Conditioning",
                "6-7 Luggage Capacity",
                "Luxury Interiors",
                "Entertainment System",
            ],
            idealFor:
                "Corporate Executives, Luxury Travelers, Special Events, VIP Transfers",
        },
        {
            name: "Kia",
            images: ["/kia.png"],
            description:
                "A sporty luxury sedan delivering high performance, sleek design, and a premium driving experience.",
            features: [
                "4 Passengers",
                "Premium Air Conditioning",
                "3 Luggage Capacity",
                "Leather Interiors",
                "High Performance Engine",
            ],
            idealFor:
                "Luxury Travelers, Couples, Business Executives, Special Occasions",
        },
        {
            name: "Ertiga",
            images: ["/ertiga.avif", "/ertiga_int.png", "/ertiga_space.webp"],
            description:
                "A practical and spacious MPV offering comfort and efficiency for medium-sized families and groups.",
            features: [
                "6-7 Passengers",
                "Air Conditioning",
                "4-5 Luggage Capacity",
                "Flexible Seating",
                "Fuel Efficient",
            ],
            idealFor: "Families, Small Groups, Outstation Trips",
        },
        {
            name: "Fortuner",
            images: ["/fortuner.png", "/fortuner_int.png"],
            description:
                "A luxury SUV with advanced features, offering business-class comfort and style for travel in larger groups.",
            features: [
                "6-7 Passengers",
                "Air Conditioning",
                "4-5 Luggage Capacity",
                "Luxury Interiors",
                "Entertainment System",
            ],
            idealFor:
                "Corporate Executives, Luxury Travelers, Special Events, VIP Transfers",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
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
                        Our Premium{" "}
                        <span className="text-yellow-400">Fleet</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up delay-100">
                        Travel in comfort and style with our luxury vehicles
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 animate-fade-in">
                        Experience{" "}
                        <span className="text-yellow-600">Luxury Travel</span>
                    </h2>
                    <p className="text-gray-700 mb-8 animate-slide-up delay-100">
                        Our fleet consists of well-maintained, air-conditioned
                        vehicles driven by experienced chauffeurs. We offer a
                        range of options to suit your specific needs, whether
                        you're traveling solo, with family, or in a large group.
                        All our vehicles undergo regular maintenance checks to
                        ensure your safety and comfort throughout the journey.
                    </p>
                </div>
            </section>

            {/* Fleet Showcase */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 space-y-16">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Our <span className="text-yellow-600">Vehicles</span>
                    </h2>
                    <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto">
                        Choose from a diverse fleet designed to make every
                        journey smooth, safe, and memorable.
                    </p>

                    {fleetData.map((vehicle, i) => (
                        <FleetCard
                            key={i}
                            vehicle={vehicle}
                            reverse={i % 2 !== 0}
                        />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-yellow-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 animate-fade-in">
                        Ready to{" "}
                        <span className="text-yellow-600">
                            Book Your Journey?
                        </span>
                    </h2>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
                        Contact us today to reserve the perfect vehicle for your
                        travel needs. Our team is ready to assist you 24/7.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
                        <Link
                            href="/contact"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform"
                        >
                            Book Now
                        </Link>
                        <Link
                            href="/routes/delhi-to-uttarakhand"
                            className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform"
                        >
                            Explore Routes
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
