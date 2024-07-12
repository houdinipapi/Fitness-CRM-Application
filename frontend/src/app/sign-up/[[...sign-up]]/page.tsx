"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from "axios";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Signup = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("")

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!")
            return;
        }

        try {
            const res = await axios.post("http://127.0.0.1:8000/api/register/", {
                email: formData.email,
                username: formData.username,
                password: formData.password,
                confirm_password: formData.confirmPassword,
            });

            if (res.status === 201) {
                router.push("/sign-in");  // Redirect to sign-in/login page after successful signup
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.message || "An error occurred!");
            }
        }
    };


  return (
    <div className="min-h-screen relative flex items-center justify-center">
        {/* Background Image */}
        <Image
            src="/assets/signup/signup1.jpg"
            alt="backround image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
        />
        <div className="container mx-auto p-4 relative z-10">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex md:justify-center">
                    <div className="p-8 w-full">
                        <div className="flex justify-center mb-8">
                            <Image
                                src="/assets/logos/achiomwa.png"
                                alt="logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Email */}
                            <div className="mb-4 mx-10">
                                <label htmlFor="email" className="block font-bold text-gray-700">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email..."
                                    className="w-full bg-gray-200 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Username */}
                            <div className="mb-4 mx-10">
                                <label htmlFor="username" className="block font-bold text-gray-700">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Your Username..."
                                    className="w-full bg-gray-200 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4 mx-10">
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="block text-gray-700 font-bold">Password</label>
                                    {/* <a href="#" className="text-blue-500">Forgot Password?</a> */}
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password..."
                                    className="w-full bg-gray-200 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-4 mx-10">
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="block text-gray-700 font-bold"> Confirm Password</label>
                                </div>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm Your Password..."
                                    className="w-full bg-gray-200 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Signup button */}
                            <div className="mx-10 mb-4 flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 w-1/2 mt-2 text-white bg-blue-500 hover:bg-blue-700 font-bold rounded-full focus:outline-none focus:shadow-outline"
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Error message */}
                            {error && (
                                <div className="mx-10 mb-4 text-center text-red-500">
                                    {error}
                                </div>
                            )}

                            {/* Already signed up */}
                            <div className="text-center">
                                <a href="/sign-in" className="text-blue-500 hover:text-blue-700 hover:underline font-semibold">
                                    Already have an account? Login
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup