import { useEffect, useState } from "react";

// Interactive island: scroll-state styling + mobile menu toggle.
// `pathname` is passed from Astro (Astro.url.pathname) instead of react-router's
// useLocation, so the same active-link + home-transparency logic works statically.
const navItems = [
  { label: "Home", href: "/" },
  { label: "Security Services", href: "/security-services" },
  { label: "About Us", href: "/about-us" },
  { label: "Photo Gallery", href: "/photo-gallery" },
  { label: "Articles", href: "/articles" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Employment", href: "/employment-opportunities" },
];

export default function Navbar({ pathname = "/" }: { pathname?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-50/95 backdrop-blur border-b border-background-200 text-foreground-950"
          : isHome
            ? "bg-transparent text-foreground-50"
            : "bg-background-950 text-foreground-50"
      }`}
    >
      <nav className="w-full px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <img
            src={scrolled
              ? "/images/mg-lockup_blue-head_black-text.svg"
              : "/images/mg-lockup_gold-head_white-text.webp"
            }
            alt="M&G Security"
            width={2554}
            height={808}
            className="h-10 w-auto object-contain"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`font-label text-xs uppercase tracking-[0.05em] transition-colors cursor-pointer whitespace-nowrap ${
                    scrolled
                      ? active
                        ? "text-primary-500"
                        : "text-foreground-700 hover:text-primary-500"
                      : active
                        ? "text-primary-500"
                        : "text-foreground-50/90 hover:text-primary-500"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+14848248631"
            className={`flex items-center gap-2 font-label text-xs uppercase tracking-[0.05em] whitespace-nowrap cursor-pointer transition-colors ${
              scrolled ? "text-foreground-700 hover:text-primary-500" : "text-foreground-50/90 hover:text-primary-500"
            }`}
          >
            <i className="ri-phone-line" />
            (484) 824-8631
          </a>
          <a
            href="/contact-us"
            className="px-8 py-4 bg-primary-500 text-foreground-950 font-label text-xs uppercase tracking-[0.1em] hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
            scrolled ? "text-foreground-950" : "text-foreground-50"
          }`}
          aria-label="Toggle menu"
        >
          <i className={mobileOpen ? "ri-close-line text-2xl" : "ri-menu-line text-2xl"} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-background-950 border-t border-background-800 text-foreground-50 px-6 py-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block py-2 font-label text-xs uppercase tracking-[0.05em] cursor-pointer ${
                      active ? "text-primary-500" : "hover:text-primary-500"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="/contact-us"
                className="mt-2 inline-flex px-8 py-4 bg-primary-500 text-foreground-950 font-label text-xs uppercase tracking-[0.1em] cursor-pointer whitespace-nowrap"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
