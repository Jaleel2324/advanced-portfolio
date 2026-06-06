import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import VideoShowcase from "./components/VideoShowcase";
import Booking from "./components/Booking";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import ContactForm from "./components/ContactForm";
import BackgroundFX from "./components/BackgroundFX";
import CursorGlow from "./components/CursorGlow";
import ProjectModal from "./components/ProjectModal";
import Loader from "./components/Loader";
import SectionReveal from "./components/SectionReveal";
import { projects } from "./data/projects";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="relative min-h-screen bg-[#05010F] text-white overflow-hidden">
      <Loader />
      <BackgroundFX />
      <CursorGlow />

      <Navbar />
      <Hero />

      <SectionReveal>
        <About />
      </SectionReveal>

      <SectionReveal>
        <Services />
      </SectionReveal>

      <SectionReveal>
        <section
          id="projects"
          className="relative z-10 px-6 py-24 max-w-7xl mx-auto"
        >
          <div className="mb-14">
            <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
              Featured Work
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Projects Built To Impress Clients
            </h2>

            <p className="text-gray-400 max-w-3xl text-lg">
              Premium applications, AI systems, business platforms, dashboards,
              and full-stack experiences designed to showcase technical skill
              and solve real-world problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <p className="text-purple-400 mb-3 font-medium">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm border border-purple-400/20 bg-purple-500/10 text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-8 w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <VideoShowcase />
      </SectionReveal>

      <SectionReveal>
        <Booking />
      </SectionReveal>

      <SectionReveal>
        <Pricing />
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

      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-3">Jaleel.dev</h3>
              <p className="text-gray-400">
                Frontend Developer • Full Stack Developer • AI Builder
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>616-516-3416</p>
                <p>jaleelpips@gmail.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>Starter Websites - $500</p>
                <p>Business Websites - $1,500</p>
                <p>AI & Full-Stack Platforms - $2,000</p>
                <p>Monthly Maintenance Plans</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
            © 2026 Jaleel.dev — Built with React, Tailwind CSS, Framer Motion,
            Calendly, EmailJS & Stripe
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