import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface LiquidGlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function LiquidGlassButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: LiquidGlassButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative overflow-hidden px-8 py-4 rounded-2xl
        backdrop-blur-xl border border-white/20
        transition-all duration-500 group
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10' 
          : 'bg-gradient-to-r from-black/10 to-black/5 hover:from-black/20 hover:to-black/10'
        }
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Liquid effect background */}
      <motion.div
        className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          ${variant === 'primary'
            ? 'bg-gradient-to-r from-white/20 via-white/10 to-transparent'
            : 'bg-gradient-to-r from-gray-800/30 via-gray-600/20 to-transparent'
          }
        `}
        initial={{ x: '-100%' }}
        whileHover={{ 
          x: '100%',
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      />
      
      {/* Glass shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%', skewX: -15 }}
        whileHover={{ 
          x: '100%',
          transition: { duration: 0.6, ease: "easeInOut", delay: 0.1 }
        }}
      />
      
      <span className="relative z-10 text-white mix-blend-difference">
        {children}
      </span>
    </motion.button>
  );
}