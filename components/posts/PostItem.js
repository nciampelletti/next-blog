import React from "react"
import classes from "./PostItem.module.css"
import Link from "next/link"
import Image from "next/image"

const PostItem = ({ post }) => {
  const { title, image, summary, date, slug } = post

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const linkPath = `/posts/${slug}`
  const imagePath = `/images/posts/${slug}/${image}`

  return (
    <li className={classes.post}>
      <Link href='/'>
        <a>
          <div>
            <Image
              src={imagePath}
              alt={title}
              width={150}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{summary}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
