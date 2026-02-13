export default function Contact() {
  return (
<section id="contact" className="py-24 bg-[#0a0f1c] text-white flex justify-center">

      {/* Outer Container */}
      <div
        className="w-full max-w-6xl rounded-3xl overflow-hidden relative
                   bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 p-10">
          {/* Top Header */}
          <h2 className="text-center text-3xl font-semibold mb-12">
            CONTACT <span className="text-cyan-400">US</span>
          </h2>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE */}
<div className="flex flex-col items-center space-y-9">
  {/* Text above the circle */}
  <h3 className="text-sm text-gray-100 text-center">
    We look forward to hear from you
  </h3>

  {/* Circle Image */}
  <div className="relative group">
    {/* Outer glow ring */}
    <div className="absolute -inset-2 rounded-full 
                    bg-gradient-to-r from-cyan-400 to-purple-500 
                    blur-lg opacity-70" />

    {/* Inner ring */}
    <div className="absolute inset-0 rounded-full 
                    border-4 border-cyan-400/80" />

    {/* Image container */}
    <div
      className="relative w-52 h-52 rounded-full overflow-hidden 
                 bg-[#020617] shadow-2xl 
                 transform transition-all duration-500
                 group-hover:-translate-y-2"
    >
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Shadow under (elevation) */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 
                    w-40 h-8 bg-black/50 blur-xl rounded-full" />
  </div>
</div>


            {/* RIGHT SIDE FORM */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium mb-2">Get in touch</h4>

              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-gray-600 
                           py-2 focus:outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-gray-600 
                           py-2 focus:outline-none focus:border-cyan-400"
              />

              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full bg-transparent border-b border-gray-600 
                           py-2 focus:outline-none focus:border-cyan-400"
              />

              <button className="mt-4 text-cyan-400 border-b border-cyan-400 
                                 hover:text-cyan-300 hover:border-cyan-300 transition">
                Submit
              </button>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-gray-400 mt-16">
            Let’s work together and make something that matters.
          </p>

          {/* Bottom Info */}
          <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-400 mt-10 text-center">
            <div>
              <p className="text-cyan-400 mb-1">Location</p>
              <p>Chennai, India</p>
            </div>

            <div>
              <p className="text-cyan-400 mb-1">Contact</p>
              <p>+91 XXXXXXXXXX</p>
            </div>

            <div>
              <p className="text-cyan-400 mb-1">Email Address</p>
              <p>yaswanth@gmail.com</p>
            </div>

            <div>
              <p className="text-cyan-400 mb-1">Follow Us</p>
              <div className="flex justify-center gap-4 mt-2 text-lg">
                <span className="cursor-pointer hover:text-white">🐙</span>
                <span className="cursor-pointer hover:text-white">💼</span>
                <span className="cursor-pointer hover:text-white">🐦</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-10">
            © 2025 Yaswanth Portfolio
          </p>
        </div>
      </div>
    </section>
  );
}