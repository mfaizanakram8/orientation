"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import leftArrow from '@/components/images/Fill With Left Arrow.png';
import rightArrow from '@/components/images/Fill with Right Arrow.png';
import product1 from '@/components/images/Frame 570.png';
import product2 from '@/components/images/Frame 570 (1).png';
import product3 from '@/components/images/Frame 570 (2).png';
import product4 from '@/components/images/Frame 570 (3).png';
import TImage from '@/components/images/Frame 625.png';
import { useCart } from '@/context/CartContext';


// Original products
const originalProducts = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    price: 'Rs.1,300',
    discount: '40%',
    image: product1,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    price: 'Rs.1,300',
    discount: '35%',
    image: product2,
    rating: 5,
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    price: 'Rs.1,300',
    discount: '30%',
    image: product3,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'S-Series Comfort Chair ',
    price: 'Rs.1,300',
    discount: '30%',
    image: product4,
    rating: 4.7,
  },
];

// Repeat the products for continuous looping
const products = [...originalProducts, ...originalProducts, ...originalProducts]; // Repeated multiple times for looping effect

const FlashSales = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  // Automatic scrolling every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image shown only on larger screens */}
        <Image src={TImage} alt="Previous" width={120} height={40} className="mb-4 ml-16 block" />
        
        {/* Flash Sales Header */}
        <div className="flex justify-between items-center mb-8 ml-16">
          <h2 className="text-4xl font-bold">Trending Items</h2>
          
  

          {/* Arrows */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="focus:outline-none"
            >
              <Image src={leftArrow} alt="Previous" width={40} height={40} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="focus:outline-none"
            >
              <Image src={rightArrow} alt="Next" width={40} height={40} />
            </button>
          </div>
        </div>

        {/* Product Cards Carousel */}
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isMoving ? 'transform' : ''
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / products.length)}%)`,
            }}
            onTransitionEnd={() => setIsMoving(false)}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="relative min-w-[60%] sm:min-w-[45%] md:min-w-[33.33%] lg:min-w-[25%] p-2 box-border group"
              >
                <div className="bg-gray-100 rounded-lg p-2 shadow-md relative overflow-hidden">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain mb-2"
                      width={200}
                      height={150}
                    />

                    {/* Add to Cart button at the bottom of the image */}
                    <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        className="bg-black text-white font-bold py-2 w-full text-center"
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image
                        })}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Product details */}
                  <h3 className="text-md font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-500 mb-1">{product.price}</p>
                  <p className="text-red-600 font-bold">{product.discount} Off</p>
                  <div className="flex justify-center mt-1">
                    {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-7">
        <button className="bg-black font-semibold hover:bg-transparent hover:text-black hover:border-black hover:border text-white transition-colors duration-300 py-4 px-16">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;