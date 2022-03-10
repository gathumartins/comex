const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {

    const { createPage } = actions;

    const queryResult = await graphql(`
    {
         pageQuery: allWpPage {
        nodes {
          databaseId
          uri
        }
      }
      postQuery: allWpCustomProperty(sort: { fields: date, order: ASC }) {
        edges {
          node {
            databaseId
            uri
          }
          next {
            databaseId
          }
          previous {
            databaseId
          }
        }
      }
    }
    `);

    if (queryResult.errors) {
        reporter.panic('error loading events', queryResult.errors);
        return
    }

    const pages = queryResult.data.pageQuery.nodes;
    pages.forEach((page) => {
        createPage({
            path: page.uri,
            component: path.resolve(`./src/templates/page.js`),

            context: {
                databaseId: page.databaseId
            },
        })
    })

    // Generate single post pages
    const posts = queryResult.data.postQuery.edges
    posts.forEach(post => {
        createPage({
            path: `properties${post.node.uri}`,
            component: path.resolve(`./src/templates/property.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                databaseId: post.node.databaseId,
                nextId: post.next ? post.next.databaseId : null,
                prevId: post.previous ? post.previous.databaseId : null,
            },
        })
    })
}
