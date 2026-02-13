"use client";

import { motion } from "framer-motion";
import { MdRocketLaunch } from "react-icons/md";

const ExperienceData = [
  {
    title: "Role-Based Event Management System",
    type: "Full-Stack System",
    role: "Full Stack Developer",
    highlights: [
      "Designed role-based access for Admin & Users",
      "Built secure authentication using JWT",
      "Developed REST APIs for event creation & booking",
      "Integrated frontend with backend services",
    ],
    tech: ["Java", "Spring Boot", "JWT", "MySQL", "React"],
  },
  {
    title: "Employee Payroll Management System",
    type: "Backend-Focused",
    role: "Backend / Full Stack Developer",
    highlights: [
      "Implemented employee & salary management logic",
      "Designed normalized database schema",
      "Developed payroll calculation APIs",
      "Handled CRUD operations using Spring Boot",
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
  },
  {
    title: "E-Commerce Web Application",
    type: "Production-Style App",
    role: "Full Stack Developer",
    highlights: [
      "Building real-world e-commerce workflows",
      "User authentication & authorization",
      "Product, cart & order management",
      "Focus on scalable backend & clean UI",
    ],
    tech: ["Spring Boot", "React", "JWT", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#050816] text-white py-28 px-6 overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto">

        <div className="flex justify-center items-center gap-3 mb-20">
          <MdRocketLaunch className="text-cyan-400 text-3xl" />
          <h2 className="text-4xl font-bold">
            Project <span className="text-cyan-400">Experience</span>
          </h2>
        </div>

        <div className="space-y-16">
          {ExperienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-2xl p-8
              hover:border-cyan-400/60
              hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
              transition-all duration-300"
            >
              <div className="flex justify-between flex-wrap gap-4">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <span className="px-4 py-1 bg-cyan-400 text-black rounded-full text-xs font-semibold">
                  {exp.type}
                </span>
              </div>

              <p className="text-gray-400 mt-2">{exp.role}</p>

              <ul className="mt-4 space-y-2 text-gray-300">
                {exp.highlights.map((h, idx) => (
                  <li key={idx}>▸ {h}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-black/40 border border-white/10 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
