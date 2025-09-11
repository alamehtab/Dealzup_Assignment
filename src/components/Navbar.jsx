import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
    const { user } = useAuth();
    return (
        <nav className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="font-bold text-xl">DealzUp</Link>
                <div className="space-x-4">
                    <Link to="/listings">Listings</Link>
                    {user ? (
                        <span>Hi, {user.email}</span>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded">Signup</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}