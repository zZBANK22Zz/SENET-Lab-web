import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/ResearchPage", label: "Research" },
  { href: "/AwardPage", label: "Awards" },
  { href: "/PublicationPage", label: "Publications" },
  { href: "/TeamPage", label: "Team" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopLinkClass = (href) =>
    isActive(href)
      ? "text-sm font-semibold text-primary-deep relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-accent-warm"
      : "text-sm font-medium text-text-muted hover:text-primary-deep transition-colors duration-200";

  const mobileLinkClass = (href) =>
    isActive(href)
      ? "text-primary-deep bg-primary-soft font-semibold block px-4 py-3 rounded-lg text-base"
      : "text-text-muted hover:text-primary-deep hover:bg-bg-off block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200";

  const contactIsActive = pathname === "/JoinUs";

  return (
    <nav className="glass-effect sticky top-0 z-[40] border-b border-border-light/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[4.5rem]">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-baseline gap-2 group">
              <span className="font-display text-[1.65rem] italic leading-none text-primary-deep tracking-tight">
                SENET
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-text-muted group-hover:text-primary-action transition-colors">
                Lab
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-7">
              {NAV_ITEMS.map(({ href, label }) => (
                <Link key={href} href={href} className={desktopLinkClass(href)} aria-current={isActive(href) ? "page" : undefined}>
                  {label}
                </Link>
              ))}
              <Link
                href="/JoinUs"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  contactIsActive
                    ? "bg-primary-action text-white"
                    : "bg-primary-deep text-white hover:bg-primary-action"
                }`}
                aria-current={contactIsActive ? "page" : undefined}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-text-muted hover:text-primary-deep hover:bg-bg-off transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-nav-menu" className="md:hidden border-t border-border-light bg-bg-white">
          <div className="px-4 pt-2 pb-5 space-y-1">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={mobileLinkClass(href)}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/JoinUs"
              className={`block px-4 py-3 rounded-lg text-base font-semibold text-center ${
                contactIsActive ? "bg-primary-action text-white" : "bg-primary-deep text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={contactIsActive ? "page" : undefined}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
