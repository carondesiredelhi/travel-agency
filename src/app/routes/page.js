import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Our Operations & Routes | Delhi Travel Agency",
    description:
        "Discover our car rental operations from Delhi, Chandigarh, and Dehradun to all over India. Specialized routes to Himachal, Uttarakhand, Rajasthan, Punjab, and Uttar Pradesh.",
    keywords:
        "car rentals india, delhi car rental, chandigarh car rental, dehradun car rental, himachal tours, uttarakhand tours, rajasthan tours, punjab tours, up tours",
};

export default function RoutesPage() {
    const hubs = [
        {
            name: "Delhi",
            image: "/delhi.jpg",
            description:
                "Our primary hub, serving as the gateway to Northern India. From Delhi, you can rent cars to any part of India.",
        },
        {
            name: "Chandigarh",
            image: "/chandigarh.jpg",
            description:
                "Perfectly located for trips to Himachal Pradesh and Punjab, our Chandigarh hub is popular for mountain getaways and cultural tours.",
        },
        {
            name: "Dehradun",
            image: "/dehradun.jpg",
            description:
                "Situated in the foothills of the Himalayas, Dehradun is the ideal starting point for Uttarakhand and beyond.",
        },
    ];

    const specialties = [
        {
            name: "Himachal Pradesh",
            description:
                "Scenic drives through Shimla, Manali, Dharamshala, and beyond. Perfect for mountain lovers seeking cool escapes.",
            image: "/himachal.jpg",
            link: "/routes/delhi-to-himachal",
        },
        {
            name: "Uttarakhand",
            description:
                "From Rishikesh and Haridwar to Mussoorie and Nainital — spiritual vibes and serene hill stations in one ride.",
            image: "/uttarakhand.jpg",
            link: "/routes/delhi-to-uttarakhand",
        },
        {
            name: "Rajasthan",
            description:
                "Discover the deserts of Jaisalmer, palaces of Jaipur, and lakes of Udaipur with smooth rentals across the state.",
            image: "/rajasthan.jpg",
            link: "/routes/delhi-to-rajasthan",
        },
        {
            name: "Punjab",
            description:
                "Comfortable trips to Amritsar, Chandigarh, Ludhiana, and more — explore the land of culture and cuisine.",
            image: "/punjab.jpg",
            link: "/routes/delhi-to-punjab",
        },
        {
            name: "Uttar Pradesh",
            description:
                "From the Taj Mahal in Agra to the ghats of Varanasi, travel in comfort across one of India's most diverse states.",
            image: "/up.jpg",
            link: "/routes/delhi-to-up",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/routes-hero.jpg"
                        alt="Car Rental Routes in India"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                        Our{" "}
                        <span className="text-yellow-400">
                            Operations & Routes
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up delay-100">
                        Car rentals across India — from Delhi, Chandigarh, and
                        Dehradun to every corner of the country
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 animate-fade-in">
                        Your Journey Starts{" "}
                        <span className="text-yellow-600">Anywhere</span>
                    </h2>
                    <p className="text-gray-700 mb-8 animate-slide-up delay-100">
                        We operate from three major hubs — 
                        <span className="font-semibold text-yellow-500">Delhi, </span>
                        <span className="font-semibold text-yellow-500">Chandigarh </span>
                        and
                        <span className="font-semibold text-yellow-500"> Dehradun</span>. From these cities, you can rent our
                        vehicles and travel 
                        <span className="font-semibold text-yellow-500"> all across India.</span><br/>
                        Whether you&apos;re planning a short family getaway or a long
                        business trip, we&apos;ve got you covered.
                    </p>
                </div>
            </section>

            {/* Our Hubs */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
                        Our{" "}
                        <span className="text-yellow-600">
                            Operational Hubs
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hubs.map((hub, i) => (
                            <div
                                key={i}
                                className="relative h-100 group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up delay-100"
                            >
                                <Image
                                    src={hub.image}
                                    alt={hub.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-4 mx-1 bg-white/2 backdrop-blur-sm rounded-xl">
                                    <h3 className="text-2xl font-bold text-white">
                                        {hub.name}
                                    </h3>
                                    <p className="text-white text-sm">
                                        {hub.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Routes */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 space-y-16">
                    {/* Section Heading */}
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Our <span className="text-yellow-600">Specialties</span>
                    </h2>
                    <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto">
                        While we provide rentals across India, we specialize in
                        5 key regions. Explore detailed itineraries and tour
                        options on the dedicated pages below.
                    </p>

                    {/* Alternating Layout from specialties */}
                    {specialties.map((place, i) => (
                        <div
                            key={i}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Left/right flip depending on row */}
                            {i % 2 === 0 ? (
                                <>
                                    <Image
                                        height={2000}
                                        width={2000}
                                        src={place.image}
                                        alt={place.name}
                                        className="rounded-2xl h-80 object-cover shadow-lg"
                                    />
                                    <div>
                                        <h2 className="text-3xl font-bold mb-4">
                                            {place.name}
                                        </h2>
                                        <p className="text-gray-600 mb-6">
                                            {place.description}
                                        </p>
                                        <a
                                            href={place.link}
                                            className="text-blue-600 font-semibold border-2 px-4 py-1 rounded-full"
                                        >
                                            Explore {place.name} →
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="order-2 md:order-1">
                                        <h2 className="text-3xl font-bold mb-4">
                                            {place.name}
                                        </h2>
                                        <p className="text-gray-600 mb-6">
                                            {place.description}
                                        </p>
                                        <a
                                            href={place.link}
                                            className="text-blue-600 font-semibold border-2 px-4 py-1 rounded-full "
                                        >
                                            Explore {place.name} →
                                        </a>
                                    </div>
                                    <Image
                                        height={2000}
                                        width={2000}
                                        src={place.image}
                                        alt={place.name}
                                        className="rounded-2xl h-80 object-cover shadow-lg order-1 md:order-2"
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-yellow-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 animate-fade-in">
                        Plan Your{" "}
                        <span className="text-yellow-600">Next Adventure</span>
                    </h2>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
                        With our fleet and wide operational network, you can
                        book a vehicle from Delhi, Chandigarh, or Dehradun and
                        travel across India. Let&apos;s make your journey
                        hassle-free.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
                        <Link
                            href="/contact"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform"
                        >
                            Book Now
                        </Link>
                        <Link
                            href="/fleet"
                            className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform"
                        >
                            View Fleet
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
