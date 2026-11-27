import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Pause } from 'lucide-react';

export const AutoScrollTour = ({ enabled = true }) => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [hasUserManuallyScrolled, setHasUserManuallyScrolled] = useState(false);
  const animFrameRef = useRef(null);
  const timeoutRef = useRef(null);

  // Start auto-scroll by default right after opening
  useEffect(() => {
    if (!enabled || hasUserManuallyScrolled) return;

    timeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 600);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [enabled, hasUserManuallyScrolled]);

  // Smooth continuous auto-scroll
  useEffect(() => {
    if (!isAutoScrolling) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    let lastTime = performance.now();
    const scrollStep = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // Stop automatically when reaching the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 30) {
        setIsAutoScrolling(false);
        setHasUserManuallyScrolled(true);
        return;
      }

      // Smooth ~115px per second reading scroll (faster & comfortable)
      const pixelsToScroll = (115 * delta) / 1000;
      window.scrollBy(0, pixelsToScroll);

      animFrameRef.current = requestAnimationFrame(scrollStep);
    };

    animFrameRef.current = requestAnimationFrame(scrollStep);

    // Stop completely when user manually interacts or scrolls
    const handleManualScroll = () => {
      setIsAutoScrolling(false);
      setHasUserManuallyScrolled(true);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };

    window.addEventListener('touchstart', handleManualScroll, { passive: true });
    window.addEventListener('touchmove', handleManualScroll, { passive: true });
    window.addEventListener('wheel', handleManualScroll, { passive: true });
    window.addEventListener('pointerdown', handleManualScroll, { passive: true });
    window.addEventListener('keydown', handleManualScroll, { passive: true });

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('touchstart', handleManualScroll);
      window.removeEventListener('touchmove', handleManualScroll);
      window.removeEventListener('wheel', handleManualScroll);
      window.removeEventListener('pointerdown', handleManualScroll);
      window.removeEventListener('keydown', handleManualScroll);
    };
  }, [isAutoScrolling]);

  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
    setHasUserManuallyScrolled(true);
  };

  return (
    <AnimatePresence>
      {/* Subtle indicator only visible while auto-scrolling is active */}
      {isAutoScrolling && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="fixed top-18 left-1/2 -translate-x-1/2 z-40 pointer-events-auto"
        >
          <button
            onClick={stopAutoScroll}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FEF9E7]/95 border border-[#D97706]/50 text-[#4A2508] text-[10px] font-cinzel font-bold uppercase tracking-wider backdrop-blur-md shadow-md animate-pulse active:scale-95 cursor-pointer"
          >
            <span>Auto-Scrolling</span>
            <ChevronDown className="w-3 h-3 text-[#B45309] animate-bounce" />
            <span className="text-[#783E12]/70 font-normal pl-1 border-l border-[#D97706]/30">Touch to take control</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AutoScrollTour;
