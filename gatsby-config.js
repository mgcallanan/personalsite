/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`, 
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-B5YDNJS4B8",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [""],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false
      },
    }
  ],
  siteMetadata: {
    title: `Mary Callanan`,
    description: `Development and Coding portfolio website for Mary Callanan`,
    author:`Mary Callanan`,
    menuLinks: [
      {
        name:'home',
        link:'/'
      },
      {
        name:'About Me',
        link:'/about'
      },
      {
        name:'Resume',
        link:'/resume'
      },
      {
        name:'Portfolio',
        link:'/portfolio'
      },
      {
        name:'Publications',
        link:'/publications'
      },
      {
        name:'Just For Fun',
        link:'/justforfun'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`
  ],
}
