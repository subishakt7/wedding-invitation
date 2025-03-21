"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/store.jpg', alt: 'Store', position: 'object-[center_5%]' },
  { src: '/images/evening.jpeg', alt: 'Evening', position: 'object-center' },
];

export const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-transition effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div 
      className="relative w-full max-w-xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circular container */}
      <div className="relative w-[300px] h-[300px] overflow-hidden rounded-full mx-auto perspective-[1000px]">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-all duration-1000 ease-out transform-gpu ${
              index === currentIndex
                ? 'opacity-100 animate-zoom-pulse'
                : 'opacity-0 scale-[0.2] -translate-z-[100px]'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              animation: index === currentIndex ? 'zoom-pulse 2s ease-in-out infinite' : 'none'
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className={`object-cover ${image.position}`}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-wedding-gold w-4'
                : 'bg-wedding-gold/40 hover:bg-wedding-gold/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}; 