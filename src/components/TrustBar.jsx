import { Shield, Lock, CreditCard } from "lucide-react";

function TrustBar() {
  return (
    <section className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-[#090B0F]/80 backdrop-blur-xl p-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <Shield className="text-[#EF233C]" size={28} />
            <div>
              <h3 className="font-bold text-white">
                SSL Secured
              </h3>
              <p className="text-gray-400 text-sm">
                All website traffic is encrypted using HTTPS.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <CreditCard className="text-[#EF233C]" size={28} />
            <div>
              <h3 className="font-bold text-white">
                Stripe Protected Payments
              </h3>
              <p className="text-gray-400 text-sm">
                Secure payment processing powered by Stripe.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Lock className="text-[#EF233C]" size={28} />
            <div>
              <h3 className="font-bold text-white">
                Secure Communication
              </h3>
              <p className="text-gray-400 text-sm">
                Project inquiries and client information are handled securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;