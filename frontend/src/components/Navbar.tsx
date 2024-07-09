import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=" bg-orange-100 text-blue-400">
        <div className="conatiner mx-auto flex items-center justify-between py-8 px-16">
            <Link href="#">Logo Image</Link>
            <div className="flex items-center gap-4 text-blue-400 font-semibold">
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Dashboard</Link>
                <Link href="#">Login</Link>
                <Link href="#">Signup</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;