import styled from "styled-components";

export const List = styled.li`
  position: absolute;
  width: 100%;
  padding-right: 120px;
  top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;

  @media screen and (max-width: 1600px) {
    top: 15px;
  }
`;

export const Item = styled.a`
  margin-right: 100px;
  cursor: pointer;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`;

export const Logo = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-origin: content-box;
  margin-left: 120px;
  height: 69px;
  width: 269px;
  transition: background-image 0.8s ease-in-out;
  z-index: 2;
`;

export const SubList = styled.div`
  display: flex;
`;
