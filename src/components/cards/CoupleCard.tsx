import { CoupleInfo } from "@/types/common";

interface CoupleCardProps {
  info: CoupleInfo;
  role?: 'groom' | 'bride';
}

export const CoupleCard = ({ info, role }: CoupleCardProps) => {
  const { name, parents } = info;
  
  return (
    <article 
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-glow hover:shadow-glow-red transition-all duration-500 hover:scale-105 hover:-translate-y-1"
      aria-label={`${role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Couple'} Information`}
    >
      <h2 className="font-romantic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 italic relative group">
        <span className="inline-block animate-glow-text hover:animate-wave cursor-default transition-all duration-300">
          {name.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <div className="absolute -inset-1 bg-gradient-to-r from-wedding-red/0 via-wedding-red/30 to-wedding-red/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      </h2>
      <p className="text-white/90 text-lg md:text-xl lg:text-2xl group-hover:text-white transition-colors duration-300">
        {parents}
      </p>
    </article>
  );
}; 