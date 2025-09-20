import { motion } from 'motion/react';
import { LiquidGlassButton } from './liquid-glass-button';

interface HeroSectionProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export function HeroSection({ onViewWork, onGetInTouch }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"
        animate={{ 
          background: [
            "linear-gradient(to top, transparent, rgba(255,255,255,0.05), transparent)",
            "linear-gradient(to top, transparent, rgba(255,255,255,0.1), transparent)",
            "linear-gradient(to top, transparent, rgba(255,255,255,0.05), transparent)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          CREATIVE
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text text-transparent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          PORTFOLIO
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          Crafting digital experiences that blur the line between imagination and reality
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          <LiquidGlassButton onClick={onViewWork}>
            VIEW MY WORK
          </LiquidGlassButton>
          <LiquidGlassButton variant="secondary" onClick={onGetInTouch}>
            GET IN TOUCH
          </LiquidGlassButton>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ 
            borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}