import { ChevronDown } from 'lucide-react'
import React from 'react'


export default function Newsletter() {
    return (
        <section className="max-w-8xl mx-auto bg-white rounded-xl px-4 sm:px-6 py-10">
            <div className="flex flex-col items-start mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
                    Start Your Journey Today!
                </h2>
                <p className="text-gray-500 mb-6">
                    Create your profile in seconds and find your ideal home
                </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
                />

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter your user type"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-900 outline-none"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>

                <input
                    type="text"
                    placeholder="Enter Location"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
                />

                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition w-full">
                    Continue
                </button>
            </div>
        </section>
    )
}