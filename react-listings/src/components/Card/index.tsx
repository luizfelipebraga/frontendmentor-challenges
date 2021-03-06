import {
  Container,
  WrapUserBox,
  Image,
  InfoUser,
  StackUserBox,
  Header,
  Role,
  Footer,
  BoxNewFeatured,
} from "./styles";

type CardProps = {
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export function CardComponent({ ...props }: CardProps) {  
  return (
    <Container isFeaturedOrNew={props.new && props.featured}>
      <WrapUserBox>
        <Image src={props.logo} alt="image" />
        <InfoUser>
          <Header>
            <span>{props.company}</span>

            {props.new && (
              <BoxNewFeatured>
                <span>new!</span>
              </BoxNewFeatured>
            )}

            {props.featured && (
              <BoxNewFeatured>
                <span>featured</span>
              </BoxNewFeatured>
            )}
          </Header>

          <Role>{props.position}</Role>

          <Footer>
            <span>{props.postedAt}</span>
            <span>{props.contract}</span>
            <span>{props.location}</span>
          </Footer>
        </InfoUser>
      </WrapUserBox>

      <StackUserBox>
        <span>{props.role}</span>
        <span>{props.level}</span>
        {props.languages.map((lang, index) => (
          <span key={index}>{lang}</span>
        ))}
        {props.tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </StackUserBox>
    </Container>
  );
}
