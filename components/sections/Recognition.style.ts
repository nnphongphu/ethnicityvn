import styled from "styled-components";
import { H3, B1 } from "styles/system";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-left: -1px;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const Decoration = styled.img`
  position: absolute;
  top: 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 150px;
  margin-top: 6vh;
  margin-bottom: 110px;
  display: flex;
`;

export const HighlightWrapper = styled.div`
  max-width: 650px;
  height: fit-content;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-red);
  padding: 50px;
  position: relative;
`;

export const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 125px solid white;
  border-right: 125px solid transparent;
  position: absolute;
  top: -5px;
  left: -5px;
`;

export const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-bottom: 125px solid white;
  border-left: 125px solid transparent;
  position: absolute;
  bottom: -5px;
  right: -5px;
`;

export const CornerDecorationLeft = styled.img`
  position: absolute;
  top: -50px;
  left: -50px;
`;

export const CornerDecorationRight = styled.img`
  position: absolute;
  bottom: -50px;
  right: -50px;
  transform: rotate(180deg);
`;

export const HighlightTitle = styled(H3)``;

export const HighlightContent = styled(B1)`
  margin-top: 20px;
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 158px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Logo = styled.img``;

export const Footer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding: 25px 0;
  background-color: var(--color-red);
`;
