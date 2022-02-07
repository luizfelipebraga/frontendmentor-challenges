import { AboutSection } from "./About";
import { HomeSection } from "./Home";
import { LatestArticlesSection } from "./LatestArticles";
import { Container } from "./styles";

export function Content() {
  return (
    <Container>
      <HomeSection/>
      <AboutSection/>
      <LatestArticlesSection/>
    </Container>
  );
}
