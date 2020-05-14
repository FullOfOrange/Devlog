import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import axios from "axios";

import * as API from "../../../common/api";
import { Post } from "../../../types";
import PostContainer from "../../../containers/PostContainer";

const Posts: NextPage<{ post: Post }> = ({ post }) => {
  return <>{post ? <PostContainer post={post} /> : <p>not found</p>}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
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

const getPostsPath = async (path: string): Promise<string[]> => {
  let req = await axios.get(API.POSTS);
  let posts: Post[] = req.data;
  return posts.map((post) => `${path}/${post.id}`);
};

const getPost = async (id: number): Promise<Post | Object> => {
  let req = await axios.get(API.POST(id));
  return req.data;
};

export default Posts;
