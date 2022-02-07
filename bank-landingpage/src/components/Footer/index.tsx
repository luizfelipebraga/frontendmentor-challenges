import { Attribution, Container, Foot } from "./styles";

export function Footer() {
  return (
    <Container>
      <Foot>
        <Attribution>
          <p>Coded by </p>
          <a href="https://www.frontendmentor.io/profile/luizfelipebraga">
            Luiz Felipe Braga .
          </a>
        </Attribution>
      </Foot>
    </Container>
  );
}
