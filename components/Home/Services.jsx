import React from 'react'
import { GrDeliver } from "react-icons/gr";
import { LuFileBadge2 } from "react-icons/lu";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Services = () => {
    return (
        <div className='flex items-center w-full justify-center sm:px-4 '>
            <div className='flex justify-between w-[80%] sm:flex-col sm:w-full sm:gap-4'>
                <div className='flex flex-col gap-2'>
                    <GrDeliver size={30} />
                    <p className='text-[14px] w-[272px] sm:w-full'>Upgrade your style today and get FREE shipping on all orders! Don&apos;t miss out.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <LuFileBadge2 size={30} />
                    <p className='text-[14px] w-[272px] sm:w-full'>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <HiOutlineBadgeCheck size={30} />
                    <p className='text-[14px] w-[272px] sm:w-full'>Your security is our priority. Your payments are secure with us.</p>
                </div>
            </div>
        </div>
    )
}

export default Services