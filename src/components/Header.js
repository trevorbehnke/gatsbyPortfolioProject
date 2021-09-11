import React from "react"
import { header, btn } from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Banner() {
  return (
    <StaticImage
      src="../images/banner.png"
      alt="banner"
      placeholder="BLURRED"
      layout="FULL_WIDTH"
      // formats="AUTO, WEBP"
    />
  )
}

export default function Header() {
  return (
    <div>
      <h1>Hello!</h1>
      <section className={header}>
        <div>
          <h2>Hello 👋,</h2>
          <h3>
            I'm <strong>Trevor</strong>
          </h3>
          <p>A modern web developer</p>
          <Link className={btn} to="/projects">
            About Me
          </Link>
        </div>
        <Banner />
      </section>
    </div>
  )
}
