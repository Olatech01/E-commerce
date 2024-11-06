"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import SuccessPopUp from './SuccessPopUp';
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Checkout = () => {
    const [isPaymentSection, setIsPaymentSection] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');
    const [paymentMethodDetails, setPaymentMethodDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: '',
        paypalEmail: '',
    });
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
    const [isPaymentFailed, setIsPaymentFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()

    const handleSuccess = () => {
        setIsLoading(true); // Show loading icon
        setTimeout(() => {
            setIsLoading(false); // Hide loading icon after 3 seconds
            setIsPaymentSuccessful(true);
        }, 3000);
        setTimeout(() => {
            router.push("/products");
        }, 7000);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleContinueClick = () => {
        setIsPaymentSection(true);
    };

    const handleInputChange = (e) => {
        setPaymentMethodDetails({
            ...paymentMethodDetails,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[80%] flex gap-[4.5rem] justify-center">
                <div className="w-[544px]">
                    <form className="flex flex-col gap-[1rem]">
                        <div>
                            <label className="text-[14px] font-medium">Street Address</label>
                            <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-[14px] font-medium">City</label>
                                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
                            </div>
                            <div>
                                <label className="text-[14px] font-medium">State</label>
                                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
                            </div>
                            <div>
                                <label className="text-[14px] font-medium">Zip Code</label>
                                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
                            </div>
                            <div>
                                <label className="text-[14px] font-medium">Country</label>
                                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
                            </div>
                            <div>
                                <label className="text-[14px] font-medium">Email</label>
                                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
                            </div>
                            <div>
                                <label className="text-[14px] font-medium">Full name</label>
                                <input type="text" className="border rounded-md outline-none w-full h-[40px] px-2" />
                            </div>
                        </div>

                    </form>
                </div>
                {!isPaymentSection ? (
                    <div className="w-[372px] flex flex-col gap-[2rem]">
                        <h2 className="text-[16px] font-semibold">Your Order</h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <h2 className="text-[14px] font-medium">Subtotal:</h2>
                                <p className="text-[14px] font-medium">$ 97.00</p>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-[14px] font-medium">Shipping:</h2>
                                <p className="text-[14px] font-medium">Free</p>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-[14px] font-medium">Tax:</h2>
                                <p className="text-[14px] font-medium">$ 3.00</p>
                            </div>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                            <h2 className="text-[14px] font-medium">Total:</h2>
                            <p className="text-[14px] font-medium">$ 100.00</p>
                        </div>
                        <button type="button" onClick={handleContinueClick} className="py-2 px-2 bg-black text-white font-semibold w-[140px] rounded-md">
                            Continue
                        </button>
                    </div>
                ) : (
                    <div className="w-[372px] flex flex-col gap-4">
                        <h2 className="text-[16px] font-semibold">Payment Information</h2>
                        <div className="flex flex-col gap-3">
                            <label className="text-[14px] font-medium">Payment Method</label>
                            <select value={paymentMethod} onChange={handlePaymentMethodChange} className="border rounded-md outline-none w-full h-[40px] px-2">
                                <option value="cashOnDelivery">Cash on Delivery</option>
                                <option value="creditCard">Credit Card</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </div>
                        {paymentMethod === 'cashOnDelivery' && (
                            <div>
                                <p className="text-[14px] font-medium">You will pay for your order upon delivery.</p>
                            </div>
                        )}

                        {paymentMethod === 'creditCard' && (
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={paymentMethodDetails.cardNumber}
                                    onChange={handleInputChange}
                                    className="border rounded-md outline-none w-full h-[40px] px-2"
                                    placeholder="1234 5678 9012 3456"
                                />
                                <label className="text-[14px] font-medium">Cardholder Name</label>
                                <input
                                    type="text"
                                    name="cardHolderName"
                                    value={paymentMethodDetails.cardHolderName}
                                    onChange={handleInputChange}
                                    className="border rounded-md outline-none w-full h-[40px] px-2"
                                    placeholder="Full Name"
                                />
                                <div className="flex gap-2">
                                    <div className="flex flex-col">
                                        <label className="text-[14px] font-medium">Expiry Date</label>
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            value={paymentMethodDetails.expiryDate}
                                            onChange={handleInputChange}
                                            className="border rounded-md outline-none w-full h-[40px] px-2"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] font-medium">CVV</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={paymentMethodDetails.cvv}
                                            onChange={handleInputChange}
                                            className="border rounded-md outline-none w-full h-[40px] px-2"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {paymentMethod === 'paypal' && (
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium">PayPal Email</label>
                                <input
                                    type="email"
                                    name="paypalEmail"
                                    value={paymentMethodDetails.paypalEmail}
                                    onChange={handleInputChange}
                                    className="border rounded-md outline-none w-full h-[40px] px-2"
                                    placeholder="you@example.com"
                                />
                            </div>
                        )}

                        <button
                            className="py-2 px-4 bg-black text-white font-semibold w-full"
                            onClick={handleSuccess}
                            disabled={isLoading} // Disable button when loading
                        >
                            Confirm Payment
                        </button>
                    </div>
                )}


            </div>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                    <AiOutlineLoading3Quarters className="text-white text-4xl animate-spin" />
                </div>
            )}
            {isPaymentSuccessful && <SuccessPopUp />}
        </div>
    );
};

export default Checkout;
