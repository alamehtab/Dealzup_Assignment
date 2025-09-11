import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)
    const nav = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            nav('/')
        } catch (error) { setErr(error.message) }
    }


    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {err && <div className="text-red-600">{err}</div>}
            <form onSubmit={handleSubmit} className="space-y-3">
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full border rounded p-2" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full border rounded p-2" />
                <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
            </form>
        </div>
    )
}