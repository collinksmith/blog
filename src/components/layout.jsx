import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import personalLogo from "../assets/img/personal-logo.png";
import "../assets/sass/main.scss";
import Footer from "../layouts/Footer.jsx";
import Header from "../layouts/Header.jsx";
import { PAGES } from "../util/constants";

export default ({ children, data, location }) => {
  const page = location.pathname.replace(/\//g, "");
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              email
              githubUsername
              description
            }
          }
        }
      `}
      render={data => (
        <div>
          <Helmet
            title="Collin Smith's Coding Blog"
            link={[{ rel: "icon", type: "image/png", href: `${personalLogo}` }]}
          />
          <Header data={data} location={location} />
          <div className="page-content">
            <div className="body-wrapper">
              {PAGES.includes(page) && (
                <header className="post-header">
                  <h1 className="page-heading">{page}</h1>
                </header>
              )}
              <article className="post-content">{children}</article>
            </div>
          </div>
          <Footer data={data} />
        </div>
      )}
    />
  );
};
