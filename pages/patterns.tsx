import {
  Container,
  Category,
  Item,
  SpecialItem,
  SubContainer,
  FilterWrapper,
  PatternsWrapper,
  OptionContainer,
  CheckBox,
  ColorWrapper,
  PatternWrapper,
  PatternImg,
  FlippedWrapper,
} from "styles/patterns.style";
import Head from "next/head";
import Navbar from "components/Navbar";
import { B2, H3, H4 } from "styles/system";
import { useState } from "react";

export const Option: React.FC<{ label?: string; color?: string }> = ({
  label,
  color,
}) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <OptionContainer>
      <CheckBox active={state} color={color} onClick={() => setState(!state)} />
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

export const Pattern: React.FC<PatternInterface> = ({
  title,
  url,
  preview,
}) => {
  return (
    <PatternWrapper>
      <PatternImg src={url} />
      <H4 style={{ margin: "8px 0px" }}>{title}</H4>
      <B2>{preview}</B2>
    </PatternWrapper>
  );
};

const SamplePattern: PatternInterface = {
  title: "KHO 01",
  url: "/samplePattern.png",
  preview: "A short description about this pattern",
};

export const Patterns: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ethnicity Patterns</title>
        <meta name="description" content="The site is under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar color="black" />
      <Category>
        <Item active={true}>Preserve</Item>
        <Item>Develop</Item>
        <Item>Apply</Item>
        <Item>Illustration</Item>
        <SpecialItem>See Collection</SpecialItem>
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

            <H4 style={{ marginTop: 20, marginBottom: 5 }}>Color</H4>
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
    </>
  );
};

export default Patterns;
