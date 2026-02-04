import { motion } from "motion/react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      description:
        "FusionLab transformed our brand identity completely. Their creative approach and attention to detail resulted in a stunning website that perfectly captures our vision. The team's professionalism is unmatched!",
      image:
        "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzAxMDEzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Sarah Mitchell",
      handle: "CEO, TechVision",
    },
    {
      description:
        "Working with FusionLab was an absolute pleasure. They delivered a modern, responsive website that exceeded our expectations. Their UI/UX expertise is truly world-class!",
      image:
        "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDA2NjM2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Michael Chen",
      handle: "Founder, StartupHub",
    },
    {
      description:
        "FusionLab's creative team brought our digital strategy to life with innovative solutions. The project was delivered on time and the results have been phenomenal for our business growth.",
      image:
        "https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NzAxMDQyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Jessica Rodriguez",
      handle: "Marketing Director, BrandCo",
    },
    {
      description:
        "The level of creativity and technical expertise at FusionLab is outstanding. They redesigned our entire digital presence and the impact on our customer engagement has been remarkable.",
      image:
        "https://images.unsplash.com/photo-1589458223095-03eee50f0054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NzAxNzU3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "David Thompson",
      handle: "VP of Design, CreativeWorks",
    },
    {
      description:
        "FusionLab doesn't just create websites, they craft experiences. Their holistic approach to design and development has helped us stand out in a competitive market. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFufGVufDF8fHx8MTc3MDE0NzI5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Yuki Tanaka",
      handle: "Product Lead, InnovateLabs",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-10 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8"
      style={{ backgroundColor: "#000000", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-10 lg:mb-12 items-start">
          {/* Left: CLIENT TESTIMONIALS Heading */}
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
              CLIENT<br />TESTIMONIALS
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
              Don't just take our word for it — hear from the brands we've helped
              transform their digital presence.
            </p>
          </motion.div>
        </div>

        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <AnimatedTestimonials data={testimonials} autoplay={true} />
        </motion.div>
      </div>
    </section>
  );
}