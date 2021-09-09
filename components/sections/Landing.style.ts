import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div<{ url: string }>`
  background: var(--color-blue);
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: bottom left;
  width: 100vw;
  height: 100vh;
  padding-left: 100px;
  margin-left: -1px;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
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

export const Pattern = styled.img`
  position: absolute;
  height: 68vh;
  width: auto;
  right: 82px;
`;
