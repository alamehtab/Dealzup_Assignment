import React, { useEffect, useState } from 'react'
import { fetchProperties } from '../services/api'
import PropertyCard from '../components/PropertyCard'
import Newsletter from '../components/Newsletter'

export default function Home() {
    const [properties, setProperties] = useState([])
    const [featured, setFeatured] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchProperties().then(data => {
            setProperties(data)
            setFeatured(data.slice(0, 4))
        }).catch(err => setError(err.message))
    }, [])

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Hero */}
            <section className="mb-8">
                <div className="bg-gray-100 rounded p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold">Find your dream home</h1>
                        <p className="mt-2">Search properties for sale and rent across cities.</p>
                    </div>
                    <div className="w-full md:w-1/3 h-48 bg-cover bg-center rounded" style={{ backgroundImage: 'url(https://picsum.photos/seed/hero/1200/400)' }} />
                </div>
            </section>

            {/* What We Do */}
            <section className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                {['Buy', 'Rent', 'Sell', 'Agent Services'].map((t) => (
                    <div key={t} className="border p-4 rounded text-center">{t}</div>
                ))}
            </section>

            {/* Featured properties */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Featured Properties</h2>
                {error && <div className="text-red-600">{error}</div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featured.map(p => <PropertyCard key={p.id} p={p} />)}
                </div>
            </section>

            {/* Properties for Sale / Rent (show some) */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Properties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {properties.slice(0, 6).map(p => <PropertyCard key={p.id} p={p} />)}
                </div>
            </section>

            <Newsletter />
        </div>
    )
}