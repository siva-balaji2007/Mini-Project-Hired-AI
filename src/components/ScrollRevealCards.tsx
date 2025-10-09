import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Sparkles, Zap, Star, Heart, TrendingUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface CardData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const defaultCards: CardData[] = [
  {
    id: 1,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology and creative solutions.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Performance",
    description: "Lightning-fast execution and optimized workflows for maximum efficiency.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Excellence",
    description: "Committed to delivering the highest quality in every project we undertake.",
    icon: <Star className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    title: "Passion",
    description: "Driven by love for what we do and dedication to our craft.",
    icon: <Heart className="w-6 h-6" />,
    color: "from-rose-500 to-red-500",
  },
  {
    id: 5,
    title: "Growth",
    description: "Continuously evolving and scaling to meet tomorrow's challenges.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
];

interface ScrollRevealCardsProps {
  cards?: CardData[];
}

const ScrollRevealCards: React.FC<ScrollRevealCardsProps> = ({ cards = defaultCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const totalCards = cards.length;
      const cardsToShow = Math.floor(latest * (totalCards + 1));
      const newVisibleCards = Array.from({ length: Math.min(cardsToShow, totalCards) }, (_, i) => i);
      setVisibleCards(newVisibleCards);
    });

    return () => unsubscribe();
  }, [scrollYProgress, cards.length]);

  const heightMultiplier = cards.length * 100;

  return (
    <div ref={containerRef} className="relative bg-background" style={{ height: `${heightMultiplier}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        
        <div className="relative z-10 w-full max-w-2xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              Scroll to discover what drives us forward
            </p>
          </div>

          <div className="relative min-h-[400px] flex items-center justify-center">
            {cards.map((card, index) => {
              const isVisible = visibleCards.includes(index);
              const isPrevious = visibleCards.length > 0 && index < visibleCards[visibleCards.length - 1];
              
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 100,
                    scale: isVisible ? 1 : 0.8,
                    filter: isPrevious ? "blur(4px)" : "blur(0px)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    zIndex: isVisible && !isPrevious ? 10 : index,
                  }}
                >
                  <Card className="w-full max-w-md border-2 shadow-2xl bg-card/95 backdrop-blur-sm">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                        {card.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {card.description}
                      </CardDescription>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {String(index + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
                        </span>
                        <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${card.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  visibleCards.includes(index)
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollRevealCards;
