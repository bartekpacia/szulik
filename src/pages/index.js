import React from "react"
import { Link } from "gatsby"
import { css } from "styled-components"
import Layout from "../components/layout"
import usePosts from "../hooks/usePosts"
import PostThumb from "../components/postThumb"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Witaj na stronie Szkolnego Związku Sportowego w Rybniku</h1>
      <h3>Najnowsze aktualności</h3>
      <div
        css={css`
          display: flex;
        `}
      >
        {posts.map(post => (
          <PostThumb key={post.slug} post={post} />
        ))}
      </div>
      <Link
        to="/news/"
        css={css`
          margin-top: 2rem;
        `}
      >
        &rarr; Zobacz wszystkie aktualności
      </Link>
    </Layout>
  )
}

export default IndexPage
