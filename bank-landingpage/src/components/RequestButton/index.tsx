import { InputHTMLAttributes } from "react";
import { Button, Container } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function RequestButton({...props}: InputProps) {
  return (
    <Container {...props}>
      <Button href="#">Request Invite</Button>
    </Container>
  );
}
