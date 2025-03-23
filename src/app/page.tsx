"use client"

import { COUPLE_INFO, WEDDING_EVENTS } from "@/constants/wedding";
import { FloatingDecor } from "@/components/background/FloatingDecor";
import { CoupleCard } from "@/components/cards/CoupleCard";
import { EventCard } from "@/components/cards/EventCard";
import { ImageGallery } from '@/components/gallery/ImageGallery';
import CountdownTimer from '@/components/CountdownTimer';

// Decorative element component
const Star = ({ className }: { className: string }) => (
  <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.85 8.3L22 9.3L17 14.1L18.18 21L12 17.77L5.82 21L7 14.1L2 9.3L9.15 8.3L12 2Z" />
    </svg>
  </div>
)

const GlowCircle = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full blur-sm ${className}`} aria-hidden="true"></div>
)

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Wedding Reception",
    "description": `Join us in celebrating the wedding reception of ${COUPLE_INFO.groom.name} and ${COUPLE_INFO.bride.name}. Together with their families, we invite you to share in our joy.`,
    "startDate": WEDDING_EVENTS.reception.date,
    "endDate": WEDDING_EVENTS.reception.date,
    "location": {
      "@type": "Place",
      "name": WEDDING_EVENTS.reception.venue,
      "address": WEDDING_EVENTS.reception.location
    },
    "organizer": {
      "@type": "Person",
      "name": `${COUPLE_INFO.groom.name} & ${COUPLE_INFO.bride.name}`
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] via-[#660066] to-[#0000FF]"></div>
      
      {/* Floating decorations */}
      <FloatingDecor />

      {/* Content Sections */}
      <div className="relative">
        {/* Hero Section */}
        <section className="py-8 md:py-12 lg:py-16 px-4 text-center relative" aria-label="Hero">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 md:mb-12 animate-fade-in">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 italic">
                The Wedding Reception
              </h1>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl"> Join Us to Celebrate a Beautiful Evening, Together With Our Families!</p>
            </div>

            {/* Gallery Section */}
            <section id="gallery" className="py-6 md:py-10 lg:py-12 px-4 relative" aria-label="Photo Gallery">
              <div className="max-w-5xl mx-auto">
                <ImageGallery />
              </div>
            </section>

            <div className="space-y-6 md:space-y-8 animate-slide-up">
              <CoupleCard info={COUPLE_INFO.groom} role="groom" />
              <div className="font-romantic text-4xl md:text-5xl text-white animate-pulse-slow italic" aria-hidden="true">&</div>
              <CoupleCard info={COUPLE_INFO.bride} role="bride" />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-8 md:py-12 lg:py-16 px-4 relative" aria-label="Event Details">
          <div className="max-w-3xl mx-auto">
            {/* Ceremony Info */}
            <div className="mb-12 text-center">
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl italic font-medium leading-relaxed">
                The wedding ceremony will be held on April 30th, 2025 at Sree Narayana Gurudeva Temple, Ponkunnam, Kottayam.
              </p>
            </div>

            {/* Reception Card */}
            <div>
              <EventCard event={WEDDING_EVENTS.reception} isReception={true} />
            </div>

            {/* Welcome Message */}
            <div className="my-16 md:my-24 max-w-2xl mx-auto text-center animate-fade-in">
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl italic font-medium leading-relaxed">
                <span className="block">With hearts full of joy and gratitude,</span>
                <span className="block">Mr Anil Kumar & Mrs Geetha Anil invite you to join for their Son's Wedding Reception.</span>
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mt-8 md:mt-12 lg:mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-glow">
              <CountdownTimer />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 