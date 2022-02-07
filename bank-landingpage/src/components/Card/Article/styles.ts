import styled from 'styled-components';
import Image from 'next/image';


export const Container = styled.div`
  background-color: #fff;
  padding: 1.5rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2rem;
`;

export const ImageStyled = styled(Image)`
  border-radius: .3rem !important;
`;

export const MadeBy = styled.span`
  font-size: .9rem;
`;

export const Title = styled.h2`
  color: var(--darkBlue);
  font-weight: 500;
`;

export const Description = styled.p`
`;

