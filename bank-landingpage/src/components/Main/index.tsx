import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../Nav";
import { Container } from "./styles";

export function MainComponent() {
  return (
    <Container>
      <NavBar/>
      <h1>AAA</h1>
    </Container>
  );
}
