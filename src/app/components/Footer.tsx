import { Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const scrollToSection = (id: string) => {
    // Map footer links to their corresponding sections
    const sectionMap: { [key: string]: string } = {
      "hero": "home",      // Home → hero section (has id="home")
      "about": "about"     // About Us → about section (WHO WE ARE)
    };
    
    const targetId = sectionMap[id] || id;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe email:", email);
    setEmail("");
  };

  return (
    <footer
      className="px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10"
      style={{ backgroundColor: "#FF3B3B", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2
          className="text-white uppercase mb-6 sm:mb-8 md:mb-10"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "0.02em",
            lineHeight: "1.1",
          }}
        >
          READY TO<br />GROW?
        </h2>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Column - Brand & Social */}
          <div>
            <h3
              className="text-white mb-3"
              style={{
                fontFamily: "'Irish Grover', cursive",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
              }}
            >
              FusionLab
            </h3>
            <p
              className="text-white/90 mb-4 sm:mb-5"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                lineHeight: "1.6",
              }}
            >
              Where creativity meets strategy. Transforming ideas into stunning digital experiences.
            </p>
            <div>
              <h4
                className="text-white mb-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(0.9375rem, 1.8vw, 1rem)",
                }}
              >
                Follow Us On
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-[#FF3B3B] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-[#FF3B3B] transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-[#FF3B3B] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4
              className="text-white mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
              }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", id: "hero" },
                { label: "About Us", id: "about" },
                { label: "Services", id: "services" },
                { label: "Contact Us", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 text-left min-h-[44px] flex items-center"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column - Subscribe */}
          <div>
            <h4
              className="text-white mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
              }}
            >
              Subscribe Us
            </h4>
            <p
              className="text-white/90 mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                lineHeight: "1.6",
              }}
            >
              Get exclusive offers & updates
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
                className="px-4 py-3 rounded-lg border-2 border-white/30 bg-transparent text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                  minHeight: "48px"
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#FF3B3B] rounded-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 uppercase self-start"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(0.8125rem, 1.6vw, 0.875rem)",
                  letterSpacing: "0.05em",
                  minHeight: "48px"
                }}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-6 sm:mt-8 md:mt-10 pt-5 sm:pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-white/80 text-center md:text-left"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.8125rem, 1.6vw, 0.875rem)",
              }}
            >
              © 2026 FusionLab. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300 min-h-[44px] flex items-center"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.8125rem, 1.6vw, 0.875rem)",
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300 min-h-[44px] flex items-center"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.8125rem, 1.6vw, 0.875rem)",
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}