import { HomeIcon } from "lucide-react";
import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#5674c7] pt-20 mt-20 flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center text-center py-16 px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Get In Touch With Us
                </h2>
                <p className="text-base md:text-lg text-white mb-8 max-w-xl">
                    Subscribe now for exclusive property insights and deals!
                </p>
                <div className="flex flex-col sm:flex-row items-center bg-gray-200 rounded-full w-full max-w-lg overflow-hidden">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="flex-1 px-4 py-3 text-gray-700 bg-gray-200 outline-none w-full sm:rounded-l-full"
                    />
                    <button className="bg-[#1e3a8a] text-white w-full sm:w-auto mt-3 sm:mt-0 sm:mr-2 px-6 py-2 rounded-full">
                        Submit
                    </button>
                </div>
            </div>
            <div className="w-full px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-6 ">
                <div className="flex items-center gap-2 text-white">
                    <HomeIcon className="w-6 h-6" />
                    <span className="font-semibold text-lg">PropBot</span>
                </div>
                <div className="flex flex-wrap gap-4 justify-center text-white text-sm">
                    <button className="hover:underline">For Sale</button>
                    <button className="hover:underline">Rental</button>
                    <button className="hover:underline">New Projects</button>
                    <button className="hover:underline">Property News</button>
                </div>
                <div className="text-white text-sm text-center md:text-right">
                    ©2025 PropBot. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
