import React, { useEffect, useMemo, useState } from 'react'
import { fetchProperties } from '../services/api'
import PropertyCard from '../components/PropertyCard'


export default function Listings() {
    const [propsData, setPropsData] = useState([])
    const [filter, setFilter] = useState('all')
    const [q, setQ] = useState('')


    useEffect(() => {
        fetchProperties().then(setPropsData).catch(console.error)
    }, [])


    const filtered = useMemo(() => {
        let result = propsData
        if (filter === 'sale') result = result.filter(p => p.sale === true || p.type === 'sale')
        if (filter === 'rent') result = result.filter(p => p.rent === true || p.type === 'rent')
        if (q) result = result.filter(p => p.city.toLowerCase().includes(q.toLowerCase()) || p.name.toLowerCase().includes(q.toLowerCase()))
        return result
    }, [propsData, filter, q])


    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Property Listings</h1>
            <div className="flex gap-3 mb-6">
                <select value={filter} onChange={e => setFilter(e.target.value)} className="border rounded p-2">
                    <option value="all">All</option>
                    <option value="sale">Sale</option>
                    <option value="rent">Rent</option>
                </select>
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search city or name" className="border p-2 rounded flex-1" />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(p => <PropertyCard key={p.id} p={p} />)}
            </div>
        </div>
    )
}