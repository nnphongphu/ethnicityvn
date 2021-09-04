import styled from "styled-components";

export const List = styled.li`
  position: absolute;
  width: 100%;
  padding-right: 120px;
  top: 50px;
  display: flex;
  justify-content: flex-end;
  z-index: 0;
`;

export const Item = styled.ul`
  color: white;
  margin-right: 100px;
  font-size: x-large;
  font-weight: bolder;

  &:last-child {
    margin-right: 0;
  }
`;
