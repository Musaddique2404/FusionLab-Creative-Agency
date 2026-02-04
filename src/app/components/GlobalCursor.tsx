import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const SPRING = {
  mass: 0.2,
  damping: 15,
  stiffness: 150,
};

export function GlobalCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const mobile = window.matchMedia("(max-width: 1024px)").matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't show cursor on mobile

    const handlePointerMove = (e: PointerEvent) => {
      xSpring.set(e.clientX);
      ySpring.set(e.clientY);
    };

    const handlePointerEnter = () => {
      opacitySpring.set(1);
      scaleSpring.set(1);
    };

    const handlePointerLeave = () => {
      opacitySpring.set(0);
      scaleSpring.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.body.addEventListener("pointerenter", handlePointerEnter);
    document.body.addEventListener("pointerleave", handlePointerLeave);

    // Set initial opacity when component mounts
    opacitySpring.set(1);
    scaleSpring.set(1);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.body.removeEventListener("pointerenter", handlePointerEnter);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [xSpring, ySpring, opacitySpring, scaleSpring, isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-3 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
      >
        <div className="w-full h-full rounded-full bg-white shadow-lg" style={{ boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,59,59,0.4)' }} />
      </motion.div>
      
      {/* Outer ring */}
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: '#FF3B3B',
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] size-10 rounded-full border-2"
        initial={{ opacity: 0, scale: 0 }}
      />
    </>
  );
}