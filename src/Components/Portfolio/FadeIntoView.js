import { motion } from "framer-motion";
import React from "react";
import './Portfolio.css';

export default function FadeIntoView({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 }
      }}
    >
      {children}
    </motion.div>
  );
}

