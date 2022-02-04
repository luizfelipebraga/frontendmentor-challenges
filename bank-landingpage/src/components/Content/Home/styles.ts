import styled from 'styled-components';
import bgImg from '../../../images/bg-intro-desktop.svg';

export const Container = styled.section`
  height: 100%;
  overflow: hidden;
  background-color: var(--veryLightGray);

  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;

export const Box = styled.div`
  padding: 10rem 0 0 20rem;

  h1 {
    color: var(--darkBlue);
    font-size: clamp(1.3rem, 5vw, 3rem);
    max-width: 400px;
    font-weight: 400;
  }
`;

export const BoxImage = styled.div`

  background-image: url('./bg-intro-desktop.svg'); /* The image used */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */


  margin-top: -130px;
  margin-right: -110px;
`;