import { FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span>&lt;</span>
        Ibrahim
        <span>.dev</span>
        <span>/&gt;</span>
      </div>
      <div className="footer-socials">
        <a
          href="https://github.com/ibrahim-thebti"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/ibrhmthebty"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <p className="footer-copyright">
        <span>/*</span> © 2026 Ibrahim Thebti — All rights reserved. <span>*/</span>
      </p>

    </footer>
  );
}

export default Footer;