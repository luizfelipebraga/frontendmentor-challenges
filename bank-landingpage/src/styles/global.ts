import styled, { createGlobalStyle } from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Public Sans', sans-serif;
  }

  html.sr .load-hidden {
      visibility: hidden;
  }

  [data-simplebar]:not(.simplebar-dragging) .simplebar-content-wrapper {
    scroll-behavior: smooth;
  }
  :root {
    //Primary
    --darkBlue: hsl(233, 26%, 24%);
    --lightGreen: hsl(136, 65%, 51%);
    --lightCyan: hsl(192, 70%, 51%);

    //Neutral
    --grayBlue: hsl(233, 8%, 62%);
    --lightGrayBlue: hsl(220, 16%, 96%);
    --veryLightGray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
  }
  
  html, body, #root {
    &::-webkit-scrollbar {
        display: none;
    }
      
    min-height: 100vh;
    width : 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  span, button, p  {
    color: #949494;
  }

  b, strong {
      color: #000;
  }
  textarea {
      resize: none;
  }
  .glider-dot.active {
      background: #041e50;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      color: #fff;
      transition: all 5000s ease-in-out 0s;
  }
  textarea, select, input, textarea, select:focus, button{
      border: 0;
      outline: none;
  }
  a {
      list-style: none;
      text-decoration: none;
      cursor: pointer;
  }

  @media (min-width: 1600px) {
      html {
          font-size: 90%;
      }
  }
  @media (max-width: 1200px) {
      html {
          font-size: 82%;
      }
  }
  @media (max-width: 1024px) {
      html {
          font-size: 75%;
      }
  }
  @media (max-width: 768px) {
      html {
          font-size: 75%;
      }
  }
  @media (max-width: 480px) {
      html {
          font-size: 70%;
      }
  }
  @media (max-width: 320px) {
      html {
          font-size: 65%;
      }
  }
`;

export const ScrollStyled = styled(SimpleBar)`
  max-height: 99.9999999vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;
