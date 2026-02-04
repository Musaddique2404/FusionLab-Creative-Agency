import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.85]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // Map "About Us" to "about" section (which contains "WHO WE ARE")
    const sectionMap: { [key: string]: string } = {
      "aboutus": "about",
      "contactus": "contact"
    };
    
    const targetId = sectionMap[id] || id;
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ opacity, backgroundColor: "#FF3B3B" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-xl sm:text-2xl tracking-tight" style={{ fontFamily: "'Irish Grover', cursive", fontWeight: 400 }}>
            FusionLab
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 xl:gap-6">
            {["Home", "About Us", "Services", "Process", "Testimonials", "Contact Us"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", ""))}
                className="text-white hover:opacity-70 transition-opacity duration-300 text-sm xl:text-base"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Desktop CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="hidden lg:flex px-6 xl:px-8 py-2.5 xl:py-3 rounded-lg items-center gap-2 transition-all duration-300 uppercase border-2 border-white hover:bg-white text-sm xl:text-base"
            style={{ 
              fontFamily: "Inter, sans-serif", 
              fontWeight: 700,
              letterSpacing: "0.05em",
              backgroundColor: "transparent",
              color: "white"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#FF3B3B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "100%"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 bottom-0 left-0 z-40 lg:hidden"
        style={{ 
          backgroundColor: "#FF3B3B",
          pointerEvents: isMobileMenuOpen ? "auto" : "none"
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 px-6 sm:px-8">
          {["Home", "About Us", "Services", "Process", "Testimonials", "Contact Us"].map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              onClick={() => scrollToSection(item.toLowerCase().replace(" ", ""))}
              className="text-white text-xl sm:text-2xl font-semibold hover:opacity-70 transition-opacity duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ delay: 0.48, duration: 0.3 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white text-white text-base sm:text-lg font-bold uppercase hover:bg-white hover:text-[#FF3B3B] transition-all duration-300 mt-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}