import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import styled from "styled-components"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"

import Header from "./header"
import theme from "../utils/theme"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

   a, a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryDark}
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0.5rem;

    @media (min-width: 600px) {
      padding-right: calc((100vw - 600px) / 2);
      padding-left: calc((100vw - 600px) / 2);
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    color: #505050;
    background: #eee;
    padding: 0.5rem;

    @media (min-width: 600px) {
      padding-right: calc((100vw - 600px) / 2);
      padding-left: calc((100vw - 600px) / 2);
    }
  }

`

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <StyledWrapper>
        <Header />
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} SZS Rybnik</p>
          <p>
            stworzył <a href="http://bartekpacia.github.io">@bartekpacia</a>
          </p>
        </footer>
      </StyledWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
