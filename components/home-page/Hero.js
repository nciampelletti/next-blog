import React from "react"
import classes from "./Hero.module.css"
import Image from "next/image"

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/tasha1.jpg'
          alt='Me me and me'
          width={700}
          height={700}
          quality={100}
        />
      </div>
      <h1>Welcome to my tasty blog </h1>
      <p>
        Do you love meat? Are you missing late night smoky grilled meats? Do you
        love hands-on dining where you get to do it yourself? Korean BBQ is
        perfect for you.
      </p>
    </section>
  )
}

export default Hero
