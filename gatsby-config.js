/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Test",
    description: "My Gatsby Test",
    author: "@alexlin",
    data: ["item1", "item2"],
    person: { name: "Alex", age: 24 },
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `61uvo2ku1ytf`,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
};
