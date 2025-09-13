import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function Newsletter() {
    return (
        <section className="max-w-4xl mx-auto bg-white rounded-xl px-2 sm:px-6 py-8 sm:py-10">
            <div className="flex flex-col items-start mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-2">
                    Start Your Journey Today!
                </h2>
                <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                    Create your profile in seconds and find your ideal home
                </p>
            </div>
            <form className="w-full flex flex-col gap-3 xs:gap-4 sm:flex-row sm:gap-4">
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-900 outline-none text-xs sm:text-base"
                />
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Enter your user type"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 pr-8 sm:pr-10 focus:ring-2 focus:ring-blue-900 outline-none text-xs sm:text-base"
                    />
                    <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" />
                </div>
                <input
                    type="text"
                    placeholder="Enter Location"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-900 outline-none text-xs sm:text-base"
                />
                <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-blue-800 transition w-full sm:w-auto text-xs sm:text-base">
                    Continue
                </button>
            </form>
        </section>
    )
}