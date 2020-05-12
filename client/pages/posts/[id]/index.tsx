import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import axios from "axios";

import PostContents from "../../../components/PostContents";

const Posts: NextPage<{ post: string }> = ({ post }) => {
  return (
    <>
      {post ? (
        <div>
          <PostContents contents={post}></PostContents>
        </div>
      ) : (
        <p>not found</p>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/posts/0"],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let id = -1;
  if (params && typeof params.id === "string") id = parseInt(params.id);
  let post = await getPost(id);
  return { props: { post } };
};

const getPost = async (id: number): Promise<string> => {
  let post = "";
  if (id !== -1) {
    let req = await axios.get("http://localhost:8080/api/v1/test");
    post = req.data;
  }
  return post;
};

export default Posts;
