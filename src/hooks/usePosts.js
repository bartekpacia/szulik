import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            author
            slug
            title
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes.map(post => ({
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
  }))
}

export default usePosts
