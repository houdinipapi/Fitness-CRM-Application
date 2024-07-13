"use client"

import Link from 'next/link';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const access = localStorage.getItem("access");
  //   if (access) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, []);

  const { isAuthenticated, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  return (
    <header className="bg-gray-200">
      <div className="text-blue-400 container mx-auto max-w-screen-xl px-16">
        <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/assets/logos/achiomwa.png"
                alt="logo"
                width={128}
                height={38}
                className="max-w-[140px]"
              />
            </Link>
            <div className="flex items-center gap-4 font-semibold">
              {isAuthenticated ? (
                <>
                  <Link href="#" legacyBehavior>
                    <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">HOME</a>
                  </Link>

                  <Link href="#" legacyBehavior>
                    <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">BLOG</a>
                  </Link>

                  <Link href="#" legacyBehavior>
                    <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">STATUS</a>
                  </Link>

                  <Link href="#" legacyBehavior>
                    <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">LOGOUT</a>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/sign-in" legacyBehavior>
                    <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">LOGIN</a>
                  </Link>

                  <Link href="/sign-up" legacyBehavior>
                    <a className="px-4 py-2 bg-white text-blue-400 rounded-full hover:bg-blue-500 hover:text-white border border-blue-400 transition">SIGNUP</a>
                  </Link>
                </>
              )}
              </div>
          </div>
      </div>
    </header>
    
  );
};

export default Navbar;