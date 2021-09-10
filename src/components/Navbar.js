import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ThemeToggle from "./ThemeToggle"

function Logo() {
  return (
    <StaticImage
      src="../images/logo.png"
      alt="Logo"
      placeholder="blurred"
      layout="fixed"
      width={80}
    />
  )
}

export default function Navbar({ isDarkTheme, setTheme }) {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
        <ThemeToggle isDarkTheme={isDarkTheme} setTheme={setTheme} />
      </div>
    </nav>
  )
}
