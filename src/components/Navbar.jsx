import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Book", href: "#booking" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-purple-900/30 bg-[#04010A]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-900/50">
            <Code2 size={22} />
          </div>

          <div>
            <h1 className="font-bold text-white">
              Jaleel.dev
            </h1>

            <p className="text-xs text-purple-300">
              AI • Full Stack • Frontend
            </p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-purple-300 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#booking"
          className="hidden lg:inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white font-semibold transition shadow-lg shadow-purple-900/40"
        >
          Start Project
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-xl border border-purple-800/40 bg-purple-950/60 flex items-center justify-center"
        >
          {open ? (
            <X className="text-purple-300" />
          ) : (
            <Menu className="text-purple-300" />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-purple-900/30 bg-[#04010A]/98 backdrop-blur-xl px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-purple-300 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-800 to-purple-600 text-white font-semibold"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;