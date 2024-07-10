import React from 'react'
import Image from 'next/image'

const Signin = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
        {/* Background Image */}
        <Image
            src="/assets/signup/signin1.jpg"
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
                        <form action="#" method="post" autoComplete="off" className="space-y-4">

                            {/* Email */}
                            <div className="mb-4 mx-10">
                                <label htmlFor="email" className="block font-bold text-gray-700">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email..."
                                    className="w-full bg-gray-200 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                                />
                            </div>

                            {/* Confirm Password */}
                            {/* <div className="mb-4 mx-10">
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="block text-gray-700 font-bold"> Confirm Password</label>
                                </div>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="Confirm Your Password..."
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div> */}

                            {/* Signin button */}
                            <div className="mx-10 mb-4 flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 w-1/2 mt-2 text-white bg-blue-500 hover:bg-blue-700 font-bold rounded-full focus:outline-none focus:shadow-outline"
                                >
                                    Log In
                                </button>
                            </div>

                            {/* Not signed up */}
                            <div className="text-center">
                                <a href="/sign-up" className="text-blue-500 hover:text-blue-700 hover:underline font-semibold">
                                    Don&apos;t have an account? Sign Up
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

export default Signin;