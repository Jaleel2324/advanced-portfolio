import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

function FinalCTA() {
  return (
    <section className="relative z-10 px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden border-y border-white/[0.08] py-24 text-center md:py-36"
        >
          {/* Soft background treatment */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.055),transparent_58%)]" />

          <div className="relative mx-auto max-w-5xl">
            <p className="text-sm font-medium text-white/40">
              Ready when you are
            </p>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Let’s build something
              <span className="block text-white/40">
                worth remembering.
              </span>
            </h2>

            <p className="mx-auto mt-9 max-w-2xl text-lg leading-8 text-white/48 md:text-xl">
              Whether the project is a website, product, platform, or
              intelligent system, the goal is the same: create something clear,
              useful, and carefully built.
            </p>

            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98] sm:w-auto"
              >
                Book a discovery call
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.03] px-7 text-sm font-semibold text-white transition duration-300 hover:scale-[1.025] hover:border-white/25 hover:bg-white/[0.07] active:scale-[0.98] sm:w-auto"
              >
                Send a project inquiry
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;