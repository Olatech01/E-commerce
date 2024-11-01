import Image from 'next/image';
import React from 'react'
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-7 py-3'>
      <Image height={100} width={100} src={"/logo.svg"} />
      <ul className='flex gap-6'>
        <li>Home</li>
        <li>Shop</li>
        <li>Our story</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
      <div className='flex gap-3 items-center'>
        <CiSearch size={25} />
        <CiHeart size={25} />
        <CiShoppingCart size={25} />
        <button className='h-[40px] w-[75px] rounded-md text-[#FFFFFF] bg-[#131118]'>Login</button>
      </div>
    </div>
  )
}

export default Navbar