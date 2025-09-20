import { motion } from 'motion/react';
import { useState } from 'react';
import { LiquidGlassButton } from './liquid-glass-button';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl mb-2 text-white">Message Sent!</h3>
        <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-all duration-300"
            placeholder="Your name"
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </motion.div>
      </div>

      <motion.div
        className="mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="subject" className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-all duration-300"
          placeholder="Project collaboration"
        />
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <label htmlFor="message" className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-all duration-300 resize-none"
          placeholder="Tell me about your project and how we can work together..."
        />
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <LiquidGlassButton
          className={`px-12 py-4 flex items-center gap-3 mx-auto ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              SENDING...
            </>
          ) : (
            <>
              <Send size={16} />
              SEND MESSAGE
            </>
          )}
        </LiquidGlassButton>
      </motion.div>
    </motion.form>
  );
}