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
      <p
        css={css`
          display: block;
          margin: 0;
          padding: 1rem;
          background: ${(props) => props.theme.colors.grey};
        `}
      >
        Znajdziesz tu wszystkie informacje o nowych osiągnięciach, dokumenty,
        bla bla bla.
      </p>
      <h2>Najnowsze aktualności</h2>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {posts.slice(0, 3).map((post) => (
          <PostThumb key={post.slug} post={post} />
        ))}
      </div>
      <Link
        to="/news/"
        css={css`
          margin-top: 2rem;
          margin-bottom: 1rem;
        `}
      >
        &rarr; Zobacz wszystkie aktualności
      </Link>
    </Layout>
  )
}

export default IndexPage
