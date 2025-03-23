'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-05-01T15:00:00')

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <h4 className="font-romantic text-xl sm:text-2xl md:text-2xl text-white/90 mb-4 italic animate-glow-text">
        Counting Down to the Celebration
      </h4>
      <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-3xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 hover:bg-white/30 transition-all duration-300 shadow-lg">
          <div className="text-lg md:text-2xl font-romantic text-white mb-1 animate-pulse-slow">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/70">Days</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 hover:bg-white/30 transition-all duration-300 shadow-lg">
          <div className="text-lg md:text-2xl font-romantic text-white mb-1 animate-pulse-slow">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/70">Hours</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 hover:bg-white/30 transition-all duration-300 shadow-lg">
          <div className="text-lg md:text-2xl font-romantic text-white mb-1 animate-pulse-slow">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/70">Minutes</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 hover:bg-white/30 transition-all duration-300 shadow-lg">
          <div className="text-lg md:text-2xl font-romantic text-white mb-1 animate-pulse-slow">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/70">Seconds</div>
        </div>
      </div>
      <h3 className="font-romantic text-sm md:text-base text-white/80 mt-4 italic">
        Left for the Celebration
      </h3>
    </div>
  )
}

export default CountdownTimer 