import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { css, createGlobalStyle, ThemeProvider } from "styled-components"

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

  *, *::before, *::after {
    box-sizing: border-box;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

`

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledWrapper>
        <Header />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </StyledWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
