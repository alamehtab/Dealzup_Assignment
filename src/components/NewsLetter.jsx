import React from 'react'


export default function Newsletter() {
    return (
        <div className="mt-8 bg-slate-50 p-6 rounded">
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <form className="mt-3 flex gap-2">
                <input placeholder="Your email" className="border p-2 rounded flex-1" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
            </form>
        </div>
    )
}