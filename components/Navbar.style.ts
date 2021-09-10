import styled from "styled-components";

export const List = styled.li`
  position: absolute;
  width: 100%;
  padding-right: 120px;
  top: 50px;
  display: flex;
  justify-content: flex-end;
  z-index: 0;
  max-width: 1920px;
  left: 50%;
  transform: translate(-50%);
`;

export const Item = styled.ul`
  margin-right: 100px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
