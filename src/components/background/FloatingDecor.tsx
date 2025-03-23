const Heart = ({ className }: { className: string }) => (
  <div className={`absolute ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
    </svg>
  </div>
);

const Flower = ({ className }: { className: string }) => (
  <div className={`absolute text-white/10 ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,1C8.13,1 5,4.13 5,8C5,11.87 8.13,15 12,15C15.87,15 19,11.87 19,8C19,4.13 15.87,1 12,1M12,3.5C14.5,3.5 16.5,5.5 16.5,8C16.5,10.5 14.5,12.5 12,12.5C9.5,12.5 7.5,10.5 7.5,8C7.5,5.5 9.5,3.5 12,3.5M12,17C8.13,17 5,20.13 5,24H19C19,20.13 15.87,17 12,17Z" />
    </svg>
  </div>
);

export const FloatingDecor = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Cluster of hearts on the left side */}
      <div className="absolute left-0 top-0 bottom-0 w-[400px]">
        <Heart className="text-[#ff9999] opacity-60 left-[8%] top-[15%] w-6 h-6 animate-float-up-1" />
        <Heart className="text-[#ff9999] opacity-70 left-[12%] top-[25%] w-5 h-5 animate-float-up-2" />
        <Heart className="text-[#ff9999] opacity-80 left-[15%] top-[35%] w-7 h-7 animate-float-up-3" />
        <Heart className="text-[#ff9999] opacity-75 left-[10%] top-[45%] w-4 h-4 animate-float-up-1" />
        <Heart className="text-[#ff9999] opacity-65 left-[18%] top-[55%] w-6 h-6 animate-float-up-2" />
        <Heart className="text-[#ff9999] opacity-70 left-[14%] top-[65%] w-5 h-5 animate-float-up-3" />
        <Heart className="text-[#ff9999] opacity-60 left-[20%] top-[75%] w-4 h-4 animate-float-up-1" />
        
        {/* Second layer of hearts slightly more to the right */}
        <Heart className="text-[#ff9999] opacity-50 left-[35%] top-[20%] w-4 h-4 animate-float-up-2" />
        <Heart className="text-[#ff9999] opacity-40 left-[40%] top-[40%] w-5 h-5 animate-float-up-3" />
        <Heart className="text-[#ff9999] opacity-30 left-[38%] top-[60%] w-3 h-3 animate-float-up-1" />
        <Heart className="text-[#ff9999] opacity-20 left-[45%] top-[80%] w-4 h-4 animate-float-up-2" />
      </div>

      {/* Cluster of hearts on the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[400px]">
        <Heart className="text-[#ff9999] opacity-60 right-[8%] top-[15%] w-6 h-6 animate-float-up-1" />
        <Heart className="text-[#ff9999] opacity-70 right-[12%] top-[25%] w-5 h-5 animate-float-up-2" />
        <Heart className="text-[#ff9999] opacity-80 right-[15%] top-[35%] w-7 h-7 animate-float-up-3" />
        <Heart className="text-[#ff9999] opacity-75 right-[10%] top-[45%] w-4 h-4 animate-float-up-1" />
        <Heart className="text-[#ff9999] opacity-65 right-[18%] top-[55%] w-6 h-6 animate-float-up-2" />
        <Heart className="text-[#ff9999] opacity-70 right-[14%] top-[65%] w-5 h-5 animate-float-up-3" />
        <Heart className="text-[#ff9999] opacity-60 right-[20%] top-[75%] w-4 h-4 animate-float-up-1" />
        
        {/* Second layer of hearts slightly more to the right */}
        <Heart className="text-[#ff9999] opacity-50 right-[35%] top-[20%] w-4 h-4 animate-float-up-2" />
        <Heart className="text-[#ff9999] opacity-40 right-[40%] top-[40%] w-5 h-5 animate-float-up-3" />
        <Heart className="text-[#ff9999] opacity-30 right-[38%] top-[60%] w-3 h-3 animate-float-up-1" />
        <Heart className="text-[#ff9999] opacity-20 right-[45%] top-[80%] w-4 h-4 animate-float-up-2" />
      </div>
    </div>
  );
}; 