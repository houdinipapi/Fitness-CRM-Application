import React from 'react'
import Image from 'next/image'

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="flex justify-center mb-8">
                            <Image
                                src="/assets/logos/achiomwa.png"
                                alt="logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <form action="#" method="post" autoComplete="off">

                            {/* Email */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-bold text-gray-700">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="block text-gray-700 font-bold">Password</label>
                                    {/* <a href="#" className="text-blue-500">Forgot Password?</a> */}
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="block text-gray-700 font-bold"> Confirm Password</label>
                                </div>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Signup button */}
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 mt-2 text-white bg-blue-500 hover:bg-blue-700 font-bold rounded-full focus:outline-none focus:shadow-outline"
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Already signed up */}
                            <div className="text-center">
                                <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
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