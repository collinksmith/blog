import React from "react";

export default function ContactPage({ data }) {
  return (
    <div className="group">
      <section id="contact-primary">
        <h3>General Information</h3>
        <p>Don't hesitate to contact me!</p>
      </section>
      <section id="contact-secondary">
        <h3>Contact Details</h3>
        <ul className="contact-info">
          <li className="mail">
            <a href={`mailto:${data.site.siteMetadata.email}`}>
              {data.site.siteMetadata.email}.me
            </a>
          </li>
        </ul>
      </section>
    </div>
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
