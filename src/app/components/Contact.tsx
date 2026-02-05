import { motion } from "motion/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration - Replace these with your actual credentials
    const serviceID ="service_ngbo5t5"; // Replace with your EmailJS service ID
    const templateID = "template_zdjw09b"; // Replace with your EmailJS template ID
    const publicKey = "CP0cqHh4MwXLH9_2D"; // Replace with your EmailJS public key

    if (formRef.current) {
      emailjs
        .sendForm(serviceID, templateID, formRef.current, publicKey)
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            // Reset form
            setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
            setIsSubmitting(false);
            toast.success("Thank you for your message! We'll get back to you soon.");
          },
          (error) => {
            console.error("Failed to send email:", error.text);
            setIsSubmitting(false);
            toast.error("Oops! Something went wrong. Please try again later.");
          }
        );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#000000", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-start">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Decorative label */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-0.5 bg-[#FF3B3B]"></div>
              <span
                className="text-gray-400 uppercase tracking-wider"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                  fontWeight: 600,
                }}
              >
                Get in Touch
              </span>
            </div>

            <h2
              className="text-white leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Let's create something{" "}
              <span style={{ color: "#FF3B3B" }}>amazing</span> together!
            </h2>
            
            <p
              className="text-gray-400 max-w-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.9375rem, 2vw, 1.125rem)",
                lineHeight: "1.8",
              }}
            >
              Reach out — we'd love to hear about your project and ideas. Let's collaborate to bring your vision to life.
            </p>

            {/* Contact info */}
            <div className="pt-4 sm:pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FF3B3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-gray-500"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                    }}
                  >
                    Email us at
                  </p>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                      fontWeight: 500,
                    }}
                  >
                    hello@fusionlab.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#FF3B3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-gray-500"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                    }}
                  >
                    Call us at
                  </p>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                      fontWeight: 500,
                    }}
                  >
                    +966 50 123 4567
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="space-y-5 sm:space-y-6 md:space-y-8"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-white mb-2 sm:mb-3"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                  fontWeight: 500,
                  letterSpacing: "0.02em"
                }}
              >
                Full Name <span style={{ color: "#FF3B3B" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 bg-white/5 border-2 border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF3B3B] focus:bg-white/10 transition-all duration-300 hover:border-gray-500"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.875rem, 1.8vw, 1rem)", minHeight: "48px" }}
              />
            </div>

            {/* Email and Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2 sm:mb-3"
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                    fontWeight: 500,
                    letterSpacing: "0.02em"
                  }}
                >
                  Email <span style={{ color: "#FF3B3B" }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 bg-white/5 border-2 border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF3B3B] focus:bg-white/10 transition-all duration-300 hover:border-gray-500"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.875rem, 1.8vw, 1rem)", minHeight: "48px" }}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-white mb-2 sm:mb-3"
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                    fontWeight: 500,
                    letterSpacing: "0.02em"
                  }}
                >
                  Phone Number <span style={{ color: "#FF3B3B" }}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 bg-white/5 border-2 border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF3B3B] focus:bg-white/10 transition-all duration-300 hover:border-gray-500"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.875rem, 1.8vw, 1rem)", minHeight: "48px" }}
                />
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label
                htmlFor="serviceType"
                className="block text-white mb-2 sm:mb-3"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                  fontWeight: 500,
                  letterSpacing: "0.02em"
                }}
              >
                Service Type <span style={{ color: "#FF3B3B" }}>*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 bg-white/5 border-2 border-gray-700 rounded-full text-white focus:outline-none focus:border-[#FF3B3B] focus:bg-white/10 transition-all duration-300 hover:border-gray-500 appearance-none cursor-pointer"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                  minHeight: "48px",
                  backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1.5rem center",
                  backgroundSize: "1.25rem"
                }}
              >
                <option value="" disabled style={{ backgroundColor: "#1a1a1a" }}>
                  Select a Service
                </option>
                <option value="Web Design & Development" style={{ backgroundColor: "#1a1a1a" }}>
                  Web Design & Development
                </option>
                <option value="Brand Identity Design" style={{ backgroundColor: "#1a1a1a" }}>
                  Brand Identity Design
                </option>
                <option value="UI/UX Design" style={{ backgroundColor: "#1a1a1a" }}>
                  UI/UX Design
                </option>
                <option value="Digital Strategy" style={{ backgroundColor: "#1a1a1a" }}>
                  Digital Strategy
                </option>
                <option value="Other" style={{ backgroundColor: "#1a1a1a" }}>
                  Other
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-white mb-2 sm:mb-3"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
                  fontWeight: 500,
                  letterSpacing: "0.02em"
                }}
              >
                Message <span style={{ color: "#FF3B3B" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 bg-white/5 border-2 border-gray-700 rounded-3xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF3B3B] focus:bg-white/10 transition-all duration-300 resize-none hover:border-gray-500"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.875rem, 1.8vw, 1rem)", lineHeight: "1.6" }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 sm:py-5 bg-white text-black rounded-full transition-all duration-300 hover:bg-[#FF3B3B] hover:text-white shadow-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                letterSpacing: "0.15em",
                fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                minHeight: "56px"
              }}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
