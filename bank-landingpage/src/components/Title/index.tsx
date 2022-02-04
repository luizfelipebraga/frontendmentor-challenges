import { Box, Title, Description } from "./styles";

type TitleProps = {
  title: string;
  description?: string;
};

export function TitleComponent({ title, description }: TitleProps) {
  return (
    <Box>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Box>
  );
}
