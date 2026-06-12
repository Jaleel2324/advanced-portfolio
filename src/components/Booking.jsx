import { InlineWidget } from "react-calendly";

function Booking() {
  return (
    <section
      id="booking"
      className="relative z-10 px-6 py-24 max-w-7xl mx-auto"
    >
      <div className="rounded-[2rem] border border-white/10 bg-[#090B0F]/85 backdrop-blur-xl p-8 lg:p-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[#EF233C] uppercase tracking-[0.3em] mb-4">
              Book A Call
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Let's Talk About Your Next Project
            </h2>

            <p className="text-gray-400 text-lg mb-10">
              Whether you need a premium website, AI-powered platform,
              automation system, dashboard, booking solution, or full-stack
              application, let's discuss how we can bring it to life.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#EF233C]/25 bg-[#EF233C]/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Calendly Booking
                </h3>

                <p className="text-gray-400 text-sm">
                  Instantly schedule a discovery call directly through my
                  calendar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Microsoft Teams
                </h3>

                <p className="text-gray-400 text-sm">
                  Meetings can also be conducted through Microsoft Teams.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-2 text-gray-300">
              <p>
                <span className="text-[#EF233C] font-semibold">Email:</span>{" "}
                jaleelpips@gmail.com
              </p>

              <p>
                <span className="text-[#EF233C] font-semibold">Phone:</span>{" "}
                616-516-3416
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-gray-400">
                Most projects start with a free strategy call where we discuss
                goals, timeline, features, and the best approach for your
                business.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white shadow-2xl">
            <InlineWidget
              url="https://calendly.com/jaleelpips/website-strategy-session"
              styles={{
                height: "650px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;