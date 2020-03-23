import { Link, graphql } from "gatsby"
import React from "react"
import { css } from "styled-components"
import Layout from "./layout"

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         author
//         title
//       }
//     }
//   }
// `

const PostTemplate = ({ data }) => {
  // const post = data.markdownRemark

  return (
    <p>DUMMY</p>
    // <Layout>
    //   <h1>{post.frontmatter.title}</h1>
    //   <p
    //     css={css`
    //       font-size: 0.75rem;
    //     `}
    //   >
    //     autor: {post.frontmatter.author}
    //   </p>
    //   <div dangerouslySetInnerHTML={{ __html: post.html }} />
    //   <Link to="/">&larr; wróć do strony głównej</Link>
    // </Layout>
  )
}

export default PostTemplate
