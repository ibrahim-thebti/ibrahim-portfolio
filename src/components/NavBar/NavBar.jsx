import { useState } from "react";
import "./NavBar.css";
import useSectionLoading from "../animations/useSectionLoading";
import Skeleton from "../animations/Skeleton";
import useScrollProgress from "./useScrollProgress";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoaded = useSectionLoading(350);
  const scrollProgress = useScrollProgress();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  if (!isLoaded) return <nav className="navbar navbar-skeleton"><Skeleton className="skeleton-nav-logo" /><Skeleton className="skeleton-nav-links" /><ScrollProgress progress={scrollProgress} /></nav>;

  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-text">
          <span className="bracket">&lt;</span>
          <span className="name">Ibrahim</span>
          <span className="dev">.dev</span>
          <span className="bracket">/&gt;</span>
        </span>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <a href="#home" className="nav-link active" onClick={closeMenu}>
          <span>🏠</span>
          <span>Home</span>
        </a>

        <a href="#about" className="nav-link" onClick={closeMenu}>
          <span>👤</span>
          <span>About</span>
        </a>

        <a href="#skills" className="nav-link" onClick={closeMenu}>
          <span>💻</span>
          <span>Skills</span>
        </a>

        <a href="#projects" className="nav-link" onClick={closeMenu}>
          <span>📁</span>
          <span>Projects</span>
        </a>

        <a
          href="#certifications"
          className="nav-link"
          onClick={closeMenu}
        >
          <span>🏆</span>
          <span>Certs</span>
        </a>

        <a href="#contact" className="nav-link" onClick={closeMenu}>
          <span>✉️</span>
          <span>Contact</span>
        </a>

      </div>

      <ScrollProgress progress={scrollProgress} />
    </nav>
  );
}

function ScrollProgress({ progress }) {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export default NavBar;