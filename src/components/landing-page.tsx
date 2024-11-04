"use client";

import { useState, useRef } from "react";
import { PlayCircle, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

import "@/app/landing-page.css";

export function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true); // Overlay state
  const audioRef: any = useRef(null); // Ref for audio element

  // const toggleVideo = () => {
  //   const video = document.getElementById("hero-video") as HTMLVideoElement;
  //   if (video.paused) {
  //     video.play();
  //     setIsPlaying(true);
  //   } else {
  //     video.pause();
  //     setIsPlaying(false);
  //   }
  // };

  // Function to handle "Click to Continue" overlay
  const handleOverlayClick = () => {
    setShowOverlay(false);
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    video.play();
    setIsPlaying(true);

    // // Play the audio
    // if (audioRef.current) {
    //   audioRef.current.play();
    // }
  };

  return (
    <div className="flex flex-col min-h-screen relative" lang="en">
      {/* Full-Screen Overlay */}
      {showOverlay && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="loading05">
            <span>C</span>
            <span>l</span>
            <span>i</span>
            <span>c</span>
            <span>k</span>
            <span style={{ margin: "0 0.8rem" }}> </span>
            <span>t</span>
            <span>o</span>
            <span style={{ margin: "0 0.8rem" }}> </span>
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>i</span>
            <span>n</span>
            <span>u</span>
            <span>e</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={`relative h-screen ${showOverlay ? "hidden" : ""}`}>
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          playsInline
        >
          <source src="musicWithSound.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Give me an idea,
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              And I will build it!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <a
                href="mailto:awshafishtiaque@gmail.com"
                className="hover:underline"
              >
                awshafishtiaque@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
