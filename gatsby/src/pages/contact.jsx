import React from "react";

export default function ContactPage() {
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
            <a href="mailto:collin@collinsmith.me">collin@collinsmith.me</a>
          </li>
          <li className="twitter">
            <a href="http://twitter.com/intent/tweet?screen_name=collinksmith">
              @collinksmith
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
