'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PlayCircle, Pause } from 'lucide-react'

export function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement
    console.log('got:', video);
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* <source src="placeholder.mp4" type="video/mp4" /> */}
          <source src="new4k.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
            <p className="text-xl md:text-2xl mb-8">Discover amazing experiences</p>
            <Button 
              onClick={toggleVideo}
              className="text-lg px-6 py-3"
            >
              {isPlaying ? <Pause className="mr-2" /> : <PlayCircle className="mr-2" />}
              {isPlaying ? 'Pause' : 'Play'} Video
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              We are a company dedicated to providing exceptional experiences and innovative solutions. Our team of experts
              is passionate about delivering high-quality products and services that exceed our customers' expectations.
            </p>
            <p className="text-lg">
              With years of experience in the industry, we have built a reputation for reliability, creativity, and
              customer satisfaction. Our mission is to continue pushing boundaries and setting new standards in our field.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="max-w-md mx-auto space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Company Name</h3>
              <p>Providing exceptional experiences since 2023</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">Facebook</a>
                <a href="#" className="hover:text-gray-400">Twitter</a>
                <a href="#" className="hover:text-gray-400">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}