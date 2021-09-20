import styled from "styled-components";
import { H1, B2 } from "styles/system";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  max-width: 1920px;
  justify-content: space-around;
  margin: auto;

  @media screen and (min-width: 2000px) {
    justify-content: center;
    row-gap: 50px;
  }

  @media screen and (max-width: 1800px) {
    padding: 100px 0px;
  }

  @media screen and (max-width: 1600px) {
    padding-top: 13vh;
    padding-bottom: 8vh;
  }
`;

export const Decoration = styled.img<{ position: "top" | "bottom" | string }>`
  position: absolute;
  ${({ position }) => position}: 0;
`;

export const Title = styled.div`
  cursor: pointer;
  overflow: hidden;
  width: 970px;
  height: 154px;

  @media screen and (max-width: 1600px) {
    height: 125px;
    width: 700px;
  }
`;
export const TitleSubWrapper = styled.div``;

export const Description = styled.div`
  display: flex;
  align-items: center;
  width: min(1110px, 50vw);
  @media screen and (max-width: 1600px) {
    height: 125px;
  }
`;

export const Members = styled.div`
  height: 154px;
  display: flex;
  border-radius: 77px;
  border-width: 5px;
  border-style: solid;
  align-items: center;
  column-gap: 50px;

  @media screen and (max-width: 1600px) {
    height: 125px;
  }
`;

export const Member = styled.div<{ url: string }>`
  cursor: pointer;
  background-image: url(${({ url }) => url});
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  position: relative;

  @media screen and (max-width: 1600px) {
    width: 120px;
    height: 120px;
  }
`;

export const Filler = styled.div`
  height: 154px;
  border-radius: 77px;
  background-color: var(--color-neutral);
  position: absolute;

  @media screen and (max-width: 1600px) {
    height: 125px;
  }
`;

export const SpecialFiller = styled.div`
  height: 154px;
  border-radius: 77px;
  background-color: var(--color-neutral);
  position: absolute;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 1600px) {
    height: 125px;
  }
`;

export const Position = styled(B2)`
  padding: 5px 16px;
  background-color: var(--color-text);
  color: var(--color-white);
  opacity: 0;
  position: absolute;
  top: -14px;
  border-radius: 30px;
  transform: translateY(-100%) translateX(-50%);
  transition: all 0.5s ease-in-out;
  width: max-content;
  left: 50%;
`;

export const Marketing = styled.div<{ state: boolean }>`
  display: flex;
  align-self: flex-start;
  height: 154px;
  transition: all 0.8s ease-in-out;
  position: relative;
  transform: ${({ state }) => (state ? "translate(-45%)" : "translate(0)")};

  ${Title} {
    margin-left: 45px;
    padding: 0px 82px;
    background-color: var(--color-green);
    border-radius: 80px;
  }

  ${TitleSubWrapper} {
    width: 100%;
    transition: all 0.8s ease-in-out;
    transform: ${({ state }) => (state ? "translate(100%)" : "translate(0)")};

    ${H1} {
      transition: all 0.8s ease-in-out;
      width: fit-content;
      transform: ${({ state }) =>
        state ? "translate(-100%)" : "translate(0)"};
    }
  }

  ${Description} {
    margin-left: 70px;
    max-height: 154px;
    width: 1100px;
    @media screen and (max-width: 1600px) {
      width: 900px;
    }
  }

  ${Members} {
    margin-left: 120px;
    border-color: var(--color-green);
  }

  ${Member}:hover ${Position} {
    opacity: 1;
  }

  ${Filler} {
    width: 500px;
    left: -430px;
  }
`;

export const Research = styled.div<{ state: boolean }>`
  display: flex;
  align-self: flex-start;
  height: 154px;
  margin-left: 200px;
  transition: all 0.8s ease-in-out;
  position: relative;
  transform: ${({ state }) => (state ? "translate(-36%)" : "translate(0)")};

  ${Title} {
    margin-left: 45px;
    padding: 0px 82px;
    padding-bottom: 8px;
    background-color: var(--color-red);
    border-radius: 80px;
    width: auto;
  }

  ${TitleSubWrapper} {
    width: 100%;
    transition: all 0.8s ease-in-out;
    transform: ${({ state }) => (state ? "translate(100%)" : "translate(0)")};

    ${H1} {
      transition: all 0.8s ease-in-out;
      width: fit-content;
      transform: ${({ state }) =>
        state ? "translate(-100%)" : "translate(0)"};
    }
  }

  ${Description} {
    transition: all 0.8s ease-in-out;
    opacity: ${({ state }) => (state ? "1" : "0")};
    margin-left: 108px;
    max-height: 154px;
  }

  ${Members} {
    margin-left: 120px;
    border-color: var(--color-red);
  }

  ${Member}:hover ${Position} {
    opacity: 1;
  }

  ${Filler} {
    width: 500px;
    left: -430px;
  }

  ${SpecialFiller} {
    width: 515px;
    right: calc(min(1110px, 50vw) - 470px);
    opacity: ${({ state }) => (state ? "0" : "1")};

    @media screen and (max-width: 1800px) {
      right: 400px;
    }

    @media screen and (max-width: 1600px) {
      right: 300px;
    }
  }
`;

export const Creative = styled.div<{ state: boolean }>`
  display: flex;
  align-self: flex-start;
  height: 154px;
  transition: all 0.8s ease-in-out;
  position: relative;
  transform: ${({ state }) => (state ? "translate(-40%)" : "translate(0)")};

  ${Title} {
    width: 1000px;
    margin-left: 45px;
    padding: 0px 82px;
    padding-bottom: 8px;
    background-color: var(--color-blue);
    border-radius: 80px;

    @media screen and (max-width: 1600px) {
      width: 800px;
    }
  }

  ${TitleSubWrapper} {
    width: 100%;
    transition: all 0.8s ease-in-out;
    transform: ${({ state }) => (state ? "translate(100%)" : "translate(0)")};

    ${H1} {
      transition: all 0.8s ease-in-out;
      width: fit-content;
      transform: ${({ state }) =>
        state ? "translate(-100%)" : "translate(0)"};
    }
  }

  ${Description} {
    margin-left: 108px;
    max-height: 154px;

    @media screen and (max-width: 1600px) {
      margin-left: 70px;
    }
  }

  ${Members} {
    margin-left: 50px;
    border-color: var(--color-blue);
  }

  ${Member}:hover ${Position} {
    opacity: 1;
  }

  ${Filler} {
    width: 500px;
    left: -430px;
  }
`;

export const MemberAvatar = styled.img`
  width: auto;
  height: 100%;
`;

export const MemberInfo = styled.div`
  background-color: white;
  margin: 5% 0%;
  border-radius: 0px 50px 50px 0px;
  padding: 35px 70px;
  position: relative;
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;
