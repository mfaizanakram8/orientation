'use client';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export default function CheckoutPage() {
  const { cart, cartCount } = useCart();
  const router = useRouter();
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const subtotal = cart.reduce((sum, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('Rs.', '').replace(',', '')) 
      : item.price;
    return sum + (price * item.quantity);
  }, 0);

  const shippingCost = subtotal > 649 ? 0 : 100;
  const total = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically:
    // 1. Validate the form
    // 2. Process the payment
    // 3. Send order to backend
    
    // For now, we'll just show a success message and redirect
    alert('Order placed successfully!');
    router.push('/order-confirmation');
  };

  if (cartCount === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <button 
          onClick={() => router.push('/')}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Information Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                placeholder='First Name'
                  type="text"
                  name="firstName"
                  required
                  className="w-full border rounded px-3 py-2"
                  value={shippingDetails.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                placeholder='Last Name'
                  type="text"
                  name="lastName"
                  required
                  className="w-full border rounded px-3 py-2"
                  value={shippingDetails.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
              placeholder='Email'
                type="email"
                name="email"
                required
                className="w-full border rounded px-3 py-2"
                value={shippingDetails.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
              placeholder='Phone'
                type="tel"
                name="phone"
                required
                className="w-full border rounded px-3 py-2"
                value={shippingDetails.phone}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
              placeholder='Address'
                type="text"
                name="address"
                required
                className="w-full border rounded px-3 py-2"
                value={shippingDetails.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                placeholder='City'
                  type="text"
                  name="city"
                  required
                  className="w-full border rounded px-3 py-2"
                  value={shippingDetails.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                placeholder='State'
                  type="text"
                  name="state"
                  required
                  className="w-full border rounded px-3 py-2"
                  value={shippingDetails.state}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">ZIP Code</label>
              <input
              placeholder='ZIP Code'
                type="text"
                name="zipCode"
                required
                className="w-full border rounded px-3 py-2"
                value={shippingDetails.zipCode}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div className="flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">
                    {item.price} x {item.quantity}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs.{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `Rs.${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs.{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 