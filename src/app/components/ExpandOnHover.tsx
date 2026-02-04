import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ExpandOnHoverProps {
  items: Array<{
    heading: string;
    subheading: string;
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

export function ExpandOnHover({ items }: ExpandOnHoverProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 h-auto sm:h-[400px] md:h-[500px]">
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const isAnyHovered = hoveredIndex !== null;

        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
            animate={{
              flex: isHovered ? 2 : isAnyHovered ? 0.5 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group h-[280px] sm:h-full"
            style={{
              minWidth: isAnyHovered && !isHovered ? "100px" : "200px",
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <motion.div
                animate={{
                  opacity: isHovered ? 0.7 : 0.85,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 bg-black"
              />
            </div>

            {/* Red Border - Always visible on mobile, on hover for desktop */}
            <div
              className="absolute inset-0 border-2 rounded-2xl sm:rounded-3xl pointer-events-none block sm:hidden"
              style={{ borderColor: "#FF3B3B" }}
            />
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 border-2 border-[#FF3B3B] rounded-2xl sm:rounded-3xl pointer-events-none hidden sm:block"
            />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 md:p-8">
              {/* Mobile: Always show expanded content */}
              <div className="block sm:hidden space-y-3">
                <div className="space-y-1.5">
                  <p
                    className="text-[#FF3B3B] uppercase tracking-wider"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                    }}
                  >
                    {item.heading}
                  </p>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 5vw, 2rem)",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                    }}
                  >
                    {item.subheading}
                  </p>
                </div>
                <p
                  className="text-gray-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Desktop: Collapsed State - Vertical Text */}
              <motion.div
                animate={{
                  opacity: isHovered ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute bottom-5 sm:bottom-6 md:bottom-8 left-5 sm:left-6 md:left-8 right-5 sm:right-6 md:right-8 hidden sm:block"
                style={{
                  writingMode: isAnyHovered && !isHovered ? "vertical-rl" : "horizontal-tb",
                  textOrientation: "mixed",
                }}
              >
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: isAnyHovered && !isHovered ? "clamp(1rem, 2vw, 1.25rem)" : "clamp(1.25rem, 2.5vw, 1.75rem)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </h3>
              </motion.div>

              {/* Desktop: Expanded State - Full Content */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0, ease: "easeInOut" }}
                className="space-y-3 sm:space-y-4 hidden sm:block"
              >
                <div className="space-y-1">
                  <p
                    className="text-[#FF3B3B] uppercase tracking-wider"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                    }}
                  >
                    {item.heading}
                  </p>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                    }}
                  >
                    {item.subheading}
                  </p>
                </div>
                <p
                  className="text-gray-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}