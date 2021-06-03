import React from "react";
import { Image, Button, Space } from "antd";

import reactQueryLogo from "../../assets/react-query-logo.svg";

const Home: React.FC = () => {
  return (
    <Space direction="vertical" size="large" align="center">
      <Image width={250} src={reactQueryLogo} preview={false} />
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
  );
};

export default Home;
