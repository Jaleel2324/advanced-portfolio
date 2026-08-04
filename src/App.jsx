import { useState } from "react";

import Navbar from "./components/Navbar";
import DigitalCoreHero from "./components/DigitalCoreHero";
import About from "./components/About";
import Services from "./components/Services";
import VideoShowcase from "./components/VideoShowcase";
import InspirationShowcase from "./components/InspirationShowcase";
import Booking from "./components/Booking";
import Pricing from "./components/Pricing";
import TrustBar from "./components/TrustBar";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import ContactForm from "./components/ContactForm";

import CursorGlow from "./components/CursorGlow";
import ProjectModal from "./components/ProjectModal";
import Loader from "./components/Loader";
import SectionReveal from "./components/SectionReveal";
import SplineBackground from "./components/SplineBackground";

import { projects } from "./data/projects";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main
      id="top"
      className="relative min-h-screen overflow-x-hidden bg-[#020304] text-white"
    >
      <Loader />

      {/* Main animated background */}
      <SplineBackground />

      {/* Existing cursor effect */}
      <CursorGlow />

      <Navbar />

      <DigitalCoreHero />

      <SectionReveal>
        <About />
      </SectionReveal>

      <SectionReveal>
        <Services />
      </SectionReveal>

      {/* Real projects */}
      <SectionReveal>
        <section
          id="projects"
          className="relative z-10 px-5 py-28 sm:px-8 md:py-40"
        >
          <div className="mx-auto max-w-[1400px]">
            {/* Section introduction */}
            <div className="mx-auto mb-24 max-w-5xl text-center md:mb-32">
              <p className="mb-6 text-sm font-medium text-white/42">
                Selected work
              </p>

              <h2 className="text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Products designed
                <span className="block text-white/40">
                  to feel unforgettable.
                </span>
              </h2>

              <p className="mx-auto mt-9 max-w-3xl text-lg leading-8 text-white/48 md:text-xl">
                Full-stack platforms, intelligent systems, and digital
                experiences built around clarity, performance, and thoughtful
                interaction.
              </p>
            </div>

            {/* Large project showcases */}
            <div className="space-y-24 md:space-y-36">
              {projects.map((project, index) => {
                const reverse = index % 2 !== 0;

                return (
                  <article
                    key={project.title}
                    className="group overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.028] backdrop-blur-md md:rounded-[42px]"
                  >
                    <div
                      className={`grid min-h-[680px] items-center lg:grid-cols-2 ${
                        reverse ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Project image */}
                      <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-black/25 p-5 sm:p-8 md:min-h-[520px] md:p-12">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_62%)]" />

                        <div className="relative w-full overflow-hidden rounded-[22px] border border-white/[0.08] bg-black shadow-2xl shadow-black/50 transition-transform duration-700 ease-out group-hover:scale-[1.012] md:rounded-[28px]">
                          <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            className="aspect-[16/10] h-full w-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Project information */}
                      <div className="flex h-full items-center px-7 py-14 sm:px-10 md:px-14 md:py-20 lg:px-16 xl:px-20">
                        <div className="max-w-xl">
                          <p className="mb-5 text-sm font-medium text-white/35">
                            {project.category}
                          </p>

                          <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                            {project.title}
                          </h3>

                          <p className="mt-7 text-lg leading-8 text-white/50">
                            {project.description}
                          </p>

                          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="text-sm font-medium text-white/35"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98]"
                          >
                            Explore project
                            <span aria-hidden="true">↗</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Videos for your real projects */}
      <SectionReveal>
        <VideoShowcase />
      </SectionReveal>

      {/* Third-party design inspiration */}
      <SectionReveal>
        <InspirationShowcase />
      </SectionReveal>

      <SectionReveal>
        <Booking />
      </SectionReveal>

      <SectionReveal>
        <Pricing />
      </SectionReveal>

      <SectionReveal>
        <TrustBar />
      </SectionReveal>

      <SectionReveal>
        <Reviews />
      </SectionReveal>

      <SectionReveal>
        <FAQ />
      </SectionReveal>

      <SectionReveal>
        <FinalCTA />
      </SectionReveal>

      <SectionReveal>
        <ContactForm />
      </SectionReveal>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/[0.08] bg-black/25 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 md:py-20">
          <div className="grid gap-14 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
            {/* Brand */}
            <div>
              <a
                href="#top"
                className="text-2xl font-semibold tracking-[-0.04em] text-white transition hover:text-white/65"
              >
                Jaleel.dev
              </a>

              <p className="mt-5 max-w-md text-base leading-7 text-white/42">
                Digital products, premium websites, and intelligent platforms
                built with thoughtful design and modern technology.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-white">
                Navigation
              </h4>

              <nav className="mt-5 flex flex-col gap-3 text-sm text-white/42">
                <a
                  href="#projects"
                  className="transition hover:text-white"
                >
                  Work
                </a>

                <a
                  href="#inspiration"
                  className="transition hover:text-white"
                >
                  Inspiration
                </a>

                <a
                  href="#services"
                  className="transition hover:text-white"
                >
                  Services
                </a>

                <a
                  href="#pricing"
                  className="transition hover:text-white"
                >
                  Pricing
                </a>

                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white">
                Contact
              </h4>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/42">
                <a
                  href="mailto:jaleelpips@gmail.com"
                  className="transition hover:text-white"
                >
                  jaleelpips@gmail.com
                </a>

                <a
                  href="#booking"
                  className="transition hover:text-white"
                >
                  Book a discovery call
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-8 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Jaleel.dev</p>

            <p>Designed and developed by Jaleel Dixon.</p>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

export default App;