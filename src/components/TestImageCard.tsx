import React from 'react';
import ImageCard from './ui/ImageCard';

const TestImageCard: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Test ImageCard Component</h1>
      
      <ImageCard
        image="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop"
        title="White Fort Coffee"
        location="Gaziosmanpaşa (Söğüt Caddesi)"
        distance="1 mi"
        hours="8.00-16.00"
        rating={4.5}
        reviewCount={20}
        tags={["Burger", "Tavuk", "FastFood"]}
        onFavorite={(isFavorited) => console.log('Favorite:', isFavorited)}
        onCheck={() => console.log('Check clicked')}
      />
    </div>
  );
};

export default TestImageCard;
