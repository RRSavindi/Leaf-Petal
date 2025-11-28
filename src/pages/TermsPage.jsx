import React from 'react';

const TermsPage = () => (
  <div className="py-8">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Plant Quality Guarantee</h2>
          <p className="text-gray-600">We guarantee that all plants are healthy at the time of delivery. Any issues must be reported within 24 hours of delivery for replacement consideration.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Shipping & Delivery</h2>
          <p className="text-gray-600">Delivery times vary by location. We are not responsible for delays due to weather conditions or circumstances beyond our control.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Returns & Refunds</h2>
          <p className="text-gray-600">Returns are accepted only for damaged or unhealthy plants. Refunds will be processed within 5-7 business days after approval.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Wholesale Terms</h2>
          <p className="text-gray-600">Wholesale pricing applies to orders of 50+ plants. Payment terms and delivery schedules may vary for bulk orders.</p>
        </section>
      </div>
    </div>
  </div>
);

export default TermsPage;