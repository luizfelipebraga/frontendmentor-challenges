import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  background: var(--background);
  border-left: 0.25rem solid #1cc88a;

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
`;

export const InfoUser = styled.div`
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    text-transform: uppercase;
  }
`;

export const Role = styled.span`
`;

export const Footer = styled.footer`
`;

export const StackUserBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  span {
    padding: 1rem;
    background: #252525;
    font-size: .8rem;
  }
`;