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
      creationDate
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

const AssetIcon = (props) => {
  return (
    <div
      css={css`
        border: 3px solid ${(props) => props.theme.colors.primary};
        border-radius: 15px;
        padding: 0.3rem;
        margin: 0.3rem;
        display: inline-flex;
        align-items: center;
      `}
    >
      <img
        src={pdfIcon}
        alt={"Ikonka pliku pdf"}
        css={css`
          width: 1.5rem;
        `}
      />
      <a href={props.url}>{props.filename}</a>
    </div>
  )
}

const PostTemplate = ({ data }) => {
  const post = data.datoCmsPost
  const html = post.contentNode.childMarkdownRemark.html

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return (
    <>
      <Layout>
        <h1>{post.title}</h1>
        <div
          css={css`
            display: flex;
          `}
        >
          <p
            css={css`
              font-size: 0.75rem;
              margin: 0;
              margin-right: 0.3rem;
            `}
          >
            Dodane przez <b>{post.author}</b>
          </p>
          <p
            css={css`
              font-size: 0.75rem;
              margin: 0;
            `}
          >
            {" "}
            |{" "}
            {new Date(Date.parse(post.creationDate)).toLocaleDateString(
              "pl-PL",
              dateOptions
            )}
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {post.assets.length > 0 ? <b>Pliki do pobrania</b> : null}
        {post.assets ? (
          <div
            css={css`
              display: flex;
              align-items: flex-start;
              flex: 0 0 100x;
              flex-direction: column;
              margin-bottom: 1rem;
            `}
          >
            {post.assets.map((asset) => AssetIcon(asset))}
          </div>
        ) : null}
        {/* <pre>{JSON.stringify(post.assets, null, 2)}</pre> */}
        <Link to="/">&larr; wróć do strony głównej</Link>
      </Layout>
    </>
  )
}

export default PostTemplate
