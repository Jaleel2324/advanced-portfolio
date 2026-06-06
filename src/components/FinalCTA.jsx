function FinalCTA() {
  return (
    <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-700/20 p-10 md:p-16 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          <p className="text-blue-300 uppercase tracking-[0.3em] mb-4">
            Ready To Build?
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let’s turn your idea into a premium web experience.
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
            Whether you need a website, dashboard, AI platform, booking system,
            or full-stack application, we can map out the right solution on a
            discovery call.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Book A Call
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
            >
              Send Project Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;