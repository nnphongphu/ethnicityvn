import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-red);
  z-index: -1;
  margin: auto;
`;

export const SubContainer = styled.div`
  padding: 70px 120px;
  padding-top: 140px;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const Box = styled.div`
  border-width: 2px;
  border-color: white;
  border-style: solid;
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }
`;
