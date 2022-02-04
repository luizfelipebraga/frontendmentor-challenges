import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  margin-inline: auto;

  background-color: var(--darkBlue);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const BoxRequest = styled.div`
`;

export const Attribution = styled.div`
  font-size: 11px;
  text-align: center;

  a {
    color: hsl(228, 45%, 44%);
  }
`;
