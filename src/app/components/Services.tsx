import { motion } from "motion/react";
import { ExpandOnHover } from "./ExpandOnHover";

const services = [
  {
    heading: "SERVICE 01",
    subheading: "Digital Craftsmanship",
    title: "Web Design & Development",
    description: "Custom websites built with modern technologies, responsive design, and optimized performance to deliver exceptional user experiences.",
    imageUrl: "https://images.unsplash.com/photo-1542837336-d14bdf342f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudCUyMGxhcHRvcHxlbnwxfHx8fDE3NzAwOTQ1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    heading: "SERVICE 02",
    subheading: "Visual Excellence",
    title: "Brand Identity Design",
    description: "Creating memorable logos, cohesive visual systems, and compelling brand narratives that resonate with your target audience.",
    imageUrl: "https://images.unsplash.com/photo-1762787863004-767d5d7eac07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbG9nb3xlbnwxfHx8fDE3NzAxODY3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    heading: "SERVICE 03",
    subheading: "User Experience",
    title: "UI/UX Design",
    description: "User-centered interfaces designed for engagement, accessibility, and seamless experiences that drive conversions.",
    imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDE4Njc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    heading: "SERVICE 04",
    subheading: "Growth & Analytics",
    title: "Digital Strategy",
    description: "Data-driven strategies to enhance your online presence and achieve measurable business growth across all digital channels.",
    imageUrl: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc3RyYXRlZ3klMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcwMTg2NzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#000000", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading and Description Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-12 md:mb-16 lg:mb-20 items-start">
          {/* Left: OUR SERVICES Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-white uppercase leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 6vw, 50px)",
                letterSpacing: "0.05em",
              }}
            >
              OUR<br />SERVICES
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-start md:justify-end items-start"
          >
            <p
              className="text-gray-300 text-left md:text-right max-w-md"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.9375rem, 2vw, 1.125rem)",
                lineHeight: "1.8",
              }}
            >
              We offer comprehensive digital solutions tailored to elevate your brand and achieve your business objectives.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <ExpandOnHover items={services} />
      </div>
    </section>
  );
}