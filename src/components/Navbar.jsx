function Navbar() {
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
        <nav className="nav">
          <a href="#about" className="nav-link">
            How it works
          </a>
          <a href="#refinance" className="nav-link">
            Refinance
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
