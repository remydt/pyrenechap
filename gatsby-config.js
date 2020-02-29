module.exports = {
  siteMetadata: {
    author: `@remydt`,
    title: `pyrenechap`,
  },
  plugins: [
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
