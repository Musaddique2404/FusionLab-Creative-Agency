import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    heading: "Discovery",
    subheading: "Understanding Your Vision",
    description: "We dive deep into your business goals, target audience, and project requirements to create a solid foundation.",
    imageUrl: "https://images.unsplash.com/photo-1762427353897-20e566f120a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNjb3ZlcnklMjByZXNlYXJjaCUyMHBsYW5uaW5nfGVufDF8fHx8MTc3MDE4NzQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "02",
    heading: "Design",
    subheading: "Crafting Visual Excellence",
    description: "Our creative team transforms ideas into stunning designs that capture your brand essence and engage users.",
    imageUrl: "https://images.unsplash.com/photo-1767481626814-d5cf877d1a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjcmVhdGl2ZSUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NzAxODc0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "03",
    heading: "Development",
    subheading: "Building with Precision",
    description: "We bring designs to life with clean code, modern technologies, and best practices for optimal performance.",
    imageUrl: "https://images.unsplash.com/photo-1672385252168-041b18d5ad37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MDE4NzQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "04",
    heading: "Launch",
    subheading: "Going Live & Beyond",
    description: "We ensure a smooth launch and provide ongoing support to help your project thrive in the digital landscape.",
    imageUrl: "https://images.unsplash.com/photo-1762135245629-1e79d4cc30b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuY2glMjByb2NrZXQlMjBzdWNjZXNzfGVufDF8fHx8MTc3MDE4NzQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Process() {
  const container = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      try {
        const imageElements = imageRefs.current.filter(el => el !== null);
        const totalImages = imageElements.length;

        if (totalImages === 0) return;

        // Create individual scroll triggers for each image
        imageElements.forEach((img, index) => {
          if (!img) return;

          ScrollTrigger.create({
            trigger: img,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });

        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      } catch (error) {
        console.error("Process animation error:", error);
      }
    },
    { scope: container },
  );

  return (
    <section
      id="process"
      className="relative"
      style={{ backgroundColor: "#000000" }}
      ref={container}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-[50px] pb-0">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10 md:mb-12 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left: Heading */}
            <h2
              className="text-white uppercase leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 6vw, 50px)",
                letterSpacing: "0.05em",
              }}
            >
              OUR<br />PROCESS
            </h2>

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
                Our streamlined approach ensures every project is executed with precision, creativity, and strategic thinking from concept to launch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Scroll Image Reveal Layout - All Screen Sizes */}
      <div className="pb-10 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left/Top: Scrolling Images */}
          <div className="relative order-1 lg:order-1">
            <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 px-3 sm:px-4 md:px-6 lg:px-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden"
                >
                  <ImageWithFallback
                    src={step.imageUrl}
                    alt={step.heading}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Step Number Overlay on Image */}
                  <div
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-12 lg:left-12"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(4rem, 12vw, 10rem)",
                      lineHeight: "1",
                      color: "#FF3B3B",
                      opacity: 0.4,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Mobile/Tablet: Show content directly below image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:hidden bg-gradient-to-t from-black via-black/95 to-transparent">
                    <div className="space-y-2 sm:space-y-3">
                      {/* Step Number Badge */}
                      <div
                        className="inline-flex items-center justify-center rounded-full"
                        style={{
                          width: "44px",
                          height: "44px",
                          backgroundColor: "#FF3B3B",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 800,
                          fontSize: "1rem",
                          color: "white",
                        }}
                      >
                        {step.number}
                      </div>

                      <div className="space-y-1 sm:space-y-1.5">
                        <h4
                          className="text-white"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(1.5rem, 5vw, 2.25rem)",
                            lineHeight: "1.1",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {step.heading}
                        </h4>
                        <p
                          className="text-[#FF3B3B]"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: "clamp(0.9375rem, 2.5vw, 1.125rem)",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {step.subheading}
                        </p>
                      </div>

                      <div
                        className="w-10 sm:w-12 h-1"
                        style={{ backgroundColor: "#FF3B3B" }}
                      />

                      <p
                        className="text-gray-300"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "clamp(0.875rem, 2vw, 1rem)",
                          lineHeight: "1.6",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sticky Content Panel (Desktop/Large Screens Only) */}
          <div className="relative hidden lg:flex lg:sticky lg:top-0 lg:h-screen items-center order-2">
            <div className="w-full bg-[#1C1C1C] p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
              <div className="space-y-6 lg:space-y-8">
                {/* Step Number Badge */}
                <div
                  className="inline-flex items-center justify-center rounded-full transition-all duration-500"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#FF3B3B",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: "white",
                  }}
                >
                  {processSteps[activeIndex].number}
                </div>

                <div className="space-y-3 lg:space-y-4">
                  <h3
                    className="text-white transition-all duration-500"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(2.5rem, 4vw, 4rem)",
                      lineHeight: "1.1",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {processSteps[activeIndex].heading}
                  </h3>
                  <p
                    className="text-[#FF3B3B] transition-all duration-500"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {processSteps[activeIndex].subheading}
                  </p>
                </div>

                <div
                  className="w-16 lg:w-20 h-1"
                  style={{ backgroundColor: "#FF3B3B" }}
                />

                <p
                  className="text-gray-300 max-w-lg transition-all duration-500"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)",
                    lineHeight: "1.7",
                  }}
                >
                  {processSteps[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}