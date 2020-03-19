import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"

const NavHeading = styled(Link)`
  &&& {
    color: white;
    display: block;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.25rem;
  }
`

const NavLink = styled(Link)`
  &&& {
    color: whitesmoke;
    font-size: 1.1rem;
    font-weight: normal;
    margin: 0 0.5rem 0 0;
    padding: 0.7rem;
    text-decoration: none;
  }
`

const Header = () => {
  const { shortTitle } = useSiteMetadata()

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: ${props => props.theme.colors.primary};
        padding: 0.5rem;

        @media (min-width: 600px) {
          padding-right: calc((100vw - 600px) / 2);
          padding-left: calc((100vw - 600px) / 2);
        }
      `}
    >
      <NavHeading href="/">{shortTitle}</NavHeading>
      <nav>
        <NavLink to="/news/">Aktualności</NavLink>
        <NavLink to="/photos">Zdjęcia</NavLink>
        <NavLink to="/about">O nas</NavLink>
      </nav>
    </header>
  )
}

export default Header
