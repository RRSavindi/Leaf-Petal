import React from 'react';
import bg2 from '../assets/image 2.png';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => (
  <div
    className="py-8 min-h-screen"
    style={{
      backgroundImage: `url(${bg2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-600 mr-3" />
                <span>No. 123, Main Road, Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-600 mr-3" />
                <span>+94 77 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-600 mr-3" />
                <span>leaf&petal@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-3" />
                <span>Mon–Sat: 8AM–7PM</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>General Inquiry</option>
                <option>Wholesale Order</option>
                <option>Plant Care Help</option>
                <option>Delivery Question</option>
              </select>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;