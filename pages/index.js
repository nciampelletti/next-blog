import React from "react"
import Hero from "../components/home-page/Hero"
import FeaturedPosts from "../components/home-page/FeaturedPosts"
import { getFeaturedPosts } from "../helpers/posts-util"

const HomePage = (props) => {
  return (
    <>
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
