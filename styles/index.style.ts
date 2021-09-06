import styled from "styled-components";
import Slider from "react-slick";
import { H2, H4 } from "styles/system";
import { ReactSVG } from "react-svg";
import { colorName } from "lib/types";

export const Container = styled.div`
  background: var(--color-blue);
  background-image: url("/landingPageBg.png");
  background-size: cover;
  background-position: bottom left;
  width: 101vw;
  height: 100vh;
  padding-left: 100px;
  margin-left: -1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SlickSlider = styled(Slider)`
  position: absolute;
  z-index: -1;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  padding: 10px 45px 16px 45px;
  border-radius: 150px;
  margin-top: 32px;
  display: flex;
  cursor: pointer;
`;

export const TextSlider = styled(Slider)`
  width: 100vw;
  height: 120px;
  overflow: hidden;
`;

export const WorkContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Pattern = styled.img`
  position: absolute;
  height: 68vh;
  right: 82px;
`;

export const Decoration = styled.img<{ position: "top" | "bottom" | string }>`
  position: absolute;
  ${({ position }) => position}: 0;
`;

export const WorkSectionWrapper = styled.div`
  margin-top: 70px;
  position: relative;
`;

export const WorkButtonDecoration = styled.img``;

export const WorkButton = styled(ReactSVG)`
  & rect {
    transition: all 0.2s ease-in-out;
  }
`;

export const WorkButtonWrapper = styled.div<{ color: colorName }>`
  cursor: pointer;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  &:hover ${WorkButton} rect {
    fill: var(--color-${({ color }) => color});
  }
`;

export const WorkButtonLabel = styled(H4)<{ color: colorName }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-${({ color }) => color});
`;

export const WorkSectionSubWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  padding: 0 12%;
  justify-content: space-between;
`;

export const WorkSliderWrapper = styled.div`
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

export const WorkSliderButton = styled.img<{ type: "prev" | "next" | string }>`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ type }) => (type == "prev" ? "left" : "right")}: 45px;
`;

export const SlideContainer = styled.div`
  width: 1684px;
  height: 318px;
  position: relative;
`;

export const SlideThumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export const SlideTitle = styled(H2)`
  max-width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 23px;
  color: white;
`;
