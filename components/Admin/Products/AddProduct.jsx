"use client"
import React, { useState } from 'react';
import { TbX } from 'react-icons/tb';
import { MdOutlineUploadFile } from "react-icons/md";

const AddProduct = ({ onClose }) => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const removeImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-[40rem] bg-white py-4 flex flex-col gap-5 rounded-lg shadow-lg">
                <div className='border-b px-4 flex justify-between items-center'>
                    <h2 className="text-lg font-semibold">Add Product</h2>
                    <TbX onClick={onClose} className='cursor-pointer' />
                </div>

                <form className='flex flex-col gap-3 w-full px-4 h-[65vh] py-5 overflow-y-auto'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-3 w-full '>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Product Name</label>
                                <input
                                    type="text"
                                    className='border rounded-md w-full h-[40px]'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Price</label>
                                <input
                                    type="number"
                                    className='border rounded-md w-full h-[40px]'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Category</label>
                                <input
                                    type="number"
                                    className='border rounded-md w-full h-[40px]'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Slug</label>
                                <input
                                    type="number"
                                    className='border rounded-md w-full h-[40px]'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>SKU</label>
                                <input
                                    type="number"
                                    className='border rounded-md w-full h-[40px]'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Description</label>
                                <textarea
                                    className='border rounded-md w-full h-[90px]'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Stock Status</label>
                                <input
                                    type="text"
                                    className='border rounded-md w-full h-[40px]'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Available quantity</label>
                                <input
                                    type="text"
                                    className='border rounded-md w-full h-[40px]'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Images</label>
                                <label className='flex items-center gap-2 border rounded-md w-full h-[40px] px-3 cursor-pointer'>
                                    <MdOutlineUploadFile />
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                    <span>Choose product images</span>
                                </label>

                                <div className="grid grid-cols-4 gap-2 mt-2">
                                    {images.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt="Selected"
                                                className="w-full h-20 object-cover rounded-md"
                                            />
                                            <TbX
                                                onClick={() => removeImage(index)}
                                                className="absolute top-1 right-1 text-white bg-black rounded-full cursor-pointer"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] font-medium'>Sizes</label>
                                <div className='grid grid-cols-5 gap-2'>
                                    <button className='border rounded-md w-full h-[40px]'>S</button>
                                    <button className='border rounded-md w-full h-[40px]'>M</button>
                                    <button className='border rounded-md w-full h-[40px]'>L</button>
                                    <button className='border rounded-md w-full h-[40px]'>XL</button>
                                    <button className='border rounded-md w-full h-[40px]'>XXL</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className=' bg-black rounded-md text-white py-2'>Save Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
