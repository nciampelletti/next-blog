import React from "react"
import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../helpers/posts-util"

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: { posts: allPosts },
  }
}

export default AllPostsPage
