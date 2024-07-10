import Link from 'next/link'
import Image from "next/image"
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className="text-blue-400 bg-orange-100">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
            <Link href="#">
              <Image
                src="/assets/logos/achiomwa.png"
                alt="logo"
                width={128}
                height={38}
                className="w-50"
              />
            </Link>
            <div className="flex items-center gap-4 text-blue-400 font-semibold">
                {/* <Link href="#" legacyBehavior>
                  <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">HOME</a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">BLOG</a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">STATUS</a>
                </Link> */}
                <Link href="#" legacyBehavior>
                  <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">LOGIN</a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">SIGNUP</a>
                </Link>
                
              </div>
          </div>
      </div>
    </header>
    
  )
}

export default Navbar;