import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Work", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.08] bg-[#020304]/75 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-5 sm:px-6"
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center"
          aria-label="Jaleel.dev homepage"
        >
          <span className="text-[15px] font-semibold tracking-[-0.03em] text-white transition-opacity duration-300 group-hover:opacity-70">
            Jaleel.dev
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[12px] font-medium text-white/65 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#booking"
          className="hidden items-center rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-black transition duration-300 hover:scale-[1.025] hover:bg-white/90 active:scale-[0.98] lg:inline-flex"
        >
          Start a project
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/[0.06] hover:text-white lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open
            ? "max-h-[calc(100vh-52px)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="min-h-[calc(100vh-52px)] border-t border-white/[0.06] bg-[#020304]/95 px-6 pb-10 pt-8 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-xl flex-col">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.07] py-5 text-3xl font-semibold tracking-[-0.045em] text-white transition hover:text-white/55"
                style={{
                  transitionDelay: open ? `${index * 45}ms` : "0ms",
                }}
              >
                <span>{link.name}</span>

                <span className="text-lg font-normal text-white/25">↗</span>
              </a>
            ))}

            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Start a project
            </a>

            <div className="mt-auto pt-12 text-sm text-white/35">
              <p>Websites, applications and AI platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;