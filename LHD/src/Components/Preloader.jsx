import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BillionDollarPreloader = () => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 0.8;
      });
    }, 30);

    const stage1 = setTimeout(() => setStage(1), 800);
    const stage2 = setTimeout(() => setStage(2), 2200);
    const stage3 = setTimeout(() => setStage(3), 3200);
    const loadTimer = setTimeout(() => setLoaded(true), 4500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(stage3);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          className="fixed inset-0 z-50 bg-white overflow-hidden flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Vignette
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,) 100%)",
            }}
          /> */}

          {/* Animated subtle grid */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 1 ? 0.03 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
          </motion.div>

          {/* Main container */}
          <div className="relative flex flex-col items-center justify-center w-full px-4 sm:px-8">
            {/* Logo and brand */}
            <motion.div
              className="relative flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: stage >= 1 ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            >
              {/* Logo with glow */}
              <motion.div
                className="relative w-48 h-48 flex items-center justify-center"
                animate={{
                  scale: stage >= 2 ? 0.85 : 1,
                }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src="https://i.postimg.cc/1tt2wSYZ/LHD-Human-Care-Logo-1.webp"
                  alt="Shvetdhara"
                  className="relative z-10 w-32 h-32 object-cover"
                  style={{ filter: "brightness(1.2) contrast(1.1)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.div>

              {/* Brand name */}
              <motion.div
                className="mt-6 sm:mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: stage >= 2 ? 1 : 0,
                  y: stage >= 2 ? 0 : 20,
                }}
                transition={{ duration: 1 }}
              >
                <h1
                  className="text-3xl sm:text-5xl text-black tracking-wider mb-2 sm:mb-4"
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    letterSpacing: "0.15em",
                    fontWeight: 300,
                  }}
                >
                  LHD HUMAN CARE
                </h1>

                <motion.div
                  className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 2 ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.div
                    className="h-px bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: stage >= 2 ? 40 : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <span
                    className="text-black text-xs sm:text-sm tracking-widest"
                    style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                      letterSpacing: "0.2em",
                      fontWeight: 300,
                    }}
                  >
                    EXCELLENCE REDEFINED
                  </span>
                  <motion.div
                    className="h-px bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: stage >= 2 ? 40 : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BillionDollarPreloader;