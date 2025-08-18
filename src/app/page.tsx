import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/globe.svg"
          alt="Pearlux Logo"
          width={120}
          height={120}
          priority
        />
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            margin: 0,
            textAlign: "center",
          }}
        >
          Welcome to Pearlux
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: 500,
            textAlign: "center",
            color: "var(--gray-alpha-200)",
          }}
        >
          Discover brilliance in every detail. Pearlux brings you premium
          products with a touch of elegance and modern design.
        </p>
        <div className={styles.ctas}>
          <a className={styles.primary} href="#explore">
            Explore Now
          </a>
          <a className={styles.secondary} href="#about">
            Learn More
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <span style={{ fontSize: "1rem", color: "#888" }}>
          © {new Date().getFullYear()} Pearlux. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
