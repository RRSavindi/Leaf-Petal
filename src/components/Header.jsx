import React, { useState } from 'react';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X, 
  Leaf,
  ChevronDown
} from 'lucide-react';

const Header = ({ currentPage, setCurrentPage, user, getCartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">Leaf & Petal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`${currentPage === 'home' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Home
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                className={`${currentPage === 'shop' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 text-sm font-medium flex items-center transition-colors`}
              >
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-300 z-50 ${isShopDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-1">
                  <button 
                    onClick={() => { setCurrentPage('shop'); setIsShopDropdownOpen(false); }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left font-medium"
                  >
                    All Plants 🌱
                  </button>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button 
                    onClick={() => { setCurrentPage('shop'); setIsShopDropdownOpen(false); }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Vegetable Plants 🥕
                  </button>
                  <button 
                    onClick={() => { setCurrentPage('shop'); setIsShopDropdownOpen(false); }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Fruit Plants 🍋
                  </button>
                  <button 
                    onClick={() => { setCurrentPage('shop'); setIsShopDropdownOpen(false); }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Indoor Plants 🪴
                  </button>
                  <button 
                    onClick={() => { setCurrentPage('shop'); setIsShopDropdownOpen(false); }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Outdoor Plants 🌳
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentPage('wholesale')}
              className={`${currentPage === 'wholesale' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Wholesale
            </button>
            
            <button 
              onClick={() => setCurrentPage('about')}
              className={`${currentPage === 'about' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              About Us
            </button>
            
            <button 
              onClick={() => setCurrentPage('blog')}
              className={`${currentPage === 'blog' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Blog
            </button>
            
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`${currentPage === 'contact' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Contact
            </button>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-8">
            <Search className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
            
            <button 
              onClick={() => setCurrentPage(user ? 'dashboard' : 'login')}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <User className="h-6 w-6" />
            </button>
            
            <button 
              onClick={() => setCurrentPage('cart')}
              className="text-gray-400 hover:text-gray-600 relative transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {getCartItemCount()}
                </span>
              )}
            </button>
            
            {!user && (
              <button 
                onClick={() => setCurrentPage('login')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sign In
              </button>
            )}
            
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentPage('shop'); setIsMenuOpen(false); }} 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left"
            >
              Shop
            </button>
            <button 
              onClick={() => { setCurrentPage('wholesale'); setIsMenuOpen(false); }} 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left"
            >
              Wholesale
            </button>
            <button 
              onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left"
            >
              About Us
            </button>
            <button 
              onClick={() => { setCurrentPage('blog'); setIsMenuOpen(false); }} 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left"
            >
              Blog
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;