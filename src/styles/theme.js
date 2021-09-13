import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  nav {
    background-color: ${({ theme }) => theme.navBackground};
    transition: background-color 0.2s ease-in;
  }
  nav a {
    color: ${({ theme }) => theme.text};
  }
  nav a:hover {
    color: ${({ theme }) => theme.aHover};
  }
  footer p {
    color: ${({ theme }) => theme.text};
    transition: color 0.2s ease-in;
  }
  button {
    color: ${({ theme }) => theme.text};
    transition: color 0.2s ease-in;
  }
  .navbar a {
    color: ${({ theme }) => theme.text};
  }
  .navbar.top::before {
    background: ${({ theme }) => theme.navBackground};
    transition: background 0.2s ease-in;
  }
  .hero .content  {
    background-color: ${({ theme }) => theme.navBackground};
    transition: background-color 0.2s ease-in;
  }
  .btn {
    background-color: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.surfaceText};
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
  }
  .btn:hover {
    background-color: ${({ theme }) => theme.ahover};
  }
`

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  navBackground: "rgba(241, 241, 241, 0.9)",
  aHover: "#4C92F7",
  surface: "#02046B",
  surfaceText: "#f1f1f1",
}

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  navBackground: "rgba(18, 22, 32, 0.9)",
  aHover: "#4C92F7",
  surface: "#f1f1f1",
  surfaceText: "#02046B",
}
