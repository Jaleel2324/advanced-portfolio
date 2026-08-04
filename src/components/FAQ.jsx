import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Do I need to pay before the discovery call?",
    answer:
      "No. The discovery call is free. We will discuss your goals, timeline, budget, and project requirements before any payment is requested.",
  },
  {
    question: "Do you offer monthly maintenance?",
    answer:
      "Yes. Monthly maintenance can include updates, bug fixes, content changes, performance improvements, security monitoring, and ongoing support.",
  },
  {
    question: "Can you build booking and payment systems?",
    answer:
      "Yes. I can integrate scheduling, video meetings, Stripe payments, subscriptions, deposits, contact forms, and complete client onboarding workflows.",
  },
  {
    question: "Can you build full-stack applications?",
    answer:
      "Yes. I build complete frontend and backend systems, including databases, authentication, dashboards, APIs, administrative tools, and custom business platforms.",
  },
  {
    question: "Can you build AI-powered applications?",
    answer:
      "Yes. I build intelligent product features, AI assistants, automation workflows, chat interfaces, data tools, and custom systems designed around business needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most business websites take between one and three weeks. Full-stack platforms and AI applications typically take between three and eight weeks, depending on scope, feedback, and technical requirements.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. I work with startups on MVPs, SaaS products, dashboards, internal systems, and customer-facing platforms.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "My primary stack includes React, Next.js, JavaScript, TypeScript, Node.js, Express, MongoDB, FastAPI, Python, Tailwind CSS, Framer Motion, Stripe, and modern cloud deployment platforms.",
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

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
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
              Frequently asked
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
              A few things worth knowing before we begin.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
              Clear answers about project scope, payments, timelines,
              maintenance, and the development process.
            </p>
          </motion.div>
        </div>

        {/* FAQ list */}
        <div className="grid gap-12 pt-16 md:pt-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="max-w-md text-xl leading-8 tracking-[-0.025em] text-white/68 md:text-2xl md:leading-9">
              Still have a question that is specific to your project?
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98]"
            >
              Ask a question
            </a>
          </motion.div>

          <div className="border-t border-white/[0.08]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.article
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 20,
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
                    duration: 0.7,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-white/[0.08]"
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-start justify-between gap-8 py-8 text-left md:py-10"
                  >
                    <span className="max-w-3xl text-xl font-semibold leading-7 tracking-[-0.035em] text-white transition duration-300 group-hover:text-white/65 md:text-2xl md:leading-8">
                      {faq.question}
                    </span>

                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] text-white/65">
                      <Plus
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-9 text-base leading-7 text-white/45 md:pb-10 md:text-lg md:leading-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;