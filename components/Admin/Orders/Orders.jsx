"use client"
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";


const Orders = () => {

    const productList = [
        { name: "Raw Black T-Shirt Lineup", date: "20 Mar, 2023", total: "$75.00", status: "Processing", categories: "T-shirt, Men" },
        { name: "Classic Monochrome Tees", date: "20 Mar, 2023", total: "$27.00", status: "Completed", categories: "T-shirt, Men" },
        { name: "Monochromatic Wardrobe", date: "20 Mar, 2023", total: "$25.00", status: "Completed", categories: "T-shirt, Men" },
        { name: "Essential Neutrals", date: "20 Mar, 2023", total: "$55.00", status: "Processing", categories: "T-shirt, Men" },
        { name: "UTRAANET Black", date: "20 Mar, 2023", total: "$65.00", status: "Processing", categories: "T-shirt, Men" },
        { name: "Elegant Ebony Sweatshirts", date: "05 Jan, 2023", total: "$29.00", status: "Completed", categories: "T-shirt, Men" },
        { name: "Sleek and Cozy Black", date: "20 Feb, 2023", total: "$53.00", status: "Processing", categories: "T-shirt, Men" },
        { name: "MOCKUP Black", date: "15 Mar, 2022", total: "$42.00", status: "Completed", categories: "T-shirt, Men" },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(7);
    const [dropdownIndex, setDropdownIndex] = useState(null);

    const filteredProducts = productList.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + rowsPerPage);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const handlePageChange = (page) => setCurrentPage(page);

    const toggleDropdown = (index) => setDropdownIndex(dropdownIndex === index ? null : index);

    return (
        <div className='flex flex-col gap-4 bg-white p-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg font-medium'>Orders</h2>
                <div className='flex gap-3'>
                    <div className='h-10 border rounded-md flex items-center gap-2 px-2'>
                        <CiSearch />
                        <input
                            type="text"
                            placeholder='Search for products'
                            className='outline-none bg-transparent'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left text-gray-700">
                    <thead>
                        <tr className="border-b border-t">
                            <th className="py-2 text-sm font-medium">Name</th>
                            <th className="py-2 text-sm font-medium">Date</th>
                            <th className="py-2 text-sm font-medium">Total</th>
                            <th className="py-2 text-sm font-medium">Status</th>
                            <th className="py-2 text-sm font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedProducts.map((product, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-3 text-sm">{product.name}</td>
                                <td className="py-3 text-sm">{product.date}</td>
                                <td className="py-3 text-sm">{product.total}</td>
                                <td className="py-3 text-sm">{product.status}</td>
                                <td className="py-3 text-sm relative">
                                    <button onClick={() => toggleDropdown(index)} className="focus:outline-none">
                                        <BsThreeDotsVertical />
                                    </button>
                                    {dropdownIndex === index && (
                                        <div className="absolute z-50 top-8 right-16 bg-white border shadow-lg rounded-md w-32">
                                            <ul className="text-gray-700 text-sm">
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                                            </ul>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-end items-center gap-2 mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-[#0E1422] text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Orders