import React from "react";
import GithubLogo from "../assets/img/github-wrap.png";

export default function Footer({ data }) {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <h2 className="footer-heading">{data.site.siteMetadata.title}</h2>
        <div className="footer-col-wrapper">
          <div className="footer-col  footer-col-1">
            <ul className="contact-list">
              <li>{data.site.siteMetadata.title}</li>
              <li>
                <a href={`mailto:${data.site.siteMetadata.email}`}>
                  {data.site.siteMetadata.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col  footer-col-1">
            <ul className="social-media-list">
              <li>
                <a
                  href={`https://github.com/${
                    data.site.siteMetadata.githubUsername
                  }`}
                >
                  <span className="social-icon hvr-grow">
                    <img src={GithubLogo} alt="Github Logo" />
                  </span>
                  <span className="username">
                    {data.site.siteMetadata.githubUsername}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col  footer-col-3">
            <p className="text">{data.site.siteMetadata.description}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
