import React from "react";

import DefaultContainer from "../DefaultContainer";
import { CardGrid } from "../../components";
import { Post } from "../../types";

export default ({ posts }: { posts: Post[] }): React.ReactElement => {
  return (
    <DefaultContainer
      container={<CardGrid posts={posts} />}
    ></DefaultContainer>
  );
};
