import React from "react";
import { List, Item } from "./Navbar.style";

const Navbar = () => {
  return (
    <List>
      <Item>Home</Item>
      <Item>Library</Item>
      <Item>Discover</Item>
      <Item>Store</Item>
      <Item>Contact Us</Item>
    </List>
  );
};

export default Navbar;
