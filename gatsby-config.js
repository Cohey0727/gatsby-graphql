require('dotenv').config({path: `.env.development`})

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
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
