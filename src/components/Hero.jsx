import { Search, MapPin, Home as HomeIcon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative mb-10 px-2 sm:px-6">
            <div
                className="rounded-xl h-[340px] xs:h-[380px] sm:h-[420px] md:h-[400px] bg-cover bg-center relative"
                style={{
                    backgroundImage: "url(https://picsum.photos/seed/hero/1200/500)",
                }}
            >
                <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-6">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                        Find your dream home in one click
                    </h1>
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 mb-4 max-w-2xl">
                        Discover, Buy, or Rent Verified Properties with Ease.
                    </p>
                    <div className="flex flex-col md:flex-row items-stretch gap-2 w-full max-w-2xl">
                        <div className="flex items-center bg-white rounded-lg flex-1 h-[44px] sm:h-[50px] px-2 sm:px-3 shadow-md min-w-0">
                            <MapPin className="text-gray-500 mr-2 shrink-0" />
                            <input
                                type="text"
                                placeholder="Enter a location"
                                className="flex-1 outline-none text-gray-700 text-xs xs:text-sm sm:text-base bg-transparent"
                            />
                            <button className=" text-gray-500 flex items-center gap-1 px-2 sm:px-4 py-1 cursor-pointer">
                                <Search className="h-5 w-5" />
                                <span className="hidden sm:inline">Search</span>
                            </button>
                        </div>
                        <button className="bg-white border border-blue-900 text-blue-900 font-medium rounded-lg sm:rounded-full px-3 sm:px-6 py-2 shadow-md hover:bg-gray-100 transition w-full md:w-auto text-xs xs:text-sm">
                            List your property
                        </button>
                    </div>
                </div>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full px-2 sm:px-6">
                    <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-4 flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-2 xs:gap-3 max-w-full sm:max-w-4xl mx-auto overflow-x-auto">
                        <div className="flex items-center border rounded-full px-3 py-2 w-full xs:w-auto justify-between min-w-[120px]">
                            <HomeIcon className="text-gray-600 mr-2" />
                            <span className="text-xs xs:text-sm sm:text-base">Rent</span>
                            <ChevronDown className="ml-auto xs:ml-2" />
                        </div>
                        <div className="flex items-center border rounded-full px-3 py-2 w-full xs:w-auto justify-between min-w-[120px]">
                            <HomeIcon className="text-gray-600 mr-2" />
                            <span className="text-xs xs:text-sm sm:text-base">House</span>
                            <ChevronDown className="ml-auto xs:ml-2" />
                        </div>
                        <div className="flex items-center border rounded-full px-3 py-2 w-full xs:w-auto justify-between min-w-[120px]">
                            <MapPin className="text-gray-600 mr-2" />
                            <span className="text-xs xs:text-sm sm:text-base">Location</span>
                            <ChevronDown className="ml-auto xs:ml-2" />
                        </div>
                        <Link
                            to="/listings"
                            className="bg-blue-900 text-white rounded-full px-4 py-2 w-full xs:w-auto text-center text-xs xs:text-sm"
                        >
                            Find Property
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}