import React from "react";
import Link from "gatsby-link";
import ProfilePhoto from "../assets/img/profile_pic.jpeg";
import Layout from "../components/layout";

export default function AboutPage(props) {
  return (
    <Layout location={props.location}>
      <div className="group">
        <section id="picture">
          <img
            src={ProfilePhoto}
            alt="Photograph of Collin Smith"
            className="profile-photo"
          />
        </section>
        <section id="text">
          <p>
            This is where I'll be blogging about my journey as I learn to code.
            The purpose is twofold:
          </p>
          <ol type="1">
            <li>
              <em>Solidify my knowledge.</em> Summarizing and reviewing what I
              learn each day will force me to use active recall and help me
              remember it long term. Putting it in writing will force me to have a
              solid grasp of the material.
            </li>
            <li>
              <em>Document what I've learned.</em> This will provide a resource
              for me to refer back to later if I need to jog my memory about a
              topic, and for potential employers or contractors to see what I've
              learned.
            </li>
          </ol>
          <p>
            If you like or want to respond to something I've written, don't
            hesitate to <Link to="/contact">let me know!</Link>
          </p>
        </section>
      </div>
    </Layout>
  );
}
