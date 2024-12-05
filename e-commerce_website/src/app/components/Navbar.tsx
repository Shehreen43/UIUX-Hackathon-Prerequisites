"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {

    // Define the interface for individual navigation items
    interface NavItem {
        name: string;
        link: string;
    }

    // Correct the type of the array of navigation items
    const navItems: NavItem[] = [
        {
            name: 'Home',
            link: '/'
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
            name: 'SignUp',
            link: '/SignUp'
        },
    ];

    return (
        <nav className="sm:w-full max-w-screen-2xl mx-auto bg-white flex flex-wrap justify-between items-center py-4 px-4 md:px-6 lg:px-10 shadow-sm">
       

       {/* Mobile Menu (Optional Placeholder) */}
      <div className="  md:hidden flex items-center">
        <button aria-label="Open Menu">
          <Image src="/menu.svg" alt="Menu" height={24} width={24} />
        </button>
      </div>

          {/* Logo */}
      <Link href="#">
        <Image src="/Logo.svg" alt="Logo" height={24} width={118} />
      </Link>

       

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