import Image from 'next/image'
import React from 'react'

const Browser = () => {
  return (
    <div className='bg-[#F6F6F6] flex items-center justify-center py-4 sm:px-4'>
        <div className='w-[80%] flex items-center justify-between sm:flex-col sm:w-full'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[24px] font-bold'>Browse Our Fashion Paradise!</h2>
                <p className='w-[462px] sm:w-full text-[14px] font-normal'>Step into a world of style and explore our diverse collection of clothing categories.</p>
                <button className='h-[40px] w-[170px] bg-black rounded-md text-white'>Start browsing</button>
            </div>
            <Image height={100} width={200} src={"/brow.svg"}/>
        </div>
    </div>
  )
}

export default Browser