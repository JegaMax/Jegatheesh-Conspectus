import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-accent: #7AC789;
    --primary-base: #2C425C;
    --complementary-accent: #D4D8D6;
    --secondary-palette: #FCFCFC;
    --background-beige: #f4f1ea;
    --text-dark: #3e4c3a;
    --font-montserrat: var(--font-montserrat);
    --font-roboto-slab: var(--font-roboto-slab);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background-color: var(--background-beige);
    color: var(--text-dark);
    font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.75;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-montserrat), sans-serif;
  }

  p {
    line-height: 1.75;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyles;
