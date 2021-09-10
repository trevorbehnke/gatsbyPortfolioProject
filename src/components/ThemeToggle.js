import React from "react"

export default function ThemeToggle({ isDarkTheme, setTheme }) {
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark"
    setTheme(updatedTheme)
    localStorage.setItem("theme", updatedTheme)
  }
  return (
    <>
      <button onClick={toggleTheme} style={{ cursor: "pointer" }}>
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
    </>
  )
}
