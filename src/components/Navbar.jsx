function Navbar() {
  return (
    <header className="pure-header">
      <div className="pure-header-content">
        <div className="pure-logo">
          <img className="site-nav-mark" src="/elogo.png" alt="MC" />
          <span>Mortgage</span>Calculator
        </div>
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
