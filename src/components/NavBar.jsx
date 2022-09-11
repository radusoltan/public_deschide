import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import LanguageSwitcher from "./LanguageSwitcher"

const NavBar = () => {
  return <nav className="bg-white fixed w-full h-20 shadow-md z-[100] ease-in-out duration-300">
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href='/'>
        <a>
          LOGO
        </a>
      </Link>

      <div>
        <ul style={{ color: `#1f2937` }} className='hidden md:flex'>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href='/'>
              <a className="inline-flex items-center px-1 pt-1 font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">Home</a>
            </Link>
          </li>
          
        </ul>
        {/* Hamburger Icon */}
        <div
          style={{ color: `#1f2937` }}
          onClick={()=>{}}
          className='md:hidden'
        >
          {/* <AiOutlineMenu size={25} /> */} ICON
        </div>        
      </div>
      {/* Languages */}
      <LanguageSwitcher />
    </div>
  </nav>
}

export default NavBar;