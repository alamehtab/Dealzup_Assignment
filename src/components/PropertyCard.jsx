import React from 'react'

export default function PropertyCard({ p }) {
    return (
        <div className="border rounded overflow-hidden shadow-sm">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
            <div className="p-3">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm">{p.city}, {p.state}</p>
                <p className="mt-2 text-xs">Owner: {p.ownerName}</p>
            </div>
        </div>
    )
}