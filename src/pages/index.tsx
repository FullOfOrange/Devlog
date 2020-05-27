import { NextPage, GetStaticProps } from "next";
import axios from "axios";

import * as API from "../common/api";
import { CardGrid, Header } from "../components";
import { Post } from "../types";

const Main: NextPage<{
  posts: Array<Post>;
}> = ({ posts }) => {
  return (
    <>
      <Header />
      <CardGrid posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let req = await axios.get(API.POSTS);
  let posts: Post[] = req.data;
  
  return { props: { posts } };
};

export default Main;
