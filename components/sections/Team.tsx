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
  MemberAvatar,
  MemberInfo,
  CloseButton,
} from "./Team.style";
import { H1, H2, B1 } from "styles/system";
import { useState } from "react";
import ReactModal from "react-modal";

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

  const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <Container>
      <Decoration src="teamDecoration.svg" position="top" />
      <Decoration src="teamDecoration.svg" position="bottom" />
      <H1>Our Team</H1>
      <Marketing state={state.marketing}>
        <Filler />
        <Members>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Marketing lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Marketing lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Marketing lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Marketing lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
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
          </B1>
        </Description>
      </Marketing>
      <Creative state={state.creative}>
        <Description>
          <B1>
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut.
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
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Creative lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Creative lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Creative lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Creative lead</Position>
          </Member>
        </Members>
      </Creative>
      <Research state={state.research}>
        <Filler />
        <SpecialFiller />
        <Members>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Research lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <Position>Research lead</Position>
          </Member>
          <Member
            url="/member.png"
            onClick={() => setToggleModal(!toggleModal)}
          >
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
            suscipit lobortis nisl ut.
          </B1>
        </Description>
      </Research>
      <ReactModal
        isOpen={toggleModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "min(1391px, 80vw)",
            height: "min(700px, 80vh)",
            margin: "auto",
            display: "flex",
            overflow: "none",
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "none",
          },
        }}
      >
        <MemberAvatar src="/avatar.png" />
        <MemberInfo>
          <CloseButton
            src="/closeButton.svg"
            onClick={() => setToggleModal(!toggleModal)}
          />
          <H2>Bùi Nguyễn Anh Hào</H2>
          <B1>Marketing Executive</B1>
          <B1 style={{ marginTop: "30px" }}>
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut.
          </B1>
        </MemberInfo>
      </ReactModal>
    </Container>
  );
};

export default TeamSection;
