import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  border-left: 0.25rem solid #1cc88a;

  margin-top: 1rem;

  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapUserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  height: 3rem;
  object-fit: cover;
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: var(--primary);
    font-size: .8rem;
    font-weight: 700;
  }

  button {
    text-transform: uppercase;
  }
`;

export const Role = styled.span`
  font-weight: 700;
  color: var(--bold-cyan);
`;

export const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  font-size: .8rem;
  color: var(--dark-cyan);
  
`;

export const StackUserBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  span {
    padding: .5rem;
    background: var(--table);
    font-size: .8rem;
    color: var(--primary);
    font-weight: 700;
  }
`;