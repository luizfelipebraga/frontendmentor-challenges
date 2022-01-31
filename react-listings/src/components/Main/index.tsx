import { Attribution, Container, Box } from "./styles";

import { data } from "../../services/data";
import { CardComponent } from "../Card";
import { HeaderComponent } from "../Header";

export function MainComponent() {
  return (
    <Container>
      <HeaderComponent />
      <Box>
        {data.map((card) => {
          return (
            <CardComponent
              key={card.id}
              company={card.company}
              new={card.new}
              featured={card.featured}
              logo={card.logo}
              position={card.position}
              role={card.role}
              level={card.level}
              postedAt={card.postedAt}
              contract={card.contract}
              location={card.location}
              languages={card.languages}
              tools={card.tools}
            />
          );
        })}
      </Box>

      <Attribution>
        <span>Coded by</span>{" "}
        <a href="https://www.frontendmentor.io/profile/luizfelipebraga">
          Luiz Felipe Braga
        </a>
        .
      </Attribution>
    </Container>
  );
}
