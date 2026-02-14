import { useState } from "react";
import { motion } from "framer-motion";
import ProjectsData from "../constants/ProjectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* ================= PROJECTS SECTION ================= */}
      <motion.section
        id="projects"
        className="py-16 sm:py-20 px-5 sm:px-6 bg-[#050816] text-white"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>

            <div className="w-16 sm:w-20 h-[2px] mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-[14px] sm:text-base leading-relaxed">
              A curated collection of full-stack projects demonstrating modern,
              scalable web applications.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {ProjectsData.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <div className="h-44 sm:h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-[17px] sm:text-lg font-semibold mb-2 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-[13.5px] sm:text-sm text-gray-400 mb-4 flex-1 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-cyan-800/30 border border-cyan-400/50 text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="text-cyan-400 text-[13px] sm:text-sm font-medium hover:underline self-start"
                  >
                    View Project →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f1629] max-w-5xl w-full rounded-2xl overflow-y-auto max-h-[90vh] border border-white/10 relative"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 sm:top-5 right-4 sm:right-6 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            {/* Hero */}
            <div className="w-full h-52 sm:h-64 md:h-80 overflow-hidden">
              <img
                src={selectedProject.image}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-8 space-y-7 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 leading-snug">
                {selectedProject.title}
              </h2>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  About
                </h3>
                <p className="text-gray-300 leading-relaxed text-[14px] sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.features?.length > 0 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedProject.features.map((f, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-lg p-4 text-[14px] sm:text-base"
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-full text-[12px] sm:text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.gallery?.length > 0 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Project Screenshots
                  </h3>

                  {/* Mobile 2 columns | Desktop 3 columns */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {selectedProject.gallery.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="gallery"
                        onClick={() => setSelectedImage(img)}
                        className="rounded-lg border border-white/10 cursor-pointer hover:scale-105 transition"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* ================= IMAGE PREVIEW ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60]"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-6 sm:top-6 sm:right-8 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <motion.img
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            src={selectedImage}
            alt="preview"
            className="max-w-[92%] max-h-[88vh] sm:max-w-[90%] sm:max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
