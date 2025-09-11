const API = 'https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing';

export async function fetchProperties() {
    const res = await fetch(API);
    if (!res.ok) throw new Error('Failed to fetch properties');
    return res.json();
}

export async function fetchPropertyById(id) {
    const res = await fetch(`${API}/${id}`);
    if (!res.ok) throw new Error('Failed to fetch property');
    return res.json();
}