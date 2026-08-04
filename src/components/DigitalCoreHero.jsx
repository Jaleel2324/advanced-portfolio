import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

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

export default function DigitalCoreHero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 md:pb-24 md:pt-32"
    >
      {/* Soft overlay keeps the background readable */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,3,4,0.12),rgba(2,3,4,0.34)_70%,#020304_100%)]" />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="mx-auto max-w-6xl text-center">
          {/* Small introduction */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 text-sm font-medium tracking-[-0.01em] text-white/55 sm:text-base"
          >
            Independent designer and full-stack developer
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(3.7rem,9vw,8.8rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white"
          >
            Digital experiences
            <span className="block text-white/42">
              built to stand apart.
            </span>
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.85,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl md:mt-10 md:text-[22px]"
          >
            I design and build premium websites, intelligent platforms, and
            full-stack products for businesses that care about how their
            digital presence feels.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.85,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98] sm:w-auto"
            >
              View selected work
              <ArrowDown size={16} />
            </a>

            <a
              href="#booking"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-7 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:scale-[1.025] hover:border-white/25 hover:bg-white/[0.075] active:scale-[0.98] sm:w-auto"
            >
              Start a project
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Bottom information row */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.55,
          }}
          className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/[0.08] pt-6 text-center text-xs text-white/35 sm:flex-row sm:text-left md:mt-28"
        >
          <p>React · Next.js · Node.js · Python · AI integrations</p>

          <a
            href="#about"
            className="inline-flex items-center gap-2 transition hover:text-white/65"
          >
            Explore the studio
            <ArrowDown size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}