import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

const demos = [
  {
    number: "01",
    title: "JARVIS AI Desktop Assistant",
    label: "AI desktop system",
    video: "/videos/jarvis-demo.mp4",
    summary:
      "A voice-powered desktop assistant with memory, automation, intelligent commands, and a cinematic interface.",
  },
  {
    number: "02",
    title: "Food Rush",
    label: "Full-stack platform",
    video: "/videos/foodrush-demo.mp4",
    summary:
      "A complete food ordering experience with checkout, order management, admin tools, analytics, and MongoDB integration.",
  },
  {
    number: "03",
    title: "IronMind AI",
    label: "AI fitness platform",
    video: "/videos/ironmind-demo.mp4",
    summary:
      "An intelligent fitness experience combining AI coaching, nutrition planning, progress tracking, and responsive product design.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function DemoVideo({ demo, index }) {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Unable to control video playback:", error);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      variants={fadeUp}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-white/[0.08] py-16 first:pt-0 md:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-20">
        {/* Project information */}
        <div className="lg:pb-4">
          <div className="flex items-center gap-5 text-sm text-white/30">
            <span>{demo.number}</span>
            <span className="h-px w-10 bg-white/15" />
            <span>{demo.label}</span>
          </div>

          <h3 className="mt-7 max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
            {demo.title}
          </h3>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/48 md:text-lg md:leading-8">
            {demo.summary}
          </p>

          <button
            type="button"
            onClick={togglePlayback}
            className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-white/55"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.035]">
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </span>

            {playing ? "Pause demonstration" : "Play demonstration"}
          </button>
        </div>

        {/* Cinematic video presentation */}
        <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.38)] md:rounded-[40px]">
          <div className="relative aspect-[16/10] overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={demo.video}
              muted={muted}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              className="h-full w-full object-cover"
            />

            {/* Soft visual treatment */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

            {/* Large center play button */}
            {!playing && (
              <button
                type="button"
                onClick={togglePlayback}
                aria-label={`Play ${demo.title} demonstration`}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-black/55 md:h-20 md:w-20"
              >
                <Play
                  size={25}
                  className="ml-1 md:h-8 md:w-8"
                  fill="currentColor"
                />
              </button>
            )}

            {/* Bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5 sm:p-6">
              <div>
                <p className="text-sm font-medium text-white">
                  {demo.title}
                </p>

                <p className="mt-1 text-xs text-white/45">
                  Product demonstration
                </p>
              </div>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/80 backdrop-blur-xl transition hover:bg-black/55 hover:text-white"
              >
                {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function VideoShowcase() {
  return (
    <section
      id="demos"
      className="relative z-10 px-5 py-28 sm:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="grid gap-12 border-b border-white/[0.08] pb-20 md:pb-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-sm font-medium text-white/42">
              Product films
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Designed to be understood through interaction.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
              These demonstrations show the products moving, responding, and
              working as complete experiences—not just static interface
              screenshots.
            </p>
          </motion.div>
        </div>

        {/* Demonstrations */}
        <div className="pt-16 md:pt-24">
          {demos.map((demo, index) => (
            <DemoVideo
              key={demo.title}
              demo={demo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;