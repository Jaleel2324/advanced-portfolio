import {
  Brain,
  CalendarCheck,
  CreditCard,
  LayoutDashboard,
  MonitorSmartphone,
  WandSparkles,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Premium Websites",
    description:
      "Modern responsive websites for businesses, creators, startups, and personal brands.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Web Apps",
    description:
      "Full-stack apps with dashboards, user flows, databases, and admin tools.",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    description:
      "AI assistants, smart workflows, automation tools, chat systems, and AI-powered features.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    description:
      "Calendly, Microsoft Teams, appointment flows, and client scheduling integrations.",
  },
  {
    icon: CreditCard,
    title: "Payment Platforms",
    description:
      "Stripe deposits, one-time payments, subscriptions, and client checkout flows.",
  },
  {
    icon: WandSparkles,
    title: "UI/UX Upgrades",
    description:
      "Cinematic interfaces, animations, landing pages, and premium frontend design.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative z-10 px-6 py-24 max-w-7xl mx-auto"
    >
      <div className="mb-14">
        <p className="text-[#EF233C] uppercase tracking-[0.3em] mb-4">
          Services
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          What Clients Can Hire Me For
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg">
          I help businesses and startups launch premium web experiences with
          strong visuals, useful features, and clean technical execution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-[#090B0F]/75 backdrop-blur-xl p-8 transition-all duration-300 hover:bg-[#090B0F]/95 hover:-translate-y-2 hover:border-[#EF233C]/30 hover:shadow-2xl hover:shadow-[#EF233C]/10"
            >
              <div className="w-14 h-14 rounded-2xl border border-[#EF233C]/25 bg-[#EF233C]/10 flex items-center justify-center mb-6 transition-all duration-300">
                <Icon
                  className="text-[#EF233C]"
                  size={28}
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-[#EF233C]/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;