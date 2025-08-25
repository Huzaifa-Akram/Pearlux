"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./Navbar.css"; // Re-using styles from Navbar.css

// Navigation links - moved from Navbar.tsx to make them accessible in the mobile menu
const navLinks = [
  { name: "Embroidery Materials", href: "/embroidery-materials" },
  { name: "Beads", href: "/beads" },
  { name: "Embellishments", href: "/embellishments" },
  { name: "Jewelry Making", href: "/jewelry-making" },
  { name: "Sale", href: "/sale" },
  { name: "Fresh Arrivals", href: "/fresh-arrivals" },
  { name: "Best Sellers", href: "/best-sellers" },
  { name: "Blog", href: "/blog" },
];

const NavbarClient = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle body overflow when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Clean up when component unmounts
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMobileMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic, e.g., redirect to a search page
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar-actions">
        {isMobileView && <div className="mobile-menu-spacer"></div>}
        <form
          onSubmit={handleSearch}
          className="search-form"
          role="search"
          aria-label="Site search"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className="search-input"
            aria-label="Search products"
            name="search"
          />
          <button
            type="submit"
            className="search-button"
            aria-label="Submit search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="visually-hidden">Search</span>
          </button>
        </form>

        {isMobileView && (
          <button
            className={`mobile-menu-button ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>

      {isMobileView && (
        <>
          <div
            className={`mobile-menu-backdrop ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          ></div>
          <div
            className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <h2 className="mobile-company-name">Pearlux</h2>
                </Link>
              </div>
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      title={`Browse ${link.name}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarClient;
