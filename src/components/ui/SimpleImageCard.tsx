import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface SimpleImageCardProps {
  image: string;
  title: string;
  location: string;
  distance?: string;
  hours: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

const SimpleImageCard: React.FC<SimpleImageCardProps> = ({
  image,
  title,
  location,
  distance,
  hours,
  rating,
  reviewCount,
  tags
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 max-w-sm p-4">
      {/* Image with black border */}
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover border-2 border-black rounded-lg"
        />
        
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute bottom-3 left-3 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center"
        >
          {isFavorited ? (
            <HeartSolidIcon className="h-4 w-4 text-red-500" />
          ) : (
            <HeartIcon className="h-4 w-4 text-gray-600" />
          )}
        </button>
        
        {/* Rating Badge */}
        <div className="absolute bottom-3 right-3 bg-white border border-gray-300 rounded-lg px-2 py-1">
          <span className="text-sm font-medium">
            {rating} ★ ({reviewCount}+)
          </span>
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-1">
          <MapPinIcon className="h-4 w-4 text-orange-500" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        {distance && <span className="text-sm text-gray-400">{distance}</span>}
      </div>
      
      <div className="flex items-center space-x-1 mb-3">
        <ClockIcon className="h-4 w-4 text-orange-500" />
        <span className="text-sm text-gray-600">Hours: {hours}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button className="bg-black text-white text-sm px-4 py-2 rounded-md">
          CHECK
        </button>
      </div>
    </div>
  );
};

export default SimpleImageCard;
