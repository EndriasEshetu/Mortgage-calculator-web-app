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
      return;
    }

    const handlePointerDown = (event) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      const clickedInsideNav = navRef.current?.contains(target);
      const clickedToggleButton = toggleButtonRef.current?.contains(target);

      if (!clickedInsideNav && !clickedToggleButton) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
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
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
