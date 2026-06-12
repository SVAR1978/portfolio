import { useRef, useEffect, useCallback } from "react";

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

const FadingVideo = ({ src, className = "", style = {} }: FadingVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number>(0);
  const fadingOutRef = useRef(false);

  const fadeTo = useCallback((target: number, duration: number) => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = 0;
    }

    const video = videoRef.current;
    if (!video) return;

    const startOpacity = parseFloat(video.style.opacity || "0");
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = startOpacity + (target - startOpacity) * progress;
      video.style.opacity = String(current);

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(step);
      } else {
        rafIdRef.current = 0;
      }
    };

    rafIdRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fadeTo(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
      if (
        !fadingOutRef.current &&
        video.duration &&
        video.duration - video.currentTime <= FADE_OUT_LEAD &&
        video.duration - video.currentTime > 0
      ) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [fadeTo]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
    />
  );
};

export default FadingVideo;
