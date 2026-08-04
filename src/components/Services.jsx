import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Premium websites",
    description:
      "High-end responsive websites built for businesses, startups, creators, and modern brands.",
    details: [
      "Responsive development",
      "Conversion-focused layouts",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    title: "Web applications",
    description:
      "Custom dashboards and full-stack applications designed around real users and business workflows.",
    details: [
      "User dashboards",
      "Admin systems",
      "Database integration",
    ],
  },
  {
    number: "03",
    title: "AI integrations",
    description:
      "Intelligent product features that automate work, support customers, and improve everyday operations.",
    details: [
      "AI assistants",
      "Workflow automation",
      "Custom AI features",
    ],
  },
  {
    number: "04",
    title: "Booking systems",
    description:
      "Smooth scheduling experiences that connect customers with your calendar, team, or service.",
    details: [
      "Calendly integration",
      "Appointment flows",
      "Teams integration",
    ],
  },
  {
    number: "05",
    title: "Payment experiences",
    description:
      "Secure payment systems for deposits, subscriptions, purchases, and client checkout flows.",
    details: [
      "Stripe payments",
      "Recurring billing",
      "Deposit collection",
    ],
  },
  {
    number: "06",
    title: "Interface redesigns",
    description:
      "Thoughtful visual upgrades that improve clarity, usability, responsiveness, and brand perception.",
    details: [
      "UI modernization",
      "Motion design",
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

function Services() {
  return (
    <section
      id="services"
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
              Services
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
              From the first screen to the systems working behind it.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
              I design and build complete digital experiences, combining
              premium interfaces with the technical systems businesses need to
              operate, grow, and serve customers.
            </p>
          </motion.div>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                y: 26,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-8 border-b border-white/[0.08] py-12 sm:grid-cols-[80px_0.9fr_1.1fr] sm:items-start md:py-16 lg:grid-cols-[100px_0.8fr_1fr_0.35fr]"
            >
              {/* Number */}
              <p className="text-sm font-medium text-white/24">
                {service.number}
              </p>

              {/* Title */}
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-white transition duration-300 group-hover:text-white/72 md:text-4xl">
                {service.title}
              </h3>

              {/* Description and details */}
              <div>
                <p className="max-w-2xl text-base leading-7 text-white/48 md:text-lg md:leading-8">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {service.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-sm text-white/30"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden justify-end lg:flex">
                <ArrowUpRight
                  size={22}
                  className="text-white/18 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/60"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-7 pt-14 md:flex-row md:items-center md:justify-between md:pt-20"
        >
          <p className="max-w-2xl text-xl leading-8 tracking-[-0.025em] text-white/65 md:text-2xl md:leading-9">
            Have a project that combines more than one service? Most of my work
            is designed and built as one connected system.
          </p>

          <a
            href="#booking"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98]"
          >
            Discuss your project
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;