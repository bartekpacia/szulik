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
    padding-bottom: 0.2rem;
    text-decoration: none;

    &.current-page {
      border-bottom: 2px solid white;
    }
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
        <NavLink to="/news/" activeClassName="current-page">
          Aktualności
        </NavLink>
        <NavLink to="/photos" activeClassName="current-page">
          Zdjęcia
        </NavLink>
        <NavLink to="/about" activeClassName="current-page">
          O nas
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
