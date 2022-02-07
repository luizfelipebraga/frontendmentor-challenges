import { CardArticle } from "../../Card/Article";
import { TitleComponent } from "../../Title";
import { Container, Main, Grid } from "./styles";

export function LatestArticlesSection() {

  const articles = [
    {
      image: '/images/image-currency.jpg',
      madeBy: 'By Claire Robinson',
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },

    {
      image: '/images/image-restaurant.jpg',
      madeBy: 'By Wilson Hutton',
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },

    {
      image: '/images/image-plane.jpg',
      madeBy: 'By Wilson Hutton',
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },

    {
      image: '/images/image-confetti.jpg',
      madeBy: 'By Claire Robinson',
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];

  return (
    <Container>
      <Main>
        <TitleComponent
          title="Latest Articles"
        />

        <Grid>
          {articles.map((cert, index) => {
            return (
              <CardArticle
                key={index}
                img={cert.image}
                madeBy={cert.madeBy}
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