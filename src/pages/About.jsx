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
    <section
      id="about"
      className="relative bg-[#050816] text-white px-5 sm:px-6 py-20 sm:py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.4, once: true }}
          className="flex justify-center"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: "transform 0.15s ease",
            }}
            className="
              relative
              w-[280px] h-[380px]
              sm:w-[320px] sm:h-[450px]
              md:w-[360px] md:h-[500px]
              rounded-3xl
              bg-gradient-to-br from-[#0f172a] to-[#111827]
              shadow-[0_0_80px_rgba(34,211,238,0.35)]
              overflow-hidden
            "
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
          viewport={{ amount: 0.4, once: true }}
          className="space-y-6 sm:space-y-8 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-300 text-[15px] sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I'm a Full Stack Java Developer building scalable backend
            architectures and immersive frontend experiences.
          </p>

          <p className="text-gray-400 text-[14.5px] sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            I specialize in Spring Boot, REST APIs, React, and modern UI systems.
            I care about performance, security, and writing maintainable
            production-ready code.
          </p>

          <div className="flex justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-7 py-3 rounded-full bg-cyan-500
                text-black font-semibold
                shadow-lg shadow-cyan-500/40
                text-[15px]
              "
            >
              Let’s Build Something 🚀
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
