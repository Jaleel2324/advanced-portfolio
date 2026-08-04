import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Mail } from "lucide-react";
import { InlineWidget } from "react-calendly";

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

function Booking() {
  return (
    <section
      id="booking"
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
              Start a project
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
              Let’s turn the next idea into something people remember.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
              Schedule a discovery call to discuss your goals, timeline,
              product requirements, and the best path from concept to launch.
            </p>
          </motion.div>
        </div>

        {/* Booking experience */}
        <div className="grid gap-14 pt-16 md:pt-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Booking information */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="max-w-xl text-xl leading-8 tracking-[-0.025em] text-white/72 sm:text-2xl sm:leading-9">
              Most projects begin with a focused conversation about the
              business, the customer, and what the finished experience needs to
              accomplish.
            </p>

            <div className="mt-12 border-t border-white/[0.08]">
              <div className="flex gap-5 border-b border-white/[0.08] py-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                  <CalendarDays size={18} className="text-white/70" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Discovery session
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/42">
                    We’ll review your goals, required features, visual
                    direction, timeline, and the next practical steps.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-white/[0.08] py-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                  <ArrowUpRight size={18} className="text-white/70" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Video meeting
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/42">
                    Your scheduled call can be held online, with the meeting
                    details provided after booking.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-white/[0.08] py-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                  <Mail size={18} className="text-white/70" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Prefer email?
                  </h3>

                  <a
                    href="mailto:jaleelpips@gmail.com"
                    className="mt-2 inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
                  >
                    jaleelpips@gmail.com
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-lg text-sm leading-6 text-white/32">
              There is no obligation after the call. The purpose is to
              understand the project and determine whether the scope, timing,
              and working relationship are a strong fit.
            </p>
          </motion.div>

          {/* Calendly */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.985,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.95,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:rounded-[40px]"
          >
            <InlineWidget
              url="https://calendly.com/jaleelpips/website-strategy-session"
              styles={{
                height: "720px",
                width: "100%",
              }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "111111",
                textColor: "111111",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Booking;