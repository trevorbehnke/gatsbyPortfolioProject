import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

export default function ThemeToggle({ isDarkTheme, setTheme }) {
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark"
    setTheme(updatedTheme)
    localStorage.setItem("theme", updatedTheme)
  }
  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          cursor: "pointer",
          background: "transparent",
          border: "none",
          marginLeft: "20px",
        }}
      >
        {isDarkTheme ? (
          <h1>
            <FontAwesomeIcon icon={faSun} />
          </h1>
        ) : (
          <h1>
            <FontAwesomeIcon icon={faMoon} />
          </h1>
        )}
      </button>
    </>
  )
}
