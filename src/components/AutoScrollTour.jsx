import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Volume2, Music } from 'lucide-react';

export const AutoScrollTour = ({ enabled = true }) => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [hasUserManuallyScrolled, setHasUserManuallyScrolled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const animFrameRef = useRef(null);
  const timeoutRef = useRef(null);

  // Monitor audio play state
  useEffect(() => {
    const checkAudio = () => {
      const audio = document.querySelector('audio');
      if (audio) {
        setIsAudioPlaying(!audio.paused && !audio.muted);
      }
    };
    checkAudio();
    const interval = setInterval(checkAudio, 800);
    const handleAudioState = (e) => {
      setIsAudioPlaying(e.detail?.isPlaying ?? false);
    };
    window.addEventListener('weddingAudioState', handleAudioState);
    window.addEventListener('play-wedding-music', () => setIsAudioPlaying(true));
    return () => {
      clearInterval(interval);
      window.removeEventListener('weddingAudioState', handleAudioState);
      window.removeEventListener('play-wedding-music', () => setIsAudioPlaying(true));
    };
  }, []);

  // Start auto-scroll by default right after opening & ensure music is triggered
  useEffect(() => {
    if (!enabled || hasUserManuallyScrolled) return;

    timeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
      // Attempt audio playback when auto-scrolling starts
      if (typeof window !== 'undefined' && window.__playWeddingMusic) {
        window.__playWeddingMusic();
      }
      const audio = document.getElementById('wedding-audio-element') || document.querySelector('audio');
      if (audio) {
        audio.muted = false;
        audio.volume = 0.8;
        const p = audio.play();
        if (p !== undefined) {
          p.then(() => setIsAudioPlaying(true)).catch(() => {
            audio.muted = true;
            audio.play().catch(() => {});
          });
        }
      }
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

    // Only stop auto-scrolling on genuine manual scroll actions (wheel, touch dragging)
    // Tapping or clicking anywhere does NOT cancel auto-scroll; instead it unmutes the music!
    const handleManualScrollAction = () => {
      setIsAutoScrolling(false);
      setHasUserManuallyScrolled(true);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };

    const handleTapToWakeAudio = () => {
      const audio = document.getElementById('wedding-audio-element') || document.querySelector('audio');
      if (audio && (audio.paused || audio.muted)) {
        audio.muted = false;
        audio.play().then(() => setIsAudioPlaying(true)).catch(() => {});
      }
      if (typeof window !== 'undefined' && window.__playWeddingMusic) {
        window.__playWeddingMusic();
      }
    };

    window.addEventListener('touchmove', handleManualScrollAction, { passive: true });
    window.addEventListener('wheel', handleManualScrollAction, { passive: true });
    window.addEventListener('click', handleTapToWakeAudio);
    window.addEventListener('touchstart', handleTapToWakeAudio, { passive: true });

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('touchmove', handleManualScrollAction);
      window.removeEventListener('wheel', handleManualScrollAction);
      window.removeEventListener('click', handleTapToWakeAudio);
      window.removeEventListener('touchstart', handleTapToWakeAudio);
    };
  }, [isAutoScrolling]);

  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
    setHasUserManuallyScrolled(true);
  };

  const handleUnmuteAndPlay = (e) => {
    e.stopPropagation();
    if (typeof window !== 'undefined' && window.__playWeddingMusic) {
      window.__playWeddingMusic();
    }
    const audio = document.querySelector('audio');
    if (audio) {
      audio.muted = false;
      audio.play().then(() => setIsAudioPlaying(true)).catch(() => {});
    }
    setIsAudioPlaying(true);
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
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FEF9E7]/95 border border-[#D97706]/50 text-[#4A2508] text-[10px] font-cinzel font-bold uppercase tracking-wider backdrop-blur-md shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Auto-Scrolling</span>
            <ChevronDown className="w-3 h-3 text-[#B45309] animate-bounce" />
            <span className="text-[#783E12]/70 font-normal pl-1 border-l border-[#D97706]/30">Touch to stop</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AutoScrollTour;
