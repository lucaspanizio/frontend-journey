import isPropValid from '@emotion/is-prop-valid'
import { createGlobalStyle, css, WebTarget } from 'styled-components'

const ResetCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
  }

  * {
    margin: 0;
    padding: 0;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    overflow-wrap: break-word;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    max-width: 100%;
  }

  img,
  video {
    height: auto;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body {
    font-size: 16px;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`

export const GlobalStyle = createGlobalStyle`
 ${ResetCSS}

  * {
    font-size: 0.9rem;
  } 

  body {
    margin: 0;
    padding: 0;
    color: #fafafa;
    background-color: ${({ theme }) => theme.colors.background.dark};
    font-family: Poppins, Helvetica, Sans-Serif;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  p + p {
    margin-top: 0.75rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.text.light};
  }

  code {
    letter-spacing: 0.04em;
  }
`

export const shouldForwardProp = (propName: string, elementToBeRendered: WebTarget) => {
  return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true
}
