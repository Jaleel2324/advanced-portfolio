import { useEffect, useRef } from "react";
import { animate, scrambleText } from "animejs";
import { Cpu, Layers, Rocket } from "lucide-react";
import profileImage from "../assets/profile/profile.jpg";

const stacks = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "MongoDB",
  "FastAPI",
  "Python",
  "Tauri",
  "Stripe",
  "AI Integrations",
];

function About() {
  const lineOneRef = useRef(null);
  const lineTwoRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById("about");
    if (!section || !lineOneRef.current || !lineTwoRef.current) return;

    let hasPlayed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed) return;
        hasPlayed = true;

        animate(lineOneRef.current, {
          innerHTML: scrambleText({
            text: "I help businesses, startups, and entrepreneurs create digital experiences that attract attention, build credibility, and drive growth.",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*",
          }),
          duration: 4200,
        });

        animate(lineTwoRef.current, {
          innerHTML: scrambleText({
            text: "From premium marketing websites to full-stack applications and AI-powered platforms, every project is designed with performance, usability, and long-term scalability in mind.",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*",
          }),
          duration: 5200,
          delay: 900,
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-[#090B0F]/80 p-3 backdrop-blur-xl shadow-2xl">
            <img
              src={profileImage}
              alt="Jaleel"
              className="w-full h-[520px] object-cover object-[center_18%] rounded-[1.5rem]"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-3xl border border-white/10 bg-[#090B0F]/90 backdrop-blur-xl p-6 max-w-xs">
            <p className="text-sm uppercase tracking-[0.25em] text-[#EF233C] mb-2">
              Jaleel.dev
            </p>

            <p className="text-white font-semibold">
              Frontend Developer • Full-Stack Builder • AI Product Creator
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#EF233C] uppercase tracking-[0.3em] mb-4">
            About Jaleel
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
            Engineering Digital Experiences That Build Trust.
          </h2>

          <p
            ref={lineOneRef}
            className="text-gray-300 text-lg leading-relaxed mb-6 min-h-[90px]"
          ></p>

          <p
            ref={lineTwoRef}
            className="text-gray-400 text-lg leading-relaxed min-h-[120px]"
          ></p>

          <div className="mt-8 grid gap-5">
            {[
              [
                Cpu,
                "AI-ready systems",
                "Voice, automation, dashboards, and smart workflows.",
              ],
              [
                Layers,
                "Full-stack builds",
                "Frontend, backend, APIs, databases, and integrations.",
              ],
              [
                Rocket,
                "Client-focused UI",
                "Fast, cinematic, responsive designs built to convert.",
              ],
            ].map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-[#090B0F]/75 p-6 backdrop-blur-xl hover:border-[#EF233C]/25 transition-all duration-300"
              >
                <Icon className="text-[#EF233C] mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        {stacks.map((stack) => (
          <span
            key={stack}
            className="px-4 py-2 rounded-full border border-white/10 bg-[#090B0F]/75 text-gray-200 backdrop-blur-xl"
          >
            {stack}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;