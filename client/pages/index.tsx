import { NextPage } from "next";

import { Card } from "../components";
import { Post } from "../types";

interface initPosts {
  posts: Array<Post>;
}

const Home: NextPage<initPosts> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

// 초기 화면 그릴 때 사용됨, NextPage 에서 받아서 사용함
Home.getInitialProps = async () => {
  return {
    posts: [
      {
        id: 0,
        title: "안녕",
        author: "안녕",
        contents: "방가방가",
        createAt: Date.now()
      },
      {
        id: 1,
        title: "안녕",
        author: "안녕",
        contents: "방가방가",
        createAt: Date.now()
      }
    ]
  };
};

export default Home;
