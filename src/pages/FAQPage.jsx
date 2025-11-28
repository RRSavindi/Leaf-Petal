import React from 'react';
import { Check } from 'lucide-react';

const FAQPage = () => {
  const faqs = [
    {
      q: "Do you deliver islandwide?",
      a: "Yes, we deliver all across Sri Lanka. Delivery charges may vary based on location."
    },
    {
      q: "What is the minimum wholesale order?",
      a: "The minimum wholesale order is 50 plants to qualify for bulk pricing."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept cash on delivery, bank transfers, and card payments."
    },
    {
      q: "Do you provide plant care instructions?",
      a: "Yes, each plant comes with detailed care instructions and our team is always available for support."
    },
    {
      q: "What is your return policy?",
      a: "We guarantee healthy plants. If you receive an unhealthy plant, contact us within 24 hours for a replacement."
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                {faq.q}
              </h3>
              <p className="text-gray-600 ml-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;