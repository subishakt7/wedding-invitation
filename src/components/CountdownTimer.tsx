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
      <h4 className="font-romantic text-3xl sm:text-4xl md:text-5xl text-white/90 mb-6 italic animate-glow-text mt-2 mb-5">
        Counting Down to the Celebration
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 hover:bg-white/40 transition-all">
          <div className="text-4xl md:text-5xl font-romantic text-wedding-purple mb-1">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase tracking-widest text-wedding-text/80">Days</div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 hover:bg-white/40 transition-all">
          <div className="text-4xl md:text-5xl font-romantic text-wedding-purple mb-1">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase tracking-widest text-wedding-text/80">Hours</div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 hover:bg-white/40 transition-all">
          <div className="text-4xl md:text-5xl font-romantic text-wedding-purple mb-1">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase tracking-widest text-wedding-text/80">Minutes</div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 hover:bg-white/40 transition-all">
          <div className="text-4xl md:text-5xl font-romantic text-wedding-purple mb-1">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase tracking-widest text-wedding-text/80">Seconds</div>
        </div>
      </div>
      
    </div>
  )
}

export default CountdownTimer 