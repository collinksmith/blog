import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby"

export default function ContactPage(props) {
  return (
    <Layout location={props.location}>
      <div className="group">
        <section id="contact-primary">
          <h3>General Information</h3>
          <p>Don't hesitate to contact me!</p>
        </section>
        <section id="contact-secondary">
          <h3>Contact Details</h3>
          <ul className="contact-info">
            <li className="mail">
              <a href={`mailto:${props.data.site.siteMetadata.email}`}>
                {props.data.site.siteMetadata.email}.me
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        email
      }
    }
  }
`;
