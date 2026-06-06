import { InlineWidget } from "react-calendly";

function Booking() {
  return (
    <section
      id="booking"
      className="relative z-10 px-6 py-24 max-w-7xl mx-auto"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
              Book A Call
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Schedule a Project Strategy Call
            </h2>

            <p className="text-gray-400 text-lg mb-10">
              Book a call to discuss websites, AI systems, dashboards,
              full-stack applications, booking systems, payment integrations,
              or custom software solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">
                <h3 className="text-xl font-bold mb-2">
                  Calendly Booking
                </h3>

                <p className="text-gray-400 text-sm">
                  Instantly schedule a discovery call directly through my
                  calendar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-bold mb-2">
                  Microsoft Teams
                </h3>

                <p className="text-gray-400 text-sm">
                  Meetings can also be conducted through Microsoft Teams.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-2 text-gray-300">
              <p>
                <span className="text-blue-400 font-semibold">
                  Email:
                </span>{" "}
                jaleelpips@gmail.com
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Phone:
                </span>{" "}
                616-516-3416
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white">
            <InlineWidget
              url="https://calendly.com/jaleelpips"
              styles={{
                height: "700px",
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