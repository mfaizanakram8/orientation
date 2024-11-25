'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  // Images Array
  const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png' ,
    '/images/4.png',
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change image every 10 seconds (10,000 ms)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-[500px]">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg px-6 md:px-0 md:ml-24">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            50% Off For Your First Shopping
          </h1>
          <p className="text-gray-600 mb-6">
            Discover amazing deals and elevate your style. Shop now and enjoy exclusive discounts on your favorite items!
          </p>
          <Link
            href="/"
            className="inline-block bg-transparent border border-black py-3 px-6 rounded-md hover:text-white hover:bg-gray-800 transition"
          >
            Visit Collections
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 mr-20">
        <Image
  src={images[currentImageIndex]}
  alt="Smart Watch"
  width={currentImageIndex === 2 ? 250 : 400} // 3.png ka size 300px hoga
  height={currentImageIndex === 2 ? 250 : 400} // 3.png ka size 300px hoga
/>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
