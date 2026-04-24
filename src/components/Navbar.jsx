import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (
        navRef.current?.contains(target) ||
        toggleButtonRef.current?.contains(target)
      ) {
        return;
      }

      closeMenu();
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="pure-header">
      <div className="pure-header-content">
        <a
          className="pure-logo"
          href="https://endrias.tech"
          target="_blank"
          rel="noreferrer"
        >
          <img className="site-nav-mark" src="/elogo.png" alt="MC" />
          <span>Mortgage</span>Calculator
        </a>
        <button
          ref={toggleButtonRef}
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <nav
          ref={navRef}
          id="primary-navigation"
          className={`nav ${isMenuOpen ? "nav-open" : ""}`.trim()}
        >
          <a href="#about" className="nav-link" onClick={closeMenu}>
            How it works
          </a>
          <a href="#refinance" className="nav-link" onClick={closeMenu}>
            Refinance
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
