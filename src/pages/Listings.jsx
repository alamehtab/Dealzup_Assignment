import React, { useEffect, useState } from "react";
import { Paginator } from "primereact/paginator";
import { MapPin, Star, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PropertyList() {
    const [properties, setProperties] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows] = useState(10);
    const [search, setSearch] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
            .then((res) => res.json())
            .then((data) => setProperties(data))
            .catch((err) => console.error("Error fetching properties:", err));
    }, []);
    const filteredProperties = properties.filter(
        (property) =>
            property.country?.toLowerCase().includes(search.toLowerCase()) ||
            property.state?.toLowerCase().includes(search.toLowerCase())
    );
    const currentPageData = filteredProperties.slice(first, first + rows);

    return (
        <section className="max-w-7xl mx-auto px-2 sm:px-6 py-10 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-6 sm:mb-10 text-center">
                Browse Properties
            </h2>
            <div className="max-w-md mx-auto mb-8 sm:mb-10 relative">
                <input
                    type="text"
                    placeholder="Search by country or state"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setFirst(0);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {currentPageData.length > 0 ? (
                    currentPageData.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition flex flex-col"
                        >
                            <img
                                src={property.image}
                                alt={property.title}
                                className="w-full aspect-[4/3] object-cover"
                            />
                            <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                    {property.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    {property.country || "USA"}, {property.state || "California"}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    {property.description ||
                                        "Among the best and top-rated homes in the city to rent and buy"}
                                </p>
                                <div className="flex items-center justify-between mt-2 sm:mt-3">
                                    <span className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm">
                                        <Star className="w-4 h-4 fill-yellow-500" />
                                        Rating {property.rating || "4.5/5"}
                                    </span>
                                    <span className="font-semibold text-[#1e3a8a] text-sm sm:text-base">
                                        ${property.price || "450000"}
                                    </span>
                                </div>
                                <button onClick={() => navigate(`/property/${property.id}`)} className="w-full mt-2 sm:mt-3 py-2 rounded-lg bg-[#1e3a8a] text-white hover:bg-blue-900 transition text-sm">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        No properties found for "{search}"
                    </p>
                )}
            </div>
            {/* Pagination */}
            {filteredProperties.length > rows && (
                <div className="mt-8 sm:mt-10 flex justify-center">
                    <Paginator
                        first={first}
                        rows={rows}
                        totalRecords={filteredProperties.length}
                        onPageChange={(e) => setFirst(e.first)}
                        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                    />
                </div>
            )}
        </section>
    );
}
