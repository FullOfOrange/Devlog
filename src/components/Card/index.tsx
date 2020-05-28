import React from "react";
import * as S from "./style";

import { Post } from "../../types";

const Card = ({ post }: { post: Post }): React.ReactElement => {
  const date = new Date();

  return (
    <S.Card href={`/posts/${post.id}`}>
      <S.Title>{post.title}</S.Title>
      <S.Contents>{post.contents}</S.Contents>
      <S.Date>{`${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일`}</S.Date>
    </S.Card>
  );
};
export default Card;
