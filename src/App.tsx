import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import CreatePost from "./screens/create-post/CreatePost";
import Home from "./screens/home/Home";
import Post from "./screens/posts/Post";
import Posts from "./screens/posts/Posts";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "86vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
