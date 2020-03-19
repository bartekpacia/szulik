import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          excerpt
          frontmatter {
            author
            slug
            title
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes.map(post => ({
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }))
}

export default usePosts
