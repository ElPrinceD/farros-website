import React from 'react';

const SimpleTest: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Simple Test Page</h1>
      <div className="bg-white border-2 border-black rounded-lg p-4 max-w-sm">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop" 
          alt="Test" 
          className="w-full h-48 object-cover border-2 border-black rounded-lg mb-4"
        />
        <h2 className="text-lg font-bold">Test Card</h2>
        <p className="text-gray-600">This is a simple test to verify styling works.</p>
      </div>
    </div>
  );
};

export default SimpleTest;
