import {
  Container,
  Decoration,
  Marketing,
  Title,
  Members,
  Member,
  Description,
  TitleSubWrapper,
  Position,
  Filler,
  Research,
  SpecialFiller,
  Creative,
} from "./Team.style";
import { H1, B1 } from "styles/system";
import { useState } from "react";

interface State {
  marketing: boolean;
  creative: boolean;
  research: boolean;
}

export const TeamSection: React.FC = () => {
  const [state, setState] = useState<State>({
    marketing: false,
    creative: true,
    research: false,
  });

  return (
    <Container>
      <Decoration src="teamDecoration.svg" position="top" />
      <Decoration src="teamDecoration.svg" position="bottom" />
      <H1>Our Team</H1>
      <Marketing state={state.marketing}>
        <Filler />
        <Members>
          <Member url="/member.png">
            <Position>Marketing lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Marketing lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Marketing lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Marketing lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Marketing lead</Position>
          </Member>
        </Members>
        <Title
          onClick={(e) => setState({ ...state, marketing: !state.marketing })}
        >
          <TitleSubWrapper>
            <H1 color="white">Marketing</H1>
          </TitleSubWrapper>
        </Title>
        <Description>
          <B1>
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo dolor in hendrerit
            in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis
          </B1>
        </Description>
      </Marketing>
      <Creative state={state.creative}>
        <Description>
          <B1>
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo dolor in hendrerit
            in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis
          </B1>
        </Description>
        <Title
          onClick={(e) => setState({ ...state, creative: !state.creative })}
        >
          <TitleSubWrapper>
            <H1 color="white">Creative</H1>
          </TitleSubWrapper>
        </Title>
        <Members>
          <Member url="/member.png">
            <Position>Creative lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Creative lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Creative lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Creative lead</Position>
          </Member>
        </Members>
      </Creative>
      <Research state={state.research}>
        <Filler />
        <SpecialFiller />
        <Members>
          <Member url="/member.png">
            <Position>Research lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Research lead</Position>
          </Member>
          <Member url="/member.png">
            <Position>Research lead</Position>
          </Member>
        </Members>
        <Title
          onClick={(e) => setState({ ...state, research: !state.research })}
        >
          <TitleSubWrapper>
            <H1 color="white">Research</H1>
          </TitleSubWrapper>
        </Title>
        <Description>
          <B1>
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo dolor in hendrerit
            in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis
          </B1>
        </Description>
      </Research>
    </Container>
  );
};

export default TeamSection;
