import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "/networking", label: "Networking" },
    { href: "/information", label: "Information" },
    { href: "/cultures", label: "Cultures" },
    { href: "/education", label: "Education" },
    { href: "/technology", label: "Digital Tech" },
    { href: "/blog", label: "News" },
    {
      href: "/shop",
      label: "Shop",
      className: "hover:text-burkina-red font-semibold",
    },
  ];

  return (
    <header className="border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-responsive flex items-center justify-between py-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <span
            className="inline-block h-6 w-6 rounded-sm"
            style={{
              background: "linear-gradient(90deg, #EF3340 50%, #009739 50%)",
            }}
          />
          <span className="font-extrabold tracking-tight">
            Burkina Diaspora
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(({ href, label, className }) => (
            <Link
              key={href}
              href={href}
              className={className ? className : "hover:text-burkina-green"}
            >
              {label}
            </Link>
          ))}
        </nav>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-burkina-green"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile nav menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white/95 border-t border-black/5 px-4 py-3 flex flex-col gap-4 text-base shadow-lg animate-fade-in">
          {navLinks.map(({ href, label, className }) => (
            <Link
              key={href}
              href={href}
              className={className ? className : "hover:text-burkina-green"}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
