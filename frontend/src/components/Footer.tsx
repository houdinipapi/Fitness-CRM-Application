import React from 'react'

const Footer = () => {
  return (
    <footer className="text-blue-500 bg-gray-200 py-4 w-full relative bottom-0 pt-3">
        <div className="container mx-auto px-4 text-center font-semibold">
            
            <ul className="mt-2 flex justify-center space-x-6">
                <li className="hover:text-blue-700 hover:underline">
                    <a href="/">Home</a>
                </li>
                <li className="hover:text-blue-700 hover:underline">
                    <a href="#">Blog</a>
                </li>
                <li className="hover:text-blue-700 hover:underline">
                    <a href="#">Status</a>
                </li>
            </ul>

            <p>
                © {new Date().getFullYear()} ACHIOMWA. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer