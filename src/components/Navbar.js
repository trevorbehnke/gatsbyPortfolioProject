import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ThemeToggle from "./ThemeToggle"

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
    <nav>
      <div className="logo">
        <Logo /> Trevor | Web Developer
      </div>
      <div className="links">
        <Link to="about">About</Link>
        <Link to="#">Portfolio</Link>
        <Link to="#">Contact</Link>
        <ThemeToggle isDarkTheme={isDarkTheme} setTheme={setTheme} />
      </div>
    </nav>
  )
}
