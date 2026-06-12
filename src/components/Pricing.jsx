import { Check, CreditCard, Shield } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "$500",
    monthly: "$100/mo",
    description:
      "Perfect for local businesses, personal brands, and startups needing a professional online presence.",
    depositLink: "https://buy.stripe.com/dRmbJ33Ho3gl9KzahQffy01",
    maintenanceLink: "https://buy.stripe.com/4gM5kFa5M0497CrblUffy00",
    features: [
      "Up to 5 pages",
      "Mobile Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "Fast Deployment",
      "30 Days Support",
    ],
  },
  {
    name: "Business Website",
    price: "$1,500",
    monthly: "$200/mo",
    featured: true,
    description:
      "Ideal for growing businesses that need premium design, booking systems, lead generation, and advanced functionality.",
    depositLink: "https://buy.stripe.com/14AfZj2Dk4kpe0P4Xwffy02",
    maintenanceLink: "https://buy.stripe.com/cNi3cxcdU18d6yn61Affy03",
    features: [
      "Everything In Starter",
      "Premium Custom Design",
      "Booking Integration",
      "Advanced Animations",
      "Analytics Setup",
      "Performance Optimization",
      "Priority Support",
    ],
  },
  {
    name: "AI & Full-Stack Platform",
    price: "$2,000",
    monthly: "$400/mo",
    description:
      "Custom AI applications, SaaS products, dashboards, automation systems, and advanced full-stack platforms.",
    depositLink: "https://buy.stripe.com/bJe5kF2DkaINf4T0Hgffy04",
    maintenanceLink: "https://buy.stripe.com/cNi00lb9Q18d4qfgGeffy05",
    features: [
      "Frontend + Backend",
      "Database Integration",
      "Authentication System",
      "Admin Dashboard",
      "API Integrations",
      "AI Features",
      "Automation Workflows",
      "Priority Development",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#EF233C] uppercase tracking-[0.3em] mb-4">
          Pricing
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Professional Development Packages
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Every project begins with a free strategy call to discuss your goals,
          timeline, and requirements before moving forward.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
              plan.featured
                ? "border-[#EF233C]/50 bg-[#090B0F]/90 shadow-2xl shadow-[#EF233C]/20"
                : "border-white/10 bg-[#090B0F]/75 hover:border-[#EF233C]/30"
            }`}
          >
            {plan.featured && (
              <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#EF233C] text-white text-sm font-semibold">
                Most Popular
              </div>
            )}

            <CreditCard size={34} className="text-[#EF233C] mb-6" />

            <h3 className="text-3xl font-bold mb-2 text-white">
              {plan.name}
            </h3>

            <p className="text-gray-400 mb-6">
              {plan.description}
            </p>

            <div className="mb-8">
              <p className="text-5xl font-black text-white">
                {plan.price}
              </p>

              <p className="text-[#EF233C] mt-2">
                One-Time Project Cost
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4">
                <p className="text-sm text-gray-400">
                  Monthly Maintenance
                </p>

                <p className="text-2xl font-bold text-white">
                  {plan.monthly}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check size={18} className="text-[#EF233C] shrink-0" />

                  <span className="text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <a
                href="#booking"
                className={`block w-full text-center py-4 rounded-xl font-semibold transition ${
                  plan.featured
                    ? "bg-[#EF233C] hover:bg-[#FF4D6D] text-white shadow-lg shadow-[#EF233C]/20"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Book A Call First
              </a>

              <a
                href={plan.depositLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-4 rounded-xl border border-[#EF233C]/25 bg-[#EF233C]/10 text-red-200 hover:bg-[#EF233C]/15 transition font-semibold"
              >
                Pay Deposit
              </a>

              <a
                href={plan.maintenanceLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-4 rounded-xl border border-white/10 bg-black/35 text-gray-200 hover:border-[#EF233C]/30 hover:bg-[#EF233C]/10 transition font-semibold"
              >
                Start Monthly Maintenance
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <div className="rounded-3xl border border-white/10 bg-[#090B0F]/80 p-8 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#EF233C] uppercase tracking-[0.3em] mb-3">
                Optional Upgrade
              </p>

              <h3 className="text-4xl font-black mb-4 text-white">
                Website Growth Upgrade
              </h3>

              <p className="text-gray-300 mb-6">
                Already have a website package selected? Upgrade your project
                with premium features designed to increase conversions, improve
                user experience, and help your business grow online.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Advanced Animations",
                  "Booking Integration",
                  "Additional Pages",
                  "SEO Enhancements",
                  "Analytics Integration",
                  "Performance Optimization",
                ].map((item) => (
                  <div key={item} className="text-gray-300">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-gray-400 mb-2">
                One-Time Upgrade
              </p>

              <h3 className="text-6xl font-black text-[#EF233C] mb-6">
                $800
              </h3>

              <a
                href="https://buy.stripe.com/cNi5kF7XE9EJ7Cr1Lkffy06"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-4 rounded-2xl bg-[#EF233C] hover:bg-[#FF4D6D] transition font-semibold text-white shadow-lg shadow-[#EF233C]/20"
              >
                Purchase Upgrade
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-[#090B0F]/75 p-6 flex gap-4 backdrop-blur-xl">
        <Shield className="text-[#EF233C] shrink-0" />

        <p className="text-gray-400">
          All payments are securely processed through Stripe. Monthly
          maintenance subscriptions are automatically billed each month and can
          be managed directly by the client through Stripe.
        </p>
      </div>
    </section>
  );
}

export default Pricing;