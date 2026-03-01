/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GradientBlinds from './components/GradientBlinds';

export default function App() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
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
      
      <div className="relative z-10 text-center p-8 w-full max-w-full">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter mix-blend-overlay whitespace-nowrap">
          PROJECT VANGARD
        </h1>
        <p className="text-xl text-white/80 font-light tracking-wide mix-blend-overlay">
          A CAPBL PROJECT
        </p>
        
        <button className="mt-8 px-6 py-2 border border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-colors uppercase cursor-pointer bg-transparent mix-blend-overlay">
          Enter
        </button>
      </div>
    </div>
  );
}
