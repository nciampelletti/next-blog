import PostGrid from "../posts/PostGrid"
import classes from "./FeaturedPosts.module.css"

const posts = [
  {
    id: 1,
    title: "first post",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, architecto itaque, rerum delectus at vero culpa exercitationem, assumenda facilis molestias libero magni cumque",
    date: "July 1, 2023",
    slug: "first-post",
    image: "gab.png",
  },
  {
    id: 3,
    title: "third post",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, architecto itaque, rerum delectus at vero culpa exercitationem, assumenda facilis molestias libero magni cumque",
    date: "July 1, 2023",
    slug: "third-post",
    image: "gab.png",
  },
  {
    id: 2,
    title: "second post",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, architecto itaque, rerum delectus at vero culpa exercitationem, assumenda facilis molestias libero magni cumque",
    date: "July 1, 2023",
    slug: "second-post",
    image: "gab.png",
  },
]

const FeaturedPosts = () => {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
