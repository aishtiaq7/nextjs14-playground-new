"use client";

import { useState, useRef } from "react";
import "@/app/landing-page.css";

export function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOverlayClick = () => {
    setShowOverlay(false);
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    video.play();
    setIsPlaying(true);
    
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  };

  const handleButtonClick = () => {
    window.location.href = "https://awshaf.com/";
  };

  return (
    <div className="landing-container" lang="en">
      {showOverlay && (
        <div className="overlay" onClick={handleOverlayClick}>
          <p>Click to Continue</p>
        </div>
      )}

      <section className={`hero-section ${showOverlay ? "hidden" : ""}`}>
        <video 
          id="hero-video" 
          className={`hero-video ${fadeIn ? 'fade-in' : ''}`} 
          loop 
          playsInline
        >
          <source src="musicWithSound.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={`overlay-content ${fadeIn ? 'fade-in' : ''}`}>
          <div className="contentInContainer">
            <h1 className="hero-title">
              If you can visualize it, you can bring it to life.
            </h1>
            <button className="glow-button" onClick={handleButtonClick}>
              Go back
            </button>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
