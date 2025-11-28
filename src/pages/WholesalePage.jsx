import React from 'react';
import bg2 from '../assets/image 2.png';

const WholesalePage = ({ setCurrentPage }) => (
  <div
    className="py-8 min-h-screen"
    style={{
      backgroundImage: `url(${bg2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Wholesale Buyers – Partner With Us 🌱</h1>
        <p className="text-xl text-gray-600">Special pricing and services for bulk orders</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="font-semibold mb-2">Minimum Order</h3>
          <p className="text-gray-600">50 plants minimum for wholesale pricing</p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="text-4xl mb-4">🚛</div>
          <h3 className="font-semibold mb-2">Bulk Delivery</h3>
          <p className="text-gray-600">Free delivery for orders over Rs.10,000</p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="font-semibold mb-2">Free Catalog</h3>
          <p className="text-gray-600">Comprehensive plant catalog with pricing</p>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6">Wholesale Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">🌟 Exclusive Advantages</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Up to 30% discount on bulk orders</li>
              <li>• Priority customer support</li>
              <li>• Flexible payment terms</li>
              <li>• Seasonal plant availability updates</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">🎯 Perfect For</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Landscaping businesses</li>
              <li>• Garden centers & nurseries</li>
              <li>• Hotels & resorts</li>
              <li>• Construction companies</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
          <button className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            Download Wholesale Catalog
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="w-full sm:w-auto border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
          >
            Contact for Bulk Orders
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default WholesalePage;