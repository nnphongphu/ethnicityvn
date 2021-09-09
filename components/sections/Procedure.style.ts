import styled from "styled-components";
import { H3, B1 } from "styles/system";
import { ReactSVG } from "react-svg";

export const Container = styled.div<{ url: string }>`
  background: var(--color-blue);
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: bottom left;
  width: 101vw;
  height: 100vh;
  margin-left: -1px;
  margin-top: -1px;
  padding-top: 6%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
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
  left: 0;
  background-color: white;
`;

export const Selector = styled.img`
  transform: translateX(-100%);
`;

export const SelectorWrapper = styled.div`
  margin-top: 10vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: calc(8vw + 116px);
`;

export const SelectorSubWrapper = styled.div`
  width: calc(84vw - 160px - 26px);
  transition: all 0.2s ease-in-out;
`;

export const NavWrapper = styled.div`
  display: flex;
  margin-top: 45px;
  width: 100vw;
  padding: 0 8vw;
  justify-content: space-between;
  overflow: visible;
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
  top: 100%;
`;

export const Description = styled(B1)`
  padding: 0 8vw;
  margin-top: 15vh;
  color: white;
  text-align: center;
`;
