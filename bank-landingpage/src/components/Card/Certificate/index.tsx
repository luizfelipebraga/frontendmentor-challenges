import Image from "next/image";
import { Container, Title, Description, Box } from "./styles";

type CardProps = {
  img: string;
  title: string;
  description: string;
};

export function CardCertificate({ img, title, description }: CardProps) {
  return (
    <Container>
      <Image src={img} width={90} height={90} />
      <Box>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Box>
    </Container>
  );
}
