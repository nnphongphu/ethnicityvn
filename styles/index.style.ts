import styled from "styled-components";
import colors from "styles/theme";
import Slider from "@ant-design/react-slick";

export const Container = styled.div`
  background: ${colors.blue};
  background-image: url("/landingPageBg.svg");
  background-size: cover;
  background-position: bottom;
  width: 100vw;
  height: 100vh;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const SlickSlider = styled(Slider)`
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: -1;
`;

export const Logo = styled.img`
  top: 20px;
  left: 100px;
  position: absolute;
`;

export const H1: any = styled.h1`
  font-size: 76pt;
  color: ${({ black }: any) => (black ? "black" : "white")};
  font-weight: bolder;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  font-size: 36pt;
  font-weight: 600;
  padding: 20px 50px;
  border-radius: 150px;
  margin-top: 45px;
`;

export const TextSlider = styled(Slider)`
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const TitleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 125px;
`;
