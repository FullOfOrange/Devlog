import { Sequelize } from "sequelize-typescript";
import { Post } from "./models";

export const sequelize = new Sequelize({
  storage: "database/sqlite.db",
  dialect: "sqlite",
  models: [Post],
});

sequelize.sync();