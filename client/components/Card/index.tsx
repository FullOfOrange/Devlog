import React from "react";
import styled from "styled-components";

import {Post} from "../../types"

const Card = (props: { post: Post }): React.ReactElement => {
  const Card = styled.div``;
  const post = props.post
  return (
    <Card>
      <h1>{post.title}</h1>
      <p>{post.contents}</p>
      <p>{post.author}</p>
    </Card>
  );
};
export default Card;
