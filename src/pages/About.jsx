"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientY - top - height / 2) / 25;
    const y = (e.clientX - left - width / 2) / 25;

    setRotate({ x: -x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="relative bg-[#050816] text-white px-6 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.4 }}
          className="flex justify-center"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: "transform 0.15s ease",
            }}
            className="relative w-[360px] h-[500px] rounded-3xl
                       bg-gradient-to-br from-[#0f172a] to-[#111827]
                       shadow-[0_0_80px_rgba(34,211,238,0.35)]
                       overflow-hidden"
          >
            <img
              src="/images/male.png"
              alt="Profile"
              className="w-full h-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a Full Stack Java Developer building scalable backend
            architectures and immersive frontend experiences.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I specialize in Spring Boot, REST APIs, React, and modern
            UI systems. I care about performance, security, and
            writing maintainable production-ready code.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-full bg-cyan-500
                       text-black font-semibold
                       shadow-lg shadow-cyan-500/40"
          >
            Let’s Build Something 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
