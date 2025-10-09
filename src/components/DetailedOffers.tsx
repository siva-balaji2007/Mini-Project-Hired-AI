import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  BookOpen,
  Search,
  MessageSquare,
  FolderOpen,
  CheckCircle,
  Sparkles,
  Zap,
  Users,
  Award
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  icon: React.ReactNode;
  features: string[];
  description: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    id: 'resume-builder',
    title: 'Resume Builder',
    icon: <FileText className="w-6 h-6" />,
    description: 'Create professional, ATS-optimized resumes with AI-powered suggestions and real-time feedback.',
    features: [
      'AI phrasing for achievements',
      'ATS-optimized templates',
      'Keyword gap analysis',
      'One-click PDF/Word export'
    ]
  },
  {
    id: 'learning-path',
    title: 'Learning Path',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Personalized learning journeys with adaptive tasks and progress tracking tailored to your career goals.',
    features: [
      'Adaptive tasks after mock interviews',
      'Micro-lessons on coding & soft skills',
      'Progress tracking dashboard',
      'Career-goal-based suggestions'
    ]
  },
  {
    id: 'job-discovery',
    title: 'Job Discovery',
    icon: <Search className="w-6 h-6" />,
    description: 'Smart job matching based on your profile with intelligent filters and application tracking.',
    features: [
      'Resume-based recommendations',
      'Smart filters (location, role, salary)',
      'Live job listings from top companies',
      'Application assistant & tracker'
    ]
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    icon: <MessageSquare className="w-6 h-6" />,
    description: 'Comprehensive interview preparation with AI-powered mock interviews and real-time feedback.',
    features: [
      'Question bank (general + domain-specific)',
      'AI mock interviews (text & voice)',
      'Real-time feedback on clarity & tone',
      'STAR method guidance'
    ]
  },
  {
    id: 'portfolio-builder',
    title: 'Portfolio Builder',
    icon: <FolderOpen className="w-6 h-6" />,
    description: 'Auto-generate stunning portfolio websites that showcase your professional story and achievements.',
    features: [
      'Auto-generated portfolio site',
      'About Me, Skills, Projects, Certificates',
      'Customizable templates',
      'Shareable live link'
    ]
  }
];

const DetailedOffers: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive suite of AI-powered tools designed to accelerate your career growth
          </p>
        </motion.div>

        {/* Expandable Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {serviceDetails.map((service, index) => (
              <motion.div key={service.id} variants={itemVariants}>
                <AccordionItem
                  value={service.id}
                  className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-white/20 transition-colors duration-300"
                >
                  <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group">
                    <div className="flex items-center space-x-4 w-full">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-200"
                      >
                        {service.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-8 pb-8">
                    <div className="pt-4 border-t border-gray-700/30">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Call to action for each service */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 pt-6 border-t border-gray-700/30"
                      >
                        <button className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-200 flex items-center space-x-2 group">
                          <span>Try {service.title}</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </button>
                      </motion.div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers with Hired AI
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Free Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedOffers;
