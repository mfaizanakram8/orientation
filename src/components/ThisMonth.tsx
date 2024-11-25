'use client';
import React from "react";
import Image from "next/image";
import { useCart } from '@/context/CartContext';

import xImage from "@/components/images/Cart (1).png";
import cImage from "@/components/images/Cart.png";
import vImage from "@/components/images/Cart (2).png";
import bImage from "@/components/images/Cart (3).png";
import pImage from "@/components/images/Frame 620.png";

const productImages = [xImage, cImage, vImage, bImage]; 

const products = [
  { id: 1, name: 'Product 1', price: '149.99' },
  { id: 2, name: 'Product 2', price: '199.99' },
  { id: 3, name: 'Product 3', price: '129.99' },
  { id: 4, name: 'Product 4', price: '179.99' },
];

const ThisMonth = () => {
  const { addToCart } = useCart();
  
  return (
    <div className="h-auto bg-gray-50 flex flex-col items-center w-full py-10">
      <div className="flex flex-col w-full max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between mb-5">
          <div className="mb-5 mr-20 md:mr-[930px]">
            <Image
              src={pImage}
              alt="Product"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl text-center mb-4 md:mr-[600px]">Best Selling Products</h1>
        </div>

        {/* Grid for Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 mx-4">
          {/* Product Cards */}
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center group relative">
              <div className="relative w-full">
                {/* Product Image */}
                <Image
                  src={productImages[index % productImages.length]}
                  alt={product.name}
                  width={367}
                  height={400}
                  className="object-contain max-w-full h-auto"
                />
                
                {/* Add to Cart Button (Appears on Hover) */}
                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-black text-white py-2 w-full text-center"
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: productImages[index % productImages.length]
                    })}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <h4>${product.price}</h4>
            </div>
          ))}
        </div>

        {/* View All Button - Adjusted for Responsive Design */}
        <div className="flex justify-center mt-6 w-full">
          <button className="bg-black px-10 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-black hover:border hover:border-black text-white transition-colors duration-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThisMonth;