module.exports = {
  siteMetadata: {
    title: `React+Design`,
    description: `Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required`,
    keywords:
      "react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin",
    author: `@gatsbyjs`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId: "tw8icxykeu3d",
    //     accessToken: "OBVFHsOKLCkb_lZ6Nb6HpqlAj0dsQViUJvgPwpraea8",
    //   },
    // },
  ],
}
