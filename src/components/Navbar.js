import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
      </div>
    </nav>
  )
}
