import { Link, graphql } from "gatsby"
import { Image } from "gatsby-image"
import React from "react"
import { css } from "styled-components"
import Layout from "./layout"
import pdfIcon from "../images/pdf.svg"

export const pageQuery = graphql`
  query($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      title
      author
      excerpt
      assets {
        url
        basename
        filename
        format
      }
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
        {post.doc ? (
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <b>Pliki do pobrania</b>
            {post.assets.forEach(asset => {
              return (
                <>
                  <img
                    src={pdfIcon}
                    css={css`
                      width: 3rem;
                    `}
                  />
                  <a href={post.doc.url}>{post.doc.filename}</a>
                </>
              )
            })}
          </div>
        ) : (
          <p>XD</p>
        )}
        {/* <pre>{`value: ${JSON.stringify(post.doc, null, 2)}`}</pre> */}
        <Link
          to="/"
          css={css`
            margin-top: 1rem;
          `}
        >
          &larr; wróć do strony głównej
        </Link>
      </Layout>
    </>
  )
}

export default PostTemplate
