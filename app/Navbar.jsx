"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdMenu, MdClose } from "react-icons/md";
import Link from 'next/link';
import { TiShoppingCart } from "react-icons/ti";




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='flex items-center justify-between px-7 py-3'>
      <Image height={100} width={100} src={"/logo.svg"} />
      <ul className='flex gap-6 sm:hidden text-[14px] font-medium'>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/products"}>
          <li>Products</li>
        </Link>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className='flex gap-3 items-center'>
        <CiSearch size={25} />
        <Link href={"/carts"}>
          <TiShoppingCart size={25} />
        </Link>
        <CgProfile size={25} />
      </div>
      <div className='lg:hidden flex gap-3 items-center'>
        <button onClick={toggleMenu} className='text-3xl'>
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`lg:hidden flex flex-col items-start bg-[#F6F6F6] w-full px-[20px] py-[10px] absolute top-[80px] left-0 z-40 transition-all duration-300 ease-in-out 
          ${isMenuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[60px]'}`}
        >
          <ul className='flex flex-col gap-6'>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar