import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"

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

export default function Home({ data }) {
  return (
    <Layout>
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
    </Layout>
  )
}
