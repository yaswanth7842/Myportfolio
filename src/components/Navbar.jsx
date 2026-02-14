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
      setOpen(false);
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

      {/* MOBILE FULL SCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 right-0 h-screen w-full bg-[#050816]/98 backdrop-blur-xl z-[999]"
          >
            {/* TOP BAR */}
            <div className="h-16 px-6 flex items-center justify-between border-b border-white/10">
              <div
                className="text-white font-bold text-lg cursor-pointer"
                onClick={() => scrollTo("home")}
              >
                Yash<span className="text-cyan-400">™</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-white text-3xl"
              >
                <HiX />
              </button>
            </div>

            {/* MENU LINKS */}
            <div className="px-8 py-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-white/85 hover:text-cyan-300 text-xl font-semibold transition"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* BOTTOM LINE */}
            <div className="absolute bottom-8 left-0 w-full flex justify-center">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} Yaswanth Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
