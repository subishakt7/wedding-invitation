interface HeartImageProps {
  src: string;
  alt: string;
}

export const HeartImage = ({ src, alt }: HeartImageProps) => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 animate-scale-up">
      {/* Heart shape mask */}
      <div className="absolute inset-0 animate-pulse-slow">
        <div className="w-full h-full bg-gradient-to-br from-red-500/30 to-purple-500/30 rounded-2xl backdrop-blur-sm" />
      </div>
      
      {/* Heart shape container */}
      <div className="absolute inset-0 overflow-hidden [clip-path:path('M12,21.35L10.55,20.03C5.4,15.36,2,12.27,2,8.5C2,5.41,4.42,3,7.5,3C9.24,3,10.91,3.81,12,5.08C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.41,22,8.5C22,12.27,18.6,15.36,13.45,20.03L12,21.35Z')] animate-beat">
        {/* Image with zoom effect */}
        <div className="w-full h-full transform-gpu animate-zoom-dazzle">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sparkle effects */}
      <div className="absolute -inset-2 animate-spin-slow">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-sm animate-sparkle" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full blur-sm animate-sparkle delay-100" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full blur-sm animate-sparkle delay-200" />
      </div>
    </div>
  );
}; 