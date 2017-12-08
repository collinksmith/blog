import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <h2 className="footer-heading">Collin Smith&apos;s Coding Blog</h2>
        <div className="footer-col-wrapper">
          <div className="footer-col  footer-col-1">
            <ul className="contact-list">
              <li>Collin Smith&apos;s Coding Blog</li>
              <li>
                <a href="mailto:collin@collinsmith.me">collin@collinsmith.me</a>
              </li>
            </ul>
          </div>
          <div className="footer-col  footer-col-2">
            <ul className="social-media-list">
              <li>
                <a href="https://github.com/collinksmith">
                  <span className="social-icon hvr-grow">
                    {/* <img src={GithubLogo} alt="Github Logo" /> */}
                  </span>
                  <span className="username">collinksmith</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/collinksmith">
                  <span className="social-icon hvr-grow">
                    {/* <img src={TwitterLogo} alt="Twitter Logo" /> */}
                  </span>
                  <span className="username">collinksmith</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col  footer-col-3">
            <p className="text">
              Where I write about what I learn and my learning process.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
