"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text, className = "", delay = 0 }) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay }}
    >
      {text}
    </motion.p>
  );
}
