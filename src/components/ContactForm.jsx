import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  Mail,
  Send,
} from "lucide-react";

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

const initialFormData = {
  name: "",
  email: "",
  company: "",
  project_type: "",
  budget: "",
  message: "",
};

function ContactForm() {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const sendLeadToJarvis = async () => {
    const jarvisApi = import.meta.env.VITE_JARVIS_API;

    if (!jarvisApi) {
      console.warn("VITE_JARVIS_API is not configured.");
      return;
    }

    const response = await fetch(`${jarvisApi}/api/business/lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: "jaleel.dev",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        project_type: formData.project_type,
        budget: formData.budget,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Jarvis lead request failed: ${response.status}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    if (!captchaVerified) {
      setStatus({
        type: "error",
        message: "Please complete the reCAPTCHA verification.",
      });

      return;
    }

    if (!formRef.current) return;

    setIsSending(true);

    setStatus({
      type: "sending",
      message: "Sending your inquiry...",
    });

    try {
      await emailjs.sendForm(
        "service_1q756vb",
        "template_m3im32p",
        formRef.current,
        "jZNwOYb2CNPDoVPIp"
      );

      try {
        await sendLeadToJarvis();
      } catch (jarvisError) {
        console.error("Jarvis lead error:", jarvisError);
      }

      setStatus({
        type: "success",
        message:
          "Your inquiry was sent successfully. I’ll review it and get back to you.",
      });

      setFormData(initialFormData);
      formRef.current.reset();

      recaptchaRef.current?.reset();
      setCaptchaVerified(false);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your inquiry. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
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
              Project inquiry
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
              Tell me what you want to create and where you want it to go.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
              Share the idea, the problem it should solve, and what a successful
              result would look like. I’ll use that information to understand
              the scope and recommend the best next step.
            </p>
          </motion.div>
        </div>

        {/* Contact experience */}
        <div className="grid gap-16 pt-16 md:pt-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* Contact details */}
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
            <p className="max-w-xl text-xl leading-8 tracking-[-0.025em] text-white/70 sm:text-2xl sm:leading-9">
              A strong inquiry does not need to include every technical detail.
              Start with the business goal and the experience you want to
              create.
            </p>

            <div className="mt-12 border-t border-white/[0.08]">
              <div className="flex gap-5 border-b border-white/[0.08] py-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                  <Mail size={18} className="text-white/70" />
                </div>

                <div>
                  <p className="text-sm text-white/32">
                    Email
                  </p>

                  <a
                    href="mailto:jaleelpips@gmail.com"
                    className="mt-2 inline-flex items-center gap-2 text-base font-medium text-white transition hover:text-white/55"
                  >
                    jaleelpips@gmail.com
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="border-b border-white/[0.08] py-7">
                <p className="text-sm text-white/32">
                  Helpful details
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/45">
                  <li>What you want to build</li>
                  <li>Who the product is for</li>
                  <li>The main features you need</li>
                  <li>Your target timeline and budget</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 max-w-lg text-sm leading-6 text-white/32">
              Submitting this form does not create a contract or payment
              obligation. Project details, pricing, and timelines are confirmed
              separately before work begins.
            </p>
          </motion.div>

          {/* Inquiry form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-white/[0.08]"
          >
            {/* Name and email */}
            <div className="grid md:grid-cols-2">
              <div className="border-b border-white/[0.08] py-7 md:border-r md:pr-6">
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-white/48"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3 min-h-0 border-0 bg-transparent px-0 py-2 text-lg text-white shadow-none outline-none placeholder:text-white/20 focus:border-0 focus:bg-transparent focus:shadow-none"
                />
              </div>

              <div className="border-b border-white/[0.08] py-7 md:pl-6">
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-white/48"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 min-h-0 border-0 bg-transparent px-0 py-2 text-lg text-white shadow-none outline-none placeholder:text-white/20 focus:border-0 focus:bg-transparent focus:shadow-none"
                />
              </div>
            </div>

            {/* Company */}
            <div className="border-b border-white/[0.08] py-7">
              <label
                htmlFor="contact-company"
                className="block text-sm font-medium text-white/48"
              >
                Company or brand
              </label>

              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Optional"
                value={formData.company}
                onChange={handleChange}
                className="mt-3 min-h-0 border-0 bg-transparent px-0 py-2 text-lg text-white shadow-none outline-none placeholder:text-white/20 focus:border-0 focus:bg-transparent focus:shadow-none"
              />
            </div>

            {/* Project type and budget */}
            <div className="grid md:grid-cols-2">
              <div className="border-b border-white/[0.08] py-7 md:border-r md:pr-6">
                <label
                  htmlFor="contact-project-type"
                  className="block text-sm font-medium text-white/48"
                >
                  Project type
                </label>

                <select
                  id="contact-project-type"
                  name="project_type"
                  required
                  value={formData.project_type}
                  onChange={handleChange}
                  className="mt-3 min-h-0 cursor-pointer appearance-none border-0 bg-transparent px-0 py-2 text-lg text-white shadow-none outline-none focus:border-0 focus:bg-transparent focus:shadow-none"
                >
                  <option value="" className="bg-[#090a0c]">
                    Select a project
                  </option>

                  <option
                    value="Portfolio Website"
                    className="bg-[#090a0c]"
                  >
                    Portfolio website
                  </option>

                  <option
                    value="Business Website"
                    className="bg-[#090a0c]"
                  >
                    Business website
                  </option>

                  <option
                    value="Full-Stack Web App"
                    className="bg-[#090a0c]"
                  >
                    Full-stack web application
                  </option>

                  <option
                    value="AI Platform"
                    className="bg-[#090a0c]"
                  >
                    AI-powered platform
                  </option>

                  <option
                    value="Dashboard"
                    className="bg-[#090a0c]"
                  >
                    Dashboard or internal system
                  </option>

                  <option
                    value="Booking + Payment System"
                    className="bg-[#090a0c]"
                  >
                    Booking and payment system
                  </option>

                  <option
                    value="UI Redesign"
                    className="bg-[#090a0c]"
                  >
                    Interface redesign
                  </option>
                </select>
              </div>

              <div className="border-b border-white/[0.08] py-7 md:pl-6">
                <label
                  htmlFor="contact-budget"
                  className="block text-sm font-medium text-white/48"
                >
                  Estimated budget
                </label>

                <select
                  id="contact-budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-3 min-h-0 cursor-pointer appearance-none border-0 bg-transparent px-0 py-2 text-lg text-white shadow-none outline-none focus:border-0 focus:bg-transparent focus:shadow-none"
                >
                  <option value="" className="bg-[#090a0c]">
                    Select a range
                  </option>

                  <option value="$500 - $1,000" className="bg-[#090a0c]">
                    $500–$1,000
                  </option>

                  <option value="$1,000 - $2,500" className="bg-[#090a0c]">
                    $1,000–$2,500
                  </option>

                  <option value="$2,500 - $5,000" className="bg-[#090a0c]">
                    $2,500–$5,000
                  </option>

                  <option value="$5,000+" className="bg-[#090a0c]">
                    $5,000+
                  </option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="border-b border-white/[0.08] py-7">
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-white/48"
              >
                Project details
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={7}
                placeholder="Describe the idea, audience, required features, and what success should look like."
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-3 min-h-[190px] resize-none border-0 bg-transparent px-0 py-2 text-lg leading-8 text-white shadow-none outline-none placeholder:text-white/20 focus:border-0 focus:bg-transparent focus:shadow-none"
              />
            </div>

            {/* CAPTCHA and submit */}
            <div className="flex flex-col gap-8 pt-8">
              <div className="overflow-x-auto">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  theme="dark"
                  onChange={(token) => {
                    setCaptchaVerified(Boolean(token));

                    if (token && status.type === "error") {
                      setStatus({
                        type: "",
                        message: "",
                      });
                    }
                  }}
                  onExpired={() => setCaptchaVerified(false)}
                  onErrored={() => {
                    setCaptchaVerified(false);

                    setStatus({
                      type: "error",
                      message:
                        "The verification could not load. Please refresh and try again.",
                    });
                  }}
                />
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-6 text-white/30">
                  Your information will only be used to review and respond to
                  this project inquiry.
                </p>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:scale-100 sm:w-auto"
                >
                  {isSending ? (
                    <>
                      Sending
                      <LoaderCircle size={17} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit inquiry
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>

              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 border-t pt-5 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-emerald-400/20 text-emerald-300"
                      : status.type === "sending"
                        ? "border-white/[0.08] text-white/48"
                        : "border-red-400/20 text-red-300"
                  }`}
                >
                  {status.type === "success" && (
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  {status.type === "sending" && (
                    <LoaderCircle
                      size={18}
                      className="mt-0.5 shrink-0 animate-spin"
                    />
                  )}

                  <p>{status.message}</p>
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;