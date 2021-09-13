import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Navbar from "./Navbar"
import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-scroll"

const Header = ({ isDarkTheme, setTheme }) => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(
          relativePath: { eq: "t-block-dark-artboard.png" }
        ) {
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
    <BgImage className="hero" image={pluginImage} id="hero">
      <Navbar isDarkTheme={isDarkTheme} setTheme={setTheme} />
      <div className="content">
        <h1>Hello 👋,</h1>
        <h2>
          I'm <strong>Trevor</strong>.
        </h2>
        <p style={{ margin: "30px" }}>
          A{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            <Typewriter
              words={["modern", "curious", "pragmatic", "driven"]}
              loop={false}
              // cursor
              // cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>{" "}
          web <br />
          developer.
        </p>
        <Link
          className="btn"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About Me
        </Link>
      </div>
    </BgImage>
  )
}

export default Header
