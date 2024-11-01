"use client"
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const Customers = () => {
    const customers = [
        { name: "Esther Howard", email: "20 Mar, 2023", address: "8642 Yule Street, Arvada CO 80007" },
        { name: "Wade Warren", email: "20 Mar, 2023", address: "5331 Rexford Court, Montgomery AL 36116", },
        { name: "Brooklyn Simmons", email: "20 Mar, 2023", address: "2325 Eastridge Circle, Moore OK 73160", },
        { name: "Robert Fox", email: "20 Mar, 2023", address: "2436 Naples Avenue, Panama City FL 32405", categories: "T-shirt, Men" },
        { name: "Dianne Russell", email: "20 Mar, 2023", address: "6095 Terry Lane, Golden CO 80403", },
        { name: "Ralph Edwards", email: "05 Jan, 2023", address: "4001 Anderson Road, Nashville TN 37217", },
        { name: "Theresa Webb", email: "20 Feb, 2023", address: "19141 Pine Ridge Circle, Anchorage AK 99516", },
        { name: "Arlene McCoy", email: "15 Mar, 2022", address: "2613 Cottonwood Street, Anchorage AK 99508", },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(7);
    const [dropdownIndex, setDropdownIndex] = useState(null);

    const filteredProducts = customers.filter(product =>
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
                <h2 className='text-lg font-medium'>Customers</h2>
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
                            <th className="py-2 text-sm font-medium">Email</th>
                            <th className="py-2 text-sm font-medium">Shipping Address</th>
                            <th className="py-2 text-sm font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedProducts.map((product, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-3 text-sm">{product.name}</td>
                                <td className="py-3 text-sm">{product.email}</td>
                                <td className="py-3 text-sm">{product.address}</td>
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

export default Customers