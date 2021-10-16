import styled from "styled-components";
import { H4 } from "styles/system";
import useToggle from "utils/hooks/useToggle";
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
    "A short description about this pattern. A short description about this pattern",
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <>
      <Container isOpen={isOpen}>
        <SubContainer isOpen={isOpen}>
          <ToggleButton onClick={setIsOpen as any}>My favourite</ToggleButton>
          <Tab>
            <Grid>
              <ShortenedPattern {...SamplePattern} />
              <ShortenedPattern {...SamplePattern} />
              <ShortenedPattern {...SamplePattern} />
              <ShortenedPattern {...SamplePattern} />
              <ShortenedPattern {...SamplePattern} />
              <ShortenedPattern {...SamplePattern} />
              <ShortenedPattern {...SamplePattern} />
              <ShortenedPattern {...SamplePattern} />
            </Grid>
            <Button>Download All</Button>
          </Tab>
        </SubContainer>
      </Container>
      <Overlay isOpen={isOpen} />
    </>
  );
};

export const ShortenedPattern: React.FC<PatternInterface> = ({
  title,
  url,
}) => {
  return (
    <div>
      <Link href="/patterns/1" passHref>
        <a>
          <PatternImg src={url} />
          <H4 style={{ margin: "8px 0px", height: 30 }}>{title}</H4>
        </a>
      </Link>
    </div>
  );
};

const PatternImg = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  z-index: 99;
  top: 0;
  ${({ isOpen }) =>
    isOpen
      ? "background-color: rgba(0, 0, 0, 0.5);"
      : "background-color: rgba(0, 0, 0, 0);"}
  transition: all 0.5s ease-in-out;
  pointer-events: none;
`;

const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${({ isOpen }) => (isOpen ? "pointer-events: all;" : "pointer-events: none;")}
`;

const SubContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 100;
  ${({ isOpen }) =>
    isOpen ? "right: 0px;" : "right: calc(50px - min(750px, 50vw + 50px));"}
  bottom: 0;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  pointer-events: all;
`;

const ToggleButton = styled(H4)`
  width: 50px;
  height: fit-content;
  background-color: var(--color-red);
  color: white;
  padding: 15px;
  padding-right: 5px;
  border-radius: 0px 15px 15px 0px;
  writing-mode: vertical-rl;
  transform: scale(-1);
  cursor: pointer;
`;

const Tab = styled.div`
  padding: 40px;
  width: min(700px, 50vw);
  height: min(877px, 80vh);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled(H4)`
  width: fit-content;
  background-color: var(--color-red);
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
`;

const Grid = styled.div`
  width: 100%;
  height: 90%;
  padding-right: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 15px;
  overflow: auto;

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: var(--color-neutral);
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: black;
  }
`;

export default Sidebar;
