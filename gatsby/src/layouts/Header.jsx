import React from "react";
import Link from "gatsby-link";

export default function Header({ data }) {
  return (
    <header className="site-header">
      <div className="header-wrapper">
        <h1>
          <Link className="site-title" to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <nav className="site-nav">
          <ul className="nav">
            <li className="nav__item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav__item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav__item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
