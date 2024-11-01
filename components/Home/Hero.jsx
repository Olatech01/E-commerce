import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-around items-center w-full bg-[#F6F6F6] pt-[2rem] sm:flex-col sm:gap-6 sm:items-start sm:px-4'>
      <div>
        <h1 className='text-[16px] font-normal'>Classic Exclusive</h1>
        <p className='text-[25px] font-semibold'>Women&apos;s collection</p>
        <p>UPTO 40% OFF</p>
      </div>
      <div className='bg-[url("/grade.svg")] bg-no-repeat bg-contain h-fit'>
        <Image height={100} width={200} src={"/hero.svg"} className='' />
      </div>
    </div>
  )
}

export default Hero