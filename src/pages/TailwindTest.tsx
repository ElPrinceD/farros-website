import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Tailwind CSS Test</h1>
        
        {/* Test basic Tailwind classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-500 text-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Red Card</h3>
            <p>This should be red background with white text</p>
          </div>
          
          <div className="bg-green-500 text-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Green Card</h3>
            <p>This should be green background with white text</p>
          </div>
          
          <div className="bg-blue-500 text-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Blue Card</h3>
            <p>This should be blue background with white text</p>
          </div>
        </div>
        
        {/* Test custom border radius */}
        <div className="bg-white border-2 border-black p-6 mb-8" style={{ borderRadius: '50px 50px 8px 8px' }}>
          <h2 className="text-2xl font-bold mb-4">Custom Border Radius Test</h2>
          <p className="text-gray-700">This card should have 50px radius on top corners and 8px on bottom corners.</p>
        </div>
        
        {/* Test your ImageCard styling */}
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden max-w-sm" style={{ borderRadius: '100px 100px 8px 8px' }}>
          <div className="p-4">
            <div className="relative mb-4">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop" 
                alt="Test" 
                className="w-full h-48 object-cover border-2 border-black rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Test ImageCard</h3>
            <p className="text-gray-600 mb-4">This is a test of the ImageCard component with custom border radius.</p>
            <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              CHECK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
