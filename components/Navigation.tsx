'use client';
import { FC, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (
        mobileMenuOpen && 
        mobileMenuRef.current && 
        mobileButtonRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) && 
        !mobileButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const mainNavItems = [
    { title: "Home", href: "/" },
    { title: "Timeline", href: "/timeline" },
  ];

  const dropdownItems = [
    { title: "Historical Context", href: "/topics/historical-context" },
    { title: "The Bombings", href: "/topics/bombing-events" },
    { title: "Human Impact", href: "/topics/human-impact" },
    { title: "Debates", href: "/topics/debates" },
    { title: "Global Impact", href: "/topics/global-impact" },
    { title: "Legacy", href: "/topics/legacy" }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const mobileItemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  const dropdownVariants = {
    closed: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const dropdownItemVariants = {
    closed: { x: -10, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="group flex items-center font-bold text-xl text-slate-800 hover:text-red-700 transition-colors"
              aria-label="Hiroshima & Nagasaki Project - Home"
            >
              <span className="inline-block mr-2 relative">
                <svg 
                  className="w-6 h-6 text-red-600 group-hover:text-red-700 transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </span>
              <span>Hiroshima & Nagasaki</span>
              <span className="hidden sm:inline ml-1">Project</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Main nav items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-red-50 text-red-700 shadow-sm'
                    : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.title}
              </Link>
            ))}

            {/* Topics Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 inline-flex items-center
                  ${
                    dropdownOpen || dropdownItems.some(item => pathname === item.href)
                      ? 'bg-red-50 text-red-700 shadow-sm'
                      : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                  }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Topics
                <svg 
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-10"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {dropdownItems.map((item) => (
                        <motion.div key={item.href} variants={dropdownItemVariants}>
                          <Link
                            href={item.href}
                            className={`flex items-center px-4 py-2 text-sm transition-colors ${
                              pathname === item.href
                                ? 'bg-red-50 text-red-700 font-medium'
                                : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                            }`}
                            onClick={() => setDropdownOpen(false)}
                            role="menuitem"
                            aria-current={pathname === item.href ? 'page' : undefined}
                          >
                            {pathname === item.href && (
                              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                            <span className={pathname === item.href ? 'ml-0' : 'ml-6'}>{item.title}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              ref={mobileButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                mobileMenuOpen 
                  ? 'bg-red-50 text-red-700' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <AnimatePresence mode="wait">
                {!mobileMenuOpen ? (
                  <motion.svg 
                    key="menu"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                ) : (
                  <motion.svg 
                    key="close"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            ref={mobileMenuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) => (
                <motion.div key={item.href} variants={mobileItemVariants}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? 'bg-red-50 text-red-700'
                        : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={mobileItemVariants}>
                <div className="px-3 py-2 text-sm font-semibold text-slate-900 border-t border-slate-100 mt-2 pt-3">Topics</div>
              </motion.div>
              
              {dropdownItems.map((item) => (
                <motion.div key={item.href} variants={mobileItemVariants}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium pl-6 ${
                      pathname === item.href
                        ? 'bg-red-50 text-red-700'
                        : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {pathname === item.href && (
                      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;