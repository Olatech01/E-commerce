import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-[#F6F6F6] flex items-center justify-center py-7 sm:px-4'>
            <div className='w-[80%] flex items-center sm:gap-4 justify-between sm:w-full sm:flex-col'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[24px] font-bold'>Join Our Newsletter</h2>
                    <p className='w-[462px] sm:w-full text-[14px] font-normal'>We love to surprise our subscribers with occasional gifts.</p>
                </div>
                <div className='flex gap-2 sm:flex-col sm:w-full'>
                    <input
                        placeholder='Your email address'
                        className='border p-2 rounded-md h-[40px] outline-none'
                        type="text"
                    />
                    <button className='h-[40px] w-[170px] sm:w-full bg-black rounded-md text-white'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter