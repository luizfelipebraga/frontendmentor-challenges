import styled from 'styled-components';

interface ICard {
  isFeaturedOrNew: boolean;
}

export const Container = styled.div<ICard>`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  border-left: ${({isFeaturedOrNew}) => isFeaturedOrNew && '0.25rem solid var(--primary)'};

  margin-top: 1rem;

  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const WrapUserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  height: 5rem;
  object-fit: cover;
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
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
`;

export const BoxNewFeatured = styled.div`
  border-radius: 1rem;
  padding: .3rem .5rem;
  background: var(--bold-cyan);
  
  &:nth-child(2) {
    background: var(--primary);
  }

  span {
    font-size: .65rem;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const Role = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
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

  @media(max-width: 768px) {
    margin-top: 1rem;
  }
`;