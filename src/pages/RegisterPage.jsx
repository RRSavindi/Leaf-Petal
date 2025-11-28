import React, { useState } from 'react';
import bg3 from '../assets/Login.jpg';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';

const RegisterPage = ({ setCurrentPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // 🧠 State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'retail'
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 🧩 Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🧠 Handle registration form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
        // Simulate registration success (no backend)
        await new Promise((res) => setTimeout(res, 800));
        setLoading(false);
        setMessage('Registration successful! You can now log in.');
        setTimeout(() => setCurrentPage('login'), 1200);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setMessage('Something went wrong. Please try again later.');
    }
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
          <h1 className="text-2xl font-bold text-center mb-8">Create Your Account</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-green-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-green-500 focus:outline-none"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="relative">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none text-black"
              >
                <option value="retail">Retail Customer</option>
                <option value="wholesale">Wholesale Buyer</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          {message && (
            <p className={`mt-4 text-center text-sm ${message.includes('successful') ? 'text-green-300' : 'text-yellow-300'}`}>{message}</p>
          )}

          <div className="mt-4 text-center">
            <span className="text-blue-400">Already have an account? </span>
            <button
              onClick={() => setCurrentPage('login')}
              className="text-green-500 hover:text-green-600 font-semibold"
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
