/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`, 
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-B5YDNJS4B8", // Google Analytics / GA
        ],
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
