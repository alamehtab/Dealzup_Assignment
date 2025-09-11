import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-100 mt-8">
            <div className="max-w-6xl mx-auto p-6 text-center text-sm">© {new Date().getFullYear()} DealzUp. All rights reserved.</div>
        </footer>
    )
}