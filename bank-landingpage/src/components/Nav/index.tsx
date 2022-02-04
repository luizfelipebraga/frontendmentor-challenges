import Image from "next/image";
import { Header, Nav } from "./styles";
import Logo from "./images/logo.svg";
import Link from "next/link";
import { RequestButton } from "../RequestButton";

export function NavBar() {
  function ScrollToTop(): void {
    window.scrollTo(0, 1);
  }

  return (
    <Header> 
      <Link href="/">
        <a onClick={ScrollToTop}>
          <Image src={Logo} alt="Logo" />
        </a>
      </Link>
      <Nav>
        <ul>
          <Link href="#">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#careers">Careers</Link>
        </ul>
      </Nav>
      <RequestButton/>
    </Header>
  );
}
