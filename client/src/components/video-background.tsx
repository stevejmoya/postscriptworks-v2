import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage?: string;
  className?: string;
  overlayOpacity?: number; // 0 to 1
  children?: React.ReactNode;
}

export function VideoBackground({
  videoSrc,
  fallbackImage,
  className,
  overlayOpacity = 0.5,
  children
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    
    // Try to preload
    if (video.readyState >= 3) {
      setIsLoaded(true);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Fallback image while video loads */}
      {fallbackImage && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black z-20"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Content */}
      <div className="relative z-30 h-full">
        {children}
      </div>
    </div>
  );
}