import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="flex w-[900px] bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left Side - Signup Form */}
                <div className="w-1/2 p-10">
                    <Link to="/" className="text-sm text-gray-600 underline">
                        ← Back to Homepage
                    </Link>
                    <h2 className="text-2xl font-bold mt-6 mb-6">Create new account</h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter Your Full Name"
                            className="w-full p-3 border rounded-md focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Enter Your Email Id"
                            className="w-full p-3 border rounded-md focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full p-3 border rounded-md focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Your Password"
                            className="w-full p-3 border rounded-md focus:outline-none"
                        />

                        <button className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800">
                            Create Account
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-900 font-medium">
                            Log in
                        </Link>
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                        alt="property"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
