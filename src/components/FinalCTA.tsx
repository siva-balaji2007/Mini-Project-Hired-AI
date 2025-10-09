import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000000] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              animate={{
                rotate: [0, -1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Rocket className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
            </motion.div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-relaxed">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="block"
              >
                "Your career deserves more than a resume."
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="block mt-4 bg-gradient-to-r from-white via-[#E0E0E0] to-white bg-clip-text text-transparent"
              >
                It deserves a launchpad."
              </motion.span>
            </blockquote>
          </motion.div>

          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-[#E0E0E0] max-w-2xl mx-auto leading-relaxed">
              Transform your career trajectory with AI-powered tools designed to help you land your dream job faster than ever before.
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group bg-white text-black px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center justify-center mx-auto space-x-3 min-w-[250px]">
                <span>Start Free Today</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 pt-8"
            >
              <div className="flex items-center space-x-2 text-[#4D4D4D]">
                <Sparkles className="w-5 h-5 text-[#E0E0E0]" />
                <span className="text-sm">Free to start</span>
              </div>
              <div className="flex items-center space-x-2 text-[#4D4D4D]">
                <div className="w-2 h-2 bg-[#E0E0E0] rounded-full animate-pulse" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-[#4D4D4D]">
                <div className="w-2 h-2 bg-[#E0E0E0] rounded-full animate-pulse" />
                <span className="text-sm">Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 opacity-10"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 opacity-10"
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
