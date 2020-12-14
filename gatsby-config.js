module.exports = {
  siteMetadata: {
    title: `The Elements of Arabic Art`,
    description: ``,
    author: `Balázs Herczeg`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Elements of Arabic Art`,
        short_name: `Arabic Art`,
        start_url: `/`,
        background_color: `#4D9BA3`,
        theme_color: `#4D9BA3`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
