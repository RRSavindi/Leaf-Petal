import React, { useState } from 'react';
import bg3 from '../assets/Login.jpg';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = ({ setCurrentPage, setUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      setLoading(true);
      // Simulate successful login (no backend)
      await new Promise((res) => setTimeout(res, 700));
      setLoading(false);
      setMessage('Login successful!');
      // Store a demo token in localStorage and set a demo user
      localStorage.setItem('token', 'demo-token');
      setUser({ name: formData.email.split('@')[0] || 'Demo User', email: formData.email, role: 'retail' });
      setTimeout(() => setCurrentPage('dashboard'), 800);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    return (
      <div
        className="min-h-screen flex items-center justify-center relative py-8"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-lg shadow-md text-white">
          <h1 className="text-2xl font-bold text-center mb-8">Login to Your Account</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 text-gray-900"
                required
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-green-500 focus:outline-none"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {message && (
            <p className={`mt-4 text-center text-sm ${message.includes('successful') ? 'text-green-300' : 'text-yellow-300'}`}>{message}</p>
          )}

          
          <div className="mt-6 text-center">
            <button className="text-green-600 hover:text-green-700 text-sm">
              Forgot Password?
            </button>
          </div>
          <div className="mt-4 text-center">
            <span className="text-blue-600">Don't have an account? </span>
            <button
              onClick={() => setCurrentPage('register')}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Register here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
