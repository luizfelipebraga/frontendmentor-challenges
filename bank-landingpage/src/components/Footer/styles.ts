import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  background-color: var(--darkBlue);

  padding: 5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Foot = styled.footer`
  max-width: 1200px;
  margin-inline: auto;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1220px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10rem;

  transition: color 200ms ease-in-out;

  a {
    color: #f8f8f8;

    &:hover {
      color: var(--lightGreen);
    }
  }

  @media (max-width: 1220px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const Flex1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1220px) {
    gap: 2rem;
  }
`;

export const Flex2 = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

export const Flex3 = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const Attribution = styled.div`
  font-size: 11px;
  text-align: center;

  p {
    margin-top: 2.5rem;
  }

  a {
    color: #fff;
    white-space: nowrap;
  }

  @media (max-width: 1220px) {
    margin-top: 4rem;
  }
`;
