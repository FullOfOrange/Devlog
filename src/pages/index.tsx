import { NextPage, GetStaticProps } from "next";

import MainContainer from "../containers/MainContainer";
import { Post } from "../types";

const Main: NextPage<{
  posts: Array<Post>;
}> = ({ posts }) => {
  return <MainContainer posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  let req = await axios.get(API.POSTS);
  let posts: Post[] = req.data;
  
  return { props: { posts } };
};

export default Main;
