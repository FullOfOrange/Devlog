import React from "react";
import { Card } from "../";
import * as S from "./style";
import { Post } from "../../types";

const CardGrid = ({ posts }: { posts: Array<Post> }): React.ReactElement => {
  return (
    <>
      <S.CardGridContainer>
        {posts.map(post => (
          <Card post={post}></Card>
        ))}
      </S.CardGridContainer>
    </>
  );
};
export default CardGrid;
