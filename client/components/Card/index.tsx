import React from "react";
import * as S from "./style";

import { Post } from "../../types";

const Card = ({ post }: { post: Post }): React.ReactElement => {
  const date = new Date(post.createAt);

  return (
    <S.Card>
      <S.Title>{post.title}</S.Title>
      <p>{`${date.getFullYear()}. ${date.getMonth() +
        1}. ${date.getDate()}`}</p>
      <p>{post.contents}</p>
      <p>{post.author}</p>
    </S.Card>
  );
};
export default Card;
