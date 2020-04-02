import { Link, graphql } from "gatsby"
import React from "react"
import { css } from "styled-components"
import Layout from "./layout"

export const pageQuery = graphql`
  query($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      title
      author
      excerpt
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.datoCmsPost
  const html = post.contentNode.childMarkdownRemark.html

  return (
    <>
      <Layout>
        <h1>{post.title}</h1>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          autor: {post.author}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/">&larr; wróć do strony głównej</Link>
        <pre>{JSON.stringify(post.doc, null, 2)}</pre>
      </Layout>
    </>
  )
}

export default PostTemplate
