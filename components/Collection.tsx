import styled from "styled-components";
import { H1, H4, B1 } from "styles/system";
import Pattern from "components/Pattern";
import Link from "next/link";

interface PatternInterface {
  title: string;
  preview: string;
  url: string;
  description?: string;
}

const SamplePattern: PatternInterface = {
  title: "KHO 01",
  url: "/samplePattern.png",
  preview:
    "A short description about this pattern. A short description about this pattern.",
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
        <Link href="/patterns" passHref>
          <a>
            <Button>See patterns</Button>
          </a>
        </Link>
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

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  max-width: 1920px;
  margin: auto;
`;

export const CoverContainer = styled.div<{ url: string }>`
  height: 100vh;
  width: min(600px, 35%);
  max-height: 1080px;
  display: flex;
  align-items: flex-end;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ url }) => url});
`;

export const Title = styled(H1)`
  color: white;
  height: max-content;
  position: absolute;
  transform: scale(-1, -1) translateY(50%);
  writing-mode: vertical-rl;
  right: -25px;
  top: 50%;
`;

export const Description = styled(B1)`
  color: white;
  margin-left: 50px;
  font-size: 18px;
  line-height: 20px;
  margin-right: 100px;
  margin-bottom: 60px;
  text-align: center;
`;

export const SubContainer = styled.div`
  width: 100%;
  padding-top: 120px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(/collectionBg.png);
  background-size: 100% 954px;
  max-height: 1080px;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media screen and (max-width: 1600px) {
    padding-top: 100px;
  }
`;

export const Button = styled(H4)`
  position: absolute;
  right: 0;
  top: 120px;
  cursor: pointer;
  color: white;
  width: 250px;
  height: min(77px, 10vh);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue);
`;

export const PatternsWrapper = styled.div`
  width: 100%;
  padding: 0 250px;
  margin-top: min(77px, 10vh);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 20px;
  height: min(800px, 70vh);
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const DownloadButton = styled(H4)`
  margin: 20px 0px;
  color: white;
  background-color: var(--color-blue);
  padding: 8px 25px;
  border-radius: 25px;
  width: fit-content;
`;
