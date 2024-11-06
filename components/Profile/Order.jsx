import Image from 'next/image'
import React from 'react'

const Order = () => {
    return (
        <div className='flex flex-col gap-[1.5rem]'>
            <h2 className='text-[16px] font-semibold'>Order</h2>
            <div className='flex flex-col gap-[2rem]'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <Image height={100} width={70} src={"/ess.svg"}/>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[14px] font-medium'>Raw Black T-Shirt Lineup</h2>
                            <p className='text-[12px] font-medium'>Ordered on: 27 July 2023</p>
                            <p className='text-[12px] font-medium'>$70.00</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] font-semibold underline'>Processing</p>
                        <button className='border-2 w-[100px] rounded-md py-2'>View Item</button>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <Image height={100} width={70} src={"/ebony.svg"}/>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[14px] font-medium'>Raw Black T-Shirt Lineup</h2>
                            <p className='text-[12px] font-medium'>Ordered on: 27 July 2023</p>
                            <p className='text-[12px] font-medium'>$70.00</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] font-semibold underline'>Completed</p>
                        <button className='border-2 w-[100px] rounded-md py-2'>View Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order