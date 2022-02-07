import Image from "next/image";
import { Container, Title, Description, Box, MadeBy, ImageStyled } from "./styles";

type CardProps = {
  img: string;
  madeBy: string;
  title: string;
  description: string;
};

export function CardArticle({ img, title, description, madeBy}: CardProps) {
  return (
    <Container>
      <ImageStyled src={img} width={350} height={300}/>
      <Box>
        <MadeBy>{madeBy}</MadeBy>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Box>
    </Container>
  );
}
