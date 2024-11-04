'use client'

import { useState, useRef } from 'react'
import { PlayCircle, Pause } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true) // Overlay state
  const audioRef:any = useRef(null) // Ref for audio element

  const toggleVideo = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  // Function to handle "Click to Continue" overlay
  const handleOverlayClick = () => {
    setShowOverlay(false)
    const video = document.getElementById('hero-video') as HTMLVideoElement
    video.play()
    setIsPlaying(true)

    // Play the audio
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Full-Screen Overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white text-2xl md:text-4xl cursor-pointer"
          onClick={handleOverlayClick}
        >
          Click to continue
        </div>
      )}

      {/* Hero Section */}
      <section className={`relative h-screen ${showOverlay ? 'hidden' : ''}`}>
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          // muted
          loop
          playsInline
        >
          <source src="musicWithSound.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Give me an idea,</h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">And I'll build it here!</h1>
            <p className="text-xl md:text-2xl mb-8">awshafishtiaque@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Audio Element */}
      <audio ref={audioRef} src="/path-to-your-audio-file.mp3" />

    </div>
  )
}
