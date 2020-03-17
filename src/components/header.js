import { Link } from "gatsby"
import React from "react"
import { css } from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header
      css={css`
        box-sizing: border-box;
        background: ${props => props.theme.colors.primary};
        margin: 0 0;
        padding: 0.5rem;

        @media ${props => props.theme.media.tablet} {
          padding-right: calc((100vw - 600px) / 2);
          padding-left: calc((100vw - 600px) / 2);
        }
      `}
    >
      <h2
        css={css`
          text-align: center;
          margin: 0;
        `}
      >
        <Link
          to="/"
          css={css`
            color: white;
            text-decoration: none;
          `}
        >
          {title}
        </Link>
      </h2>
    </header>
  )
}

export default Header
