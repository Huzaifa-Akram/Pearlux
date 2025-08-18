import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className={styles.navbar} role="banner">
      <div className={styles.navContainer}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Link
            href="/"
            aria-label="Pearlux - Premium Pearls, Stones & Embroidery Materials"
          >
            <Image
              src="/Pearlux.svg"
              alt="Pearlux Logo - Premium luxury materials"
              width={180}
              height={80}
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className={styles.centerSection}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={styles.navLinks} role="menubar">
            <li role="none">
              <Link
                href="/"
                className={styles.navLink}
                role="menuitem"
                aria-label="Home - Pearlux main page"
              >
                Home
              </Link>
            </li>
            <li role="none">
              <Link
                href="/pearls"
                className={styles.navLink}
                role="menuitem"
                aria-label="Pearls - Premium pearl collection"
              >
                Pearls
              </Link>
            </li>
            <li role="none">
              <Link
                href="/stones"
                className={styles.navLink}
                role="menuitem"
                aria-label="Stones - Precious stone collection"
              >
                Stones
              </Link>
            </li>
            <li role="none">
              <Link
                href="/embroidery"
                className={styles.navLink}
                role="menuitem"
                aria-label="Embroidery - Luxury embroidery materials"
              >
                Embroidery
              </Link>
            </li>
            <li role="none">
              <Link
                href="/collections"
                className={styles.navLink}
                role="menuitem"
                aria-label="Collections - View all product collections"
              >
                Collections
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar Component */}
        <SearchBar />

        {/* Mobile Menu Component */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
