import Image from "next/image";
import Link from "next/link";
import NavbarClient from "./NavbarClient";
import "./Navbar.css";

// navLinks moved to NavbarClient.tsx to be shared between desktop and mobile menu

// List of navigation links for desktop view only
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

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-top">
        <div className="logo-container">
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center" }}
            title="Pearlux - Home"
            aria-label="Pearlux - Home"
          >
            <Image
              src="/Pearlux.svg"
              alt="Pearlux - Premium Pearls, Stones & Embroidery Materials"
              width={220}
              height={60}
              priority
              style={{ display: "block" }}
            />
          </Link>
        </div>
        <div className="search-container">
          <NavbarClient />
        </div>
      </div>
      {/* Desktop navigation - this will be hidden on mobile */}
      <nav className="navbar-bottom" aria-label="Main navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} title={`Browse ${link.name}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
