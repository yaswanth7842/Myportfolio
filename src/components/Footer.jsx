import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-gray-400 pt-16 pb-10 px-6 overflow-hidden">

      {/* Glow Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* LEFT SECTION */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Yaswanth
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Building modern, high-performance web experiences
              through elegant design, clean code, and the latest technologies.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl 
                           bg-gradient-to-r from-purple-500 to-pink-500
                           hover:scale-110 transition"
              >
                <FaGithub className="text-white text-lg" />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl 
                           bg-gradient-to-r from-blue-500 to-cyan-500
                           hover:scale-110 transition"
              >
                <FaLinkedin className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Get In Touch
            </h4>

            <p className="mb-4">
              <span className="text-purple-400">Email:</span><br />
              codezenithhq@gmail.com
            </p>

            <p>
              <span className="text-purple-400">Location:</span><br />
              New York City, New York
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm">
            © {new Date().getFullYear()} Yaswanth. All rights reserved.
          </p>

          {/* BACK TO TOP BUTTON */}
          <a
            href="#home"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500
                       text-white text-sm font-medium hover:scale-105 transition"
          >
            Back to Top ↑
          </a>

        </div>
      </div>
    </footer>
  );
}
