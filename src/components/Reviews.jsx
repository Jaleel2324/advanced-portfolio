import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Marcus Bennett",
    role: "Local Service Business Owner",
    text: "The website looked clean, professional, and made my business feel much more trustworthy. The booking flow was easy for customers to use.",
  },
  {
    name: "Alicia Monroe",
    role: "Startup Founder",
    text: "Jaleel turned the idea into a polished interface that felt modern and ready to present to early users. The design quality stood out immediately.",
  },
  {
    name: "Darren Cole",
    role: "Fitness Brand Owner",
    text: "The site felt premium and helped organize the brand much better. The layout, animations, and contact flow made a strong first impression.",
  },
  {
    name: "Nina Patterson",
    role: "Online Coaching Business",
    text: "The project came together with a strong visual direction and smooth user experience. The final result felt professional and client-ready.",
  },
  {
    name: "Evan Brooks",
    role: "Small Business Consultant",
    text: "The website structure made the services easier to understand and gave the business a more credible online presence.",
  },
  {
    name: "Samantha Reed",
    role: "Creative Entrepreneur",
    text: "The design felt high-end without being confusing. It was clear, fast, mobile-friendly, and gave my brand a stronger digital identity.",
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

function Reviews() {
  return (
    <section
      id="reviews"
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
              Client perspective
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
              The finished product should feel as strong as the business behind
              it.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
              The goal is not simply to deliver a functioning website. It is to
              create an experience that improves trust, clarity, and the way a
              business presents itself online.
            </p>
          </motion.div>
        </div>

        {/* Featured testimonial */}
        {reviews.length > 0 && (
          <motion.article
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-10 border-b border-white/[0.08] py-20 md:py-28 lg:grid-cols-[0.35fr_1.65fr] lg:gap-20"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                <Quote size={20} className="text-white/65" />
              </div>
            </div>

            <div>
              <blockquote className="max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                “{reviews[0].text}”
              </blockquote>

              <div className="mt-10">
                <p className="text-base font-semibold text-white">
                  {reviews[0].name}
                </p>

                <p className="mt-1 text-sm text-white/38">
                  {reviews[0].role}
                </p>
              </div>
            </div>
          </motion.article>
        )}

        {/* Remaining testimonials */}
        <div className="grid md:grid-cols-2">
          {reviews.slice(1).map((review, index) => (
            <motion.article
              key={review.name}
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex min-h-[340px] flex-col justify-between border-b border-white/[0.08] py-12 md:p-12 ${
                index % 2 === 0
                  ? "md:border-r md:border-white/[0.08]"
                  : ""
              }`}
            >
              <Quote size={20} className="text-white/18" />

              <blockquote className="mt-10 text-xl leading-8 tracking-[-0.025em] text-white/68 md:text-2xl md:leading-9">
                “{review.text}”
              </blockquote>

              <div className="mt-12">
                <p className="text-sm font-semibold text-white">
                  {review.name}
                </p>

                <p className="mt-1 text-sm text-white/32">
                  {review.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing note */}
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
          className="flex flex-col gap-6 pt-14 md:flex-row md:items-center md:justify-between md:pt-20"
        >
          <p className="max-w-2xl text-lg leading-8 text-white/45">
            Every collaboration is approached with clear communication,
            thoughtful execution, and attention to the details customers
            notice.
          </p>

          <a
            href="#booking"
            className="inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98]"
          >
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Reviews;