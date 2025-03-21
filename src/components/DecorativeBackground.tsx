"use client"

const DecorativeBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Top left corner decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-gold/10 rounded-br-full" />
      
      {/* Bottom right corner decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-wedding-gold/10 rounded-tl-full" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-wedding-gold/20 rounded-full animate-float" />
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-wedding-gold/20 rounded-full animate-float-delayed" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-wedding-gold/0 via-wedding-gold/20 to-wedding-gold/0" />
      <div className="absolute bottom-0 right-1/2 w-px h-32 bg-gradient-to-t from-wedding-gold/0 via-wedding-gold/20 to-wedding-gold/0" />
    </div>
  );
};

export default DecorativeBackground; 