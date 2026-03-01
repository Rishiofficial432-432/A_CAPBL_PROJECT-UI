/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GradientBlinds from './components/GradientBlinds';
import CurvedNavbar from './components/CurvedNavbar';
import { GlobeDemo } from './components/GlobeDemo';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Globe animations:
  // 0 -> 0.45: Scales up significantly
  // 0.2 -> 0.45: Fades out completely
  const globeScale = useTransform(scrollYProgress, [0, 0.45], [1, 3]);
  const smoothGlobeScale = useSpring(globeScale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const globeOpacity = useTransform(scrollYProgress, [0, 0.2, 0.45], [0.5, 1, 0]);
  const globeY = useTransform(scrollYProgress, [0, 0.45], [0, -600]);
  
  // Text animations:
  // 0.4 -> 0.55: Fades in right in the center
  // Starts appearing just before globe is completely gone
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.4, 0.55], [0.8, 1]);

  return (
    <div ref={containerRef} className="w-full min-h-[300vh] bg-black flex flex-col items-center relative overflow-x-hidden md:cursor-none">
      <div className="hidden md:block">
        <SmoothCursor />
      </div>
      <CurvedNavbar />
      <div className="fixed inset-0 z-0">
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF', '#FF2773']}
          angle={45}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.6}
          spotlightSoftness={0.8}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0.2}
          shineDirection="left"
          mixBlendMode="screen"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-full p-4 pt-24 md:p-8 md:pt-32 pointer-events-none h-screen sticky top-0">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tighter mix-blend-overlay whitespace-nowrap pointer-events-auto select-none mt-12 md:mt-24">
          PROJECT VANGARD
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light tracking-wide mix-blend-overlay pointer-events-auto select-none text-center">
          A CAPBL PROJECT
        </p>
        
        <button className="mt-6 md:mt-8 px-6 py-2 border border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-colors uppercase cursor-pointer bg-transparent mix-blend-overlay mb-8 md:mb-12 pointer-events-auto">
          Enter
        </button>

        <motion.div 
          style={{ 
            scale: smoothGlobeScale,
            opacity: globeOpacity,
            y: globeY
          }}
          className="mt-8 md:mt-12 absolute top-[35vh] md:top-[40vh] w-full flex justify-center"
        >
          <GlobeDemo />
        </motion.div>

        <motion.div 
          style={{ 
            opacity: textOpacity, 
            scale: textScale
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl text-center pointer-events-auto px-4 md:px-6 flex flex-col items-center gap-6 md:gap-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
            Your Intelligent Career Agent
          </h2>
          <div className="w-16 md:w-24 h-1 bg-white/50 rounded-full" />
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light max-w-2xl drop-shadow-lg">
            Vangard takes your details and autonomously scouts opportunities across platforms like <span className="font-semibold text-white">Indeed</span> and <span className="font-semibold text-white">LinkedIn</span>.
            <br/><br/>
            Stop searching. Start working.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
