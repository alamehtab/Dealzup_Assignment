import { HomeIcon, Search } from "lucide-react";
import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#5674c7] pt-12 sm:pt-16 mt-10 sm:mt-20 flex flex-col">
            <div className="flex flex-col items-center text-center py-8 sm:py-12 px-2 sm:px-6">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Get In Touch With Us
                </h2>
                <p className="text-xs sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-xl">
                    Subscribe now for exclusive property insights and deals!
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full max-w-lg">
                    <div className="flex items-center bg-white rounded-full flex-1 h-[44px] sm:h-[50px] px-3 sm:px-4 shadow-md w-full">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="flex-1 outline-none text-gray-700 px-1 sm:px-2 text-xs sm:text-base bg-transparent"
                        />
                        <button className="text-gray-600 rounded-full px-3 sm:px-6 py-1 sm:py-2 flex items-center cursor-pointer hover:text-blue-900 transition text-xs sm:text-base">
                            <Search className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full px-2 sm:px-6 md:px-16 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-white">
                    <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="font-semibold text-base sm:text-lg">PropBot</span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center text-white text-xs sm:text-sm">
                    <button className="hover:underline">For Sale</button>
                    <button className="hover:underline">Rental</button>
                    <button className="hover:underline">New Projects</button>
                    <button className="hover:underline">Property News</button>
                </div>
                <div className="text-white text-xs sm:text-sm text-center md:text-right">
                    ©2025 PropBot. All rights reserved.
                </div>
            </div>
        </footer>
    );
}