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
          <div className="w-48 h-32 mx-auto rounded-lg overflow-hidden shadow-lg mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.94371289668!2d75.62356187496815!3d11.48398578871106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6899686380cff%3A0x56e473c4785fbd8f!2sAnil%20MK%20home!5e0!3m2!1sen!2sin!4v1742795954173!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <a 
            href="https://maps.app.goo.gl/ZvqykpGWCeEprSQS9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-lg hover:underline">View Location</span>
          </a>
        </div>
      </div>
    </div>
  );
}; 