import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";

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

export default function IndexPage(props) {
  return (
    <Layout location={props.location}>
      <div className="home">
        <h1 className="post-title">Posts</h1>
        <ul className="post-list">
          {props.data.allMarkdownRemark.edges.map(_renderPostSummary)}
        </ul>
      </div>
    </Layout>
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
            date(formatString: "MMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
