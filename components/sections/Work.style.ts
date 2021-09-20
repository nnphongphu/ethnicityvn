import styled from "styled-components";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import { H2, H4 } from "styles/system";
import Slider from "react-slick";
import { colorName } from "lib/types";

export const Container = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-position: bottom center;
  background-size: auto 100%;
  width: 100vw;
  height: 100vh;
  padding: 130px 0px;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
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

export const Decoration = styled.div<{ position: "top" | "bottom" | string }>`
  position: absolute;
  ${({ position }) => position}: 0;
`;

export const NavWrapper = styled.div`
  position: relative;
  width: min(1683px, 100vw - 120px);
  height: min(229px, auto);
`;

export const ButtonDecoration = styled(ReactSVG)`
  & svg {
    width: min(1683px, 100vw - 120px);
    height: min(229px, auto);
  }
`;

export const Button = styled(ReactSVG)`
  & svg {
    width: min(398px, (100vw - 120px) * 0.24);
    height: min(229, auto);
  }

  & rect {
    transition: fill 0.2s ease-in-out;
  }
`;

export const ButtonWrapper = styled.div<{ color: colorName }>`
  cursor: pointer;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  &:hover ${Button} rect {
    fill: var(--color-${({ color }) => color});
  }
`;

export const ButtonLabel = styled(H4)<{ color: colorName }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-${({ color }) => color});
`;

export const NavSubWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  padding: 0 12%;
  justify-content: space-between;
`;

export const SliderWrapper = styled.div`
  width: min(1684px, 100vw - 120px);
  height: min(318px, 30vh);
  border-radius: 50px;
  display: block;
  overflow: hidden;
  position: relative;
`;

export const WorkSlider = styled(Slider)`
  display: block;
`;

export const SliderButton = styled.img<{ type: "prev" | "next" | string }>`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ type }) => (type == "prev" ? "left" : "right")}: 45px;
`;

export const SlideWrapper = styled.div`
  width: min(1684px, 100vw - 120px);
  height: min(318px, 30vh);
  position: relative;
`;

export const SlideThumbnail = styled(Image)``;

export const SlideTitle = styled(H2)`
  max-width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  color: white;
`;
