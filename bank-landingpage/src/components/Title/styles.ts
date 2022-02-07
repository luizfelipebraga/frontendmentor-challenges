import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: clamp(1.3rem, 3vw, 2.5rem);
  font-weight: 300;
  color: var(--darkBlue);
`;

export const Description= styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);

  max-width: 45rem;
`;
