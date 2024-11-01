import React from 'react'

const Data = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="bg-white rounded-lg py-2 flex flex-col gap-4 shadow-md w-[328px] sm:w-full">
                <div className='border-b py-3 px-6'>
                    <h3 className="text-[16px] font-semibold mb-2">Best Selling</h3>
                    <p className="text-[12px] font-medium text-gray-500">THIS MONTH</p>
                </div>
                <h2 className="text-[24px] font-bold px-6">$2,400 — Total Sales</h2>

                <div className="space-y-4 px-6">
                    <div className="flex justify-between border rounded-full h-[30px] px-3 items-center text-gray-700">
                        <span className='text-[12px] font-medium'>Classic Monochrome Tees</span>
                        <span className="font-semibold text-[12px]">$940 Sales</span>
                    </div>
                    <div className="flex justify-between border rounded-full h-[30px] px-3 items-center text-gray-700">
                        <span className='text-[12px] font-medium'>Monochromatic Wardrobe</span>
                        <span className="font-semibold text-[12px]">$790 Sales</span>
                    </div>
                    <div className="flex justify-between border rounded-full h-[30px] px-3 items-center text-gray-700">
                        <span className='text-[12px] font-medium'>Essential Neutrals</span>
                        <span className="font-semibold text-[12px]">$740 Sales</span>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <div className="w-20 h-20 rounded-full border-8 border-blue-300 border-t-blue-600" />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex-1">
                <div className="flex gap-3 items-center mb-4">
                    <h3 className="text-[16px] font-semibold">Recent Orders</h3>
                    <button className="text-sm text-gray-500 text-[14px] font-medium bg-[#f6f6f6] px-3 h-[30px] rounded-full">View All</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-gray-700 overflow-x-auto">
                        <thead>
                            <tr className="border-b border-t">
                                <th className="py-2 text-[14px] font-medium">Item</th>
                                <th className="py-2 text-[14px] font-medium">Date</th>
                                <th className="py-2 text-[14px] font-medium">Total</th>
                                <th className="py-2 text-[14px] font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { item: "Mens Black T-Shirts", date: "20 Mar, 2023", total: "$75.00", status: "Processing" },
                                { item: "Essential Neutrals", date: "19 Mar, 2023", total: "$22.00", status: "Processing" },
                                { item: "Sleek and Cozy Black", date: "7 Feb, 2023", total: "$57.00", status: "Completed" },
                                { item: "MOCKUP Black", date: "29 Jan, 2023", total: "$30.00", status: "Completed" },
                                { item: "Monochromatic Wardrobe", date: "27 Jan, 2023", total: "$27.00", status: "Completed" },
                            ].map((order, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-3 text-[14px] sm:w-full font-medium">{order.item}</td>
                                    <td className="py-3 text-[14px] sm:w-full font-medium">{order.date}</td>
                                    <td className="py-3 text-[14px] sm:w-full font-medium">{order.total}</td>
                                    <td className="py-3 text-[14px] sm:w-full font-medium">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Data