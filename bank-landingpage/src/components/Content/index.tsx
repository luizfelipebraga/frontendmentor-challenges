import { AboutuSection } from "./About";
import { HomeSection } from "./Home";
import { LatestArticlesSection } from "./LatestArticles";
import { Container } from "./styles";

export function Content() {
  return (
    <Container>
      <HomeSection/>
      <AboutuSection/>
      <LatestArticlesSection/>
    </Container>
  );
}
