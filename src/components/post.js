import { Link, graphql } from "gatsby"
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

const AssetIcon = props => {
  return (
    <div
      css={css`
        background: ${props => props.theme.colors.grey};
        padding: 0.3rem;
        margin: 0.3rem;
        display: flex;
        align-items: center;
        color: red;
      `}
    >
      <img
        src={pdfIcon}
        css={css`
          width: 2rem;
        `}
      />
      <a href={props.url}>{`plik: ${props.filename}`}</a>
    </div>
  )
}

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
        <b>Pliki do pobrania</b>
        {post.assets ? (
          <div
            css={css`
              display: inline-flex;
              flex-direction: column;
              margin-bottom: 1rem;
            `}
          >
            {post.assets.map(asset => AssetIcon(asset))}
          </div>
        ) : null}
        {/* <pre>{JSON.stringify(post.assets, null, 2)}</pre> */}
        <Link to="/">&larr; wróć do strony głównej</Link>
      </Layout>
    </>
  )
}

export default PostTemplate
