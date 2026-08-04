import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

import plumbingVideo from "../assets/projects/plumbing/demo.mp4.mp4";
import plumbingImage from "../assets/projects/plumbing/plumbing.png";

import bhBarbershopVideo from "../assets/projects/bh-barbershop/barbershop.mp4";
import bhBarbershopImage from "../assets/projects/bh-barbershop/barbershop.png";

import eleanorsVideo from "../assets/projects/eleanors/barbershop2.mp4";
import eleanorsImage from "../assets/projects/eleanors/barbershop2.jpeg";

const inspirations = [
  {
    number: "01",
    industry: "Plumbing Services",
    source: "Michael Donahue Plumbing",
    website: "https://mdonahueplumbing.com/",
    video: plumbingVideo,
    image: plumbingImage,
    description:
      "Professional service websites designed to establish trust, generate qualified leads, and make it easy for customers to request help.",
    capabilities: [
      "Emergency service pages",
      "Quote request forms",
      "Service-area pages",
      "Customer reviews",
      "Local SEO foundation",
      "Mobile-first development",
    ],
  },
  {
    number: "02",
    industry: "Modern Barbershop",
    source: "B & H Barber Shop",
    website: "https://bhbarbershop.com/",
    video: bhBarbershopVideo,
    image: bhBarbershopImage,
    description:
      "Premium barbershop experiences that combine strong branding, clear service information, visual storytelling, and simple appointment booking.",
    capabilities: [
      "Appointment booking",
      "Service and pricing menus",
      "Barber profiles",
      "Photo galleries",
      "Location and hours",
      "Responsive navigation",
    ],
  },
  {
    number: "03",
    industry: "Luxury Barber Studio",
    source: "Eleanor's Barbershop",
    website: "https://www.eleanorsbarbershop.com/",
    video: eleanorsVideo,
    image: eleanorsImage,
    description:
      "Editorial business websites built around premium imagery, confident typography, thoughtful spacing, and a focused customer journey.",
    capabilities: [
      "Editorial layouts",
      "Luxury visual direction",
      "Online scheduling",
      "Interactive galleries",
      "Conversion-focused pages",
      "Mobile optimization",
    ],
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

function InspirationVideo({ item }) {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

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
      console.error("Video playback error:", error);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.38)] md:rounded-[40px]">
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        {!videoError ? (
          <video
            ref={videoRef}
            src={item.video}
            poster={item.image}
            muted={muted}
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={item.image}
            alt={`${item.industry} design inspiration`}
            className="h-full w-full object-cover"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        {!playing && !videoError && (
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={`Play ${item.industry} inspiration video`}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-black/55 md:h-20 md:w-20"
          >
            <Play
              size={26}
              fill="currentColor"
              className="ml-1"
            />
          </button>
        )}

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-5 sm:p-7">
          <div>
            <p className="text-sm font-medium text-white">
              Design inspiration
            </p>

            <p className="mt-1 text-xs text-white/45">
              Reference: {item.source}
            </p>
          </div>

          {!videoError && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={togglePlayback}
                aria-label={playing ? "Pause video" : "Play video"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/80 backdrop-blur-xl transition hover:bg-black/55 hover:text-white"
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/80 backdrop-blur-xl transition hover:bg-black/55 hover:text-white"
              >
                {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InspirationShowcase() {
  return (
    <section
      id="inspiration"
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
              Industry possibilities
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
              Inspired by great design.
              <span className="block text-white/40">
                Built for your business.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
              These third-party websites are visual references, not projects I
              created. They demonstrate the type of polished, responsive
              business experience I can design and build around your own brand,
              customers, and goals.
            </p>
          </motion.div>
        </div>

        {/* Inspiration projects */}
        <div>
          {inspirations.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={item.industry}
                initial={{
                  opacity: 0,
                  y: 32,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-white/[0.08] py-20 md:py-28"
              >
                <div
                  className={`grid gap-12 lg:items-center lg:gap-20 ${
                    reverse
                      ? "lg:grid-cols-[0.75fr_1.25fr]"
                      : "lg:grid-cols-[1.25fr_0.75fr]"
                  }`}
                >
                  {/* Video */}
                  <div className={reverse ? "lg:order-2" : ""}>
                    <InspirationVideo item={item} />
                  </div>

                  {/* Information */}
                  <div className={reverse ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-5 text-sm text-white/30">
                      <span>{item.number}</span>
                      <span className="h-px w-10 bg-white/15" />
                      <span>What I can build for you</span>
                    </div>

                    <h3 className="mt-7 text-4xl font-semibold leading-[1] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
                      {item.industry}
                    </h3>

                    <p className="mt-3 text-sm text-white/32">
                      Inspired by{" "}
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/55 underline decoration-white/20 underline-offset-4 transition hover:text-white"
                      >
                        {item.source}
                      </a>
                    </p>

                    <p className="mt-7 max-w-xl text-base leading-7 text-white/48 md:text-lg md:leading-8">
                      {item.description}
                    </p>

                    <div className="mt-9 grid gap-4 sm:grid-cols-2">
                      {item.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="flex items-center gap-3 text-sm text-white/50"
                        >
                          <Check
                            size={16}
                            className="shrink-0 text-white/72"
                          />

                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#booking"
                      className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98]"
                    >
                      Build something like this
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InspirationShowcase;