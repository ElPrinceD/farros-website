import React from 'react';

const WorkingTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          🎉 Tailwind CSS is Working!
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-700 mb-2">✅ Success</h3>
            <p className="text-gray-600">Tailwind CSS is now properly configured and working!</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🎨 Styling</h3>
            <p className="text-gray-600">All Tailwind classes are being applied correctly.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">🚀 Ready</h3>
            <p className="text-gray-600">Your ImageCard component should now work perfectly!</p>
          </div>
        </div>
        
        {/* Test your ImageCard styling */}
        <div className="bg-white border border-gray-200 shadow-lg overflow-hidden max-w-sm mx-auto" style={{ borderRadius: '100px 100px 8px 8px' }}>
          <div className="p-4">
            <div className="relative mb-4">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop" 
                alt="Test" 
                className="w-full h-48 object-cover border-2 border-black rounded-lg"
              />
              <div className="absolute bottom-3 right-3 bg-white border border-gray-300 rounded-lg px-2 py-1">
                <span className="text-sm font-medium">4.5 ★ (20+)</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">White Fort Coffee</h3>
            <p className="text-gray-600 mb-4">This ImageCard should now display with the 100px top radius!</p>
            <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              CHECK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingTest;
