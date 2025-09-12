import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, User } from "lucide-react";

export default function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await fetch(`https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing/${id}`);
                const data = await res.json();
                setProperty(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching property:", err);
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg font-medium text-gray-600">Loading property...</p>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg font-medium text-red-600">Property not found.</p>
            </div>
        );
    }

    return (
        <section className="px-6 py-10 max-w-6xl mx-auto">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-[400px] object-cover"
                />
            </div>

            {/* Property Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        {property.name}
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Located at {property.buildingNumber} {property.cardinalDirection},{" "}
                        {property.city}, {property.state}, {property.country} ({property.countryCode})
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                        <User className="text-blue-900" />
                        <span className="text-gray-800 font-medium">
                            Owner: {property.ownerName}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <Phone className="text-blue-900" />
                        <span className="text-gray-800 font-medium">
                            Contact: {property.contactNumber}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="text-blue-900" />
                        <span className="text-gray-800 font-medium">
                            Coordinates: {property.latitude}, {property.longitude}
                        </span>
                    </div>

                    <p className="text-gray-600">
                        Time Zone: <span className="font-medium">{property.timeZone}</span>
                    </p>
                </div>

                {/* Right Side Card */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Quick Actions
                    </h2>
                    <Link
                        to="/listings"
                        className="bg-blue-900 text-white rounded-lg px-6 py-3 text-center font-medium hover:bg-blue-800 transition"
                    >
                        Go to Listings
                    </Link>
                    <Link
                        to="/"
                        className="bg-blue-900 text-white rounded-lg px-6 py-3 text-center font-medium hover:bg-blue-800 transition"
                    >
                        Back to Home
                    </Link>
                    <button className="bg-green-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-green-700 transition">
                        Contact Owner
                    </button>
                </div>
            </div>
        </section>
    );
}
