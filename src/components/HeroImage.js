import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Navbar from "./Navbar"

const HeroImage = ({ isDarkTheme, setTheme }) => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "tlogo.png" }) {
          id
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(backgroundImage123)

  return (
    <BgImage className="hero" image={pluginImage}>
      <Navbar isDarkTheme={isDarkTheme} setTheme={setTheme} />
      <div className="content">
        <h1>Hello 👋,</h1>
        <h2>
          I'm <strong>Trevor</strong>
        </h2>
        <h3>A modern web developer</h3>
        <Link>About Me</Link>
      </div>
    </BgImage>
  )
}

export default HeroImage
