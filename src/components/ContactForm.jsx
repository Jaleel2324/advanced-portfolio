import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_1q756vb",
        "template_m3im32p",
        e.target,
        "jZNwOYb2CNPDoVPIp"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative z-10 px-6 py-24 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-[#EF233C] uppercase tracking-[0.3em] mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Tell me what you want to build.
          </h2>

          <p className="text-gray-400 text-lg">
            Send a project inquiry for websites, full-stack apps, AI dashboards,
            booking systems, payment flows, or premium UI upgrades.
          </p>

          <div className="mt-8 space-y-3 text-gray-300">
            <p>
              <span className="text-[#EF233C] font-semibold">Email:</span>{" "}
              jaleelpips@gmail.com
            </p>

            <p>
              <span className="text-[#EF233C] font-semibold">Phone:</span>{" "}
              616-516-3416
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-[#090B0F]/80 backdrop-blur-xl p-8 space-y-5"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#EF233C] transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#EF233C] transition"
          />

          <input
            name="company"
            type="text"
            placeholder="Company / Brand Name"
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#EF233C] transition"
          />

          <select
            name="project_type"
            required
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#EF233C] text-gray-400 transition"
          >
            <option value="">Project Type</option>
            <option>Portfolio Website</option>
            <option>Business Website</option>
            <option>Full-Stack Web App</option>
            <option>AI Platform</option>
            <option>Dashboard</option>
            <option>Booking + Payment System</option>
          </select>

          <select
            name="budget"
            required
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#EF233C] text-gray-400 transition"
          >
            <option value="">Estimated Budget</option>
            <option>$500 - $1,000</option>
            <option>$1,000 - $2,500</option>
            <option>$2,500 - $5,000</option>
            <option>$5,000+</option>
          </select>

          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            required
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#EF233C] resize-none transition"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#EF233C] hover:bg-[#FF4D6D] transition font-semibold flex items-center justify-center gap-2 text-white shadow-lg shadow-[#EF233C]/20"
          >
            Submit Inquiry <Send size={18} />
          </button>

          {status && (
            <div
              className={`text-center rounded-xl px-4 py-3 border ${
                status.includes("successfully")
                  ? "border-green-400/30 bg-green-500/10 text-green-300"
                  : status.includes("Sending")
                  ? "border-[#EF233C]/30 bg-[#EF233C]/10 text-red-300"
                  : "border-red-400/30 bg-red-500/10 text-red-300"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;