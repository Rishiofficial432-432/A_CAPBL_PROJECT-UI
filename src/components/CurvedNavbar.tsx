import { motion } from 'motion/react';

export default function CurvedNavbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-10 py-3 md:py-4 flex items-center gap-4 md:gap-10 shadow-2xl shadow-black/10 pointer-events-auto"
      >
        <a href="#" className="hidden md:block text-white/70 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors">Index</a>
        <a href="#" className="hidden md:block text-white/70 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors">Studio</a>
        
        <div className="hidden md:block w-px h-4 bg-white/10 mx-2"></div>
        
        <span className="text-white font-bold tracking-tighter text-lg">VANGARD</span>
        
        <div className="hidden md:block w-px h-4 bg-white/10 mx-2"></div>

        <a href="#" className="hidden md:block text-white/70 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors">Projects</a>
        <a href="#" className="hidden md:block text-white/70 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors">Contact</a>
      </motion.nav>
    </div>
  );
}
