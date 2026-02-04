"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  description: string;
  name: string;
  handle: string;
  image: string;
};

export const AnimatedTestimonials = ({
  data,
  autoplay = false,
}: {
  data: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % data.length);
  }, [data.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + data.length) % data.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-full mx-auto antialiased font-sans py-8 sm:py-12 lg:py-20 overflow-hidden">
      <div className="relative">
        {/* First Row - Moving Left */}
        <motion.div
          className="flex gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {[...data, ...data].map((testimonial, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[320px] p-3 sm:p-4 transition-all duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4
                    className="text-white truncate"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(0.8125rem, 1.6vw, 0.875rem)",
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-gray-500 truncate"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(0.6875rem, 1.4vw, 0.75rem)",
                    }}
                  >
                    {testimonial.handle}
                  </p>
                </div>
              </div>
              <p
                className="text-gray-400 line-clamp-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.8125rem, 1.6vw, 0.875rem)",
                  lineHeight: "1.6",
                }}
              >
                {testimonial.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Second Row - Moving Right */}
        <motion.div
          className="flex gap-3 sm:gap-4 lg:gap-6"
          animate={{
            x: [-1000, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {[...data, ...data].map((testimonial, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[320px] p-3 sm:p-4 transition-all duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4
                    className="text-white truncate"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(0.8125rem, 1.6vw, 0.875rem)",
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-gray-500 truncate"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(0.6875rem, 1.4vw, 0.75rem)",
                    }}
                  >
                    {testimonial.handle}
                  </p>
                </div>
              </div>
              <p
                className="text-gray-400 line-clamp-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.8125rem, 1.6vw, 0.875rem)",
                  lineHeight: "1.6",
                }}
              >
                {testimonial.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};