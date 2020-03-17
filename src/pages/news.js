import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="SZS Aktualności" />
    <h1>Aktualności</h1>
    <p>Co w trawie piszczy...</p>
    <Link to="/">&larr; Wróć do stony głównej</Link>
  </Layout>
)

export default SecondPage
