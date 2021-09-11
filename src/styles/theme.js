import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  nav {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  nav a {
    color: ${({ theme }) => theme.text};
    transition: color 0.2s ease-in;
  }
  nav a:hover {
    border-color: ${({ theme }) => theme.text};
    transition: border-color 0.2s ease-in;
  }
  footer p {
    color: ${({ theme }) => theme.text};
    transition: color 0.2s ease-in;
  }
  button {
    color: ${({ theme }) => theme.text};
    transition: color 0.2s ease-in;
  }
`

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
}

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
}
