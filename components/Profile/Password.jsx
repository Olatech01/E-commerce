import React from 'react'

const Password = () => {
  return (
    <div className='flex flex-col gap-[1.5rem]'>
        <h2 className='text-[16px] font-semibold'>Change Password</h2>
        <form className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
                <label className='text-[14px] font-medium'>Old password</label>
                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-[14px] font-medium'>New password</label>
                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-[14px] font-medium'>Confirm new password</label>
                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
            </div>
            <button className="py-2 px-4 bg-black text-white font-semibold w-[169px]">Change password</button>
        </form>
    </div>
  )
}

export default Password