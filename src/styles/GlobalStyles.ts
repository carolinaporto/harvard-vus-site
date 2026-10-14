import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  [id] { scroll-margin-top: 88px; }
  :focus-visible { outline: 3px solid ${({ theme }) => theme.colors.goldAccent}; outline-offset: 4px; }
  main:focus { outline: none; }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.darkText};
    background-color: ${({ theme }) => theme.colors.warmOffWhite};
    background-image:
      radial-gradient(ellipse at 95% 0%, rgba(165, 28, 48, 0.08), transparent 45%),
      radial-gradient(ellipse at 0% 30%, rgba(214, 167, 86, 0.11), transparent 50%);
    background-size: 100% 1100px;
    background-repeat: no-repeat;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    max-width: 100%;
    margin: 0;
    text-align: left;
    border: none;
    min-height: 100vh;
  }

  h1, h2, h3, h4 {
    line-height: 1.18;
    font-weight: 800;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
