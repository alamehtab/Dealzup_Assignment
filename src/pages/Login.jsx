import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );
            setUser(userCredential.user);
            navigate("/"); // redirect to homepage
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left Side - Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-10">
                    <Link to="/" className="text-sm text-gray-600 underline">
                        ← Back to Homepage
                    </Link>
                    <h2 className="text-2xl font-bold mt-6 mb-6">Log In</h2>

                    {error && <p className="text-red-600 mb-4">{error}</p>}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email Id"
                            className="w-full p-3 border rounded-md focus:outline-none"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter Your Password"
                            className="w-full p-3 border rounded-md focus:outline-none"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-blue-900 font-medium">
                            Create One
                        </Link>
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="w-full md:w-1/2 hidden md:block">
                    <img
                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                        alt="property"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
