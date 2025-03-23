"use client"

import { WeddingEvent } from "@/types/common";

interface EventCardProps {
  event: WeddingEvent;
  isReception?: boolean;
}

export const EventCard = ({ event, isReception = false }: EventCardProps) => {
  const { date, time, venue, location } = event;
  const title = isReception ? "Wedding Reception" : "Wedding Ceremony";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location || venue)}`;

  if (!isReception) {
    return (
      <div className="text-center backdrop-blur-md rounded-2xl p-6 md:p-8 transition-all duration-500 bg-wedding-red/10 shadow-glow hover:shadow-glow-blue">
        <h4 className="font-romantic text-3xl sm:text-4xl md:text-5xl text-white/90 mb-6 italic">{title}</h4>
        <div className="space-y-3 md:space-y-4">
          <p className="text-2xl md:text-3xl font-display text-white/80">{date}</p>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70">{time}</p>
          <div className="mt-4 md:mt-6">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {venue}
            </p>
            {location && <p className="text-lg md:text-xl text-white/70">{location}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center backdrop-blur-md rounded-2xl p-6 md:p-8 transition-all duration-500 bg-white/10 shadow-glow-red hover:shadow-glow hover:bg-wedding-red/30 animate-pulse-slow">
      <h4 className="font-romantic text-3xl sm:text-4xl md:text-5xl text-white/90 mb-6 italic animate-glow-text">{title}</h4>
      <div className="space-y-3 md:space-y-4">
        <p className="text-2xl md:text-3xl font-display text-white/80 animate-pulse-slow font-bold">{date}</p>
        <p className="text-lg md:text-xl lg:text-2xl text-white/70 animate-time-highlight font-bold group-hover:scale-110 transition-transform duration-300">
          {time}
        </p>
        <p className="text-xl md:text-2xl text-white/90 font-medium">
          {venue}
        </p>
        <div className="mt-4 md:mt-6">
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
          >
            <span className="animate-bounce-icon inline-block bg-wedding-red/20 p-2 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8"
              >
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-lg hover:underline">View Location</span>
          </a>
        </div>
      </div>
    </div>
  );
}; 