import styled from "styled-components";
import { H3, B1 } from "styles/system";
import { ReactSVG } from "react-svg";

export const Container = styled.div<{ url: string }>`
  background: var(--color-blue);
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: bottom left;
  width: 100vw;
  height: 100vh;
  padding-top: 135px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-width: 1925px;
  margin: auto;
`;

export const Decoration = styled.img<{ position: "top" | "bottom" | string }>`
  position: absolute;
  ${({ position }) => position}: 0;
`;

export const SelectorLine = styled.div`
  height: 2px;
  position: absolute;
  top: 45%;
  width: 100vw;
  max-width: 1920px;
  left: 0;
  background-color: white;
`;

export const Selector = styled.img`
  transform: translateX(-100%);
`;

export const SelectorWrapper = styled.div`
  margin-top: 140px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(120px + 80px + 27px);
`;

export const SelectorSubWrapper = styled.div`
  width: calc(100vw - 240px - 80px * 2 - 27px);
  transition: all 0.2s ease-in-out;
`;

export const NavWrapper = styled.div`
  display: flex;
  margin-top: 45px;
  width: 100vw;
  padding: 0 120px;
  justify-content: space-between;
  overflow: visible;
  max-width: 1920px;
`;

export const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  position: relative;
  cursor: pointer;
`;

export const NavSeperator = styled.img``;

export const ItemIcon = styled(ReactSVG)<{ id: any; current: any }>`
  width: 187px;
  height: 132px;
  transition: all 0.2s ease-in-out;

  & rect {
    transition: all 0.2s ease-in-out;
    fill: ${({ id, current }) => (id == current ? "white" : "transparent")};
  }
`;

export const ItemLabel = styled(H3)`
  color: white;
  position: absolute;
  width: max-content;
  top: 120%;
`;

export const Description = styled(B1)`
  padding: 0 340px;
  margin-top: 155px;
  color: white;
  text-align: center;
`;
