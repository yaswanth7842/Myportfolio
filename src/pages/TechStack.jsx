"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import {
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiVercel,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiJquery,
  SiNetlify,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import {
  FaBootstrap,
  FaCss3Alt,
  FaAngular,
  FaPhp,
  FaShopify,
  FaJava,
} from "react-icons/fa";

const DATA = {
  Advance: [
    { name: "ReactJS", icon: DiReact },
    { name: "JavaScript", icon: DiJavascript1 },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "HTML5", icon: AiFillHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMui },
    { name: "Chakra UI", icon: SiChakraui },
    { name: "Vercel", icon: SiVercel },
    { name: "GitHub", icon: BsGithub },
  ],
  Good: [
    { name: "NextJS", icon: SiNextdotjs },
    { name: "NodeJS", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: DiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "jQuery", icon: SiJquery },
    { name: "Netlify", icon: SiNetlify },
    { name: "Git", icon: BsGit },
  ],
  Familiar: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "Angular", icon: FaAngular },
    { name: "React Native", icon: TbBrandReactNative },
    { name: "PHP", icon: FaPhp },
    { name: "Java", icon: FaJava },
    { name: "SASS", icon: DiSass },
    { name: "MySQL", icon: GrMysql },
    { name: "Shopify", icon: FaShopify },
  ],
};

export default function TechStack() {
  const [tab, setTab] = useState("Advance");

  return (
    <section
      id="tech"
      className="relative bg-[#050816] text-white px-5 sm:px-6 py-20 sm:py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center items-center gap-3 mb-3">
            <FaLaptopCode className="text-cyan-400 text-xl sm:text-2xl" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
              My <span className="text-cyan-400">Skills</span>
            </h2>
          </div>

          <div className="w-16 sm:w-20 h-[2px] mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </div>

        {/* Tabs (Mobile Fixed) */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm w-full max-w-md overflow-hidden">
            {["Advance", "Good", "Familiar"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`flex-1 px-3 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                  tab === item
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
          {DATA[tab].map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.06, rotateX: 6, rotateY: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group bg-white/5 border border-white/10 rounded-2xl
              p-5 sm:p-8 lg:p-10 flex flex-col items-center justify-center gap-3 sm:gap-5
              backdrop-blur-md
              hover:border-cyan-400/60
              hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
              transition-all duration-300"
            >
              {/* Glow Ring */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-xl"
              />

              <Icon className="text-cyan-400 text-3xl sm:text-5xl group-hover:scale-110 transition duration-300" />

              <p className="text-[12px] sm:text-sm font-semibold tracking-wide text-gray-200 text-center leading-snug">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
