module.exports = {
  siteMetadata: {
    title: `Szkolny Związek Sportowy w Rybniku`,
    shortTitle: `SZS Rybnik`,
    description: `Oficjalna strona szkolnego związku sportowego w Rybniku/`,
    author: `@bartekpacia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ball.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `8aeabdb012ea190f36e7d3e05c6f29`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
