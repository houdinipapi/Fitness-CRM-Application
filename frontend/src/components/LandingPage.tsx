import React from 'react'

const LandingPage = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-16">

      <div>
        <h1 className="font-bold text-xl py-2">FitNess for Every Body</h1>
        <p className="font-semibold pb-2">
          Welcome to FitNess! We&apos;re here to help you get in shape and feel great. <br />
          Whether you&apos;re a seasoned athlete or just starting out, we have everything you need to reach your fitness goals.
        </p>
      </div>

      <div className="flex justify-center items-center mt-8 mb-16">
        {/* First */}
        <a href="#" className="flex-1 relative cursor-pointer flex flex-col bg-[#FBE9E7] rounded-2xl mr-8 transition duration-300 hover:shadow-lg hover:scale-105">
          <div className="p-12 pt-4 pb-4">
            <h1 className="font-bold text-[22px] text-orange-600">For Fitness Businesses</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam!</p>
          </div>
          <div className="h-[400px] bg-center bg-no-repeat bg-cover mt-auto transition duration-300 hover:scale-105"></div>
        </a>

        {/* Second */}
        <a href="#" className="flex-1 relative cursor-pointer flex flex-col bg-[#E3F2FD] rounded-2xl mr-8 transition duration-300 hover:shadow-lg hover:scale-105">
          <div className="p-12 pt-4 pb-4">
            <h1 className="font-bold text-[22px] text-blue-600">For Corporates</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam!</p>
          </div>
          <div className="h-[400px] bg-center bg-no-repeat bg-cover mt-auto transition duration-300 hover:scale-105"></div>
        </a>

        {/* Third */}
        <a href="#" className="flex-1 relative cursor-pointer flex flex-col bg-[#EDE7F6] rounded-2xl transition duration-300 hover:shadow-lg hover:scale-105">
          <div className="p-12 pt-4 pb-4">
            <h1 className="font-bold text-[22px] text-purple-700">For Fitness Businesses</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam!</p>
          </div>
          <div className="h-[400px] bg-center bg-no-repeat bg-cover mt-auto transition duration-300 hover:scale-105"></div>
        </a>
      </div>
      
    </div>
  )
}

export default LandingPage