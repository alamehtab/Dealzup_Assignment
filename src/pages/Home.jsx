import React, { useEffect, useState, useRef } from "react";
import { fetchProperties } from "../services/api";
import Hero from "../components/Hero";
import {
    TrendingUp,
    Home as HomeIcon,
    Mic,
    Shield,
    MapPin,
    Star,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const rentalPrevRef = useRef(null);
    const rentalNextRef = useRef(null);

    useEffect(() => {
        fetchProperties()
            .then((data) => setProperties(data))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div>
            {/* 1. Hero section */}
            <Hero />

            {/* 2. What We Do Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                        What We Do?
                    </h2>
                    <p className="text-gray-500">
                        Helping you find, buy and rent properties with ease
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <TrendingUp className="text-blue-900 w-8 h-8" />,
                            title: "Buy & Sell Property",
                            text: "Explore verified properties to buy or sell with trust and ease.",
                        },
                        {
                            icon: <HomeIcon className="text-blue-900 w-8 h-8" />,
                            title: "Find Rental Homes",
                            text: "Find rental homes that fit your lifestyle and budget.",
                        },
                        {
                            icon: <Mic className="text-blue-900 w-8 h-8" />,
                            title: "Find AI Property Search",
                            text: "Hassle-free AI search for renting, buying, or selling property.",
                        },
                        {
                            icon: <Shield className="text-blue-900 w-8 h-8" />,
                            title: "Safe and Secure",
                            text: "Verified and secured listings!",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Featured Properties */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
                        Featured Properties
                    </h2>
                    <Link
                        to="/listings"
                        className="bg-white border border-blue-900 text-blue-900 rounded-full px-6 py-2 shadow text-center"
                    >
                        See all {properties.length} New Projects
                    </Link>
                </div>

                {error && <div className="text-red-600">{error}</div>}

                {properties.length >= 4 && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-6">
                            {properties[0] && (
                                <img
                                    src={properties[0].image}
                                    alt={properties[0].title}
                                    className="w-full h-[250px] sm:h-[350px] md:h-[478px] object-cover rounded-xl"
                                />
                            )}
                        </div>
                        <div className="md:col-span-3">
                            {properties[1] && (
                                <img
                                    src={properties[1].image}
                                    alt={properties[1].title}
                                    className="w-full h-[250px] sm:h-[350px] md:h-[478px] object-cover rounded-xl"
                                />
                            )}
                        </div>
                        <div className="md:col-span-3 flex flex-col gap-4">
                            {properties[2] && (
                                <img
                                    src={properties[6].image}
                                    alt={properties[6].title}
                                    className="w-full h-[150px] sm:h-[200px] md:h-[226px] object-cover rounded-xl"
                                />
                            )}
                            {properties[3] && (
                                <img
                                    src={properties[8].image}
                                    alt={properties[8].title}
                                    className="w-full h-[150px] sm:h-[200px] md:h-[226px] object-cover rounded-xl"
                                />
                            )}
                        </div>
                    </div>
                )}
            </section>

            {/* 4. Sale Properties Swiper */}
            <section className="max-w-7xl mx-auto bg-white rounded-xl px-4 sm:px-6 py-10">
                <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                            Best Property Available For Sale
                        </h2>
                        <p className="text-gray-500">
                            Discover the finest handpicked properties that suit your lifestyle.
                        </p>
                    </div>
                    <Link
                        to="/listings"
                        className="bg-blue-900 text-white px-5 py-5 rounded-full shadow hover:bg-blue-800 transition text-center"
                    >
                        Explore All Properties
                    </Link>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        loop={properties.length > 4}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        className="pb-10"
                    >
                        {properties.slice(0, 12).map((p) => (
                            <SwiperSlide key={p.id}>
                                <div className="bg-gray-100 rounded-xl shadow-md p-4 flex flex-col h-[360px] max-w-[320px] mx-auto">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4 text-blue-700" />
                                            <span>{p.country || "New York"}</span>,{" "}
                                            <span>{p.state || "NY"}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span>{p.rating || "4.5/5"}</span>
                                        </div>
                                    </div>
                                    <p className="text-black text-sm mb-3 line-clamp-3 leading-snug">
                                        {p.description ||
                                            "Beautiful modern property with spacious rooms and great location access."}
                                    </p>
                                    <div className="flex-grow" />
                                    <div className="flex items-center justify-between">
                                        <Link
                                            to={`/property/${p.id}`}
                                            className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
                                        >
                                            Buy Now
                                        </Link>
                                        <span className="font-bold text-black text-lg">
                                            {p.price
                                                ? `$${Number(p.price).toLocaleString()}`
                                                : "$450,000"}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        ref={prevRef}
                        className="custom-nav hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        ref={nextRef}
                        className="custom-nav hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            {/* 4. Rental Homes Swiper */}
            <section className="max-w-7xl mx-auto bg-white rounded-xl px-4 sm:px-6 py-10">
                <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                            Find The Perfect Rental Homes
                        </h2>
                        <p className="text-gray-500">
                            Browse our top rated properties for rent, featuring premium listings.
                        </p>
                    </div>
                    <Link
                        to="/listings"
                        className="bg-blue-900 text-white px-5 py-5 rounded-full shadow hover:bg-blue-800 transition text-center"
                    >
                        Explore all Rental Homes
                    </Link>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        loop={properties.length > 4}
                        navigation={{
                            prevEl: rentalPrevRef.current,
                            nextEl: rentalNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = rentalPrevRef.current;
                            swiper.params.navigation.nextEl = rentalNextRef.current;
                        }}
                        className="pb-10"
                    >
                        {properties.slice(0, 12).map((p) => (
                            <SwiperSlide key={p.id}>
                                <div className="bg-gray-100 rounded-xl shadow-md p-4 flex flex-col h-[360px] max-w-[320px] mx-auto">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4 text-blue-700" />
                                            <span>{p.country || "New York"}</span>,{" "}
                                            <span>{p.state || "NY"}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span>{p.rating || "4.5/5"}</span>
                                        </div>
                                    </div>
                                    <p className="text-black text-sm mb-3 line-clamp-3 leading-snug">
                                        {p.description ||
                                            "Spacious rental property with modern design and amenities."}
                                    </p>
                                    <div className="flex-grow" />
                                    <div className="flex items-center justify-between">
                                        <Link
                                            to={`/property/${p.id}`}
                                            className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
                                        >
                                            Rent Now
                                        </Link>
                                        <span className="font-bold text-black text-lg">
                                            $1500/month
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        ref={rentalPrevRef}
                        className="custom-nav hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        ref={rentalNextRef}
                        className="custom-nav hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            {/* 5. Newsletter */}
            <Newsletter />

            {/* 6. Latest Properties Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                <div className="relative flex flex-col items-center lg:items-start">
                    {properties[0] && (
                        <img
                            src={properties[26].image}
                            alt={properties[26].title}
                            className="w-full sm:w-[400px] lg:w-[500px] h-auto object-cover rounded-xl border-[6px] border-white shadow-lg relative z-10"
                        />
                    )}
                    {properties[1] && (
                        <img
                            src={properties[49].image}
                            alt={properties[49].title}
                            className="hidden sm:block w-[250px] sm:w-[300px] h-auto object-cover rounded-xl border-[6px] border-white shadow-lg lg:absolute lg:top-[180px] lg:left-[220px] z-20"
                        />
                    )}
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
                        We Provide Latest Properties For Our Valuable Clients
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                icon: <TrendingUp className="w-6 h-6 text-[#1e3a8a]" />,
                                title: "Budget Friendly",
                                text: "Affordable properties that fit your budget without compromising on quality.",
                            },
                            {
                                icon: <Shield className="w-6 h-6 text-[#1e3a8a]" />,
                                title: "Trusted By Thousands",
                                text: "Thousands of satisfied clients trust our verified listings and services.",
                            },
                            {
                                icon: <MapPin className="w-6 h-6 text-[#1e3a8a]" />,
                                title: "Prime Location",
                                text: "Properties located in prime areas with easy access to all amenities.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-start gap-2">
                                {item.icon}
                                <h3 className="text-lg sm:text-xl font-semibold text-[#1e3a8a]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 max-w-[300px]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom CSS for nav buttons */}
            <style>{`
                .custom-nav {
                    width: 44px;
                    height: 44px;
                    background: gray;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .custom-nav:hover {
                    background: #1e3a8a;
                }
                .swiper-wrapper {
                    cursor: grab;
                }
            `}</style>
        </div>
    );
}
