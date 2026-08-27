'use client';

import React, { useEffect, useRef, useState } from 'react';
import EditorialDrawer, { DrawerType } from './editorial-drawer';

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;

export default function GlassHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Refs for tracking cursor/touch state without triggering React re-renders
  const rawPosRef = useRef({ x: -999, y: -999 });
  const smoothedPosRef = useRef({ x: -999, y: -999 });
  const currentRadiusRef = useRef(0);
  const targetRadiusRef = useRef(0);
  const isTrackingRef = useRef(false);
  const animFrameIdRef = useRef<number | null>(null);

  // Responsive portrait asset state
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);

  // Active drawer modal state ('about' | 'work' | 'process' | 'experiments' | 'contact' | null)
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);

  useEffect(() => {
    const handleResize = () => {
      // At max-width: 767px in portrait, use mobile 9:16 pair.
      // At max-width: 767px in landscape (e.g. phone turned sideways), switch back to desktop 16:9 pair.
      const isMobileWidth = window.matchMedia('(max-width: 767px)').matches;
      const isPortraitOrientation = window.matchMedia('(orientation: portrait)').matches;
      setIsMobilePortrait(isMobileWidth && isPortraitOrientation);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateAnimationFrame = () => {
      const isReducedMotion = prefersReducedMotionQuery.matches;
      const lerpPos = isReducedMotion ? 1 : 0.14;
      const lerpRadius = isReducedMotion ? 1 : 0.12;

      // Smooth position interpolation
      smoothedPosRef.current.x += (rawPosRef.current.x - smoothedPosRef.current.x) * lerpPos;
      smoothedPosRef.current.y += (rawPosRef.current.y - smoothedPosRef.current.y) * lerpPos;

      // Smooth radius interpolation
      currentRadiusRef.current += (targetRadiusRef.current - currentRadiusRef.current) * lerpRadius;

      // Direct DOM style updates for CSS radial mask variables
      container.style.setProperty('--reveal-x', `${smoothedPosRef.current.x.toFixed(2)}px`);
      container.style.setProperty('--reveal-y', `${smoothedPosRef.current.y.toFixed(2)}px`);
      container.style.setProperty('--reveal-radius', `${currentRadiusRef.current.toFixed(2)}px`);

      animFrameIdRef.current = requestAnimationFrame(updateAnimationFrame);
    };

    // Start single rAF loop
    animFrameIdRef.current = requestAnimationFrame(updateAnimationFrame);

    return () => {
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Mouse / Pointer Events
  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse') {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      rawPosRef.current = { x, y };
      smoothedPosRef.current = { x, y };
      targetRadiusRef.current = DESKTOP_RADIUS;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (e.pointerType === 'mouse') {
      rawPosRef.current = { x, y };
      if (targetRadiusRef.current === 0) {
        targetRadiusRef.current = DESKTOP_RADIUS;
      }
    } else if (isTrackingRef.current) {
      rawPosRef.current = { x, y };
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse') {
      targetRadiusRef.current = 0;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      isTrackingRef.current = true;
      rawPosRef.current = { x, y };
      smoothedPosRef.current = { x, y };
      targetRadiusRef.current = MOBILE_RADIUS;

      if (e.target && 'setPointerCapture' in (e.target as HTMLElement)) {
        try {
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
        } catch {
          // pointer capture fallback
        }
      }
    }
  };

  const handlePointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') {
      isTrackingRef.current = false;
      targetRadiusRef.current = 0;
      if (e.target && 'releasePointerCapture' in (e.target as HTMLElement)) {
        try {
          (e.target as HTMLElement).releasePointerCapture(e.pointerId);
        } catch {
          // fallback
        }
      }
    }
  };

  const scrollToNextSection = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentBaseSrc = isMobilePortrait ? '/images/Base_image_mobile.png' : '/images/Base_image_desktop.png';
  const currentRevealSrc = isMobilePortrait ? '/images/Reveal_image_mobile.png' : '/images/Reveal_image_desktop.png';

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUpOrCancel}
      onPointerCancel={handlePointerUpOrCancel}
      className="relative isolate overflow-hidden h-[100dvh] min-w-[320px] select-none touch-none bg-[#edf5ff]"
    >
      {/* LAYER 1: BASE PORTRAIT */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover transition-opacity duration-500 animate-base-entrance"
        style={{ backgroundImage: `url('${currentBaseSrc}')` }}
      />

      {/* LAYER 2: REVEAL PORTRAIT (CSS Radial Masked) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-center bg-no-repeat bg-cover glass-reveal-layer"
        style={{ backgroundImage: `url('${currentRevealSrc}')` }}
      />

      {/* LAYER 3: TECHNICAL GRID + LARGE FINE-LINE CIRCLE */}
      <div aria-hidden="true" className="absolute inset-0 z-20 pointer-events-none">
        {/* Desktop Technical Grid (12 cols x 4 rows) */}
        <div className="hidden md:grid h-full w-full grid-cols-12 grid-rows-4 opacity-25">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-b border-[#a8c2e6]" />
          ))}
        </div>

        {/* Mobile Technical Grid (4 cols x 6 rows) */}
        <div className="grid md:hidden h-full w-full grid-cols-4 grid-rows-6 opacity-15">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border-r border-b border-[#a8c2e6]" />
          ))}
        </div>

        {/* Oversized Outlined Circle SVG */}
        <svg
          className="absolute text-[#8eb0de]/40 md:text-[#8eb0de]/45 pointer-events-none transition-all duration-700"
          style={{
            width: isMobilePortrait ? '150vw' : 'min(78vw, 72rem)',
            height: isMobilePortrait ? '150vw' : 'min(78vw, 72rem)',
            left: isMobilePortrait ? '-76%' : '8%',
            top: isMobilePortrait ? '-8%' : '-36%',
          }}
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="500" r="498" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="500" cy="500" r="460" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* LAYER 5: NAVIGATION BAR */}
      <header className="absolute top-0 left-0 right-0 z-50 animate-nav-down">
        <nav
          className="flex items-center justify-between"
          style={{
            paddingTop: 'max(2.5rem, env(safe-area-inset-top))',
            paddingLeft: 'max(5.6vw, 2rem)',
            paddingRight: 'max(5.6vw, 2rem)',
          }}
        >
          {/* Custom SVG Monogram + Name */}
          <button
            onClick={() => setActiveDrawer('about')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0b0f19] rounded-lg p-1 min-h-[44px]"
          >
            <div className="w-9 h-9 rounded-full bg-[#0b0f19] text-[#edf5ff] flex items-center justify-center font-mono font-semibold text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
              JL
            </div>
            <span className="font-mono text-sm tracking-widest uppercase font-semibold text-[#0b0f19]">
              JENIL LANGALIYA
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#0b0f19]/80">
            {(['about', 'work', 'process', 'experiments'] as DrawerType[]).map((drawerKey) => (
              <button
                key={drawerKey}
                onClick={() => setActiveDrawer(drawerKey)}
                className="hover:text-[#0b0f19] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0b0f19] rounded px-2 py-1 min-h-[44px] flex items-center capitalize"
              >
                {drawerKey}
              </button>
            ))}
          </div>

          {/* Right CTA Button */}
          <button
            onClick={() => setActiveDrawer('contact')}
            className="bg-white/95 backdrop-blur-sm text-[#0b0f19] font-mono text-xs uppercase tracking-wider font-medium px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#0b0f19] min-h-[44px] flex items-center justify-center"
          >
            Let&apos;s talk
          </button>
        </nav>
      </header>

      {/* LAYER 4: HEADLINE AND COPY */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        {/* Desktop Headline & Copy Layout */}
        <div className="hidden md:block h-full w-full relative">
          {/* Main Headline */}
          <div
            className="absolute left-[max(5.6vw,2rem)] max-w-[48vw]"
            style={{ top: '34%' }}
          >
            <h1 className="font-sans font-light tracking-[-0.085em] text-[#0b0f19] text-[clamp(5.4rem,6.2vw,6.8rem)] leading-[0.93] pointer-events-auto">
              <span className="block animate-line-1">BUILDING</span>
              <span className="block animate-line-2">BEYOND</span>
              <span className="block animate-line-3 text-[#0b0f19]/90 font-normal">POSSIBLE.</span>
            </h1>
          </div>

          {/* Bottom Left Intro Line & Button */}
          <div
            className="absolute left-[max(5.6vw,2rem)] bottom-[max(3rem,4vh)] max-w-sm space-y-4 pointer-events-auto animate-copy-up"
          >
            <p className="text-sm md:text-base text-[#0b0f19]/80 font-sans leading-relaxed">
              CS &amp; Software Engineering student at Scaler &amp; BITS Pilani. Building distributed systems, RAG apps, and agentic CLI tools.
            </p>
            <button
              onClick={scrollToNextSection}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#0b0f19] font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 border border-white/80 focus:outline-none focus:ring-2 focus:ring-[#0b0f19] min-h-[44px]"
            >
              Explore my work
              <span className="text-base animate-bounce">↓</span>
            </button>
          </div>

          {/* Tagline on the Right */}
          <div
            className="absolute right-[max(5.6vw,2rem)] top-[42%] text-right font-mono text-xs text-[#0b0f19]/70 tracking-widest uppercase space-y-1 animate-copy-up"
          >
            <div>BUILDING THE</div>
            <div>NEXT VERSION</div>
            <div className="font-bold text-[#0b0f19]">IN PUBLIC</div>
          </div>
        </div>

        {/* Mobile Composition Layout (max-width: 767px) */}
        <div className="block md:hidden h-full w-full relative min-h-[42rem] px-[1.25rem]">
          {/* Mobile Headline */}
          <div
            className="absolute left-[1.25rem] w-[62%] max-w-[300px]"
            style={{ top: '15%' }}
          >
            <h1 className="font-sans font-light tracking-[-0.08em] text-[#0b0f19] text-[clamp(2.7rem,12.5vw,3.8rem)] leading-[0.87] pointer-events-auto">
              <span className="block animate-line-1">BUILDING</span>
              <span className="block animate-line-2">BEYOND</span>
              <span className="block animate-line-3 font-normal">POSSIBLE.</span>
            </h1>
          </div>

          {/* Tagline at Top 55%, Right Aligned */}
          <div
            className="absolute right-[1.25rem] top-[55%] text-right font-mono text-[10px] text-[#0b0f19]/75 tracking-wider uppercase space-y-0.5 animate-copy-up"
          >
            <div>BUILDING THE</div>
            <div>NEXT VERSION</div>
            <div className="font-semibold text-[#0b0f19]">IN PUBLIC</div>
          </div>

          {/* Intro & Button */}
          <div
            className="absolute left-[1.25rem] right-[1.25rem] space-y-3 pointer-events-auto animate-copy-up"
            style={{ bottom: 'max(2rem, env(safe-area-inset-bottom))' }}
          >
            <p className="text-xs text-[#0b0f19]/85 font-sans leading-snug max-w-[260px] bg-white/40 backdrop-blur-[2px] p-1.5 rounded">
              CS &amp; Software Engineering student building distributed systems &amp; AI CLI agents.
            </p>
            <button
              onClick={scrollToNextSection}
              className="inline-flex items-center gap-2 bg-white/95 text-[#0b0f19] font-mono text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm border border-white/80 focus:outline-none focus:ring-2 focus:ring-[#0b0f19] min-h-[44px]"
            >
              Explore my work
              <span className="animate-bounce">↓</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Scroll Indicator Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 font-mono text-[10px] uppercase tracking-widest text-[#0b0f19]/60 hover:text-[#0b0f19] flex flex-col items-center gap-1.5 transition-colors focus:outline-none"
      >
        <span>SCROLL TO EXPLORE</span>
        <span className="w-4 h-7 border border-[#0b0f19]/40 rounded-full flex justify-center pt-1.5">
          <span className="w-1 h-1.5 bg-[#0b0f19] rounded-full animate-bounce" />
        </span>
      </button>

      {/* EDITORIAL DRAWER MODAL */}
      <EditorialDrawer activeDrawer={activeDrawer} onClose={() => setActiveDrawer(null)} />
    </div>
  );
}
