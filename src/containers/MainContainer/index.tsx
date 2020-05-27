import React from "react";

import * as S from "./style";
import DefaultContainer from "../DefaultContainer";
import PostContents from "../../components/PostContents";
import { Post } from "../../types";

export default ({ post }: { post: Post }): React.ReactElement => {
  return (
    <DefaultContainer
      container={
        <S.Container>
          <S.PostTitle>{post.title}</S.PostTitle>
          <PostContents contents={post.contents}></PostContents>
        </S.Container>
      }
    ></DefaultContainer>
  );
};
