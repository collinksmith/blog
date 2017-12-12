module.exports = {
  siteMetadata: {
    title: `Collin Smith's Coding Blog`,
    email: `collin@collinsmith.me`,
    description: `Where I write about what I learn and my learning process.`,
    url: `http://collinsmith.me`,
    githubUsername: `collinksmith`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`
  ]
};
