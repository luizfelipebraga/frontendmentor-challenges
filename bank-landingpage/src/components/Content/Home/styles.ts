import styled from 'styled-components';
import bgImg from '../../../images/bg-intro-desktop.svg';
import Image from "next/image";

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

  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  max-width: 780px;

  h1 {
    color: var(--darkBlue);
    font-size: clamp(1.3rem, 5vw, 3.5rem);
    font-weight: 400;
  }

  p {
    font-size: clamp(1rem, 3vw, 1.3rem);
    margin-bottom: 2rem;
  }
`;

export const BoxImage = styled.div`
  position: relative;

  background-image: url(${bgImg}); /* The image used */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  
  margin-top: -130px;
  margin-right: -110px;
`;

export const ImageStyled = styled(Image)`
  position: absolute;
`;