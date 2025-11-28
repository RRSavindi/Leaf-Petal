import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import bg2 from '../assets/image 2.png';

const CartPage = ({ cart, updateCartQuantity, getCartTotal, setCurrentPage, user }) => {
  return (
    <div
      className="py-8 min-h-screen"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl text-gray-600 mb-4">Your cart is empty</h2>
            <button 
              onClick={() => setCurrentPage('shop')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center p-6 border-b last:border-b-0">
                    <div className="w-16 h-16 mr-4 flex items-center justify-center">
                      {typeof item.image === 'string' && item.image.startsWith('/') || item.image.includes('.') ? (
                        <img src={item.image} alt={item.name} className="h-full w-full object-contain rounded" />
                      ) : (
                        <span className="text-4xl">{item.image}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <p className="text-green-600 font-semibold">Rs.{item.price} each</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-1 border rounded">{item.quantity}</span>
                      <button 
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="font-semibold">Rs.{item.price * item.quantity}</div>
                      <button 
                        onClick={() => updateCartQuantity(item.id, 0)}
                        className="flex items-center text-red-500 hover:text-red-700 text-sm mt-2 hover:bg-red-50 px-2 py-1 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs.{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Rs.200</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>Rs.{getCartTotal() + 200}</span>
                  </div>
                </div>
                {!user && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>Please login</strong> to complete your order and proceed to checkout.
                    </p>
                  </div>
                )}
                <button 
                  onClick={() => {
                    if (user) {
                      setCurrentPage('checkout');
                    } else {
                      setCurrentPage('login');
                    }
                  }}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  {user ? 'Proceed to Checkout' : 'Login to Checkout'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;