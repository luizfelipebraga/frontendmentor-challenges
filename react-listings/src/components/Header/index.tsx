
import HeaderImg from '../../images/bg-header-desktop.svg';
import { Container } from './styles';

export function HeaderComponent() {
  return (
    <Container>
      <img src={HeaderImg} alt="header"/>
    </Container>
  );
}
