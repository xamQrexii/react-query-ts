import React from "react";
import { Skeleton, Card, Row, Col, notification, Result, Button } from "antd";
import { Link } from "react-router-dom";

import usePosts from "../../hooks/usePosts";

const Posts: React.FC = () => {
  const { isLoading, data, isError, error } = usePosts();

  React.useEffect(() => {
    if (isError) {
      notification.error({
        message: "Something went wrong",
        description: error.message,
      });
    }
  }, [isError, error]);

  if (isError) {
    return (
      <Result
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary">
            <Link to="/">Back Home</Link>
          </Button>
        }
      />
    );
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
