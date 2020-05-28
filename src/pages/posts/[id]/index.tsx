import { NextPage, GetStaticProps, GetStaticPaths } from "next";

import PostContainer from "../../../containers/PostContainer";
import { Post } from "../../../types";
import { getPost, getPosts } from "../../../api/services";

const Posts: NextPage<{ post: Post }> = ({ post }) => (
  <PostContainer post={post} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const getPostsPath = async (path: string): Promise<string[]> => {
    let posts = await getPosts();
    return posts.map((post) => `${path}/${post.id}`);
  };

  return {
    paths: await getPostsPath("/posts"),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let id = -1;
  if (params && typeof params.id === "string") id = parseInt(params.id);
  let post = await getPost(id);
  return { props: { post } };
};

export default Posts;
