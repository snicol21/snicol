module.exports = {
  siteMetadata: {
    title: `Spencer Nicol`,
    subtitle: `Software Engineer`,
    description: `Spencer Nicol is a software engineer who specializes in front-end web development, sql server, and powershell.`,
    author: `Spencer Nicol`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [`/adobe-xd/`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spencer Nicol`,
        short_name: `snicol`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
