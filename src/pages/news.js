import React from "react"
import { Link } from "gatsby"
import { css } from "styled-components"
import Layout from "../components/layout"
import usePosts from "../hooks/usePosts"
import PostThumb from "../components/postThumb"

const SecondPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Aktualności</h1>
      <p>Co w trawie piszczy...</p>
      {posts.map(post => (
        <PostThumb key={post.slug} post={post} />
      ))}
      <Link
        to="/"
        css={css`
          margin-top: 2rem;
        `}
      >
        &larr; Wróć do stony głównej
      </Link>
    </Layout>
  )
}

export default SecondPage
