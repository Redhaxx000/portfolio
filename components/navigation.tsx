import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { LiquidGlassButton } from './liquid-glass-button';
import { Moon, Sun } from 'lucide-react';

interface NavigationProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export function Navigation({ toggleTheme, isDark }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 100);
    });
    return unsubscribe;
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT', id: 'about' },
    { label: 'PORTFOLIO', id: 'portfolio' },
    { label: 'CONTACT', id: 'contact' }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      style={{ opacity }}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{
          backdropFilter: `blur(${backdropBlur}px)`,
        }}
      >
        {/* Logo */}
        <motion.div
          className="text-2xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          CREATIVE
        </motion.div>

        {/* Navigation items */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wider"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Theme toggle and CTA */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          
          <LiquidGlassButton onClick={() => scrollToSection('contact')}>
            GET IN TOUCH
          </LiquidGlassButton>
        </div>
      </motion.div>
    </motion.nav>
  );
}