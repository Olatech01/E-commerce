import React from 'react'

const Address = () => {
    return (
        <div className='flex flex-col gap-[1.5rem]'>
            <h2 className='text-[16px] font-semibold'>Shipping Address</h2>

            <form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[14px] font-medium'>Street Address</label>
                    <input type="text" id="firstName" className='border rounded-md outline-none h-[40px] px-2 w-full' />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[14px] font-medium'>City</label>
                        <input type="text" id="firstName" className='border rounded-md outline-none h-[40px] px-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[14px] font-medium'>State</label>
                        <input type="text" id="firstName" className='border rounded-md outline-none h-[40px] px-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[14px] font-medium'>Zip Code</label>
                        <input type="text" id="firstName" className='border rounded-md outline-none h-[40px] px-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[14px] font-medium'>Country</label>
                        <input type="text" id="firstName" className='border rounded-md outline-none h-[40px] px-2 w-full' />
                    </div>
                </div>
                <button className="py-2 px-4 bg-black text-white font-semibold w-[169px]">Save changes</button>
            </form>
        </div>
    )
}

export default Address