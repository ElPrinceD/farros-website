import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export interface ImageCardProps {
  image: string;
  title: string;
  location: string;
  distance?: string;
  hours: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  onFavorite?: (isFavorited: boolean) => void;
  onCheck?: () => void;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  title,
  location,
  distance,
  hours,
  rating,
  reviewCount,
  tags,
  onFavorite,
  onCheck,
  className
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newFavorited = !isFavorited;
    setIsFavorited(newFavorited);
    onFavorite?.(newFavorited);
  };

  const handleCheck = () => {
    onCheck?.();
  };

  return (
    <div className="bg-white border border-gray-200 shadow-sm overflow-hidden" style={{ borderRadius: '100px 100px 8px 8px' }}>
{/* Content Section */}
      <div className="p-4">
        {/* Image Container with Arched Top */}
        <div className="relative mb-4">
          {/* Image with custom arched top and black border */}
          <div className="relative h-48">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover border-2 border-black rounded-lg"
            />
            
            {/* Arched overlay to create the curved bottom effect */}
            <div 
              className="absolute bottom-0 left-0 w-full h-8 bg-white"
              style={{
                clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
              }}
            />
            
            {/* Favorite Button - Bottom Left */}
            <button
              onClick={handleFavorite}
              className="absolute bottom-3 left-3 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              {isFavorited ? (
                <HeartSolidIcon className="h-4 w-4 text-red-500" />
              ) : (
                <HeartIcon className="h-4 w-4 text-gray-600" />
              )}
            </button>
            
            {/* Rating Badge - Bottom Right */}
            <div className="absolute bottom-3 right-3 bg-white border border-gray-300 rounded-lg px-2 py-1 flex items-center space-x-1">
              <span className="text-sm font-medium text-gray-900">
                {rating} ★ ({reviewCount}+)
              </span>
            </div>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {title}
        </h3>
        
        {/* Location with Distance */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <MapPinIcon className="h-4 w-4 text-orange-500" />
            <span className="text-sm text-gray-600">{location}</span>
          </div>
          {distance && (
            <span className="text-sm text-gray-400">{distance}</span>
          )}
        </div>
        
        {/* Hours */}
        <div className="flex items-center space-x-1 mb-3">
          <ClockIcon className="h-4 w-4 text-orange-500" />
          <span className="text-sm text-gray-600">Hours: {hours}</span>
        </div>
        
        {/* Tags and Check Button */}
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
          
          <button
            onClick={handleCheck}
            className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            CHECK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
