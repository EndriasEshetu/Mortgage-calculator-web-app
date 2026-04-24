function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <p className="site-footer-title">Contact</p>
        <p className="site-footer-text">
          View the project source and connect with me online.
        </p>
      </div>

      <div className="site-footer-links">
        <a
          href="https://github.com/your-username/your-repo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
