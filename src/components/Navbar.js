import React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ThemeToggle from "./ThemeToggle"
import { Link } from "react-scroll"

function Logo() {
  return (
    <StaticImage
      src="../images/banner.png"
      alt="Logo"
      placeholder="blurred"
      layout="fixed"
      width={50}
    />
  )
}

export default function Navbar({ isDarkTheme, setTheme }) {
  return (
    <nav className="navbar top">
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About Me
        </Link>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
        <ThemeToggle isDarkTheme={isDarkTheme} setTheme={setTheme} />
      </div>
    </nav>
  )
}
