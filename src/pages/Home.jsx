import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const profileRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen text-white overflow-hidden bg-[#050816]"
    >
      {/* RIGHT IMAGE ONLY (HIDE ON MOBILE) */}
      <div
        ref={profileRef}
        className="
          hidden md:block
          absolute right-0 top-0 h-full w-[55%]
          bg-no-repeat bg-right bg-cover
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to left,
              rgba(206,210,227,0) 0%,
              rgba(2,6,23,0.6) 30%,
              rgba(2,6,23,1) 90%
            ),
            url(/images/male.png)
          `,
        }}
      />

      {/* MOBILE BACKGROUND GLOW */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

      {/* CONTENT */}
      <motion.div
        style={{ y: yText, opacity: opacityFade }}
        className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center justify-center md:justify-start"
      >
        <div className="max-w-[620px] text-center md:text-left">
          {/* ROLE */}
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm md:text-base">
            Java Full Stack Developer
          </p>

          {/* NAME */}
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-cyan-400">Yaswanth</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-gray-300 leading-relaxed text-[15.5px]">
            I’m a full stack developer focused on building secure, scalable,
            production-ready web applications. I specialize in backend
            development using <b>Spring Boot</b> and modern frontend interfaces
            with <b>React</b>.
          </p>

          <p className="mt-3 text-gray-400 text-[14.5px]">
            I’ve built real-world systems like role-based event management,
            employee payroll platforms, and a full-scale e-commerce application.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600
                         text-black font-semibold
                         px-6 py-3 rounded-md transition text-center"
            >
              Hire Me
            </a>

            <a
              href="https://linkedin.com/in/yaswanth-softwaredeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-400
                         hover:bg-cyan-500 hover:text-black
                         px-6 py-3 rounded-md font-semibold transition text-center"
            >
              Let’s Talk
            </a>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
            <div>
              <p className="text-2xl font-bold text-cyan-400">3+</p>
              <p className="text-sm text-gray-400">Full-Stack Projects</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-cyan-400">15+</p>
              <p className="text-sm text-gray-400">REST APIs Built</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-cyan-400">100%</p>
              <p className="text-sm text-gray-400">Backend Focus</p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10 flex gap-5 justify-center md:justify-start">
            <a
              href="https://github.com/yaswanthdevs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center
                         border border-cyan-400 rounded-full
                         text-cyan-400 hover:bg-cyan-400 hover:text-black
                         transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yaswanth-softwaredeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center
                         border border-cyan-400 rounded-full
                         text-cyan-400 hover:bg-cyan-400 hover:text-black
                         transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:yaswanthdevs@gmail.com"
              className="w-10 h-10 flex items-center justify-center
                         border border-cyan-400 rounded-full
                         text-cyan-400 hover:bg-cyan-400 hover:text-black
                         transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
