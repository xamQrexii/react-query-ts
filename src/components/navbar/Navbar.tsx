import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1">
      Home
      <Link to="/" />
    </Menu.Item>
    <Menu.Item key="2">
      Posts
      <Link to="/posts" />
    </Menu.Item>
    <Menu.Item key="3">
      Create Post
      <Link to="/create-post" />
    </Menu.Item>
  </Menu>
);

export default Navbar;
