

"use client";
import React, { useEffect, useRef, useState } from "react";
import { PlayCircle, PauseCircle, Pause, Play } from "lucide-react";

const VideoBanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Play the video after 3 seconds
    const playTimeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 3000);

    // Pause the video after 5 seconds
    const pauseTimeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }, 8000);

    return () => {
      clearTimeout(playTimeout);
      clearTimeout(pauseTimeout);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className=" py-12">
      <div className="relative w-[95%]  lg:w-[70%] mx-auto h-72 flex justify-center items-center bg-black rounded-xl">
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
        >
          <source
            src="/VideoBanner.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-4 text-white text-center">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/30 text-white rounded-full backdrop-blur-md hover:bg-white/40 transition-all"
          >
            {isPlaying ? <Pause size={25} /> : <Play size={25} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;