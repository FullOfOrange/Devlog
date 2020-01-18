import "../src/env.mjs";
import { app, client } from "../src/app.mjs";

const { APP_PORT } = process.env;

(async function() {
  await client.prepare();
  app.listen(APP_PORT);
})();
