import React, { useState } from 'react';

const CheckoutPage = ({ cart, getCartTotal, setCart, setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    shippingMethod: 'delivery',
    paymentMethod: 'cod'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 Order placed successfully! We will contact you shortly.');
    setCart([]);
    setCurrentPage('home');
  };

  const totalAmount = getCartTotal() + (formData.shippingMethod === 'delivery' ? 200 : 0);

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <textarea
                  placeholder="Address"
                  required
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="City"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Shipping & Payment</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Shipping Method</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="delivery"
                        checked={formData.shippingMethod === 'delivery'}
                        onChange={(e) => setFormData({...formData, shippingMethod: e.target.value})}
                        className="mr-2"
                      />
                      Home Delivery (Rs.200)
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="pickup"
                        checked={formData.shippingMethod === 'pickup'}
                        onChange={(e) => setFormData({...formData, shippingMethod: e.target.value})}
                        className="mr-2"
                      />
                      Store Pickup (Free)
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Payment Method</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                        className="mr-2"
                      />
                      Cash on Delivery
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={formData.paymentMethod === 'bank'}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                        className="mr-2"
                      />
                      Bank Transfer
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-sm">{item.name} x {item.quantity}</span>
                    <span className="text-sm font-medium">Rs.{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Rs.{getCartTotal()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Rs.{formData.shippingMethod === 'delivery' ? 200 : 0}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-green-600">Rs.{totalAmount}</span>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold mt-6"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;