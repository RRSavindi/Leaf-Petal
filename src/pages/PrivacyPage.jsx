import React from 'react';

const PrivacyPage = () => (
  <div className="py-8">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Information Collection</h2>
          <p className="text-gray-600">We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Usage</h2>
          <p className="text-gray-600">We use your information to provide our services, process transactions, communicate with you, and improve our offerings.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
          <p className="text-gray-600">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us at leaf&petal@gmail.com</p>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPage;