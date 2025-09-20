import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LiquidGlassButton } from './liquid-glass-button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface PortfolioSectionProps {
  onProjectClick: (project: Project) => void;
}

const projects = [
  {
    id: 1,
    title: "ARCHITECTURAL VISION",
    category: "Design & Development",
    image: "https://images.unsplash.com/photo-1641393461063-0cd3f5a00545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc1ODM0MjM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A minimalist approach to modern architecture visualization"
  },
  {
    id: 2,
    title: "CREATIVE WORKSPACE",
    category: "Branding & Strategy",
    image: "https://images.unsplash.com/photo-1510873660878-bdf8de0ed851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMG1pbmltYWx8ZW58MXx8fHwxNzU4MzQyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Reimagining collaborative spaces for the digital age"
  },
  {
    id: 3,
    title: "MINIMAL DESIGN",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1707772558301-6dee224a43af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NTgzNDIzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Exploring the power of simplicity in visual communication"
  }
];

export function PortfolioSection({ onProjectClick }: PortfolioSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-950" />
      
      {/* Moving gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)'
        }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            PORTFOLIO
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Selected works that showcase the intersection of creativity and technology
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay content */}
                <motion.div 
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  whileHover={{ opacity: 1 }}
                >
                  <LiquidGlassButton onClick={() => onProjectClick(project)}>
                    VIEW PROJECT
                  </LiquidGlassButton>
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl mb-3 text-white group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <LiquidGlassButton>
            VIEW ALL PROJECTS
          </LiquidGlassButton>
        </motion.div>
      </div>
    </section>
  );
}