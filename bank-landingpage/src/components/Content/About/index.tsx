import { CardCertificate } from "../../Card/Certificate";
import { TitleComponent } from "../../Title";
import { Container, Grid, Main } from "./styles";

export function AboutSection() {
  const certificate = [
    {
      image: '/images/icon-online.svg',
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },

    {
      image: '/images/icon-budgeting.svg',
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },

    {
      image: '/images/icon-onboarding.svg',
      title: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },

    {
      image: '/images/icon-api.svg',
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <Container>
      <Main>
        <TitleComponent
          title="Why choose Easybank?"
          description="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before. "
        />

        <Grid>
          {certificate.map((cert, index) => {
            return (
              <CardCertificate
                key={index}
                img={cert.image}
                title={cert.title}
                description={cert.description}
              />
            );
          })}
        </Grid>
      </Main>
    </Container>
  );
}
