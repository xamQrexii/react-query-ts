import React from "react";
import { Image, Button, Space } from "antd";

import reactQueryLogo from "../../assets/react-query-logo.svg";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        padding: '20px'
      }}
    >
      <Space direction="vertical" size="large" align="center">
        <Image width={250} src={reactQueryLogo} />
        <Button type="default" block>
          <a
            href="https://react-query.tanstack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </Button>
      </Space>
    </div>
  );
};

export default Home;
