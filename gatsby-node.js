exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'p5': 'p5/lib/p5.js',
      },
    },
    module: {
      rules: [
        {
          test: /node_modules\/p5\/lib\/p5\.js/,
          type: 'javascript/auto'
        }
      ]
    }
  });
};


const express= require('express');

/**
 * gatsby api hook that will run when the development server is started
 * adding this line will allow to extend the server development configuration.
 * For this special case it will allow the content inside the public folder that gatsby will generate to be served and accessible.
 * more on that here =>https://www.gatsbyjs.org/docs/node-apis/#onCreateDevServer
 * 
 */
exports.onCreateDevServer=({app})=>{
    app.use(express.static('public'))
} 

exports.createSchemaCustomization = ({ actions }) => {
    const { createFieldExtension, createTypes } = actions
    createFieldExtension({
        name: `defaultArray`,
        extend() {
          return {
            resolve(source, args, context, info) {
              if (source[info.fieldName] == null) {
                return []
              }
              return source[info.fieldName]
            },
          }
        },
      })
    const typeDefs = `
    type Site implements Node {
        siteMetadata: SiteMetadata
      }
      type SiteMetadata {
        menuLinks: [MenuLinks]!
      }
      type MenuLinks {
        name: String!
        link: String!
        subMenu: [SubMenu]
      }
      type SubMenu {
        name: String
        link: String
      }
    `
    createTypes(typeDefs)
}