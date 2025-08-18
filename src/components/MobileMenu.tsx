"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Burger Menu Button */}
      <button
        className={`${styles.burgerButton} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile navigation menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        onClick={toggleMobileMenu}
        aria-hidden={!isMobileMenuOpen}
      ></div>

      {/* Mobile Menu Sidebar */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        aria-label="Mobile navigation"
        role="navigation"
      >
        <div className={styles.mobileMenuContent}>
          <Link
            href="/"
            className={styles.mobileNavLink}
            onClick={toggleMobileMenu}
            aria-label="Go to Home page"
          >
            Home
          </Link>
          <Link
            href="/pearls"
            className={styles.mobileNavLink}
            onClick={toggleMobileMenu}
            aria-label="Browse Pearls collection"
          >
            Pearls
          </Link>
          <Link
            href="/stones"
            className={styles.mobileNavLink}
            onClick={toggleMobileMenu}
            aria-label="Browse Stones collection"
          >
            Stones
          </Link>
          <Link
            href="/embroidery"
            className={styles.mobileNavLink}
            onClick={toggleMobileMenu}
            aria-label="Browse Embroidery materials"
          >
            Embroidery
          </Link>
          <Link
            href="/collections"
            className={styles.mobileNavLink}
            onClick={toggleMobileMenu}
            aria-label="View all Collections"
          >
            Collections
            {/* Future: Add dropdown arrow here for submenus */}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
