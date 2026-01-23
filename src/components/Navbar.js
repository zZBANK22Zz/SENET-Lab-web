import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="glass-effect sticky top-0 z-50 border-b border-border-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20"> {/* Increased height slightly for more air */}
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-primary-deep tracking-tight">
                            SENET <span className="font-normal text-primary-action">Lab</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link href="/" className="text-sm font-medium text-text-muted hover:text-primary-deep transition-colors">
                                Home
                            </Link>
                            <Link href="/ResearchPage" className="text-sm font-medium text-text-muted hover:text-primary-deep transition-colors">
                                Research
                            </Link>
                            <Link href="/AwardPage" className="text-sm font-medium text-text-muted hover:text-primary-deep transition-colors">
                                Awards
                            </Link>
                            <Link href="/PublicationPage" className="text-sm font-medium text-text-muted hover:text-primary-deep transition-colors">
                                Publications
                            </Link>
                            <Link href="/TeamPage" className="text-sm font-medium text-text-muted hover:text-primary-deep transition-colors">
                                Team
                            </Link>
                            <Link href="/JoinUs" className="bg-primary-deep text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary-action transition-all shadow-sm hover:shadow-md">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-text-muted hover:text-primary-deep hover:bg-primary-soft focus:outline-none transition-colors"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border-light bg-white">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link 
                            href="/" 
                            className="text-text-muted hover:text-primary-deep hover:bg-primary-soft block px-4 py-3 rounded-xl text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/ResearchPage" 
                            className="text-text-muted hover:text-primary-deep hover:bg-primary-soft block px-4 py-3 rounded-xl text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Research
                        </Link>
                        <Link 
                            href="/AwardPage" 
                            className="text-text-muted hover:text-primary-deep hover:bg-primary-soft block px-4 py-3 rounded-xl text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Awards
                        </Link>
                        <Link 
                            href="/PublicationPage" 
                            className="text-text-muted hover:text-primary-deep hover:bg-primary-soft block px-4 py-3 rounded-xl text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Publications
                        </Link>
                        <Link 
                            href="/TeamPage" 
                            className="text-text-muted hover:text-primary-deep hover:bg-primary-soft block px-4 py-3 rounded-xl text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Team
                        </Link>
                        <Link 
                            href="/JoinUs" 
                            className="bg-primary-deep text-white block px-4 py-3 rounded-xl text-base font-medium transition-colors text-center"
                            onClick={() => setIsMenuOpen(false)}
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