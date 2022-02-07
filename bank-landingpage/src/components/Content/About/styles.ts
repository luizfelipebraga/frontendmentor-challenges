import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--lightGrayBlue);
  margin-top: -10rem;

  padding: 2rem;

`;

export const Main = styled.main`
  max-width: 1200px;
  margin-inline: auto;
  background-color: var(--lightGrayBlue);

  padding: 9rem 0;
`;


export const Grid = styled.div`
  list-style: none;
  padding: 0 1rem;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.8rem;
  position: relative;
`;

