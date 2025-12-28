"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative overflow-hidden text-center">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif text-black mb-2"
            >
              Raghav Prajapati
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-sm md:text-base tracking-widest text-zinc-500 uppercase font-sans"
            >
              Frontend Developer
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 h-[1px] w-full bg-brown origin-left mt-4"
              style={{ bottom: "-8px" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
