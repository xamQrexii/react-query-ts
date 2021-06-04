import React from "react";
import { Skeleton, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

import usePosts from "../../hooks/usePosts";

const Posts: React.FC = () => {
  const { isLoading, data, isError } = usePosts();

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  if (isLoading) {
    return (
      <>
        <Skeleton active={isLoading} paragraph={{ rows: 1 }} />
        <Skeleton active={isLoading} paragraph={{ rows: 1 }} />
        <Skeleton active={isLoading} paragraph={{ rows: 1 }} />
        <Skeleton active={isLoading} paragraph={{ rows: 1 }} />
      </>
    );
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        {data?.posts?.map((post: any) => {
          return (
            <Col span={8} key={post._id}>
              <Card
                title={post.title}
                extra={<Link to={`/posts/${post._id}`}>View more</Link>}
              >
                <p>{post.description}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Posts;
