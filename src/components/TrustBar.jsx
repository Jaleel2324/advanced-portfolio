import { motion } from "framer-motion";
import { CreditCard, LockKeyhole, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Secure development",
    description:
      "Projects are built using modern development practices with performance and reliability in mind.",
  },
  {
    icon: CreditCard,
    title: "Stripe payments",
    description:
      "Deposits, purchases, and subscriptions are securely processed through Stripe.",
  },
  {
    icon: LockKeyhole,
    title: "Private communication",
    description:
      "Project discussions, documents, and client information are handled confidentially.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function TrustBar() {
  return (
    <section className="relative z-10 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px] border-y border-white/[0.08]">
        <div className="grid gap-10 py-14 md:grid-cols-3 md:gap-12 md:py-20">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                  <Icon
                    size={20}
                    className="text-white/72"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/42">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;