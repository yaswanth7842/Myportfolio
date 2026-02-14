"use client";

import { motion } from "framer-motion";
import { IoSchoolSharp } from "react-icons/io5";

const EducationData = [
  {
    name: "Bachelor of Science",
    image:
      "http://res.cloudinary.com/dhixp5pnk/image/upload/v1696219056/edekjqivqlnsyg8pfmxw.png",
    schoolOrCollege: "Saveetha School Of Engineering, Chennai",
    fromTo: "2021 - 2025",
    statusOrPrecentage: "8.5 CGPA",
  },
  {
    name: "Senior Secondary Examination",
    image:
      "http://res.cloudinary.com/dhixp5pnk/image/upload/v1696219649/jkjfvdlxjntnyrxs57ia.png",
    schoolOrCollege: "Sri Vivekananda Junior College, Chittoor",
    fromTo: "2021",
    statusOrPrecentage: "90.00%",
  },
  {
    name: "Secondary Examination",
    image:
      "http://res.cloudinary.com/dhixp5pnk/image/upload/v1696219649/tnverjapfr4slg7fnfcw.png",
    schoolOrCollege: "Shathinikethan High School",
    fromTo: "2019",
    statusOrPrecentage: "93.33%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-[#050816] text-white py-20 sm:py-24 px-5 sm:px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADING */}
        <div className="flex justify-center items-center gap-3 mb-12 sm:mb-16">
          <IoSchoolSharp className="text-cyan-400 text-2xl sm:text-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="space-y-8 sm:space-y-10">
          {EducationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateX: 4, rotateY: -4 }}
              className="
                bg-white/5 backdrop-blur-xl border border-white/10
                rounded-2xl p-5 sm:p-8
                flex flex-col sm:flex-row gap-5 sm:gap-8
                items-center sm:items-start
                hover:border-cyan-400/60
                hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                transition-all duration-300
              "
            >
              <img
                src={edu.image}
                alt={edu.name}
                className="
                  w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32
                  object-cover rounded-xl
                "
              />

              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold">{edu.name}</h3>

                <p className="text-gray-400 mt-2 text-[14.5px] sm:text-base leading-relaxed">
                  {edu.schoolOrCollege}
                </p>

                <p className="text-cyan-400 mt-2 font-medium text-[14px] sm:text-base">
                  {edu.fromTo} | {edu.statusOrPrecentage}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
