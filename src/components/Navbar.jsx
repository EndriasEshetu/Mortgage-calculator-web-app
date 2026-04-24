function Navbar() {
  return (
    <header className="pure-header">
      <div className="pure-header-content">
        <div className="pure-logo">
          <div className="pure-logo-icon">
            <img
              className="site-nav-mark"
              src="../../public/elogo.png"
              alt="MC"
            />
          </div>
          <span>Mortgage</span>Pro
        </div>
        <nav className="pure-nav">
          <a href="#about" className="pure-nav-link">
            How it works
          </a>
          <a href="#refinance" className="pure-nav-link">
            Refinance
          </a>
          <a href="#contact" className="pure-nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
