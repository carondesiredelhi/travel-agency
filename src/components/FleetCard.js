"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FleetCard({ vehicle, reverse }) {
    const [selectedImg, setSelectedImg] = useState(0);

    const handlePrev = () =>
        setSelectedImg((prev) =>
            prev === 0 ? vehicle.images.length - 1 : prev - 1
        );

    const handleNext = () =>
        setSelectedImg((prev) =>
            prev === vehicle.images.length - 1 ? 0 : prev + 1
        );

    const imageSection = (
        <div className="flex flex-col items-center">
            <div className="relative w-full md:w-[90%] h-80 mb-4">
                <Image
                    src={vehicle.images[selectedImg]}
                    alt={vehicle.name}
                    fill
                    className="object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                />
                <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 text-2xl -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 text-2xl -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition"
                >
                    →
                </button>
            </div>
            <div className="flex gap-3 justify-center">
                {vehicle.images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImg(idx)}
                        className={`relative w-20 h-16 border-2 rounded-md overflow-hidden transition-all duration-200 ${
                            idx === selectedImg
                                ? "border-yellow-500"
                                : "border-gray-300 hover:border-yellow-300"
                        }`}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${idx}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );

    const infoSection = (
        <div>
            <h3 className="text-3xl font-bold mb-4">{vehicle.name}</h3>
            <p className="text-gray-600 mb-6">{vehicle.description}</p>

            <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                {vehicle.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                ))}
            </ul>

            <h4 className="font-semibold text-gray-800 mb-2">Ideal For:</h4>
            <p className="text-gray-600 mb-6">{vehicle.idealFor}</p>

            <Link
                href="/contact"
                className="text-blue-600 font-semibold border-2 px-4 py-1 rounded-full"
            >
                Book This Vehicle →
            </Link>
        </div>
    );

    return (
        <div
            className={`grid md:grid-cols-2 gap-12 items-center py-6 ${
                reverse ? "md:flex-row-reverse" : ""
            }`}
        >
            {reverse ? (
                <>
                    {infoSection}
                    {imageSection}
                </>
            ) : (
                <>
                    {imageSection}
                    {infoSection}
                </>
            )}
        </div>
    );
}
