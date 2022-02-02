import styled from 'styled-components';


export const Header = styled.header`
  width: 100%;

  max-width: 1200px;
  margin: 0 auto; //margin: 0 auto;

  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

