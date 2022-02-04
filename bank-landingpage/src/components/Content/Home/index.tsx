import { Container, Box, BoxImage } from "./styles";
import PhonesImg from './image-mockups.png';
import Image from "next/image";

export function HomeSection() {
  return (
    <Container>
      <Box>
        <h1>Next generation digital banking</h1>
      </Box>

      <BoxImage>
        <Image src={PhonesImg} alt="phone image"/>
      </BoxImage>
    </Container>
  );
}
