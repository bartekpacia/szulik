exports.createPages = async ({ actions, graphql, recorder }) => {
  const result = await graphql(`
    query {
      allDatoCmsPost {
        nodes {
          slug
          title
          author
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allDatoCmsPost.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve("./src/components/post.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
