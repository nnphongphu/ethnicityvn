import styled from "styled-components";
import { H3, B1 } from "styles/system";
import { ReactSVG } from "react-svg";

export const Container = styled.div<{ url: string }>`
  background: var(--color-blue);
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: top left;
  width: 100vw;
  height: 100vh;
  padding: 135px 0px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1925px;
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
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(120px + 80px + 27px);
  max-width: 1920px;
  margin-top: 100px;

  @media screen and (max-width: 1600px) {
    margin-top: 20px;
  }
`;

export const SelectorSubWrapper = styled.div`
  width: calc(100vw - 240px - 80px * 2 - 27px);
  max-width: calc(1920px - 240px - 80px * 2 - 27px);
  transition: all 0.2s ease-in-out;
`;

export const NavWrapper = styled.div`
  display: flex;
  margin-top: 30px;
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
  width: min(1500px, 100vw - 120px);
  height: min(500px, 25vh);
  margin-top: 150px;
  color: white;
  text-align: center;

  @media screen and (max-width: 1600px) {
    margin-top: 150px;
  }
`;
