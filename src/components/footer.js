import React from "react"

const Footer = () => {

  return (
    <footer>
      <p>© {new Date().getFullYear()} SZS Rybnik</p>
      <p>
        stworzył <a href="http://bartekpacia.github.io">@bartekpacia</a>
      </p>
    </footer>
  )
}

export default Footer