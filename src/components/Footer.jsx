import React from 'react';
import { Leaf, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-400 mr-2" />
              <span className="font-bold text-xl">Leaf & Petal</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for quality plants. Growing green, growing together.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <MessageCircle className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('shop')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('faq')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('privacy')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('terms')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for plant care tips and offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-700"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors border border-green-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Leaf  Petal Plant Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;