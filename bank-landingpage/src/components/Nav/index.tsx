import Image from "next/image";
import { Header, Nav } from "./styles";
import Logo from "../../images/logo.svg";
import Link from "next/link";

export function NavBar() {
  return (
      <Header>
        <Image src={Logo} alt="Logo" />
        <Nav>
          <ul>
            <Link href="#">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#careers">Careers</Link>
          </ul>
        </Nav>
        <span>aaa</span>
      </Header>
  );
}
