function FinalCTA() {
  return (
    <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090B0F]/90 backdrop-blur-xl p-10 md:p-16 text-center">
        {/* Red ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EF233C]/15 rounded-full blur-3xl" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />

        <div className="relative z-10">
          <p className="text-[#EF233C] uppercase tracking-[0.3em] mb-4">
            Ready To Build?
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let’s turn your idea into a premium digital experience.
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
            Whether you need a website, dashboard, AI platform, booking system,
            or full-stack application, let's build something that helps your
            business stand out and grow online.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-4 rounded-2xl bg-[#EF233C] hover:bg-[#FF4D6D] transition-all duration-300 font-semibold text-white shadow-lg shadow-[#EF233C]/20"
            >
              Book A Call
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-[#EF233C]/30 bg-[#EF233C]/10 hover:bg-[#EF233C]/15 transition-all duration-300 font-semibold text-white"
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