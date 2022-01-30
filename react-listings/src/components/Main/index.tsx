import { Attribution, Container } from "./styles";

import Data from "../../services/data.json";
import { CardComponent } from "../Card";

export function MainComponent() {
  return (
    <Container>
      {Data.map((card) => {
        return (
          <CardComponent/>
        )
      })}

      
      <Attribution>
        <span>Coded by</span> <a href="https://www.frontendmentor.io/profile/luizfelipebraga">Luiz Felipe Braga</a>.
      </Attribution>
    </Container>
  );
}
