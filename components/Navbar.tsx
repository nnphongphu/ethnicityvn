import React from "react";
import styled from "styled-components";
import { H4 } from "styles/system";
import { colorName } from "lib/types";
import Link from "next/link";

interface Props {
  color?: colorName;
  whiteLogo?: boolean;
}

const Navbar: React.FC<Props> = ({ color, whiteLogo }) => {
  return (
    <List>
      <Link href="/" passHref>
        <a>
          <Logo
            url={
              color == "white" || whiteLogo ? "/logo-white.png" : "/logo.png"
            }
          />
        </a>
      </Link>
      <SubList>
        <Link href="/" passHref>
          <Item>
            <H4 color={color}>Home</H4>
          </Item>
        </Link>
        <Link href="/library" passHref>
          <Item>
            <H4 color={color}>Library</H4>
          </Item>
        </Link>
        <Link href="/" passHref>
          <Item>
            <H4 color={color}>Discover</H4>
          </Item>
        </Link>
        <Link href="/" passHref>
          <Item>
            <H4 color={color}>Store</H4>
          </Item>
        </Link>
        <Link href="/" passHref>
          <Item>
            <H4 color={color}>Contact us</H4>
          </Item>
        </Link>
      </SubList>
    </List>
  );
};

export default Navbar;

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
