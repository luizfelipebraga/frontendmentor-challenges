import styled from 'styled-components';
import Image from "next/image";

export const Container = styled.section`
  height: 100%;
  overflow: hidden;

  background-color: var(--veryLightGray);

  display: flex;
  justify-content: space-between;

  padding: 2rem 0;

  @media (max-width: 1220px) {
    flex-direction: column-reverse;
    padding-bottom: 12rem;
  }
`;

export const WrapperBox = styled.div`
  max-width: 1200px;

  flex: 4;
  display: flex;
  margin-top: 10rem;
  justify-content: center;

  @media (max-width: 1220px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  max-width: 33rem;
  padding-left: 1.5rem;

  h1 {
    color: var(--darkBlue);
    font-size: clamp(1.5rem, 5vw, 3.5rem);
    font-weight: 400;
  }

  p {
    font-size: clamp(1rem, 3vw, 1.25rem);
    margin-bottom: 1.8rem;
  }
`;

export const BoxImage = styled.div`

  background-image: url('./images/bg-intro-desktop.svg'); /* The image used */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  
  margin-top: -130px;

  @media (max-width: 1220px) {
    display: none;
    margin-top: 0;
  }
`;

export const ImageStyled = styled(Image)`
  left: 5rem !important;
`;