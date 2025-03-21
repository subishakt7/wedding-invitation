"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    {
      src: '/images/store.jpg',
      alt: 'Couple at a store',
    },
    {
      src: '/images/evening.jpeg',
      alt: 'Couple in evening setting',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((current) => (current + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, images.length]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div 
        className="relative aspect-[16/9] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === activeIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-transform duration-1000 ${
                index === activeIndex ? 'scale-100' : 'scale-110'
              }`}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-wedding-dark/20" />
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-wedding-gold w-4' 
                : 'bg-wedding-gold/40 hover:bg-wedding-gold/60'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 