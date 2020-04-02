import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsPost {
        nodes {
          excerpt
          author
          slug
          title
          doc {
            url
            basename
            filename
            format
          }
          thumbnail {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return data.allDatoCmsPost.nodes.map(post => ({
    author: post.author,
    slug: post.slug,
    title: post.title,
    thumbnail: post.thumbnail,
    excerpt: post.excerpt,
    doc: post.doc,
  }))
}

export default usePosts
