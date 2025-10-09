import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Resume Builder', path: '/resume-builder' },
    { name: 'Learning Path', path: '/learning-path' },
    { name: 'Job Discovery', path: '/job-discovery' },
    { name: 'Interview Prep', path: '/interview-prep' },
    { name: 'Portfolio Builder', path: '/portfolio-builder' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 rounded-b-2xl shadow-lg"
      style={{
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white drop-shadow-sm"
            >
              Hired AI
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Link
                    to={link.path}
                    className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                      isActive(link.path)
                        ? 'text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-full border-2 border-white/40 shadow-2xl"
                        style={{
                          background: 'rgba(255, 255, 255, 0.3)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          boxShadow: '0 8px 32px rgba(255, 255, 255, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(255, 255, 255, 0.1)',
                          transform: 'translateY(-1px)'
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="relative bg-white text-black px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/20 overflow-hidden border border-white/20 flex items-center gap-2"
              >
                <motion.span
                  whileHover={{ y: -0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  Login
                </motion.span>
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2 rounded-xl text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/40 backdrop-blur-xl rounded-b-2xl mx-4 mb-4"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to={link.path}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-white/10 text-white backdrop-blur-sm border border-white/20'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <Link
              to="/login"
              className="block w-full bg-white text-black px-4 py-3 text-base font-semibold rounded-xl text-center hover:bg-white/90 transition-all duration-200 shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
export default Navbar;
