import Image from 'next/image'
import React from 'react'

const SuccessPopUp = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-[25rem] bg-white py-2 h-[270px] flex flex-col gap-3 rounded-lg items-center justify-center shadow-lg">
            <Image height={100} width={100} src={"/success.svg"}/>
            <h2 className='text-[24px] font-bold'>Thank you for shopping</h2>
            <p className='text-[12px] font-normal w-[329px] text-center'>Your order has been successfully placed and is now being processed.</p>
        </div>
    </div>
  )
}

export default SuccessPopUp