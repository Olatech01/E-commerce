import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbX } from 'react-icons/tb'

const Carts = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-[80%] flex gap-[4.5rem] justify-center'>
                <div className='w-[578px] flex flex-col gap-5'>
                    <h2 className='text-[16px] font-semibold pb-2 border-b'>Your cart</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Image src={"/ess.svg"} alt="Product" width={70} height={100} />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[14px] font-medium'>Raw Black T-Shirt Lineup</h2>
                                <div className='flex items-center gap-3 text-[12px] font-medium'>
                                    <h2>Color:</h2>
                                    <button className='h-[20px] w-[20px] bg-[#8A2BE2] rounded-full border'></button>
                                    --
                                    <h2>Size: M </h2>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <h2>$75.00</h2>
                            <div className='flex items-center justify-between px-2 border rounded-md w-[70px]'>
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </div>
                            <button className='h-[30px] flex items-center justify-center w-[30px] bg-[#f6f6f6]'>
                                <TbX />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Image src={"/ess.svg"} alt="Product" width={70} height={100} />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[14px] font-medium'>Raw Black T-Shirt Lineup</h2>
                                <div className='flex items-center gap-3 text-[12px] font-medium'>
                                    <h2>Color:</h2>
                                    <button className='h-[20px] w-[20px] bg-[#0000FF] rounded-full border'></button>
                                    --
                                    <h2>Size: M </h2>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <h2>$22.00</h2>
                            <div className='flex items-center justify-between px-2 border rounded-md w-[70px]'>
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </div>
                            <button className='h-[30px] flex items-center justify-center w-[30px] bg-[#f6f6f6]'>
                                <TbX />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border-2 rounded-md px-4 py-3 flex flex-col gap-[2rem] w-[341px] h-[400px]'>
                    <h2 className='text-[16px] font-semibold'>Order Summary</h2>
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <h2 className='text-[14px] font-medium'>Subtotal:</h2>
                            <p className='text-[14px] font-medium'>$ 97.00</p>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='text-[14px] font-medium'>Shipping: </h2>
                            <p className='text-[14px] font-medium'>Free</p>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='text-[14px] font-medium'>Tax:</h2>
                            <p className='text-[14px] font-medium'>$ 3.00</p>
                        </div>
                    </div>
                    <div className='flex justify-between border-t pt-2'>
                        <h2 className='text-[14px] font-medium'>Total:</h2>
                        <p className='text-[14px] font-medium'>$ 3.00</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link href={"/checkout"} className='w-full'>
                            <button className='py-2 px-4 bg-black text-white font-semibold w-full'>
                                Checkout
                            </button>
                        </Link>
                        <Link href={"/products"} className='flex items-center justify-center w-full'>
                            <button className='underline'>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carts