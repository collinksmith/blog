import React from "react";
import "../assets/sass/main.scss";
import Header from "../layouts/Header.jsx";
import Footer from "../layouts/Footer.jsx";
import { StaticQuery, graphql } from "gatsby";

export default ({ children, data, location }) => {
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
          <Header data={data} location={location} />
          <div className="page-content">
            <div className="body-wrapper">
              <header className="post-header">
                <h1 className="page-heading">
                  {location.pathname.replace(/\//g, "")}
                </h1>
              </header>
              <article className="post-content">{children}</article>
            </div>
          </div>
          <Footer data={data} />
        </div>
      )}
    />
  );
};
