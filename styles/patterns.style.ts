import styled from "styled-components";
import { H4 } from "styles/system";

export const Container = styled.div`
  padding: 0px 120px;
  padding-top: 40px;
  height: calc(100vh - 140px * 2 + 50px);
  display: flex;
  position: relative;
  justify-content: space-between;
  overflow-y: hidden;
  max-width: 1980px;
  margin: auto;
  max-height: 750px;
`;

export const Category = styled.div`
  background-color: var(--color-neutral);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 120px;

  @media screen and (max-width: 1600px) {
    margin-top: 100px;
  }
`;

export const Item = styled(H4)<{ active?: boolean }>`
  margin: 10px 50px;
  border-radius: 50px;
  padding: 10px 23px;
  padding-top: 5px;
  cursor: pointer;
  ${({ active }) =>
    active ? " border: 1px solid; border-color: var(--color-red);" : ""}
`;

export const SpecialItem = styled(H4)`
  position: absolute;
  right: 0;
  color: white;
  background-color: var(--color-red);
  height: 100%;
  padding: 0 23px;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  cursor: pointer;
`;

export const SubContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const FilterWrapper = styled.div`
  width: 15%;
  height: 100%;
  margin-right: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media screen and (min-width: 1900px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 1800px) {
    width: 20%;
  }
`;

export const FlippedWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  direction: rtl;

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: var(--color-neutral);
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: black;
  }
`;

export const PatternsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 60px;
  direction: ltr;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 20px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const CheckBox = styled.div<{ active?: boolean; color?: string }>`
  border-radius: 5px;
  border: 1px ${({ color }) => (color ? `var(--color-${color})` : "black")}
    solid;
  margin-right: 13px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  background-color: ${({ active, color }) => {
    if (color) return `var(--color-${color})`;
    return active ? "black" : "white";
  }};

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 4px;
    left: 4px;
    display: ${({ active }) => (active ? "block" : "none")};
  }
`;

export const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
  row-gap: 10px;
`;

export const PatternWrapper = styled.div`
  margin-bottom: 36px;
`;

export const PatternImg = styled.img`
  width: 250px;
  height: 250px;
`;
