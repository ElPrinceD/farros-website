import React from 'react';

const StyleTest: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Style Test Page</h1>
      
      {/* Test basic Tailwind classes */}
      <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        <p>This should be blue background with white text</p>
      </div>
      
      {/* Test custom border radius */}
      <div className="bg-white border-2 border-black p-4 mb-4" style={{ borderRadius: '50px 50px 8px 8px' }}>
        <p>This should have 50px top radius</p>
      </div>
      
      {/* Test Tailwind arbitrary values */}
      <div className="bg-green-500 text-white p-4 rounded-[50px_50px_8px_8px] mb-4">
        <p>This should have 50px top radius using Tailwind arbitrary values</p>
      </div>
      
      {/* Test your ImageCard styling */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-[100px_100px_8px_8px] overflow-hidden max-w-sm">
        <div className="p-4">
          <div className="relative mb-4">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop" 
              alt="Test" 
              className="w-full h-48 object-cover border-2 border-black rounded-lg"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Test Card</h3>
          <p className="text-gray-600">This is a test card with custom border radius</p>
        </div>
      </div>
    </div>
  );
};

export default StyleTest;
