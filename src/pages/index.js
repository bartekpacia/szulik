import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Witaj na stronie Szkolnego Związku Sportowego w Rybniku</h1>
    <Link to="/news/">Zobacz aktualności</Link>
  </Layout>
)

export default IndexPage
