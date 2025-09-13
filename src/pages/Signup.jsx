import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (form.password !== form.confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );

            await updateProfile(userCredential.user, {
                displayName: form.name,
            });

            setUser(userCredential.user);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-8 md:p-10">
                    <Link to="/" className="text-sm text-gray-600 underline">
                        ← Back to Homepage
                    </Link>
                    <h2 className="text-2xl font-bold mt-6 mb-6">Create new account</h2>

                    {error && <p className="text-red-600 mb-4">{error}</p>}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter Your Full Name"
                            className="w-full p-3 border rounded-md focus:outline-none"
                            required
                        />
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
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Your Password"
                            className="w-full p-3 border rounded-md focus:outline-none"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-900 font-medium">
                            Log in
                        </Link>
                    </p>
                </div>
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
