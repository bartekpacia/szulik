exports.createPages = async ({ actions, graphql, recorder }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/components/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
