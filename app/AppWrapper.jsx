"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

const AppWrapper = ({ children }) => {
    const pathname = usePathname()

    const shouldHideNavbarAndFooter = [
        "/auth/register",
        "/auth/login",
        "/admin",
        "/admin/products",
        "/admin/settings"
    ].includes(pathname);

    return (
        <div>
            {!shouldHideNavbarAndFooter && <Navbar />}
            {children}
            {!shouldHideNavbarAndFooter && (
                <footer className='flex justify-center py-4'>
                    <p className='text-center text-[14px]'>© 2023 QuizApp. All rights reserved.</p>
                </footer>
            )}
        </div>
    )
}

export default AppWrapper
