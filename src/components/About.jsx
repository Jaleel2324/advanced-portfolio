import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import profileImage from "../assets/profile/profile.jpg";

const capabilities = [
  {
    number: "01",
    title: "Digital products",
    description:
      "Premium websites and interfaces shaped around clarity, usability, and strong visual identity.",
  },
  {
    number: "02",
    title: "Full-stack systems",
    description:
      "Frontend experiences connected to dependable APIs, databases, payments, and business workflows.",
  },
  {
    number: "03",
    title: "Intelligent software",
    description:
      "AI integrations and automation designed to make products more useful, responsive, and efficient.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Stripe",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-5 py-28 sm:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section introduction */}
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
              About the studio
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
              I build digital experiences that make businesses feel established,
              capable, and ready for what comes next.
            </h2>
          </motion.div>
        </div>

        {/* Portrait and story */}
        <div className="grid items-start gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[28px] bg-white/[0.035] md:rounded-[40px]"
          >
            <img
              src={profileImage}
              alt="Jaleel Dixon"
              className="h-[520px] w-full object-cover object-[center_18%] sm:h-[620px] lg:h-[760px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xl font-semibold tracking-[-0.04em] text-white">
                Jaleel Dixon
              </p>

              <p className="mt-2 text-sm tracking-wide text-white/55">
                Product Engineer • Web Experiences • AI Platforms
              </p>
            </div>
          </motion.div>

          <div className="lg:sticky lg:top-28">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-xl leading-8 text-white/72 sm:text-2xl sm:leading-9">
                I work across design and engineering to create websites,
                applications, and intelligent systems that feel considered from
                the first interaction to the final detail.
              </p>

              <p className="mt-8 text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                Every project starts with understanding the business behind the
                interface. From there, I shape the structure, visual direction,
                technology, and interactions around what the product needs to
                accomplish.
              </p>

              <a
                href="#projects"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/55"
              >
                See how I work
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="border-t border-white/[0.08]">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-6 border-b border-white/[0.08] py-10 sm:grid-cols-[90px_0.8fr_1.2fr] sm:items-start md:py-14"
            >
              <p className="text-sm font-medium text-white/25">
                {item.number}
              </p>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                {item.title}
              </h3>

              <p className="max-w-2xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Technology line */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
          }}
          className="flex flex-col gap-6 pt-12 md:flex-row md:items-start md:justify-between md:pt-16"
        >
          <p className="text-sm font-medium text-white/35">
            Selected technologies
          </p>

          <p className="max-w-4xl text-lg leading-8 text-white/50 md:text-right md:text-xl">
            {technologies.join(" · ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;