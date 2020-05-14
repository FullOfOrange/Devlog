import { NextPage } from "next";

import { CardGrid, Header } from "../components";
import { Post } from "../types";

const Home: NextPage<{
  posts: Array<Post>;
}> = ({ posts }) => {
  return (
    <div>
      <Header/>
      <CardGrid posts={posts} />
    </div>
  );
};

// 초기 화면 그릴 때 사용됨, NextPage 에서 받아서 사용함
Home.getInitialProps = async () => {
  const contents = "방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가"

  return {
    posts: [
      {
        id: 0,
        title: "안녕",
        author: "안녕",
        contents,
        createAt: Date.now()
      },
      {
        id: 1,
        title: "안녕",
        author: "안녕",
        contents,
        createAt: Date.now()
      },
      {
        id: 2,
        title: "안녕",
        author: "안녕",
        contents,
        createAt: Date.now()
      },
      {
        id: 3,
        title: "안녕",
        author: "안녕",
        contents,
        createAt: Date.now()
      },
      {
        id: 4,
        title: "안녕",
        author: "안녕",
        contents,
        createAt: Date.now()
      },
      {
        id: 5,
        title: "안녕",
        author: "안녕",
        contents,
        createAt: Date.now()
      },
      {
        id: 6,
        title: "안녕",
        author: "안녕",
        contents,
        createAt: Date.now()
      },
      {
        id: 7,
        title: "안녕",
        author: "안녕",
        contents,
        createAt: Date.now()
      }
    ]
  };
};

export default Home;
