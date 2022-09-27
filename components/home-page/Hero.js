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
      <h1>Hi this is Natalia</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        voluptatibus sint molestias expedita consequatur laudantium provident
        similique unde. Consequuntur accusamus amet exercitationem atque.
      </p>
    </section>
  )
}

export default Hero
