import { NextPage } from "next";
import styled from "styled-components"

import { Post } from '../../types'

const Posts: NextPage<{ props: { post: Post | undefined } }> = ({ props: { post } }) => {
  return <>
    {post}
  </>;
};

const getPost = (id: number): Promise<Post | undefined> =>
  new Promise((resolve, reject) => {
    let post = undefined;
    if (id === -1 || id >= posts.length) {
      post = posts[id];
    }
    resolve(post);
  });

Posts.getInitialProps = async ({ query }) => {
  let id = -1;
  if (query && typeof query.id === "string") id = parseInt(query.id);

  let post = await getPost(id);
  return { props: { post } };
};

const contents =
  "방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가";
const posts = [
  {
    id: 0,
    title: "안녕",
    author: "안녕",
    contents,
    createAt: Date.now(),
  },
  {
    id: 1,
    title: "안녕",
    author: "안녕",
    contents,
    createAt: Date.now(),
  },
  {
    id: 2,
    title: "안녕",
    author: "안녕",
    contents,
    createAt: Date.now(),
  },
  {
    id: 3,
    title: "안녕",
    author: "안녕",
    contents,
    createAt: Date.now(),
  },
  {
    id: 4,
    title: "안녕",
    author: "안녕",
    contents,
    createAt: Date.now(),
  },
  {
    id: 5,
    title: "안녕",
    author: "안녕",
    contents,
    createAt: Date.now(),
  },
  {
    id: 6,
    title: "안녕",
    author: "안녕",
    contents,
    createAt: Date.now(),
  },
  {
    id: 7,
    title: "안녕",
    author: "안녕",
    contents,
    createAt: Date.now(),
  },
];
export default Post;
