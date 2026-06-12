import { PlayCircle } from "lucide-react";

const demos = [
  {
    title: "JARVIS AI Desktop Assistant",
    video: "/videos/jarvis-demo.mp4",
    summary:
      "Voice assistant, AI memory, desktop automation, and cinematic interface design.",
  },
  {
    title: "Food Rush",
    video: "/videos/foodrush-demo.mp4",
    summary:
      "Full-stack food ordering platform with checkout flows, admin tools, and MongoDB integration.",
  },
  {
    title: "IronMind AI",
    video: "/videos/ironmind-demo.mp4",
    summary:
      "AI-powered fitness platform featuring coaching, nutrition planning, and progress tracking.",
  },
];

function VideoShowcase() {
  return (
    <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
      <div className="mb-14">
        <p className="text-[#EF233C] uppercase tracking-[0.3em] mb-4">
          Video Demos
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Watch The Projects In Action
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg">
          Real demonstrations showing project functionality, user experience,
          animations, and technical execution.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {demos.map((demo) => (
          <div
            key={demo.title}
            className="rounded-3xl border border-white/10 bg-[#090B0F]/75 backdrop-blur-xl overflow-hidden hover:-translate-y-2 hover:border-[#EF233C]/30 hover:shadow-2xl hover:shadow-[#EF233C]/10 transition-all duration-300"
          >
            <div className="aspect-video bg-black relative">
              <video
                src={demo.video}
                controls
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/10">
                <PlayCircle
                  size={58}
                  className="text-[#EF233C]/80"
                />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {demo.title}
              </h3>

              <p className="text-gray-400">
                {demo.summary}
              </p>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-[#EF233C]/50 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoShowcase;