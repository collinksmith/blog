import React from "react";
import Link from "gatsby-link";

function _renderPostSummary({ node }) {
  return (
    <li key={node.frontmatter.title}>
      <span className="post-meta">{node.fields.date}</span>
      <h2>
        <Link className="post-link" to={node.fields.slug}>
          {node.frontmatter.title}
        </Link>
      </h2>
    </li>
  );
}

export default function IndexPage({ data }) {
  return (
    <div className="home">
      <h1 className="post-title">Posts</h1>
      <ul className="post-list">
        {data.allMarkdownRemark.edges.map(_renderPostSummary)}
      </ul>
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
          }
          fields {
            slug
            date(formatString: "DD MMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
