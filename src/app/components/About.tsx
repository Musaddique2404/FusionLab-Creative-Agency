import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const accordionItems = [
  {
    title: "Creative Vision & Innovation",
    content: "We believe in pushing boundaries and exploring new possibilities. Our team combines creative thinking with cutting-edge technology to deliver innovative solutions that set your brand apart from the competition. Every project is an opportunity to create something extraordinary and memorable.",
  },
  {
    title: "Strategic Design Approach",
    content: "Our design philosophy goes beyond aesthetics. We craft purposeful, user-centered experiences that align with your business goals. Through meticulous research, thoughtful planning, and iterative refinement, we ensure every element serves a strategic purpose while maintaining visual excellence.",
  },
  {
    title: "Seamless Collaboration",
    content: "We view our clients as partners in the creative journey. Through transparent communication, regular updates, and collaborative workshops, we ensure your vision is at the heart of everything we create. Your insights and feedback drive our process, resulting in solutions that truly resonate with your audience.",
  },
  {
    title: "Measurable Impact & Growth",
    content: "Success isn't just about beautiful design—it's about driving real business results. We focus on creating solutions that improve user engagement, increase conversions, and support your long-term growth. Through analytics and continuous optimization, we ensure your investment delivers lasting value and tangible returns.",
  },
];

export function About() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#000000", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Layout: Heading and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-12 md:mb-16 lg:mb-20 items-start">
          {/* Left: WHO WE ARE Heading */}
          <div>
            <h2
              className="text-white uppercase leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 6vw, 50px)",
                letterSpacing: "0.05em",
              }}
            >
              WHO WE<br />ARE
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex justify-start md:justify-end items-start">
            <p
              className="text-gray-300 text-left md:text-right max-w-md"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.9375rem, 2vw, 1.125rem)",
                lineHeight: "1.8",
              }}
            >
              We design and develop modern websites, interfaces, and digital products that help brands stand out and grow.
            </p>
          </div>
        </div>

        {/* Bottom Layout: Image and Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-stretch">
          {/* Left: Image */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(255, 59, 59, 0.3)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-800 transition-all duration-500 h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1697636979316-cc18d4369e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYmxhY2slMjBiYWNrZ3JvdW5kJTIwbW9kZXJufGVufDF8fHx8MTc3MDE5NTgyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mobile UI showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Accordion Cards */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {accordionItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -6, 
                  boxShadow: "0 15px 40px rgba(255, 59, 59, 0.2)",
                }}
                onMouseEnter={() => setOpenIndex(index)}
                onClick={() => toggleAccordion(index)}
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 cursor-pointer transition-all duration-300 ease-in-out border-2"
                style={{ 
                  backgroundColor: "#1C1C1C",
                  borderColor: openIndex === index ? "rgba(255, 59, 59, 0.5)" : "rgba(255, 59, 59, 0)"
                }}
              >
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 rounded-full p-2 flex items-center justify-center"
                    style={{ 
                      backgroundColor: openIndex === index ? "rgba(255, 59, 59, 0.2)" : "rgba(255, 255, 255, 0.05)",
                      width: "44px",
                      height: "44px"
                    }}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} style={{ color: "#FF3B3B" }} />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                    )}
                  </motion.div>
                </div>
                
                {/* Animated accordion for all screen sizes */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                  style={{
                    ...(openIndex !== index && { display: 'none' })
                  }}
                >
                  <p
                    className="text-gray-300 mt-3 sm:mt-4 md:mt-6"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(0.875rem, 2vw, 1.0625rem)",
                      lineHeight: "1.7",
                    }}
                  >
                    {item.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}