import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Header from "../components/Header"

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}
