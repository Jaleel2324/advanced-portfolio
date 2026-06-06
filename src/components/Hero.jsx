import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed_0%,transparent_35%)] opacity-40" />

      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl top-20 -left-40" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl bottom-10 -right-40" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex px-4 py-2 rounded-full border border-green-400/20 bg-green-500/10 text-green-300 mb-6">
            Available For New Projects
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Premium Websites,
            <br />
            Full-Stack Platforms &
            <br />
            AI Solutions.
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            Frontend Developer with full-stack experience specializing in
            modern web applications, AI systems, business platforms,
            booking systems, payment integrations, and premium user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#booking"
              className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Book A Strategy Call
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
            >
              View My Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <h3 className="text-3xl font-black text-blue-400">3</h3>
              <p className="text-gray-400 text-sm">
                Featured Platforms
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-blue-400">
                Full Stack
              </h3>
              <p className="text-gray-400 text-sm">
                Frontend + Backend
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-blue-400">
                AI Ready
              </h3>
              <p className="text-gray-400 text-sm">
                Automation Systems
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 text-center">
              <img
                src="/images/profile.jpg"
                alt="Jaleel"
                className="w-56 h-56 mx-auto rounded-full object-cover border-4 border-blue-400/30 shadow-2xl shadow-blue-500/20"
              />

              <h2 className="text-3xl font-bold mt-6">
                Jaleel
              </h2>

              <p className="text-gray-300 mt-2">
                Frontend Developer • Full Stack Developer • AI Builder
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "FastAPI",
                  "AI",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-blue-500/10 border border-blue-400/20 text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -right-6 top-16 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl px-4 py-3">
            <p className="text-blue-400 font-bold">React</p>
            <p className="text-xs text-gray-400">
              Frontend Development
            </p>
          </div>

          <div className="absolute -left-6 top-40 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl px-4 py-3">
            <p className="text-blue-400 font-bold">Node.js</p>
            <p className="text-xs text-gray-400">
              Backend APIs
            </p>
          </div>

          <div className="absolute -right-6 bottom-24 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl px-4 py-3">
            <p className="text-blue-400 font-bold">AI Systems</p>
            <p className="text-xs text-gray-400">
              Automation & Workflows
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;