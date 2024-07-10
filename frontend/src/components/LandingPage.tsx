import React from 'react'
import Image from "next/image"

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-screen-xl px-16 pt-4 pb-2">

        <div className="">
          <h1 className="font-bold text-xl py-2">FITNESS FOR EVERY BODY</h1>
          <p className="font-semibold pb-2">
            Welcome to FitNess! We&apos;re here to help you get in shape and feel great. <br />
            Whether you&apos;re a seasoned athlete or just starting out, we have everything you need to reach your fitness goals.
          </p>
        </div>

        <div className="flex justify-center items-center mt-8 mb-16">
          {/* First */}
          <a href="#" className="flex-1 relative cursor-pointer flex flex-col bg-red-100 rounded-2xl mr-8 transition duration-300 hover:bg-red-200 hover:shadow-lg hover:scale-105">
            <div className="p-12 py-4">
              <h1 className="font-bold text-[22px] text-orange-600">Businesses</h1>
              <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam!</p>
            </div>

            <div className="relative h-[400px] mt-auto">
              <Image
                src="/assets/landingpage/woman3.png"
                alt="fitness business"
                layout="fill"
                objectFit="cover"
                className=" rounded-b-2xl"
              />
            </div>
          </a>

          {/* Second */}
          <a href="#" className="flex-1 relative cursor-pointer flex flex-col bg-blue-200 rounded-2xl mr-8 transition duration-300 hover:bg-blue-300 hover:shadow-lg hover:scale-105">
            <div className="p-12 py-4">
              <h1 className="font-bold text-[22px] text-blue-600">Corporates</h1>
              <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam!</p>
            </div>
            <div className="relative h-[400px] mt-auto">
              <Image
                src="/assets/landingpage/man1.png"
                alt="fitness business"
                layout="fill"
                objectFit="cover"
                className=" rounded-b-2xl"
              />
            </div>
          </a>

          {/* Third */}
          <a href="#" className="flex-1 relative cursor-pointer flex flex-col bg-purple-200 rounded-2xl transition duration-300 hover:bg-purple-300 hover:shadow-lg hover:scale-105">
            <div className="p-12 py-4">
              <h1 className="font-bold text-[22px] text-purple-700">Personalize</h1>
              <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam!</p>
            </div>
            <div className="relative h-[400px] mt-auto">
              <Image
                src="/assets/landingpage/woman1.png"
                alt="fitness business"
                layout="fill"
                objectFit="cover"
                className=" rounded-b-2xl"
              />
            </div>
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage