import { Search, MapPin, Home as HomeIcon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative mb-20 px-6">
            {/* Hero background image */}
            <div
                className="rounded-xl h-[420px] md:h-[400px] bg-cover bg-center relative"
                style={{
                    backgroundImage: "url(https://picsum.photos/seed/hero/1200/500)",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

                {/* Centered content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Find your dream home in one click
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                        Discover, Buy, or Rent Verified Properties with Ease.
                    </p>

                    {/* Search + List Property in one row */}
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl">
                        {/* Search bar */}
                        <div className="flex items-center bg-white rounded-lg flex-1 h-[50px] px-4 shadow-md">
                            <MapPin className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Enter a location"
                                className="flex-1 outline-none text-gray-700 px-2"
                            />
                            <button className=" text-gray-500 rounded-full px-6 py-2 flex items-center cursor-pointer">
                                <Search className="mr-2 h-5 w-5" /> Search
                            </button>
                        </div>

                        {/* List your property button */}
                        <button className="bg-white border border-blue-900 text-blue-900 font-medium rounded-full px-6 py-2 shadow-md hover:bg-gray-100 transition">
                            List your property
                        </button>
                    </div>
                </div>

                {/* Overlapping filter layout */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl">
                    <div className="bg-white rounded-full shadow-lg p-3 flex flex-col md:flex-row items-center justify-center gap-4">
                        {/* Dropdown 1 */}
                        <div className="flex items-center border rounded-full px-4 py-2 w-full md:w-auto">
                            <HomeIcon className="text-gray-600 mr-2" />
                            <span className="mr-2 text-gray-600">Rent</span>
                            <ChevronDown />
                        </div>

                        {/* Dropdown 2 */}
                        <div className="flex items-center border rounded-full px-4 py-2 w-full md:w-auto">
                            <HomeIcon className="text-gray-600 mr-2" />
                            <span>House</span>
                            <ChevronDown />
                        </div>

                        {/* Dropdown 3 */}
                        <div className="flex items-center border rounded-full px-4 py-2 w-full md:w-auto">
                            <MapPin className="text-gray-600 mr-2" />
                            <span>Location</span>
                            <ChevronDown />
                        </div>

                        {/* Find property button */}
                        <Link to="/listings" className="bg-blue-900 text-white rounded-full px-6 py-2 w-full md:w-auto cursor-pointer">
                            Find Property
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
