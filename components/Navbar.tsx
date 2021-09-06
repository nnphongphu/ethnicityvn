import React from "react";
import { List, Item } from "./Navbar.style";
import { H4 } from "styles/system";
import { colorName } from "lib/types";

interface Props {
  color?: colorName;
}

const Navbar: React.FC<Props> = ({ color }) => {
  return (
    <List>
      <Item>
        <H4 color={color}>Home</H4>
      </Item>
      <Item>
        <H4 color={color}>Library</H4>
      </Item>
      <Item>
        <H4 color={color}>Discover</H4>
      </Item>
      <Item>
        <H4 color={color}>Store</H4>
      </Item>
      <Item>
        <H4 color={color}>Contact us</H4>
      </Item>
    </List>
  );
};

export default Navbar;
