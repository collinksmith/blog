import React from "react";
import { Link } from "gatsby";
import { PAGES } from "../util/constants";

function _renderLink(currentUrl, page) {
  const pageUrl = `/${page}`;
  let className = "nav__item";
  if (currentUrl === pageUrl) className += "--current";

  const linkEl =
    page === "portfolio" ? (
      <a href={pageUrl} target="__blank">
        {page}
      </a>
    ) : (
      <Link to={pageUrl}>{page}</Link>
    );
  return (
    <li key={pageUrl} className={className}>
      {linkEl}
    </li>
  );
}

export default function Header({ data, location }) {
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
            {PAGES.map(_renderLink.bind(null, location.pathname))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
