"use client"
import { useState } from 'react'
import React from 'react'
import Password from './Password';
import AccountDetails from './AccountDetails';
import Address from './Address';
import Order from './Order';
import Watchlist from './Watchlist';

const Profile = () => {
    const [activeTab, setActiveTab] = useState("Order");

    const handleActiveTab = (tab) => {
        setActiveTab(tab);
    };

    const profile = [
        { label: 'Order', icon: 'icon-order' },
        { label: 'Watchlist', icon: 'icon-watchlist' },
        { label: 'Address', icon: 'icon-address' },
        { label: 'Password', icon: 'icon-password' },
        { label: 'Account Details', icon: 'icon-account-details' },
        // { label: 'Logout', icon: 'icon-logout' },
    ];
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[80%] flex gap-[1.5rem] justify-center">
                <div className="w-[212px] border-r px-3">
                    {profile.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleActiveTab(item.label)}
                            className={`flex items-center gap-3 p-3 cursor-pointer rounded-md ${activeTab === item.label ? 'bg-[#f6f6f6]' : ''
                                }`}
                        >
                            <span className="icon-box text-gray-500">
                                <i className={item.icon}></i>
                            </span>
                            <span className={`text-[14px] ${activeTab === item.label ? 'font-semibold text-black' : 'text-gray-600'}`}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
                <div className='w-1/2'>
                    {activeTab === "Order" && (
                        <Order />
                    )}
                    {activeTab === "Watchlist" && (
                        <Watchlist />
                    )}
                    {activeTab === "Address" && (
                        <Address />
                    )}
                    {activeTab === "Account Details" && (
                        <AccountDetails />
                    )}
                    {activeTab === "Password" && (
                        <Password />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile