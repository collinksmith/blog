import React from "react";
import _ from "../assets/sass/main.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default ({ children, data, location }) => {
  return (
    <div>
      <Header data={data} location={location} />
      <div className="page-content">
        <div className="body-wrapper">
          <header className="post-header">
            <h1 className="page-heading">
              {location.pathname.replace("/", "")}
            </h1>
          </header>
          <article className="post-content">{children()}</article>
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
};

export const query = graphql`
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
`;
