import { motion, useInView } from "motion/react";
import heroImage from "figma:asset/783726c3cce11ea58c50d1e58b70ba4897f5279a.png";
import { ArrowUpRight, Star, Sparkles, Zap, Circle } from "lucide-react";
import { TextRoll } from "./TextRoll";
import { useEffect, useState, useRef } from "react";

function CounterAnimation({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let currentCount = 0;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          const stepDuration = duration / steps;

          intervalRef.current = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
              setCount(target);
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
            } else {
              setCount(Math.floor(currentCount));
            }
          }, stepDuration);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count}K{suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-4 md:px-6 lg:px-8 pt-24 sm:pt-24 md:pt-28 pb-20 sm:pb-16 md:pb-20"
      style={{ backgroundColor: "#FF3B3B", fontFamily: "Inter, sans-serif" }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full opacity-10"
        style={{ backgroundColor: "#FFFFFF" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full opacity-10"
        style={{ backgroundColor: "#FFFFFF" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Floating Icons - Visible on mobile too but smaller */}
      <motion.div
        className="absolute top-28 right-8 sm:right-1/4"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white/20" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-36 left-8 sm:left-1/4"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Zap className="w-6 h-6 sm:w-10 sm:h-10 lg:w-16 lg:h-16 text-white/20" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center flex-1 relative z-10">
        {/* Top Section with Stats and Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-6 lg:gap-8 items-center">
          {/* Center Heading */}
          <motion.div
            key="center-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="col-span-1 lg:col-span-12 text-center flex flex-col items-center justify-center gap-6 sm:gap-4 lg:gap-6 xl:gap-8 order-1 lg:order-2 px-1"
          >
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 sm:gap-2 bg-white/20 backdrop-blur-sm px-5 sm:px-4 lg:px-6 py-2.5 sm:py-1.5 lg:py-2 rounded-full border border-white/30 shadow-lg"
            >
              <Circle className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 fill-white text-white animate-pulse" />
              <span 
                className="text-white font-semibold tracking-wide uppercase"
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)"
                }}
              >
                Award-Winning Agency
              </span>
            </motion.div>

            <h1 
              className="text-white leading-[0.9] sm:leading-[0.85] flex flex-col items-center gap-1 sm:gap-1 lg:gap-2 px-2"
              style={{ 
                fontFamily: "Inter, sans-serif", 
                fontWeight: 900, 
                fontSize: "clamp(3.5rem, 15vw, 8.5rem)",
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)",
                letterSpacing: "-0.02em"
              }}
            >
              <TextRoll center className="uppercase">CREATIVE</TextRoll>
              <TextRoll center className="uppercase">STUDIO</TextRoll>
            </h1>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-white max-w-sm sm:max-w-2xl px-4 sm:px-6 drop-shadow-lg"
              style={{ 
                fontFamily: "Inter, sans-serif", 
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)", 
                fontWeight: 500,
                lineHeight: "1.6",
                letterSpacing: "0.01em",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
              }}
            >
              We design and develop modern websites, interfaces, and digital products that help brands stand out in the digital landscape.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              className="flex flex-wrap gap-4 items-center justify-center mt-4 sm:mt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 sm:px-10 lg:px-12 py-4 sm:py-4 lg:py-5 bg-white text-[#FF3B3B] rounded-full hover:bg-white/95 transition-all duration-300 shadow-2xl group relative overflow-hidden w-auto"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(0.9375rem, 2.2vw, 1.125rem)",
                  letterSpacing: "0.05em",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                  minHeight: "52px"
                }}
              >
                <span className="flex items-center gap-2 sm:gap-2 lg:gap-3 relative z-10">
                  START A PROJECT
                  <ArrowUpRight className="w-5 h-5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Banner at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-2 sm:py-0.5" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}>
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-2 lg:gap-3 px-3 sm:px-2 lg:px-2.5">
              <span 
                className="uppercase"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontWeight: 800, 
                  fontSize: "clamp(0.875rem, 2.2vw, 1.25rem)",
                  letterSpacing: "0.05em",
                  color: "#FF3B3B"
                }}
              >
                LET'S DISCUSS IDEAS
              </span>
              <Star className="w-4 h-4 sm:w-3 sm:h-3 lg:w-4 lg:h-4" fill="#FF3B3B" stroke="#FF3B3B" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}