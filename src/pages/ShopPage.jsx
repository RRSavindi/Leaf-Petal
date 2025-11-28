import React, { useState, useEffect } from 'react';
import { Star, Filter } from 'lucide-react';
import bg2 from '../assets/image 2.png';
import { products as productsData } from '../data/products';

const ShopPage = ({ addToCart, setCurrentPage, setSelectedProduct }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    type: '',
    priceRange: ''
  });

  // Fetch products from API
  useEffect(() => {
    // Use local products data instead of calling a backend API
    setProducts(productsData);
    setFilteredProducts(productsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.type) {
      filtered = filtered.filter(p => p.type === filters.type);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Shop Plants</h1>
            <p className="text-gray-600 mt-2">Discover our wide collection of healthy plants</p>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-green-900 p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="font-semibold mb-4">Filters</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Category</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                >
                  <option value="">All Categories</option>
                  <option value="vegetable">Vegetable Plants</option>
                  <option value="fruit">Fruit Plants</option>
                  <option value="indoor">Indoor Plants</option>
                  <option value="outdoor">Outdoor Plants</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Type</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                >
                  <option value="">All Types</option>
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="">All Prices</option>
                  <option value="0-100">Rs. 0 - 100</option>
                  <option value="100-300">Rs. 100 - 300</option>
                  <option value="300-500">Rs. 300 - 500</option>
                  <option value="500-1000">Rs. 500 - 1000</option>
                </select>
              </div>

              <button 
                onClick={() => setFilters({ category: '', type: '', priceRange: '' })}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Clear Filters
              </button>

              <div className="mt-6 p-4 bg-green-800 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Need Help?</h4>
                <p className="text-sm text-green-600 mb-3">Our plant experts are here to help you choose the right plants.</p>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  Contact Us →
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                {loading ? 'Loading products...' : `${filteredProducts.length} products found`}
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">🌱</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Loading plants...</h3>
                <p className="text-gray-600">Please wait while we fetch our beautiful collection</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or browse all products</p>
                <button 
                  onClick={() => setFilters({ category: '', type: '', priceRange: '' })}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-green-900/20 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-green-800/30 hover:border-green-800/50 relative overflow-visible mt-10">
                    <div className="p-6 pt-20 relative">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-30 w-30 text-center group-hover:scale-105 transition-transform duration-300 flex items-center justify-center z-20">
                        {typeof product.image === 'string' ? (
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-full drop-shadow-xl" />
                        ) : (
                          <span className="text-6xl drop-shadow-xl">{product.image}</span>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-center">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="text-xs text-gray-500 mb-3">
                        <span className="font-medium">Size:</span> {product.size} | 
                        <span className="font-medium"> Category:</span> {product.category}
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="font-bold text-green-600 text-lg">Rs.{product.price}</span>
                          <div className="text-xs text-gray-500">Rs.{product.bulkPrice} (bulk {product.bulkMin}+)</div>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => {
                            setSelectedProduct(product);
                            setCurrentPage('product-detail');
                          }}
                          className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition-colors font-medium text-sm"
                        >
                          View Details
                        </button>
                        <button 
                          onClick={() => addToCart(product)}
                          className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;