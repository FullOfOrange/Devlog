import React from "react";

import * as S from "./style";
import PostContents from "../../components/PostContents";
import { Post } from "../../types";

const PostContainer = ({ post }: { post: Post }): React.ReactElement => {
  return (
    <S.Container>
      <S.PostTitle>{post.title}</S.PostTitle>
      <PostContents contents={post.contents}></PostContents>
    </S.Container>
  );
};

export default PostContainer;
