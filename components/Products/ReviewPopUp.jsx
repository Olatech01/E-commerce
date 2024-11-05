import React, { useState } from 'react';
import { TbX } from 'react-icons/tb';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const ReviewPopUp = ({ onClose }) => {
    const [rating, setRating] = useState(0); // state to hold selected star rating

    // Function to handle star click
    const handleStarClick = (index) => {
        setRating(index + 1); // Set rating based on star clicked
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-[25rem] bg-white py-2 flex flex-col gap-5 rounded-lg shadow-lg">
                <div className='flex items-center justify-between border-b py-2 px-3'>
                    <h2>Write Review</h2>
                    <TbX onClick={onClose} className='cursor-pointer' />
                </div>
                <form className='px-3 flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[14px] font-normal'>Email</label>
                        <input
                            type="email"
                            className="border rounded-md outline-none px-3 py-1 w-full"
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[14px] font-normal'>Full Name</label>
                        <input
                            type="text"
                            className="border rounded-md outline-none px-3 py-1 w-full"
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[14px] font-normal'>Review</label>
                        <textarea
                            className='h-[30vh] border rounded-md outline-none px-3 py-1 w-full'
                        ></textarea>
                    </div>
                    <div className='flex gap-2'>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} onClick={() => handleStarClick(index)} className="cursor-pointer">
                                {index < rating ? <FaStar size={20} /> : <CiStar size={20} />}
                            </span>
                        ))}
                    </div>
                    <button className='text-white bg-black h-[35px] rounded-md w-full'>Submit Your Review</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewPopUp;
