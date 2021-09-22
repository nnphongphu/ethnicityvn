import React from "react";
import { List, Item, Logo, SubList } from "./Navbar.style";
import { H4 } from "styles/system";
import { colorName } from "lib/types";
import Link from "next/link";

interface Props {
  color?: colorName;
}

const Navbar: React.FC<Props> = ({ color }) => {
  return (
    <List onClick={() => console.log("hi")}>
      <Link href="/" passHref>
        <a>
          <Logo url={color == "white" ? "/logo-white.png" : "/logo.png"} />
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
