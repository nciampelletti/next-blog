import React from "react"
import Hero from "../components/home-page/Hero"
import FeaturedPosts from "../components/home-page/FeaturedPosts"
import { getFeaturedPosts } from "../helpers/posts-util"
import Head from "next/head"

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to Natalia Blog</title>
        <meta
          name='description'
          content='I post about recipes, programming and devlopement'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage

//Hero  => Presend outserf
//Feature Posts
