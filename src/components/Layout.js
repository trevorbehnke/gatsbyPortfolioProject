import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { ThemeProvider } from "styled-components"

import { lightTheme, darkTheme, GlobalStyles } from "../theme"

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark"

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark"
    setTheme(updatedTheme)
    localStorage.setItem("theme", updatedTheme)
  }

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
        <Navbar />
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </button>
        <div className="content">{children}</div>
        <footer>
          <p>Copyright 2021 Web Warrior</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}
