import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Resume Builder', path: '/resume-builder' },
        { name: 'Learning Path', path: '/learning-path' },
        { name: 'Job Discovery', path: '/job-discovery' },
        { name: 'Interview Prep', path: '/interview-prep' },
        { name: 'Portfolio Builder', path: '/portfolio-builder' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Status', path: '/status' },
        { name: 'Community', path: '/community' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, path: 'https://twitter.com/hiredai' },
    { name: 'LinkedIn', icon: Linkedin, path: 'https://linkedin.com/company/hiredai' },
    { name: 'GitHub', icon: Github, path: 'https://github.com/hiredai' },
  ];

  return (
    <footer className="bg-[#1A1A1A] backdrop-blur-sm border-t border-[#4D4D4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">H</span>
                </div>
                <span className="text-2xl font-bold text-white">Hired AI</span>
              </Link>

              <p className="text-[#4D4D4D] mb-6 max-w-md leading-relaxed">
                Empowering your career journey with AI-powered tools. From resume building to interview preparation, we're your partner in professional success.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-[#4D4D4D]/20 rounded-lg flex items-center justify-center text-[#4D4D4D] hover:text-white hover:bg-[#4D4D4D]/30 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[#4D4D4D] hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#4D4D4D]"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
            <p className="text-[#4D4D4D] text-sm mb-4">
              Get the latest career tips and product updates delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[#4D4D4D]/20 border border-[#4D4D4D] rounded-lg text-white placeholder-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Subscribe</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#4D4D4D] flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-[#4D4D4D] text-sm mb-4 sm:mb-0">
            <span>© {currentYear} Hired AI. Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-[#E0E0E0] fill-current" />
            </motion.div>
            <span>for job seekers everywhere.</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-[#4D4D4D]">
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-200">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
