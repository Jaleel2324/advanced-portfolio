import { X, ExternalLink, CheckCircle } from "lucide-react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-lg flex items-center justify-center p-6">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#090B0F] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-[#EF233C]/20 transition"
        >
          <X size={20} className="text-white" />
        </button>

        <div className="aspect-video overflow-hidden border-b border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-10">
          <p className="text-[#EF233C] uppercase tracking-wider mb-3">
            {project.category}
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            {project.title}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            {project.description}
          </p>

          {project.metrics && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Project Metrics
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="px-4 py-2 rounded-full bg-[#EF233C]/10 border border-[#EF233C]/20 text-red-200"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.video && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Project Demo
              </h3>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                <video
                  src={project.video}
                  controls
                  preload="metadata"
                  className="w-full"
                />
              </div>
            </div>
          )}

          {project.highlights && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Key Features
              </h3>

              <div className="space-y-3">
                {project.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[#EF233C] shrink-0"
                    />

                    <span className="text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/10 bg-black/30 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                GitHub Repository
              </a>
            )}

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EF233C] hover:bg-[#FF4D6D] transition font-semibold text-white shadow-lg shadow-[#EF233C]/20"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;