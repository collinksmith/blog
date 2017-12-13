import React from "react";
import _ from "../assets/sass/main.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default ({ children, data, location }) => {
  return (
    <div>
      <Header data={data} location={location} />
      {children()}
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
