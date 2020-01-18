import "./env.mjs";
import express from "express";
import next from "next";

const { NODE_ENV } = process.env;
const dev = NODE_ENV !== "production";

const app = express();
const client = next({ dev });
const handle = client.getRequestHandler();

app.get("/", (req, res) => client.render(req, res, "/", req.query));

app.get("/posts", (req, res) =>
  client.render(req, res, "/posts")
);

app.all("*", (req, res) => {
  return handle(req, res);
});

export { app, client };
