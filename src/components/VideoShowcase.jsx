import { PlayCircle } from "lucide-react";

const demos = [
  {
    title: "JARVIS AI Desktop Assistant",
    video: "/videos/jarvis-demo.mp4",
    summary: "Voice assistant, AI memory, desktop controls, cinematic UI.",
  },
  {
    title: "Food Rush",
    video: "/videos/foodrush-demo.mp4",
    summary: "Full-stack ordering, cart, checkout, admin dashboard, MongoDB.",
  },
  {
    title: "IronMind AI",
    video: "/videos/ironmind-demo.mp4",
    summary: "AI fitness dashboard, coaching, nutrition, progress tracking.",
  },
];

function VideoShowcase() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="mb-14">
        <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
          Video Demos
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Watch The Projects In Action
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg">
          Each project includes space for a real demo video so clients can see
          the interface, features, and final product before booking.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {demos.map((demo) => (
          <div
            key={demo.title}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:-translate-y-2 transition"
          >
            <div className="aspect-video bg-black relative">
              <video
                src={demo.video}
                controls
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20">
                <PlayCircle size={54} className="text-white/80" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{demo.title}</h3>
              <p className="text-gray-400">{demo.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoShowcase;