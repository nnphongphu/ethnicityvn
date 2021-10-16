import { H2, H4, B1 } from "styles/system";
import styled from "styled-components";

export const PatternDetails = () => {
  return (
    <Container>
      <PatternImg src="/samplePattern.png" />
      <DescriptionContainer>
        <H2>KHO 01</H2>
        <B1 style={{ margin: "20px 0px" }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.{" "}
        </B1>
        <ButtonWrapper>
          <Button1>Download</Button1>
          <Button2>Download Pattern Family</Button2>
        </ButtonWrapper>
        <H4 color="blue" style={{ cursor: "pointer" }}>
          + Add to your favourite
        </H4>
      </DescriptionContainer>
    </Container>
  );
};

export default PatternDetails;

const Container = styled.div`
  height: calc(100vh - 140px * 2 + 50px);
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  column-gap: 50px;
  max-width: 1980px;
  margin: auto;
  max-height: 750px;
  min-height: 750px;
`;

const PatternImg = styled.img`
  width: min(525px, 35vw);
  height: min(525px, 35vw);
`;

const DescriptionContainer = styled.div`
  width: min(525px, 45%);
`;
const ButtonWrapper = styled.div`
  display: flex;
  margin: 25px 0px;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
`;

const Button1 = styled(H4)`
  padding: 8px 20px;
  color: white;
  background-color: var(--color-red);
  border-radius: 50px;
  cursor: pointer;
`;

const Button2 = styled(H4)`
  padding: 8px 20px;
  color: var(--color-blue);
  background-color: var(--color-neutral);
  border-radius: 50px;
  cursor: pointer;
`;
