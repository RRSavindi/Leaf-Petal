
import React, { useState, useEffect } from 'react';
import { Star, Award, Truck, Shield } from 'lucide-react';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';
import { products as productsData } from '../data/products';
import img1 from "../assets/background2.jpg";
import img2 from "../assets/background1.jpg";



// Hero section images
const heroImages = [img1, img2 ];


const HomePage = ({ setCurrentPage, addToCart }) => {
  const [currentHero, setCurrentHero] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    // Use local products data instead of calling backend
    setProducts(productsData);
    setLoading(false);
  }, []);

  // Auto-change hero image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      {/* ===================== Hero Section ===================== */}
      <section className="relative bg-linear-to-br from-green-900 to-green-800 text-white overflow-hidden">
        {/* Background image slideshow */}
        <div className="absolute inset-0 bg-cover bg-center z-0">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Plants background"
              className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-2500 ${idx === currentHero ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ transitionProperty: 'opacity', willChange: 'opacity' }}
            />
          ))}
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left: Hero Text */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-light italic mb-6 leading-tight text-gray-900" style={{fontFamily: 'serif'}}>
                Leaf & Petal
              </h1>
              <p className="text-lg mb-8 text-gray-900">
                Step into a world where plants bring life, color, and freshness to every space.<br></br>
                From vibrant vegetables & juicy fruits to lush indoor greens and blooming outdoor beauties, we've got your garden dreams covered.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="bg-white text-green-900 font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition duration-300 text-center"
                >
                  Shop Now
                </button>
                <button
                  onClick={() => setCurrentPage('wholesale')}
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-900 transition duration-300 text-center"
                >
                  Explore Wholesale
                </button>
              </div>
            </div>

            {/* Right: Features Box */}
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl text-white border border-white/20">
                <h2 className="text-2xl font-semibold mb-6">Why Choose Leaf & Petal?</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                    <span className="text-white">Premium Quality Plants</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                    <span className="text-white">Wholesale Pricing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                    <span className="text-white">Fast Delivery</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="text-white">Plant Care Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 108C120 96 240 78 360 65C480 55 600 55 720 62C840 70 960 80 1080 87C1200 93 1320 95 1380 96L1440 96V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
  <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our carefully curated collection of plants, perfectly organized to help you find exactly what you're looking for.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                onClick={() => setCurrentPage('shop')}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                    <span className="text-3xl">{category.emoji}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">{category.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                  <div className="inline-flex items-center text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors duration-300">
                    Shop Now
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Leaf & Petal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: 'High-quality nursery plants', 
                desc: 'Premium quality plants sourced from the best nurseries across Sri Lanka' 
              },
              { 
                icon: Truck, 
                title: 'Bulk discounts for wholesale buyers', 
                desc: 'Special pricing for bulk orders and wholesale customers with free delivery' 
              },
              { 
                icon: Shield, 
                title: 'Eco-friendly & sustainable practices', 
                desc: 'Committed to environmental sustainability in all our growing practices' 
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
                <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
  <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="h-24 mb-4 text-center group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    {typeof product.image === 'string' ? (
                      <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
                    ) : (
                      <span className="text-6xl">{product.image}</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
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
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => setCurrentPage('shop')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">– {testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Green Journey?</h2>
          <p className="text-xl text-green-100 mb-8">Join thousands of happy customers who trust Leaf & Petal for their plant needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('shop')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Shopping
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;