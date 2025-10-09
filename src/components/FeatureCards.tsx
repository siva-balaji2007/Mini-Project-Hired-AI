import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Zap, ShieldCheck, Brain, Folder } from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI-Powered Resume Builder",
    description: "Create recruiter-ready resumes in minutes using AI phrasing and optimization.",
    icon: <Brain className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Personalized Learning Path",
    description: "Get adaptive lessons and coding challenges based on your career goals.",
    icon: <Zap className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Smart Job Discovery",
    description: "Find role-matched jobs with filters for location, salary, and company.",
    icon: <Users className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Interview Prep with AI",
    description: "Practice mock interviews with instant feedback on clarity and tone.",
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
  },
  {
    id: 5,
    title: "Portfolio Builder",
    description: "Auto-generate and customize your personal portfolio in seconds.",
    icon: <Folder className="w-10 h-10 text-white" />,
  },
];

export default function WhyChooseHiredAI() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.9", "1 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section
      ref={ref}
      id="why-choose"
      className="flex flex-col items-center justify-center py-24 bg-[#000000] text-white overflow-hidden"
    >
      <motion.div style={{ opacity, y }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Hired AI?</h2>
        <p className="text-[#E0E0E0] text-lg">Discover our powerful features</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#1A1A1A] backdrop-blur-sm p-8 rounded-2xl border border-[#4D4D4D] hover:border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader className="flex flex-col items-center space-y-4 text-center pb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-2xl bg-[#4D4D4D]/20 flex items-center justify-center shadow-lg hover:bg-[#4D4D4D]/30 transition-all duration-300"
                >
                  {feature.icon}
                </motion.div>
                <CardTitle className="text-xl font-bold text-white leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-[#E0E0E0] leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
