import {
  Container,
  CoverContainer,
  Title,
  Description,
  SubContainer,
  Button,
  PatternsWrapper,
  DownloadButton,
} from "./Collection.style";
import Pattern from "components/Pattern";

interface PatternInterface {
  title: string;
  preview: string;
  url: string;
  description?: string;
}

const SamplePattern: PatternInterface = {
  title: "KHO 01",
  url: "/samplePattern.png",
  preview: "A short description about this pattern",
};

export const Collection: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Container>
      <CoverContainer url="/collectionCover.png">
        <Title>{title}</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          modo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate
        </Description>
      </CoverContainer>
      <SubContainer>
        <Button>See patterns</Button>
        <PatternsWrapper>
          <Pattern {...SamplePattern} />
          <Pattern {...SamplePattern} />
          <Pattern {...SamplePattern} />
          <Pattern {...SamplePattern} />
          <Pattern {...SamplePattern} />
          <Pattern {...SamplePattern} />
        </PatternsWrapper>
        <DownloadButton>Download Collection</DownloadButton>
      </SubContainer>
    </Container>
  );
};

export default Collection;
