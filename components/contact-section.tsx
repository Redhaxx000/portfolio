import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { LiquidGlassButton } from './liquid-glass-button';
import { ContactForm } from './contact-form';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950 to-gray-900" />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px', '0px 0px']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            LET'S CREATE
          </h2>
          <h3 className="text-3xl md:text-5xl mb-12 bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text text-transparent">
            SOMETHING AMAZING
          </h3>
        </motion.div>
        
        {!showForm ? (
          <>
            <motion.p 
              className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Ready to bring your vision to life? Let's collaborate and create 
              something extraordinary together.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <LiquidGlassButton onClick={() => setShowForm(true)}>
                START A PROJECT
              </LiquidGlassButton>
              <LiquidGlassButton variant="secondary">
                DOWNLOAD RESUME
              </LiquidGlassButton>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <ContactForm />
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <LiquidGlassButton 
                variant="secondary" 
                onClick={() => setShowForm(false)}
              >
                BACK TO CONTACT INFO
              </LiquidGlassButton>
            </motion.div>
          </motion.div>
        )}
        
        {/* Contact info */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {[
            { label: 'EMAIL', value: 'hello@creative.portfolio' },
            { label: 'PHONE', value: '+1 (555) 123-4567' },
            { label: 'LOCATION', value: 'New York, NY' }
          ].map((item, index) => (
            <motion.div 
              key={item.label}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                {item.label}
              </div>
              <div className="text-white">
                {item.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Social links */}
        <motion.div 
          className="flex justify-center space-x-8"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {['LinkedIn', 'Dribbble', 'Behance', 'Instagram'].map((social, index) => (
            <motion.a 
              key={social}
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
      >
        <p className="text-gray-600 text-sm">
          © 2025 Creative Portfolio. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}