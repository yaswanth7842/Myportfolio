export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-6 text-sm text-white/70">
          <button onClick={() => scrollTo("home")} className="hover:text-cyan-300">Home</button>
          <button onClick={() => scrollTo("about")} className="hover:text-cyan-300">About</button>
          <button onClick={() => scrollTo("tech")} className="hover:text-cyan-300">Tech Stack</button>
          <button onClick={() => scrollTo("education")} className="hover:text-cyan-300">Education</button>
          <button onClick={() => scrollTo("experience")} className="hover:text-cyan-300">Experience</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-cyan-300">Projects</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-cyan-300">Contact</button>
        </nav>

        {/* RIGHT ICON */}
        <div className="text-cyan-300 text-xl cursor-pointer select-none">
          ☀
        </div>

      </div>
    </header>
  );
}