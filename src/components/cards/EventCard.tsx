"use client"

import { WeddingEvent } from "@/types/common";

interface EventCardProps {
  event: WeddingEvent;
  isReception?: boolean;
}

export const EventCard = ({ event, isReception = false }: EventCardProps) => {
  const { title, date, time, venue, location } = event;
  
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
          <div className="mt-4 flex flex-col items-center space-y-2">
            <div className="relative group">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300"
              >
                <div className="relative">
                  <svg
                    className="h-8 w-8 md:h-10 md:w-10 text-wedding-gold group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Click to view location
                  </div>
                </div>
                <span className="text-lg md:text-xl">{venue}</span>
              </a>
            </div>
            {location && (
              <p className="text-base md:text-lg text-white/70 group-hover:text-white transition-colors duration-300">
                {location}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 