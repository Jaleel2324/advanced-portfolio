import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus Bennett",
    role: "Local Service Business Owner",
    rating: 5,
    text: "The website looked clean, professional, and made my business feel much more trustworthy. The booking flow was easy for customers to use.",
  },
  {
    name: "Alicia Monroe",
    role: "Startup Founder",
    rating: 5,
    text: "Jaleel turned the idea into a polished interface that felt modern and ready to present to early users. The design quality stood out immediately.",
  },
  {
    name: "Darren Cole",
    role: "Fitness Brand Owner",
    rating: 4,
    text: "The site felt premium and helped organize the brand much better. The layout, animations, and contact flow made a strong first impression.",
  },
  {
    name: "Nina Patterson",
    role: "Online Coaching Business",
    rating: 5,
    text: "The project came together with a strong visual direction and smooth user experience. The final result felt professional and client-ready.",
  },
  {
    name: "Evan Brooks",
    role: "Small Business Consultant",
    rating: 4,
    text: "The website structure made the services easier to understand and gave the business a more credible online presence.",
  },
  {
    name: "Samantha Reed",
    role: "Creative Entrepreneur",
    rating: 5,
    text: "The design felt high-end without being confusing. It was clear, fast, mobile-friendly, and gave my brand a stronger digital identity.",
  },
];

function Reviews() {
  return (
    <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
          Testimonials
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Built To Earn Client Trust
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:-translate-y-2 hover:border-purple-500/30 transition"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  fill={index < review.rating ? "currentColor" : "none"}
                  className={
                    index < review.rating
                      ? "text-purple-400"
                      : "text-gray-600"
                  }
                />
              ))}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              “{review.text}”
            </p>

            <div>
              <h3 className="font-bold text-white">{review.name}</h3>
              <p className="text-gray-500 text-sm">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;