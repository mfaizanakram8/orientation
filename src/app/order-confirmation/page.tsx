'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function OrderConfirmationPage() {
  const router = useRouter();
  const { cart } = useCart();

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/');
    }
  }, [cart, router]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <span className="text-6xl">🎉</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We&apos;ll send you an email with your order details and tracking information.
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
} 