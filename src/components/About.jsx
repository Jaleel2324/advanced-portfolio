import { Cpu, Layers, Rocket } from "lucide-react";

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
  return (
    <section id="about" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            I build high-end digital experiences for modern brands.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a frontend developer with full-stack experience focused on
            premium web apps, AI-powered platforms, booking systems, payment
            flows, dashboards, and polished client-facing interfaces.
          </p>
        </div>

        <div className="grid gap-5">
          {[
            [Cpu, "AI-ready systems", "Voice, automation, dashboards, and smart workflows."],
            [Layers, "Full-stack builds", "Frontend, backend, APIs, databases, and integrations."],
            [Rocket, "Client-focused UI", "Fast, cinematic, responsive designs built to convert."],
          ].map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <Icon className="text-blue-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        {stacks.map((stack) => (
          <span
            key={stack}
            className="px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-200"
          >
            {stack}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;