import { NextPage } from "next";
import Card from "../components/Card";
import {Post} from "../types"

interface initPosts {
  posts: Array<Post>;
}

const Home: NextPage<initPosts> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => {
        return (
          <Card
            post={post}
          />
        );
      })}
    </div>
  );
};

// 초기 화면 그릴 때 사용됨, NextPage 에서 받아서 사용함
Home.getInitialProps = async () => {
  return {
    posts: [
      {
        title: "안녕",
        author: "안녕",
        contents: "방가방가"
      },
      {
        title: "안녕",
        author: "안녕",
        contents: "방가방가"
      }
    ]
  };
};

export default Home;
