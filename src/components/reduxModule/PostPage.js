import React from "react";
import PostContainer from "./PostContainer";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();

  return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;
