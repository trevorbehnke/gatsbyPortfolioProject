import React from "react"

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
          <span aria-label="Light mode" role="img">
            <div class="sun"></div>
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            <div class="moon"></div>
          </span>
        )}
      </button>
    </>
  )
}
