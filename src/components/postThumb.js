import React from "react"
import { css } from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const PostThumb = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;
    `}
  >
    <Link
      to={post.slug}
      css={css`
        flex-shrink: 0;
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Link to={post.slug}>przeczytaj &rarr;</Link>
    </div>
  </article>
)

export default PostThumb
