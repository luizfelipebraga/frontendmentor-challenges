import { Container, Box, BoxImage, ImageStyled, WrapperBox } from "./styles";
import PhonesImg from "../../../images/image-mockups.png";
import { RequestButton } from "../../RequestButton";

export function HomeSection() {
  return (
    <Container>
      <WrapperBox>
        <Box>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestButton style={{ textAlign: "left" }} />
        </Box>
      </WrapperBox>

      <BoxImage>
        <ImageStyled src={PhonesImg} alt="phone image" />
      </BoxImage>
    </Container>
  );
}
