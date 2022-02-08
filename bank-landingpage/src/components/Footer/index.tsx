import Image from "next/image";
import Link from "next/link";

import FacebookImg from "../../images/icon-facebook.svg";
import InstaImg from "../../images/icon-instagram.svg";
import PinterestImg from "../../images/icon-pinterest.svg";
import TwitterImg from "../../images/icon-twitter.svg";
import YoutubeImg from "../../images/icon-youtube.svg";
import Logo from "../../images/logo-white.svg";
import { RequestButton } from "../RequestButton";

import {
  Attribution,
  Container,
  Flex1,
  Flex2,
  Flex3,
  Foot,
  SocialMedias,
  Wrapper,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <Foot>
        <Wrapper>
          <Flex1>
            <Image src={Logo} alt="logo" />
            <SocialMedias>
              <Image src={FacebookImg} alt="facebook image" />
              <Image src={YoutubeImg} alt="youtube image" />
              <Image src={TwitterImg} alt="twitter image" />
              <Image src={PinterestImg} alt="pinterest image" />
              <Image src={InstaImg} alt="insta image" />
            </SocialMedias>
          </Flex1>

          <Flex2>
            <Link href="#">About Us</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Blog</Link>
          </Flex2>

          <Flex3>
            <Link href="#">Carees</Link>
            <Link href="#">Support</Link>
            <Link href="#">Privacy Policy</Link>
          </Flex3>
        </Wrapper>

        <Attribution>
          <RequestButton/>
          <p>Coded by </p>
          <a href="https://www.frontendmentor.io/profile/luizfelipebraga">
            Luiz Felipe Braga
          </a>
        </Attribution>
      </Foot>
    </Container>
  );
}
