import { Content } from "../Content";
import { Footer } from "../Footer";
import { NavBar } from "../Nav";
import { Container } from "./styles";

export function MainComponent() {
  return (
    <Container>
      <NavBar />
      <Content />
      <Footer />
    </Container>
  );
}
