import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left Side - Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-10">
                    <Link to="/" className="text-sm text-gray-600 underline">
                        ← Back to Homepage
                    </Link>
                    <h2 className="text-2xl font-bold mt-6 mb-6">Log In</h2>

                    <form className="space-y-4">
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

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>Remember Me</span>
                            </label>
                            <Link to="#" className="text-blue-900 font-medium">
                                Forgot Password?
                            </Link>
                        </div>

                        <Link
                            to="/"
                            className="block w-full bg-blue-900 text-white py-3 rounded-md text-center font-medium hover:bg-blue-800 transition"
                        >
                            Log In
                        </Link>
                    </form>

                    {/* Social Login */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-sm">OR CONTINUE WITH</p>
                        <div className="flex justify-center space-x-6 mt-4">
                            <button>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                    alt="Apple Logo"
                                    className="w-7 h-7 mb-1.5 cursor-pointer"
                                />
                            </button>
                            <button>
                                <img
                                    src="https://cdn.simpleicons.org/facebook/1877F2"
                                    alt="Facebook"
                                    className="w-7 h-7 object-contain cursor-pointer"
                                />
                            </button>
                            <button>
                                <img
                                    src="https://img.icons8.com/ios-filled/30/google-logo.png"
                                    alt="google"
                                    className="cursor-pointer"
                                />
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-gray-600">
                        Doesn’t have an account?{" "}
                        <Link to="/signup" className="text-blue-900 font-medium">
                            Create One
                        </Link>
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="w-full md:w-1/2 hidden md:block">
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
