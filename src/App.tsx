/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GradientBlinds from './components/GradientBlinds';
import CurvedNavbar from './components/CurvedNavbar';
import { GlobeDemo } from './components/GlobeDemo';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { OrbitingCirclesDemo } from './components/OrbitingCirclesDemo';
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import StatsBar from './components/StatsBar';
import LogoLoop from './components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiRust, SiGo, SiDocker, SiKubernetes } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiRust />, title: "Rust", href: "https://www.rust-lang.org" },
  { node: <SiGo />, title: "Go", href: "https://go.dev" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
];

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
  
  // Title animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="w-full bg-black relative overflow-x-hidden md:cursor-none">
      <div className="hidden md:block">
        <SmoothCursor />
      </div>
      <CurvedNavbar />
      
      {/* Fixed Background Layer */}
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
      
      {/* Fixed Title and Globe Layer */}
      <div className="fixed inset-0 z-10 flex flex-col items-center justify-start w-full max-w-full p-4 pt-24 md:p-8 md:pt-32 pointer-events-none h-screen">
        <motion.div 
          style={{ opacity: titleOpacity, y: titleY }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tighter mix-blend-overlay whitespace-nowrap pointer-events-auto select-none mt-12 md:mt-24">
            PROJECT VANGARD
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light tracking-wide mix-blend-overlay pointer-events-auto select-none text-center">
            A CAPBL PROJECT
          </p>
          
          <button className="mt-6 md:mt-8 px-6 py-2 border border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-colors uppercase cursor-pointer bg-transparent mix-blend-overlay mb-8 md:mb-12 pointer-events-auto">
            Enter
          </button>
        </motion.div>

        <motion.div 
          style={{ 
            scale: smoothGlobeScale,
            opacity: globeOpacity,
            y: globeY
          }}
          className="mt-8 md:mt-12 absolute top-[45vh] md:top-[40vh] w-full flex justify-center"
        >
          <GlobeDemo />
        </motion.div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-20 flex flex-col w-full">
        {/* Spacer for the first screen (Globe view) */}
        <div className="h-screen w-full pointer-events-none"></div>

        {/* The Content Section */}
        <div className="w-full flex flex-col items-center pb-24 pt-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full px-4 md:px-12">
            {/* Orbiting Circles - Left on Desktop */}
            <div className="w-full max-w-lg mt-12 md:mt-0 order-2 md:order-1 flex justify-center md:justify-end">
              <OrbitingCirclesDemo />
            </div>

            {/* Text Content - Right on Desktop */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-none drop-shadow-2xl">
                Your Intelligent Career Agent
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-snug font-light drop-shadow-lg mt-6">
                Vangard takes your details and autonomously scouts opportunities across the entire digital landscape, connecting you with elite roles tailored to your potential.
                <br/><br/>
                Stop searching. Start working.
              </p>
            </div>
          </div>

          {/* Tech Stack Loop */}
          <div className="w-screen mt-24 flex flex-col items-center gap-8">
            <h3 className="text-2xl md:text-3xl font-light text-white/80 tracking-wide uppercase text-center px-4">
              Job and opportunity for each skill
            </h3>
            
            <div className="w-full h-[100px] relative overflow-hidden mask-gradient">
              <LogoLoop
                logos={techLogos}
                speed={30}
                direction="left"
                logoHeight={50}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut={false}
                ariaLabel="Technology partners"
              />
            </div>
          </div>

          {/* Stats Bar - Centered Below */}
          <div className="w-full mt-16 md:mt-24 flex justify-center px-4">
            <StatsBar />
          </div>
        </div>
      </div>
    </div>
  );
}
