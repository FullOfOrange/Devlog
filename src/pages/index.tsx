import { NextPage, GetStaticProps } from "next";

import MainContainer from "../containers/MainContainer";
import { Post } from "../types";
import { getPosts } from "../api/services";

const Main: NextPage<{
  posts: Array<Post>;
}> = ({ posts }) => {
  return <MainContainer posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  let posts = await getPosts();
  return { props: { posts } };
};

export default Main;
