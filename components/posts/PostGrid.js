import React from "react"
import classes from "./PostGrid.module.css"
import PostItem from "./PostItem"

const PostGrid = (props) => {
  const { posts } = props

  return (
    <div className={classes.wrapper}>
      <ul className={classes.grid}>
        {posts?.map((post) => {
          return <PostItem key={post.slug} post={post} />
        })}
      </ul>
    </div>
  )
}

export default PostGrid
