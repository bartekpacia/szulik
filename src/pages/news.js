import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import usePosts from "../hooks/usePosts"

const SecondPage = () => {
  const data = usePosts()

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <SEO title="SZS Aktualności" />
      <h1>Aktualności</h1>
      <p>Co w trawie piszczy...</p>
      <Link to="/">&larr; Wróć do stony głównej</Link>
    </Layout>
  )
}

export default SecondPage
