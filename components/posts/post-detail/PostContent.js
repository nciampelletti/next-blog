import React from "react"
import classes from "./PostContent.module.css"
import PostHeader from "./PostHeader"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"

SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("css", css)

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph
      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={400}
              height={300}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { language, children } = code
      return (
        <SyntaxHighlighter
          // language={language}
          language='javascript'
          children={children}
          style={atomDark}
        />
      )
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
