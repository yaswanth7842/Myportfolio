"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close menu after click
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Tech Stack", id: "tech" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="w-full px-4 md:px-12 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div
          className="text-white font-bold text-lg cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          Yash<span className="text-cyan-400">™</span>
        </div>

        {/* NAV LINKS (Desktop) */}
        <nav className="hidden md:flex gap-6 text-sm text-white/70">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:text-cyan-300 transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* Sun icon */}
          <div className="text-cyan-300 text-xl cursor-pointer select-none">
            ☀
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-16 left-0 w-full bg-[#050816]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-white text-2xl"
              >
                <HiX />
              </button>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-white/80 hover:text-cyan-300 text-base font-medium transition"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
