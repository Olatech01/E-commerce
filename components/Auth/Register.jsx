"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { LuEyeOff, LuEye } from "react-icons/lu";


const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [validLength, setValidLength] = useState(false)
    const [hasNumber, setHasNumber] = useState(false)
    const [hasSymbol, setHasSymbol] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [agreed, setAgreed] = useState(false)

    const handlePasswordChange = (e) => {
        const value = e.target.value
        setPassword(value)
        setValidLength(value.length >= 6)
        setHasNumber(/\d/.test(value))
        setHasSymbol(/[!@#$%^&*(),.?":{}|<>]/.test(value))
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateInfo = () => {
        if (!firstName || !lastName || !password || !email) {
            toast.error("All fields are required")
            return false;
        }
        if (!validLength) {
            toast.error("Password must be at least 6 characters long");
            return false;
        }
        if (!hasNumber) {
            toast.error("Password must contain numbers");
            return false;
        }
        if (!hasSymbol) {
            toast.error("Password must have a symbol");
            return false;
        }
        if (!agreed) {
            toast.error("Please agree to the terms and conditions");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInfo()) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                toast.success('Account Created Successfully');
                // router.push(`/auth/business/kyc?businessName=${encodeURIComponent(businessName)}`);
            }, 2000);
        }

    }



    return (
        <div className='h-screen flex flex-row w-full'>
            <div className='w-full h-screen'>
                <Image
                    height={100}
                    width={200}
                    src={"/register.svg"}
                    className='w-full h-screen object-cover'
                />
            </div>
            <div className='w-full flex flex-col justify-center gap-[2rem] px-7'>
                <div>
                    <h2 className='text-[30px] font-bold'>Create New Account</h2>
                    <p className='text-[14px]'>Please enter details</p>
                </div>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">First name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='Ayanda'
                            className='h-[40px] px-3 rounded-md border outline-none border-[#131118] w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Last name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Boluwatife'
                            className='h-[40px] px-3 rounded-md border outline-none border-[#131118] w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email Addess</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Sample@gmail.com'
                            className='h-[40px] px-3 rounded-md border outline-none border-[#131118] w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Password</label>
                        <div className='flex justify-between items-center h-[40px] px-3 rounded-md border border-[#131118]'>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder='****************'
                                className=' outline-none  w-full'
                            />
                            <button
                                onClick={togglePasswordVisibility}
                                type="button"
                                className="cursor-pointer"
                            >
                                {showPassword ? <LuEyeOff /> : <LuEye />}
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <p className='text-[14px]'>I agree to the <span className='font-bold'>Terms & Conditions</span></p>
                    </div>
                    <button
                        type='submit'
                        className='bg-[#131118] w-full flex items-center justify-center rounded-md h-[40px] text-[#FFFFFF]'
                    >
                        {isLoading ? (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                            </svg>
                        ) : (
                            "SignUp"
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register