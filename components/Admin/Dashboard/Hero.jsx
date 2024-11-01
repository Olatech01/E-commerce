import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-3 gap-3 sm:grid-cols-1'>
        <div className='h-[157px] flex flex-col justify-between rounded-md shadow-md bg-[#ffffff] px-3 py-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-[16px] font-semibold'>Total sales</h2>
                    <p className='text-[12px] font-medium'>This Month</p>
                </div>
                <h2 className='text-[24px] font-bold'>$4,235</h2>
            </div>
            <Image height={100} width={200} src={"/lightup.svg"} className='w-full'/>
        </div>
        <div className='h-[157px] flex flex-col justify-between rounded-md shadow-md bg-[#ffffff] px-3 py-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-[16px] font-semibold'>Customers</h2>
                    <p className='text-[12px] font-medium'>This Month</p>
                </div>
                <h2 className='text-[24px] font-bold'>2,571</h2>
            </div>
            <Image height={100} width={200} src={"/zig.svg"} className='w-full'/>
        </div>
        <div className='h-[157px] flex flex-col justify-between rounded-md shadow-md bg-[#ffffff] px-3 py-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-[16px] font-semibold'>Orders</h2>
                    <p className='text-[12px] font-medium'>Monthly GOALS : 1,000</p>
                </div>
                <h2 className='text-[24px] font-bold'>734</h2>
            </div>
            <Image height={100} width={200} src={"/lightup.svg"} className='w-full'/>
        </div>
    </div>
  )
}

export default Hero