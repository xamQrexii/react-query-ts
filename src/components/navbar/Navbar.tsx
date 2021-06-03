import React from "react";
import { Menu } from "antd";

const Navbar: React.FC = () => (
  <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1">Home</Menu.Item>
    <Menu.Item key="2">Posts</Menu.Item>
    <Menu.Item key="3">Create Post</Menu.Item>
  </Menu>
);

export default Navbar;
