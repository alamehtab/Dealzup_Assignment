// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Navbar() {
    const { user, setUser } = useAuth();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Check if current page is login or signup
    const isAuthPage =
        location.pathname === "/login" || location.pathname === "/signup";

    // Logout handler
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            localStorage.removeItem("user");
            setIsOpen(false); // close mobile menu
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* Left Side - Logo */}
                <Link
                    to="/"
                    className="flex items-center space-x-2 font-bold text-xl text-[#1e3a8a]"
                >
                    <HomeIcon className="h-6 w-6 text-[#1e3a8a]" />
                    <span>PropBot</span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                    <Link to="/">Home</Link>
                    <Link to="/listings">Buy</Link>
                    <Link to="/sell">Sell</Link>
                    <Link to="/listings">Rent</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

                {/* Right Side - Auth Buttons */}
                <div className="hidden md:flex">
                    {user ? (
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-700 text-sm">Hi, {user.email}</span>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex space-x-3">
                            {isAuthPage ? (
                                <Link
                                    to="/about"
                                    className="px-4 py-1 rounded-full bg-[#1e3a8a] text-white hover:bg-blue-900 transition"
                                >
                                    About Us
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="px-4 py-1 rounded-full border border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="px-4 py-1 rounded-full bg-[#1e3a8a] text-white hover:bg-blue-900 transition"
                                    >
                                        Signup
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col space-y-4 px-6 py-4 text-gray-600 text-sm font-medium">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link to="/listings" onClick={() => setIsOpen(false)}>
                            Buy
                        </Link>
                        <Link to="/sell" onClick={() => setIsOpen(false)}>
                            Sell
                        </Link>
                        <Link to="/listings" onClick={() => setIsOpen(false)}>
                            Rent
                        </Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>
                            About Us
                        </Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            Contact Us
                        </Link>

                        {user ? (
                            <div className="flex flex-col space-y-2">
                                <span className="text-gray-700 text-sm">Hi, {user.email}</span>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 rounded-md bg-red-500 text-white text-center"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                {isAuthPage ? (
                                    <Link
                                        to="/about"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 rounded-md bg-[#1e3a8a] text-white text-center"
                                    >
                                        About Us
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="px-4 py-2 rounded-md border border-[#1e3a8a] text-[#1e3a8a] text-center"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to="/signup"
                                            onClick={() => setIsOpen(false)}
                                            className="px-4 py-2 rounded-md bg-[#1e3a8a] text-white text-center"
                                        >
                                            Signup
                                        </Link>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
