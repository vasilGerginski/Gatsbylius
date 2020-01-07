import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  /* Remove default padding */
  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }

  /* Remove default margin */
  body,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ==== Typography ==== */
  html {
    font-size: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.font1};
    font-size: ${({ theme }) => theme.fontSizes.body};
  }

  h1,
  h2 {
    font-family: ${({ theme }) => theme.fonts.font2};
    font-weight: 600;
    text-transform: uppercase;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1}
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2}
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h3}
  }

  a {
    text-decoration: none;
  }
`;
