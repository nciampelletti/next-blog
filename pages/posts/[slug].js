import React from "react"
import PostContent from "../../components/posts/post-detail/PostContent"
import { getPostData, getPostsFiles } from "../../helpers/posts-util"

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const post = getPostData(slug)

  return {
    props: { post },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const files = getPostsFiles()
  const slugs = files.map((file) => file.replace(/\.md$/, ""))

  // const post = getPostData(params.slug)
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export default PostDetailPage
