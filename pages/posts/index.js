import React from "react"
import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../helpers/posts-util"
import Head from "next/head"
const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>Natalia's posts</title>
        <meta
          name='description'
          content='I post about recipes, programming and devlopement'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: { posts: allPosts },
  }
}

export default AllPostsPage
