"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { useState } from 'react';

export const Navbar = () => {

  const [open, setOpen] = useState(false);

    // Define the interface for individual navigation items
    interface NavItem {
        name: string;
        link: string;
    }

    // Correct the type of the array of navigation items
    const navItems: NavItem[] = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'About',
            link: '/About'
        },
        {
            name: 'Contact',
            link: '/Contact'
        },
        {
            name: 'Sign Up',
            link: '/SignUp/LogIn'
        },
    ];

    return (
        <nav className="w-full h-auto max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center  xl:gap-20 pt-11 py-4 px-4 md:px-2 lg:px-5">
        {/* Mobile Menu (Optional Placeholder) */}
       
          <button className='md:hidden flex items-center justify-between '>
          <Image src="/menu.svg" alt="Menu" height={24} width={24} 
            onClick={() => setOpen((prev) => !prev)}
            />{
              open && (
                <ul className="absolute bg-black text-text left-0 top-20 w-full flex flex-col items-center justify-center gap-8 text-xl  z-10">
                {navItems.map((item, i) => (
                <li key={i}>
                    <Link href={item.link}>{item.name}</Link>
                </li>
                ))}
                </ul>
              )
            }
          </button>
       <div className='flex items-center gap-20 lg:gap-[190px]'>
           {/* Logo */}
        <Link href="#">
        <Image src="/Logo.svg" alt="Logo" height={24} width={118} />
        </Link>
  
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 text-gray-600  text-sm md:text-base">
        {navItems.map((item, i) => (
        <li key={i}>
            <Link href={item.link}>{item.name}</Link>
        </li>
        ))}
        </ul>
        </div>
       
  
        <div className='flex space-x-2 md:space-x-6 flex-row '>
        {/* Search Bar */}
        <div className="h-[38px] flex flex-row gap-2 md:gap-9  items-center bg-secondary rounded-sm lg:w-full md:w-auto px-4 py-2 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 w-full md:w-full  focus:outline-none text-sm"
          />
         <RiSearchLine />
        </div>
  
        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
       
          <button>
          <FaRegHeart />
          </button>
          <button>
          <MdOutlineShoppingCart />
          </button>
          <button>
          <RiUser3Line />
          </button>
        </div>
        </div>
  
      </nav>
        
    );
};


{/* <div>
<ul>
    {navItems.map((item, i) => (
        <li key={i}>
            <Link href={item.link}>{item.name}</Link>
        </li>
    ))}
</ul>
</div> */}
// <nav className="sm:w-full max-w-screen-2xl mx-auto bg-white flex flex-wrap justify-between items-center py-4 px-4 md:px-6 lg:px-10 shadow-sm">
       

    //    {/* Mobile Menu (Optional Placeholder) */}
    //    <div className="  md:hidden flex items-center">
    //    <button aria-label="Open Menu">
    //      <Image src="/menu.svg" alt="Menu" height={24} width={24} />
    //    </button>
    //  </div>

    //  <div className='w-full flex flex-row space-x-20'>   {/* Logo */}
    //  <Link href="#">
    //    <Image src="/Logo.svg" alt="Logo" height={24} width={118} />
    //  </Link>

     
    //  <ul className='hidden md:flex flex-end text-gray-600  text-sm md:text-base'>
    //   {navItems.map((item, i) => (
    //    <li key={i}>
    //        <Link href={item.link}>{item.name}</Link>
    //    </li>
    //    ))}
    //   </ul>
    //   </div>
     

    //    </nav>