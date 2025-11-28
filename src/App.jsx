import React, { useState } from 'react';
import bg1 from './assets/Desktop.png';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WholesalePage from './pages/WholesalePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ProductDetailPage from './pages/ProductDetail';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const renderPage = () => {
    const pageProps = {
      setCurrentPage,
      cart,
      setCart,
      addToCart,
      updateCartQuantity,
      getCartTotal,
      getCartItemCount,
      selectedProduct,
      setSelectedProduct,
      user,
      setUser
    };

    switch (currentPage) {
      case 'home': return <HomePage {...pageProps} />;
      case 'shop': return <ShopPage {...pageProps} />;
      case 'product-detail': return <ProductDetailPage {...pageProps} />;
      case 'cart': return <CartPage {...pageProps} />;
      case 'checkout': return <CheckoutPage {...pageProps} />;
      case 'wholesale': return <WholesalePage {...pageProps} />;
      case 'about': return <AboutPage {...pageProps} />;
      case 'contact': return <ContactPage {...pageProps} />;
      case 'blog': return <BlogPage {...pageProps} />;
      case 'faq': return <FAQPage {...pageProps} />;
      case 'login': return <LoginPage {...pageProps} />;
      case 'register': return <RegisterPage {...pageProps} />;
      case 'dashboard': return <DashboardPage {...pageProps} />;
      case 'privacy': return <PrivacyPage {...pageProps} />;
      case 'terms': return <TermsPage {...pageProps} />;
      default: return <HomePage {...pageProps} />;
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        getCartItemCount={getCartItemCount}
      />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;