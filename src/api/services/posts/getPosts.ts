import { FindAttributeOptions } from "sequelize";

import { Post } from "../../models";

export default async (): Promise<Partial<Post>[]> => {
  const attributes: FindAttributeOptions = {
    exclude: ["createdAt", "updatedAt"],
  };
  const posts: Post[] = await Post.findAll({ attributes });
  
  return posts.map(post => {
    return post.get({plain: true})
  })
};
