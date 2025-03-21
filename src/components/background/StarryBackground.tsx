import { GlowCircle, Star } from "../decorative/Star";

export const StarryBackground = () => {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] via-[#660066] to-[#0000FF]"></div>
      
      {/* Overlay with stars pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_100%)] animate-glimmer"></div>
      
      {/* Star Pattern - First Layer */}
      <Star className="text-white/60 top-[5%] left-[10%] w-8 h-8 animate-twinkle" />
      <Star className="text-white/70 top-[15%] left-[25%] w-6 h-6 animate-sparkle" />
      <Star className="text-white/60 top-[25%] left-[45%] w-7 h-7 animate-twinkle delay-300" />
      <Star className="text-white/70 top-[10%] right-[15%] w-8 h-8 animate-sparkle delay-150" />
      <Star className="text-white/60 top-[30%] right-[25%] w-6 h-6 animate-twinkle delay-700" />
      <Star className="text-white/70 bottom-[20%] left-[15%] w-7 h-7 animate-sparkle delay-500" />
      <Star className="text-white/60 bottom-[30%] right-[20%] w-8 h-8 animate-twinkle delay-200" />
      <Star className="text-white/70 bottom-[15%] right-[35%] w-6 h-6 animate-sparkle delay-400" />
      <Star className="text-white/60 top-[50%] left-[30%] w-7 h-7 animate-twinkle delay-600" />
      <Star className="text-white/70 top-[40%] right-[40%] w-8 h-8 animate-sparkle delay-300" />
      <Star className="text-white/60 bottom-[40%] left-[40%] w-6 h-6 animate-twinkle delay-500" />
      <Star className="text-white/70 bottom-[25%] right-[30%] w-7 h-7 animate-sparkle delay-200" />

      {/* Star Pattern - Second Layer */}
      <Star className="text-white/50 top-[8%] left-[35%] w-5 h-5 animate-twinkle delay-100" />
      <Star className="text-white/60 top-[18%] right-[45%] w-4 h-4 animate-sparkle delay-250" />
      <Star className="text-white/50 top-[35%] left-[18%] w-5 h-5 animate-twinkle delay-450" />
      <Star className="text-white/60 top-[45%] right-[12%] w-4 h-4 animate-sparkle delay-550" />
      <Star className="text-white/50 bottom-[35%] left-[28%] w-5 h-5 animate-twinkle delay-650" />
      <Star className="text-white/60 bottom-[45%] right-[38%] w-4 h-4 animate-sparkle delay-750" />
      <Star className="text-white/50 top-[60%] left-[42%] w-5 h-5 animate-twinkle delay-850" />
      <Star className="text-white/60 bottom-[12%] right-[42%] w-4 h-4 animate-sparkle delay-950" />

      {/* Star Pattern - Third Layer */}
      <Star className="text-white/40 top-[12%] left-[52%] w-3 h-3 animate-twinkle delay-175" />
      <Star className="text-white/40 top-[22%] right-[58%] w-3 h-3 animate-sparkle delay-325" />
      <Star className="text-white/40 top-[42%] left-[62%] w-3 h-3 animate-twinkle delay-475" />
      <Star className="text-white/40 bottom-[28%] right-[52%] w-3 h-3 animate-sparkle delay-625" />
      <Star className="text-white/40 top-[55%] left-[55%] w-3 h-3 animate-twinkle delay-775" />
      <Star className="text-white/40 bottom-[38%] right-[48%] w-3 h-3 animate-sparkle delay-925" />
      <Star className="text-white/40 top-[68%] left-[48%] w-3 h-3 animate-twinkle delay-1000" />
      <Star className="text-white/40 bottom-[18%] left-[58%] w-3 h-3 animate-sparkle delay-1100" />
      <Star className="text-white/40 top-[15%] left-[68%] w-3 h-3 animate-twinkle delay-1200" />
      <Star className="text-white/40 bottom-[42%] right-[62%] w-3 h-3 animate-sparkle delay-1300" />

      {/* Glow Effects */}
      <GlowCircle className="w-64 h-64 bg-red-500/30 top-[10%] left-[20%] animate-pulse-slow" />
      <GlowCircle className="w-72 h-72 bg-blue-500/30 bottom-[20%] right-[15%] animate-pulse-slow delay-300" />
      <GlowCircle className="w-56 h-56 bg-purple-500/30 top-[40%] right-[25%] animate-pulse-slow delay-700" />
      <GlowCircle className="w-64 h-64 bg-red-500/30 bottom-[30%] left-[25%] animate-pulse-slow delay-500" />
    </>
  );
}; 