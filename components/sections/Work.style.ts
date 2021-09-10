import styled from "styled-components";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import { H2, H4 } from "styles/system";
import Slider from "react-slick";
import { colorName } from "lib/types";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Decoration = styled.img<{ position: "top" | "bottom" | string }>`
  position: absolute;
  ${({ position }) => position}: 0;
`;

export const NavWrapper = styled.div`
  margin-top: 70px;
  position: relative;
`;

export const ButtonDecoration = styled.img`
  width: 1683px;
  height: 229px;
`;

export const Button = styled(ReactSVG)`
  width: 398px;
  height: 229px;
  & rect {
    transition: all 0.2s ease-in-out;
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
  width: 1684px;
  height: 318px;
  margin-top: 30px;
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
  width: 1684px;
  height: 318px;
  position: relative;
`;

export const SlideThumbnail = styled(Image)``;

export const SlideTitle = styled(H2)`
  max-width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 23px;
  color: white;
`;
