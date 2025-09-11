import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../services/firebase'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState(null)
    const nav = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        if (password !== confirm) { setError('Passwords do not match'); return }
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(userCred.user, { displayName: name })
            // redirect to login
            nav('/login')
        } catch (err) {
            setError(err.message)
        }
    }


    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Signup</h2>
            {error && <div className="text-red-600 mb-2">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-3">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="w-full border rounded p-2" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full border rounded p-2" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full border rounded p-2" />
                <input value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirm password" type="password" className="w-full border rounded p-2" />
                <button className="w-full bg-green-600 text-white p-2 rounded">Create account</button>
            </form>
        </div>
    )
}