"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 800]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 9;
    const categories = ['Perfume', 'Trousers', 'Shoe', 'Handbag', 'Hat', 'Thermos'];
    const colors = ['#0000FF', '#00FF00', '#FFD700', '#8A2BE2'];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const products = [
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
        { id: 15, name: 'Essential Neutrals', price: 22, color: '#FFD700', size: 'XXL', inStock: true, img: "/ess.svg" },
    ];

    const toggleCategory = (category) => {
        setSelectedCategory((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const toggleColor = (color) => {
        setSelectedColors((prev) =>
            prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
        );
    };

    const toggleSize = (size) => {
        setSelectedSize((prev) =>
            prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
        );
    };

    const filteredProducts = products.filter((product) => {
        return (
            (selectedCategory.length === 0 || selectedCategory.includes(product.category)) &&
            (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
            (selectedSize.length === 0 || selectedSize.includes(product.size)) &&
            product.price <= priceRange[1]
        );
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-[80%] flex gap-[2rem]'>
                <div className='w-[248px] border h-fit rounded-md p-3 flex flex-col gap-[2rem]'>
                    <div className='flex flex-col gap-2'>
                        <h2 className="font-semibold">Categories</h2>
                        <div>
                            {categories.map((category) => (
                                <label key={category} className="flex items-baseline gap-2 border-b py-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategory.includes(category)}
                                        onChange={() => toggleCategory(category)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h2 className="font-semibold">Color</h2>
                        <div className="flex space-x-2">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    className={`w-6 h-6 rounded-full`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => toggleColor(color)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className="font-semibold">Size</h2>
                        <div className="grid grid-cols-4 gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`p-2 border ${selectedSize.includes(size) ? 'bg-gray-800 text-white' : ''}`}
                                    onClick={() => toggleSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className="font-semibold">Price</h2>
                        <input
                            type="range"
                            min="0"
                            max="800"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        />
                        <p>${priceRange[1]}</p>
                    </div>
                </div>
                <div className="w-3/4 p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            {selectedCategory.length > 0 && (
                                <div className='flex flex-col gap-1'>
                                    <strong>Applied Filters:</strong>
                                    {selectedCategory.map((category) => (
                                        <span key={category} className="mx-1 bg-gray-200 p-1 rounded grid grid-cols-2">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <select className="border p-1">
                            <option>Sort By</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {paginatedProducts.map((product) => (
                            <Link key={product.id} href={`/products/${product.id}`}>
                                <div  className="border p-2 rounded-md flex flex-col gap-2">
                                    <Image height={100} width={100} src={product.img} className='w-full' />
                                    <h3 className="font-semibold text-[14px]">{product.name}</h3>
                                    <div className='flex items-center gap-2'>
                                        <span className="py-2 px-6 text-xs bg-green-100 rounded">
                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-gray-800 text-white' : ''
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products