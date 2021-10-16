import Head from "next/head";
import Navbar from "components/Navbar";
import { H3, H4 } from "styles/system";
import { useState } from "react";
import Pattern from "components/Pattern";
import styled from "styled-components";
import Link from "next/link";
import Sidebar from "components/Sidebar";
import PatternModal from "components/PatternModal";

export const Option: React.FC<{ label?: string; color?: string }> = ({
  label,
  color,
}) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <OptionContainer onClick={() => setState(!state)}>
      <CheckBox active={state} color={color} />
      {label && <H4>{label}</H4>}
    </OptionContainer>
  );
};

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

export const Patterns: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ethnicity Patterns</title>
        <meta name="description" content="The site is under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Navbar color="black" />
      <Category>
        <Item active={true}>Preserve</Item>
        <Item>Develop</Item>
        <Item>Apply</Item>
        <Item>Illustration</Item>
        <Link href="/collections" passHref>
          <a>
            <SpecialItem>See Collection</SpecialItem>
          </a>
        </Link>
      </Category>
      <Container>
        <SubContainer>
          <FilterWrapper>
            <H3>Filter</H3>
            <H4 style={{ marginTop: 20, marginBottom: 5 }}>Ethnics</H4>
            <Option label="K'ho" />
            <Option label="Ma" />
            <Option label="Cham" />
            <Option label="Muong" />
            <Option label="Pa Then" />

            <H4 style={{ marginTop: 20, marginBottom: 13 }}>Color</H4>
            <ColorWrapper>
              <Option color="black" />
              <Option color="red" />
              <Option color="yellow" />
              <Option color="yellow-v2" />
              <Option color="green-v2" />
              <Option color="green" />
              <Option color="purple" />
              <Option color="purple-v2" />
            </ColorWrapper>
            <H4 style={{ marginTop: 20, marginBottom: 5 }}>Collections</H4>
            <Option label="Nature of Ma" />
            <Option label="Lively the lives" />
            <Option label="In the Wild" />
          </FilterWrapper>
          <Line />
          <FlippedWrapper>
            <PatternsWrapper>
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
              <Pattern {...SamplePattern} />
            </PatternsWrapper>
          </FlippedWrapper>
        </SubContainer>
      </Container>
      <PatternModal />
    </>
  );
};

export default Patterns;

const Container = styled.div`
  padding: 0px 120px;
  padding-top: 40px;
  height: calc(100vh - 140px * 2 + 50px);
  display: flex;
  position: relative;
  justify-content: space-between;
  overflow-y: hidden;
  max-width: 1920px;
  margin: auto;
  max-height: 750px;
`;

const Category = styled.div`
  background-color: var(--color-neutral);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1980px;
  margin: auto;
  margin-top: 120px;

  @media screen and (max-width: 1600px) {
    margin-top: 100px;
  }
`;

const Item = styled(H4)<{ active?: boolean }>`
  margin: 10px 50px;
  border-radius: 50px;
  padding: 10px 23px;
  padding-top: 5px;
  cursor: pointer;
  ${({ active }) =>
    active ? " border: 1px solid; border-color: var(--color-red);" : ""}
`;

const SpecialItem = styled(H4)`
  position: absolute;
  right: 0;
  color: white;
  background-color: var(--color-red);
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  cursor: pointer;
`;

const SubContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const FilterWrapper = styled.div`
  width: 15%;
  height: 100%;
  margin-right: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media screen and (min-width: 1900px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 1800px) {
    width: 20%;
  }
`;

const FlippedWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

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

const PatternsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;

  @media screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: baseline;
  cursor: pointer;
`;

const CheckBox = styled.div<{ active?: boolean; color?: string }>`
  border-radius: 5px;
  border: 1px ${({ color }) => (color ? `var(--color-${color})` : "black")}
    solid;
  margin-right: 13px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  background-color: ${({ active, color }) => {
    if (color) return `var(--color-${color})`;
    return active ? "black" : "white";
  }};

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 4px;
    left: 4px;
    display: ${({ active }) => (active ? "block" : "none")};
  }
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
  row-gap: 10px;
`;

const Line = styled.div`
  width: 2px;
  height: 100%;
  margin-right: 50px;
  background-color: black;
`;
