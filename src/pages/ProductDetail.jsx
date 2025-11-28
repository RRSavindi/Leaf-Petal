import React, { useState } from 'react';
import { Star, Plus, Minus, Heart } from 'lucide-react';

const ProductDetailPage = ({ selectedProduct, setCurrentPage, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  
  if (!selectedProduct) return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <button 
          onClick={() => setCurrentPage('shop')}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setCurrentPage('shop')}
          className="flex items-center text-green-600 hover:text-green-700 mb-6 font-medium"
        >
          ← Back to Shop
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="text-center bg-gray-50 rounded-2xl p-12 mb-6">
              <div className="h-48 mb-6 flex items-center justify-center">
                {typeof selectedProduct.image === 'string' && selectedProduct.image.startsWith('/') || selectedProduct.image.includes('.') ? (
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-contain" />
                ) : (
                  <span className="text-9xl">{selectedProduct.image}</span>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-4">{selectedProduct.name}</h1>
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="ml-3 text-gray-600">({selectedProduct.rating}) • In Stock</span>
            </div>
            
            <div className="mb-8">
              <div className="text-4xl font-bold text-green-600 mb-2">Rs.{selectedProduct.price}</div>
              <div className="text-lg text-gray-600">Rs.{selectedProduct.bulkPrice} each (bulk {selectedProduct.bulkMin}+ plants)</div>
              <div className="text-sm text-red-600 font-medium mt-1">Save Rs.{selectedProduct.price - selectedProduct.bulkPrice} per plant on bulk orders!</div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-xl mb-4">Product Details</h3>
              <p className="text-gray-600 mb-6 text-lg">{selectedProduct.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-gray-800">Size:</span>
                  <div className="text-gray-600">{selectedProduct.size}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-gray-800">Category:</span>
                  <div className="text-gray-600 capitalize">{selectedProduct.category}</div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block font-semibold text-lg mb-4">Quantity</label>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-md transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="px-6 py-3 border border-gray-300 rounded-md text-lg font-medium min-w-20 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-md transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => addToCart(selectedProduct, quantity)}
                className="flex-1 bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                Add to Cart - Rs.{selectedProduct.price * quantity}
              </button>
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="h-6 w-6" />
              </button>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">🌱 Plant Care Tips</h4>
              <p className="text-green-700">{selectedProduct.care}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;