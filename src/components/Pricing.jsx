import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const plans = [
  {
    number: "01",
    name: "Starter Website",
    price: "$500",
    deposit: "$250",
    monthly: "$100/mo",
    description:
      "A polished digital foundation for local businesses, personal brands, and early-stage companies.",
    depositLink: "https://buy.stripe.com/dRmbJ33Ho3gl9KzahQffy01",
    maintenanceLink: "https://buy.stripe.com/4gM5kFa5M0497CrblUffy00",
    features: [
      "Up to five pages",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "Deployment",
      "Thirty days of support",
    ],
  },
  {
    number: "02",
    name: "Business Website",
    price: "$1,500",
    deposit: "$750",
    monthly: "$200/mo",
    featured: true,
    description:
      "A premium website for growing businesses that need stronger presentation, lead generation, and integrated tools.",
    depositLink: "https://buy.stripe.com/14AfZj2Dk4kpe0P4Xwffy02",
    maintenanceLink: "https://buy.stripe.com/cNi3cxcdU18d6yn61Affy03",
    features: [
      "Everything in Starter",
      "Custom visual direction",
      "Booking integration",
      "Advanced interactions",
      "Analytics setup",
      "Performance optimization",
      "Priority support",
    ],
  },
  {
    number: "03",
    name: "AI & Full-Stack Platform",
    price: "$2,000",
    deposit: "$1,000",
    monthly: "$400/mo",
    description:
      "A custom application, dashboard, automation system, or intelligent platform built around your workflow.",
    depositLink: "https://buy.stripe.com/bJe5kF2DkaINf4T0Hgffy04",
    maintenanceLink: "https://buy.stripe.com/cNi00lb9Q18d4qfgGeffy05",
    features: [
      "Frontend and backend",
      "Database integration",
      "Authentication",
      "Admin dashboard",
      "API integrations",
      "AI-powered features",
      "Automation workflows",
      "Priority development",
    ],
  },
];

const upgradeFeatures = [
  "Advanced motion",
  "Booking integration",
  "Additional pages",
  "SEO enhancements",
  "Analytics integration",
  "Performance optimization",
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

function Pricing() {
  return (
    <section
      id="pricing"
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
              Investment
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
              Clear starting points for thoughtfully built digital products.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
              Every engagement begins with a project conversation. Final scope,
              timeline, and pricing are confirmed before development begins.
            </p>
          </motion.div>
        </div>

        {/* Pricing plans */}
        <div className="pt-16 md:pt-24">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative grid gap-10 border-b py-14 md:py-20 lg:grid-cols-[90px_0.85fr_0.75fr_1fr] lg:gap-14 ${
                plan.featured
                  ? "border-white/[0.12]"
                  : "border-white/[0.08]"
              }`}
            >
              {/* Number */}
              <div>
                <p className="text-sm font-medium text-white/24">
                  {plan.number}
                </p>
              </div>

              {/* Plan details */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
                    {plan.name}
                  </h3>

                  {plan.featured && (
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                      Recommended
                    </span>
                  )}
                </div>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
                  {plan.description}
                </p>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/52"
                    >
                      <Check
                        size={16}
                        className="shrink-0 text-white/72"
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <p className="text-sm text-white/32">
                  Starting investment
                </p>

                <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
                  {plan.price}
                </p>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <p className="text-sm text-white/35">
                    Deposit
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    {plan.deposit}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    A 50% deposit reserves the project and begins development.
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-6">
                  <p className="text-sm text-white/35">
                    Ongoing support
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    {plan.monthly}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Optional maintenance and support after launch.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-center gap-3">
                <a
                  href="#booking"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
                >
                  Discuss this package
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href={plan.depositLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.035] px-6 text-center text-sm font-semibold text-white transition duration-300 hover:border-white/25 hover:bg-white/[0.075]"
                >
                  Pay {plan.deposit} deposit
                  <CreditCard size={16} />
                </a>

                <a
                  href={plan.maintenanceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 px-4 text-center text-sm font-medium text-white/38 transition hover:text-white"
                >
                  View maintenance plan
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Payment process */}
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
          className="grid gap-12 border-b border-white/[0.08] py-20 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"
        >
          <div>
            <p className="text-sm font-medium text-white/42">
              Payment process
            </p>
          </div>

          <div>
            <h3 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl">
              A straightforward process from agreement to launch.
            </h3>

            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              <div>
                <p className="text-sm text-white/25">
                  01
                </p>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Confirm the scope
                </h4>

                <p className="mt-3 text-sm leading-6 text-white/42">
                  We agree on the project requirements, timeline, deliverables,
                  and final investment.
                </p>
              </div>

              <div>
                <p className="text-sm text-white/25">
                  02
                </p>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Reserve development
                </h4>

                <p className="mt-3 text-sm leading-6 text-white/42">
                  The 50% deposit reserves your project and begins the design
                  and development process.
                </p>
              </div>

              <div>
                <p className="text-sm text-white/25">
                  03
                </p>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Approve and launch
                </h4>

                <p className="mt-3 text-sm leading-6 text-white/42">
                  The remaining balance is completed after approval and before
                  the final product goes live.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upgrade */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-12 border-b border-white/[0.08] py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24"
        >
          <div>
            <p className="text-sm font-medium text-white/42">
              Optional enhancement
            </p>

            <h3 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              Website Growth Upgrade
            </h3>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
              Expand an existing website package with additional pages,
              advanced motion, scheduling tools, performance improvements, and
              growth-focused integrations.
            </p>

            <div className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {upgradeFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-white/48"
                >
                  <Check
                    size={16}
                    className="text-white/72"
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-sm text-white/32">
              One-time upgrade
            </p>

            <p className="mt-3 text-6xl font-semibold tracking-[-0.07em] text-white md:text-7xl">
              $800
            </p>

            <a
              href="https://buy.stripe.com/cNi5kF7XE9EJ7Cr1Lkffy06"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98]"
            >
              Purchase upgrade
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Security note */}
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
            duration: 0.8,
          }}
          className="flex flex-col gap-5 pt-12 sm:flex-row sm:items-start md:pt-16"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
            <ShieldCheck
              size={18}
              className="text-white/70"
            />
          </div>

          <div>
            <h4 className="text-base font-semibold text-white">
              Secure payments through Stripe
            </h4>

            <p className="mt-2 max-w-4xl text-sm leading-6 text-white/38">
              Project deposits and maintenance subscriptions are securely
              processed through Stripe. Maintenance is billed separately and
              can be managed through the client’s Stripe billing experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;