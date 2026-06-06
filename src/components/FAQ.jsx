import { useState } from "react";

const faqs = [
  {
    question: "Do I need to pay before the discovery call?",
    answer:
      "No. The discovery call is completely free. We'll discuss your project goals, timeline, budget, and requirements before any payment is requested.",
  },
  {
    question: "Do you offer monthly maintenance?",
    answer:
      "Yes. Every project can include a monthly maintenance plan covering updates, bug fixes, content changes, security monitoring, performance optimization, and ongoing support.",
  },
  {
    question: "Can you build booking and payment systems?",
    answer:
      "Absolutely. I can integrate Calendly, Microsoft Teams, Stripe payments, subscriptions, deposits, contact forms, and complete client onboarding workflows.",
  },
  {
    question: "Can you build full-stack applications?",
    answer:
      "Yes. I build complete frontend and backend systems including databases, authentication, dashboards, APIs, admin panels, and custom business platforms.",
  },
  {
    question: "Can you build AI-powered applications?",
    answer:
      "Yes. I develop AI-powered systems including automation workflows, AI assistants, dashboards, chat interfaces, data processing tools, and business automation platforms.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites take between 1-3 weeks depending on complexity. Full-stack platforms and AI applications typically range from 3-8 weeks depending on scope and requirements.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. Startups are one of my favorite client types. I can help design, build, and launch MVPs, SaaS products, dashboards, and customer-facing platforms.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "My primary stack includes React, Next.js, JavaScript, TypeScript, Node.js, Express, MongoDB, FastAPI, Tailwind CSS, Framer Motion, AI integrations, and modern cloud deployment platforms.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative z-10 px-6 py-24 max-w-5xl mx-auto"
    >
      <div className="text-center mb-14">
        <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
          FAQ
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Answers to the most common questions clients ask before starting a
          project.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="text-lg font-bold">
                  {faq.question}
                </span>

                <span className="text-blue-400 text-3xl font-light">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;