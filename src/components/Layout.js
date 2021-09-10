import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { ThemeProvider } from "styled-components"

import { lightTheme, darkTheme, GlobalStyles } from "../theme"

import Footer from "./Footer"

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark"

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    }
  }, [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="layout">
        <GlobalStyles />
        <Navbar isDarkTheme={isDarkTheme} setTheme={setTheme} />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
