import { Attribution, Container } from "./styles";

import Data from "../../services/data.json";
import { CardComponent } from "../Card";

export function MainComponent() {
  return (
    <Container>
      {Data.map((card) => {
        console.log(card.logo)
        return (
          <CardComponent key={card.id}
            company={card.company}
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
        )
      })}

      <Attribution>
        <span>Coded by</span> <a href="https://www.frontendmentor.io/profile/luizfelipebraga">Luiz Felipe Braga</a>.
      </Attribution>
    </Container>
  );
}
