module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    testBoolean: false,
    testString: "This is test",
    testNumber: 12345,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        documentPaths: [`./src/**/*.{ts,tsx}`],
      },
    },
  ],
};
