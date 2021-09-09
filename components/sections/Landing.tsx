import { Container, Pattern, TextSlider, Button } from "./Landing.style";
import { H1, H4 } from "styles/system";

export const LandingSection: React.FC = () => {
  return (
    <Container url="/landingPageBg.png">
      <Pattern width={915} height={764} src="/pattern.png" />
      <TextSlider vertical arrows={false} autoplay={true} draggable={false}>
        <H1 color="white">Cultural inheritance</H1>
        <H1 color="white">Creative interference</H1>
      </TextSlider>
      <Button>
        <H4>Pattern Library</H4>
      </Button>
    </Container>
  );
};

export default LandingSection;
