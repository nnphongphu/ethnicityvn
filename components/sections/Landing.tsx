import styled from "styled-components";
import Slider from "react-slick";
import { H1, H4 } from "styles/system";

export const LandingSection: React.FC = () => {
  return (
    <Container url="/landingPageBg.png">
      <Pattern width={915} height={764} src="/pattern.png" />
      <TextSlider
        vertical
        arrows={false}
        autoplay={true}
        draggable={false}
        pauseOnHover={false}
      >
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

const Container = styled.div<{ url: string }>`
  background: var(--color-blue);
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: bottom left;
  width: 100vw;
  height: 100vh;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  max-width: 1920px;
  margin: auto;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 10px 45px 16px 45px;
  border-radius: 150px;
  margin-top: 32px;
  display: flex;
  cursor: pointer;
`;

const TextSlider = styled(Slider)`
  width: 100vw;
  height: 120px;
  overflow: hidden;
`;

const Pattern = styled.img`
  position: absolute;
  height: 68vh;
  width: auto;
  right: 82px;
`;
