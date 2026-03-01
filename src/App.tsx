/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GradientBlinds from './components/GradientBlinds';
import CurvedNavbar from './components/CurvedNavbar';
import { GlobeDemo } from './components/GlobeDemo';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const globeY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="w-full min-h-[200vh] bg-black flex flex-col items-center relative overflow-x-hidden">
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
      
      <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-full p-8 pt-32 pointer-events-none h-screen sticky top-0">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter mix-blend-overlay whitespace-nowrap pointer-events-auto select-none mt-24">
          PROJECT VANGARD
        </h1>
        <p className="text-xl text-white/80 font-light tracking-wide mix-blend-overlay pointer-events-auto select-none">
          A CAPBL PROJECT
        </p>
        
        <button className="mt-8 px-6 py-2 border border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-colors uppercase cursor-pointer bg-transparent mix-blend-overlay mb-12 pointer-events-auto">
          Enter
        </button>

        <motion.div 
          style={{ 
            scale: globeScale,
            opacity: globeOpacity,
            y: globeY
          }}
          className="mt-12"
        >
          <GlobeDemo />
        </motion.div>
      </div>
    </div>
  );
}
