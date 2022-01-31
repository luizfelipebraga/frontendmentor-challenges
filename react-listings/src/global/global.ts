import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan', sans-serif;
  }

  :root {
    //Primary
    --primary: hsl(180, 29%, 50%);

    //Neutral

    --background: hsl(180, 52%, 96%);
    --table: hsl(180, 31%, 95%);
    --dark-cyan: hsl(180, 8%, 52%);
    --bold-cyan: hsl(180, 14%, 20%);
  }

  body, html, #root {
    background: var(--background);
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }


  @media(max-width: 375px) {

  }

  @media(max-width: 1440px) {
    
  }
`;