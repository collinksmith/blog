import React from "react";
import { graphql } from "gatsby"

export default function Post({ data }) {
  const post = data.markdownRemark;
  return (
    <div className="post">
      <header className="post-header">
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <p className="post-meta">{post.fields.date} • Collin Smith</p>
      </header>
      <article
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
        date(formatString: "DD MMM, YYYY")
      }
    }
  }
`;
