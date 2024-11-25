import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6">
        {/* Featured Section */}
        <div>
          <h3 className="text-base font-bold mb-6 uppercase">Featured</h3>
          <ul>
            <li className="text-sm text-gray-400">
              <a href="#">Customer Reviews</a>
            </li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="text-base font-bold mb-6 uppercase">Information</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-400">
              <Link href="#">Shipping Policy</Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="#">Return Policy</Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="#">Color Disclaimer</Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="#">About Us</Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="#">Terms & Condition</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="text-base font-bold mb-6 uppercase">Customer Service</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-400">
              <Link href="#">Contact Us</Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="#">Help & FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-base font-bold mb-6 uppercase">Newsletter Sign Up</h3>
          <p className="text-sm mb-4 leading-relaxed text-gray-400">
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-l-md text-black text-sm"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md text-sm hover:bg-gray-300"
            >
              Submit
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-400">
              <FaFacebook className="text-lg" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaInstagram className="text-lg" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaPinterest className="text-lg" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaTiktok className="text-lg" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaYoutube className="text-lg" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaTwitter className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © OrderNation Fashion Store. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;