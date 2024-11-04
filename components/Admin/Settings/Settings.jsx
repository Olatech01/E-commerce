import React from 'react'

const Settings = () => {
    return (
        <div className='bg-[white] p-4 h-[588] flex flex-col gap-[2rem]'>
            <h2 className='text-[18px] font-medium border-b py-3'>Settings</h2>
            <form className='flex flex-col gap-[1rem]'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Site Name</label>
                    <input
                        type="text"
                        className='border rounded-md outline-none h-[40px] px-2 w-1/2'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Support Email</label>
                    <input
                        type="email"
                        className='border rounded-md outline-none h-[40px] px-2 w-1/2'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Monthly Order Goal</label>
                    <input
                        type="text"
                        className='border rounded-md outline-none h-[40px] px-2 w-1/2'
                    />
                </div>
                <button className='bg-[#0E1422] h-[40px] mt-4 text-white text-[16px] font-medium rounded-md w-[20%]'>Save changes</button>
            </form>
        </div>
    )
}

export default Settings