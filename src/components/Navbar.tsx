'use client';
import React from "react";
import { FaSearch } from "react-icons/fa"; // Importing Search Icon
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-red-100 text-sm py-2 flex justify-center relative">
        {/* Centered Text */}
        <div className="text-center text-amber-700 text-sm">
          Self Taken Pictures 📸 • 30 Days Happiness Guarantee 😺 • Free Delivery Above Rs.649 🚚
        </div>
        {/* Close Button */}
        <button className="absolute right-12 text-center justify-center text-amber-700 text-lg font-bold ">
          ✕
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border mt-4 rounded-full overflow-hidden shadow-md bg-white max-w-sm mx-auto">
        {/* React Icon */}
        <button className="px-3 text-gray-500">
          <FaSearch className="text-base" /> {/* Smaller search icon */}
        </button>
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search By Device (iPhone 15, Cable etc...)"
          className="w-full py-1 px-2 outline-none text-gray-600 placeholder-gray-500 text-sm" // Reduced padding and font size
        />
      </div>

      <div className="flex items-center justify-between py-8 px-9 border-b">
        {/* Logo */}
        <div className="text-3xl font-bold">ORDERNATION</div>
        <div className="flex items-center  justify-end space-x-6 text-xs font-bold">
          <span>FREE SHIPPING ON ALL ORDERS. OVER RS. 649</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 pb-4 justify-end text-sm">
 
         <div className="relative">
          <Link href="/cart" className="flex items-center">
            <span>🛒 Shopping Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        <span>💖 My Wish List</span>
        <span>Sign In or Create an Account</span>
      </div>

      {/* Navigation Menu */}
      <div className="bg-black text-white py-3">
        <div className="flex justify-center font-bold text-sm space-x-12">
          <a href="#" className="hover:underline">
            HOME
          </a>
          <a href="#" className="hover:underline">
            MOBILE COVERS
          </a>
          <a href="#" className="hover:underline">
            APPLE ACCESSORIES
          </a>
          <a href="#" className="hover:underline">
            TABLET COVERS
          </a>
          <a href="#" className="hover:underline">
            AUDIO
          </a>
          <a href="#" className="hover:underline">
            CHARGING
          </a>
          <a href="#" className="hover:underline">
            CABLES
          </a>
          <a href="#" className="hover:underline">
            MORE ACCESSORIES
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;