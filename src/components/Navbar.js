import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-primary text-white shadow-primary-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-white hover:text-blue-200 transition-colors">
                            SENET Research Lab
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <Link href="/ResearchPage" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Research
                            </Link>
                            <Link href="/AwardPage" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Awards
                            </Link>
                            <Link href="/PublicationPage" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Publications
                            </Link>
                            <Link href="/TeamPage" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Team
                            </Link>
                            <Link href="/JoinUs" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
                        <Link 
                            href="/" 
                            className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/ResearchPage" 
                            className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Research
                        </Link>
                        <Link 
                            href="/AwardPage" 
                            className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Awards
                        </Link>
                        <Link 
                            href="/PublicationPage" 
                            className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Publications
                        </Link>
                        <Link 
                            href="/TeamPage" 
                            className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Team
                        </Link>
                        <Link 
                            href="/" 
                            className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
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