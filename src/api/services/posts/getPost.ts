import { FindAttributeOptions } from "sequelize";

import { Post } from "../../models";

export default async (id: number): Promise<Post> => {
  const attributes: FindAttributeOptions = {
    exclude: ["createdAt", "updatedAt"],
  };

  let post = await Post.findOne({ where: { id }, attributes });

  return post.get();
};
