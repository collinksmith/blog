const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

function _getDataFromSlug(slug) {
  const slugMatch = slug.match(/(\d{4}-\d{2}-\d{2})-(.*)/);
  if (!slugMatch || !slugMatch[1] || !slugMatch[2]) return;
  return { date: slugMatch[1], path: slugMatch[2] };
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" });
    const fileData = _getDataFromSlug(slug);
    if (!fileData) throw "Error computing data from file path";
    createNodeField({
      node,
      name: "slug",
      value: fileData.path
    });
    createNodeField({
      node,
      name: "date",
      value: fileData.date
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.jsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
