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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const desktopLinkClass = (href) =>
    isActive(href)
      ? "text-sm font-semibold text-primary-deep relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary-action"
      : "text-sm font-medium text-text-muted hover:text-primary-deep transition-colors";

  const mobileLinkClass = (href) =>
    isActive(href)
      ? "text-primary-deep bg-primary-soft font-semibold block px-4 py-3 rounded-xl text-base transition-colors border border-primary-action/20"
      : "text-text-muted hover:text-primary-deep hover:bg-primary-soft block px-4 py-3 rounded-xl text-base font-medium transition-colors";

  const contactIsActive = pathname === "/JoinUs";

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-deep tracking-tight">
              SENET <span className="font-normal text-primary-action">Lab</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.map(({ href, label }) => (
                <Link key={href} href={href} className={desktopLinkClass(href)} aria-current={isActive(href) ? "page" : undefined}>
                  {label}
                </Link>
              ))}
              <Link
                href="/JoinUs"
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md ${
                  contactIsActive
                    ? "bg-primary-action text-white ring-2 ring-primary-action ring-offset-2 ring-offset-white"
                    : "bg-primary-deep text-white hover:bg-primary-action"
                }`}
                aria-current={contactIsActive ? "page" : undefined}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-text-muted hover:text-primary-deep hover:bg-primary-soft focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-nav-menu" className="md:hidden border-t border-border-light bg-white">
          <div className="px-4 pt-2 pb-6 space-y-2">
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
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors text-center ${
                contactIsActive
                  ? "bg-primary-action text-white ring-2 ring-inset ring-white/40"
                  : "bg-primary-deep text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={contactIsActive ? "page" : undefined}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
