import React from "react";
import { PageHeader } from "antd";
import Navbar from "../navbar/Navbar";

import "./Header.scss";

const Header: React.FC = () => (
  <PageHeader
    className="site-page-header"
    title="No React Query"
    subTitle="Demo"
    footer={<Navbar />}
  />
);

export default Header;
