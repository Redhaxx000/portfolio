import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LiquidGlassButton } from './liquid-glass-button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/20 rounded-3xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={20} />
            </motion.button>

            {/* Project image */}
            <div className="relative aspect-video overflow-hidden rounded-t-3xl">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {project.title}
                </h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Description */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl mb-4 text-white">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.fullDescription || 
                     `${project.description} This project showcases innovative design thinking and technical excellence, pushing the boundaries of what's possible in digital experiences. Through careful attention to detail and user-centered design principles, we created a solution that not only meets functional requirements but also delivers an exceptional user experience.`
                    }
                  </p>
                  
                  <h3 className="text-xl mb-4 text-white">Challenge & Solution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The primary challenge was creating a seamless user experience while maintaining high performance standards. Our solution involved implementing cutting-edge technologies and design patterns that ensure both aesthetic appeal and functional excellence.
                  </p>
                </div>

                {/* Project details */}
                <div>
                  <h3 className="text-xl mb-4 text-white">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.technologies || ['React', 'TypeScript', 'Tailwind CSS', 'Motion']).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl mb-4 text-white">Project Links</h3>
                  <div className="space-y-3">
                    <LiquidGlassButton className="w-full flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      View Live Site
                    </LiquidGlassButton>
                    <LiquidGlassButton variant="secondary" className="w-full flex items-center justify-center gap-2">
                      <Github size={16} />
                      View Source
                    </LiquidGlassButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}