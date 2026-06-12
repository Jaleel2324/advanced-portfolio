import { motion } from "framer-motion";

function TransformButton({
  href,
  children,
  filled = false,
  delay = 0,
}) {
  return (
    <motion.a
      href={href}
      initial={{
        width: 54,
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        width: filled ? 240 : 220,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.03,
        y: -3,
      }}
      className={`relative h-[58px] overflow-hidden rounded-[18px] flex items-center justify-center ${
        filled
          ? "bg-[#EF233C] text-white shadow-xl shadow-[#EF233C]/20"
          : "border border-[#EF233C]/40 bg-[#090B0F]/80 backdrop-blur-xl text-white"
      }`}
    >
      <motion.div
        initial={{
          width: 18,
          height: 18,
          rotate: 45,
        }}
        animate={{
          width: 0,
          height: 0,
          rotate: 90,
        }}
        transition={{
          duration: 1.4,
          delay: delay + 0.4,
        }}
        className={`absolute ${
          filled ? "bg-white/30" : "bg-[#EF233C]"
        }`}
      />

      <motion.span
        initial={{
          opacity: 0,
          letterSpacing: "0.3em",
        }}
        animate={{
          opacity: 1,
          letterSpacing: "0em",
        }}
        transition={{
          duration: 0.8,
          delay: delay + 1.6,
        }}
        className="relative z-10 whitespace-nowrap font-bold"
      >
        {children}
      </motion.span>
    </motion.a>
  );
}

export default function DigitalCoreHero() {
  return (
    <section className="relative z-10 min-h-[720px] flex items-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="relative max-w-6xl mx-auto w-full flex justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#EF233C] uppercase tracking-[0.35em] text-sm mb-5"
          >
            CUSTOM WEBSITES • AI SOLUTIONS • DIGITAL EXPERIENCES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="text-[clamp(3.2rem,8vw,7rem)] leading-[0.9] font-black tracking-[-0.06em] text-white"
          >
            Premium Websites.
            <span className="block text-[#EF233C]">
              Powerful First Impressions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
            className="mt-8 text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Premium websites, AI-powered products, and digital experiences
            engineered to help businesses build trust, attract customers, and
            create lasting impressions online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <TransformButton
              href="#projects"
              filled
              delay={0.8}
            >
              View Projects
            </TransformButton>

            <TransformButton
              href="#booking"
              delay={1.1}
            >
              Book A Call
            </TransformButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.28 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {[
              "Client-Focused UI",
              "Frontend Systems",
              "AI-Powered Builds",
              "Full-Stack Platforms",
              "Premium Execution",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 bg-[#090B0F]/75 text-gray-200 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}