import styled from "styled-components";
import { H4 } from "styles/system";

export const Container = styled.div`
  padding: 0px 120px;
  padding-top: 40px;
  height: calc(100vh - 140px * 2 + 50px);
  display: flex;
  position: relative;
  justify-content: center;
  column-gap: 50px;
  max-width: 1980px;
  margin: auto;
  max-height: 750px;
  min-height: 750px;
`;

export const PatternImg = styled.img`
  width: min(525px, 35vw);
  height: min(525px, 35vw);
`;

export const DescriptionContainer = styled.div`
  width: min(525px, 45%);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin: 25px 0px;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
`;

export const Button1 = styled(H4)`
  padding: 8px 20px;
  color: white;
  background-color: var(--color-red);
  border-radius: 50px;
  cursor: pointer;
`;

export const Button2 = styled(H4)`
  padding: 8px 20px;
  color: var(--color-blue);
  background-color: var(--color-neutral);
  border-radius: 50px;
  cursor: pointer;
`;
