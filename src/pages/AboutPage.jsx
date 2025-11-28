import React from 'react';
import bg2 from '../assets/image 2.png';
import { Award, Leaf, Shield } from 'lucide-react';

const AboutPage = () => (
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
        <h1 className="text-4xl font-bold mb-4">About Leaf & Petal Plant Shop</h1>
        <p className="text-xl text-gray-600">Growing green, growing together since 2014</p>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          At Leaf & Petal, we believe in the beauty of nature and its power to transform spaces and lives. Our curated 
          collection of plants and floral arrangements brings the outdoors in, creating moments of serenity and joy in 
          every home and garden.
        </p>
        <p className="text-gray-600">
          We believe that everyone deserves access to fresh, healthy plants that bring life to their homes and gardens. 
          Our team of experienced horticulturists carefully selects and nurtures each plant to ensure you receive only 
          the highest quality specimens.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">10+ Years Experience</h3>
          <p className="text-gray-600">Decade of expertise in plant cultivation and care</p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">1000+ Plant Varieties</h3>
          <p className="text-gray-600">Extensive collection of local and exotic plants</p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Quality Guarantee</h3>
          <p className="text-gray-600">Healthy plants guaranteed or your money back</p>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-green-600">🌱 Sustainability</h3>
            <p className="text-gray-600 mb-4">We practice eco-friendly cultivation methods and promote sustainable gardening practices.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-green-600">🤝 Community</h3>
            <p className="text-gray-600 mb-4">Supporting local communities through education and affordable plant access.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-green-600">🎯 Quality</h3>
            <p className="text-gray-600 mb-4">Every plant meets our strict quality standards before reaching your hands.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-green-600">💚 Passion</h3>
            <p className="text-gray-600">Our love for plants drives everything we do, from seed to sale.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;