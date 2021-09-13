import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ThemeToggle from "./ThemeToggle"
import { Link } from "react-scroll"

function Logo() {
  return (
    <StaticImage
      src="../images/tlogo.png"
      alt="Logo"
      placeholder="blurred"
      layout="fixed"
      width={40}
    />
  )
}

export default function Navbar({ isDarkTheme, setTheme }) {
  return (
    <nav className="navbar top">
      <div>
        <Logo />
      </div>
      <div>
        <Link
          // activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About Me
        </Link>

        <Link
          // activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          // activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
        <Link
          // activeClass="active"
          to="#"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Blog
        </Link>
        <ThemeToggle isDarkTheme={isDarkTheme} setTheme={setTheme} />
      </div>
    </nav>
  )
}
