"use client"
import ReviewPopUp from '@/components/Products/ReviewPopUp';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';



const productsData = [
    { id: 1, name: 'Classic Monochrome Tees', price: 35, color: '#0000FF', size: 'M', inStock: true, img: "/ess.svg" },
    { id: 2, name: 'Monochromatic Wardrobe', price: 27, color: '#8A2BE2', size: 'M', inStock: true, img: "/ess.svg" },
    { id: 3, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 4, name: 'UTRAANET Black', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 5, name: 'Elegant Ebony Sweatshirts', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 6, name: 'Sleek and Cozy Black', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 7, name: 'Raw Black Tees', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 8, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 9, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 10, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 11, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 12, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'S', inStock: true, img: "/ess.svg" },
    { id: 13, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'XXL', inStock: true, img: "/ess.svg" },
    { id: 14, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'XXL', inStock: true, img: "/ess.svg" },
    { id: 15, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'XXL', inStock: true, img: "/ess.svg" }
];





2
const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('details')
    const [review, setReview] = useState(false)

    const handleReview = () => {
        setReview(true);
    }

    const handleClose = () => {
        setReview(false);
    }

    const handleTab = (tab) => {
        setActiveTab(tab);
    }

    useEffect(() => {
        if (id) {
            const productData = productsData.find((item) => item.id === parseInt(id));
            setProduct(productData);
        }
    }, [id]);
    if (!product) return <p>Loading...</p>;



    return (
        <div className="p-6 w-full mx-auto flex flex-col items-center gap-[3rem]">
            <div className='flex justify-center w-[80%] gap-[5rem]'>
                <Image height={100} width={400} src={product.img} alt={product.name} />
                <div className='flex flex-col gap-[1.5rem]'>
                    <div className='flex justify-between items-center w-full gap-5'>
                        <h1 className="text-[20px] font-bold">{product.name}</h1>
                        <CiShare2 />
                    </div>
                    <span className="py-2 px-6 text-xs bg-green-100 rounded w-fit">
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <h2 className="text-[18px] font-semibold">${product.price}.00</h2>
                    <div className='flex gap-2 flex-col'>
                        <h2 className="text-[12px] font-medium">Available colors</h2>
                        <div className='flex gap-[1rem]'>
                            <button className='h-[30px] w-[30px] bg-[#8A2BE2] rounded-full border'></button>
                            <button className='h-[30px] w-[30px] bg-[#FFD700] rounded-full border'></button>
                            <button className='h-[30px] w-[30px] bg-[#0000FF] rounded-full border'></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className="text-[12px] font-medium">Select size</h2>
                        <div className='grid grid-cols-3 gap-1'>
                            <button className='h-[30px] rounded-md border'>S</button>
                            <button className='h-[30px] rounded-md border'>M</button>
                            <button className='h-[30px] rounded-md border'>L</button>
                            <button className='h-[30px] rounded-md border'>Xl</button>
                            <button className='h-[30px] rounded-md border'>XXL</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className="text-[12px] font-medium">Quantity</h2>
                        <div className='grid grid-cols-3'>
                            <button className='h-[30px] rounded-l-md border'>-</button>
                            <button className='h-[30px] border'>1</button>
                            <button className='h-[30px] rounded-r-md border'>+</button>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button className='text-white bg-black h-[35px] rounded-md w-full'>Add to cart</button>
                        <button className='border h-[35px] w-[50px] rounded-md flex items-center justify-center'>
                            <CiHeart size={25} />
                        </button>
                    </div>
                    <p className='text-[12px] font-medium'>— Free shipping on orders $100+</p>
                </div>
            </div>
            <div className='flex justify-center w-[80%] gap-[5rem]'>
                <div className='w-[241px]'>
                    <button
                        onClick={() => handleTab("details")}
                        className={` h-[35px] w-full ${activeTab === "details" ? "bg-[#F6F6F6]" : ""}`}
                    >
                        Details
                    </button>
                    <button
                        onClick={() => handleTab("review")}
                        className={` h-[35px] w-full ${activeTab === "review" ? "bg-[#F6F6F6]" : ""}`}
                    >
                        Review
                    </button>
                </div>
                <div className='w-full'>
                    {activeTab === "details" && (
                        <div className='flex flex-col gap-5 w-full'>
                            <h2 className="text-[16px] font-medium">Detail</h2>
                            <p className="text-[14px] font-normal">
                                Elevate your everyday style with our Men&apos;s Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.
                                <br className='mt-2' />
                                The classic black color never goes out of style. Whether you&apos;re dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.
                            </p>
                            <ul className='list-disc flex flex-col gap-2 ml-4 text-[14px]'>
                                <li>Premium Quality</li>
                                <li>Versatile Wardrobe Staple</li>
                                <li>Available in Various Sizes</li>
                                <li>Tailored Fit</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === "review" && (
                        <div className='flex flex-col gap-5 w-full'>
                            <h2 className="text-[16px] font-medium">Review</h2>
                            <div>
                                <h2>4.2</h2>
                            </div>
                            <div className='flex gap-2 justify-between w-full border-b py-2'>
                                <button onClick={handleReview} className='border px-3 h-[35px] rounded-md'>Write a review</button>
                                <select className='outline-none '>
                                    <option>Sort By</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-6 items-center'>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className='text-[14px] font-medium'>Emily Davis</h2>
                                        <p className='text-[12px] font-normal'>1 Week ago</p>
                                        <p className='text-[14px] font-normal'>This company always goes above and beyond to satisfy their customers.</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <CiStar />
                                    </div>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className='text-[14px] font-medium'>Emily Davis</h2>
                                        <p className='text-[12px] font-normal'>1 Week ago</p>
                                        <p className='text-[14px] font-normal'>This company always goes above and beyond to satisfy their customers.</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <CiStar />
                                    </div>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className='text-[14px] font-medium'>Emily Davis</h2>
                                        <p className='text-[12px] font-normal'>1 Week ago</p>
                                        <p className='text-[14px] font-normal'>This company always goes above and beyond to satisfy their customers.</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <CiStar />
                                    </div>
                                </div>
                                <button className='py-2 px-5 rounded-md border'>Load more review</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {review && (
                <ReviewPopUp onClose={handleClose} />
            )}
        </div>
    )
}

export default Details