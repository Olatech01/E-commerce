import Image from 'next/image'
import React from 'react'

const BestSelling = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-[1.5rem] sm:px-4'>
            <div className='w-[80%] flex flex-col gap-6 sm:w-full'>
                <h2 className='text-[24px] font-bold'>Best Selling</h2>
                <div className='grid grid-cols-4 gap-6 w-full sm:grid-cols-1'>
                    <div className='flex flex-col gap-2'>
                        <Image height={100} width={300} src={"/mono.svg"} className='sm:w-full'/>
                        <h2 className='text-[14px] font-medium'>Monochromatic Wardrobe</h2>
                        <div className='flex items-center gap-4'>
                            <h2 className='h-[30px]  w-[100px] flex items-center justify-center rounded-full border'>In stock</h2>
                            <p className='text-[14px] font-light'>$43.00</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image height={100} width={300} src={"/classic.svg"} className='sm:w-full'/>
                        <h2 className='text-[14px] font-medium'>Classic Monochrome Tees</h2>
                        <div className='flex items-center gap-4'>
                            <h2 className='h-[30px]  w-[100px] flex items-center justify-center rounded-full border'>In stock</h2>
                            <p className='text-[14px] font-light'>$43.00</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image height={100} width={300} src={"/ess.svg"} className='sm:w-full'/>
                        <h2 className='text-[14px] font-medium'>Essential Neutrals</h2>
                        <div className='flex items-center gap-4'>
                            <h2 className='h-[30px]  w-[100px] flex items-center justify-center rounded-full border'>In stock</h2>
                            <p className='text-[14px] font-light'>$43.00</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image height={100} width={300} src={"/ultra.svg"} className='sm:w-full'/>
                        <h2 className='text-[14px] font-medium'>UTRAANET Black</h2>
                        <div className='flex items-center gap-4'>
                            <h2 className='h-[30px]  w-[100px] flex items-center justify-center rounded-full border'>In stock</h2>
                            <p className='text-[14px] font-light'>$43.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSelling