'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('Rs.', '').replace(',', '')) 
      : item.price;
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div className="flex-grow ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 border"
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 border"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <div className="text-xl font-bold">
              Total: Rs.{total.toFixed(2)}
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="bg-black text-white px-6 py-2 rounded">
                Continue Shopping
              </button>
              <Link href="/checkout">
                <button className="bg-black text-white px-6 py-2 rounded">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 