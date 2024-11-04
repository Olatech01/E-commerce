"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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






const page = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    useEffect(() => {
        if (id) {
            const productData = productsData.find((item) => item.id === parseInt(id));
            setProduct(productData);
        }
    }, [id]);
    if (!product) return <p>Loading...</p>;


    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-sm text-green-500 mb-2">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            <p className="mb-4">{product.description}</p>
            <div
                className="w-24 h-24 rounded-full border"
                style={{ backgroundColor: product.color }}
            ></div>
            <p className="mt-4">Size: {product.size}</p>
        </div>
    )
}

export default page