import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../styles/theme"

export default function Home() {
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
      <GlobalStyles />
      <Layout>
        <Header isDarkTheme={isDarkTheme} setTheme={setTheme} />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}
